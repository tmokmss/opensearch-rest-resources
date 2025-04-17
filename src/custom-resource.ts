import { readFileSync } from 'fs';
import { join } from 'path';
import { Duration, CustomResource, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { CfnSecurityGroupIngress, IVpc } from 'aws-cdk-lib/aws-ec2';
import { SingletonFunction, Runtime, RuntimeFamily, Code } from 'aws-cdk-lib/aws-lambda';
import { Domain } from 'aws-cdk-lib/aws-opensearchservice';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';
import { ResourceProperties } from './types';

export interface OpenSearchCustomResourceProps {
  /**
   * The VPC your OpenSearch domain is in.
   *
   * @default Assumes your Domain is not deployed within a VPC
   */
  readonly vpc?: IVpc;

  /**
   * The OpenSearch domain you want to create a resource in.
   */
  readonly domain: Domain;

  /**
   * A REST endpoint to call from the custom resource handler.
   * It sends PUT request on a create/update event and DELETE request on a delete event.
   *
   * @example _plugins/_security/api/roles/roleName
   */
  readonly restEndpoint: string;

  /**
   * A payload in JSON string to send with a request on create/update event.
   */
  readonly payloadJson: string;

  /**
   * Policy to apply when the resource is removed from the stack
   *
   * @default RemovalPolicy.DESTROY
   */
  readonly removalPolicy?: RemovalPolicy;
}

export class OpenSearchCustomResource extends Construct {
  private readonly resource: CustomResource;

  constructor(scope: Construct, id: string, props: OpenSearchCustomResourceProps) {
    super(scope, id);

    const { vpc, domain } = props;

    const handler = new SingletonFunction(this, 'CustomResourceHandler', {
      runtime: new Runtime('nodejs22.x', RuntimeFamily.NODEJS, { supportsInlineCode: true }),
      code: Code.fromInline(readFileSync(join(__dirname, '../', 'lambda', 'dist', 'index.js')).toString()),
      handler: 'index.handler',
      // We need to create a singleton function per VPC
      uuid: `d4706ae7-e0a2-4092-a205-7e2d4fb887d4-${vpc?.node.addr ?? 'no-vpc'}`,
      lambdaPurpose: 'OpenSearchRestCustomResourceHandler',
      timeout: Duration.minutes(3),
      vpc,
    });

    const masterUserSecret = domain.node.tryFindChild('MasterUser');
    if (!(masterUserSecret instanceof Secret)) {
      throw new Error(`Cannot find a master user secret for domain ${domain.node.path}`);
    }
    masterUserSecret.grantRead(handler);

    const properties: ResourceProperties = {
      opensearchHost: domain.domainEndpoint,
      restEndpoint: props.restEndpoint,
      payloadJson: props.payloadJson,
      masterUserSecretArn: masterUserSecret.secretArn,
      schemaVersion: 'v1',
    };

    const resource = new CustomResource(this, 'Resource', {
      serviceToken: handler.functionArn,
      resourceType: 'Custom::OpenSearchCustomResource',
      properties,
      removalPolicy: props.removalPolicy ?? RemovalPolicy.DESTROY,
    });
    this.resource = resource;

    // Access policy is required for master user to call OpenSearch APIs.
    const domainAccessPolicy = domain.node.tryFindChild('AccessPolicy')?.node.defaultChild;
    if (domainAccessPolicy === undefined) {
      throw new Error(`Cannot find an access policy for domain ${domain.node.path}`);
    }
    if (Stack.of(domainAccessPolicy) == Stack.of(resource)) {
      resource.node.addDependency(domainAccessPolicy);
    }

    let isInVpc = false;
    try {
      domain.connections;
      isInVpc = true; // if domain.connections does not throws, it means the domain is in a VPC.
    } catch (e) {}
    if (isInVpc && vpc === undefined) {
      // throw new Error(`It seems your OpenSearch domain is deployed in a VPC. Please set the vpc property for OpenSearch custom resources for domain ${domain.node.path}`);
    }

    if (vpc !== undefined) {
      const domainSecurityGroup = domain.connections.securityGroups[0];
      const handlerSecurityGroup = handler.connections.securityGroups[0];
      const ruleId = 'IngressFromOpenSearchCustomResource';
      let rule = domainSecurityGroup.node.tryFindChild(ruleId);
      if (rule === undefined) {
        // We create an L1 resource directly here because it is difficult to
        // retrieve backing ingress rule resource from L2 security group construct
        rule = new CfnSecurityGroupIngress(domainSecurityGroup, ruleId, {
          fromPort: 443,
          toPort: 443,
          ipProtocol: 'tcp',
          groupId: domainSecurityGroup.securityGroupId,
          sourceSecurityGroupId: handlerSecurityGroup.securityGroupId,
          description: 'Ingress from OpenSearch REST custom resource handler',
        });
      }
      resource.node.addDependency(rule);
    }
  }

  /**
   * This function converts a string to a token that has an implicit dependency between
   * this resource and a consumer of the string.
   * @param str any string
   * @returns `str` with an implicit dependency
   */
  public getStringAfterResourceCreation(str: string) {
    return `${this.resource.getAttString('Empty')}${str}`;
  }
}
