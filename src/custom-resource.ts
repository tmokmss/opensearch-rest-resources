import { readFileSync } from 'fs';
import { join } from 'path';
import { Duration, CustomResource, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { IVpc } from 'aws-cdk-lib/aws-ec2';
import { SingletonFunction, Runtime, RuntimeFamily, Code } from 'aws-cdk-lib/aws-lambda';
import { Domain } from 'aws-cdk-lib/aws-opensearchservice';
import { Secret } from 'aws-cdk-lib/aws-secretsmanager';
import { Construct } from 'constructs';
import { ResourceProperties } from './types';

export interface OpenSearchCustomResourceProps {
  /**
   * The VPC your OpenSearch domain is in.
   */
  readonly vpc: IVpc;

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
  constructor(scope: Construct, id: string, props: OpenSearchCustomResourceProps) {
    super(scope, id);

    const { vpc, domain } = props;

    const handler = new SingletonFunction(this, 'CustomResourceHandler', {
      runtime: new Runtime('nodejs18.x', RuntimeFamily.NODEJS, { supportsInlineCode: true }),
      code: Code.fromInline(readFileSync(join(__dirname, '../', 'lambda', 'dist', 'index.js')).toString()),
      handler: 'index.handler',
      // We need to create a singleton per VPC
      uuid: `d4706ae7-e0a2-4092-a205-7e2d4fb887d4-${vpc.node.addr}`,
      lambdaPurpose: 'OpenSearchRestCustomResourceHandler',
      timeout: Duration.minutes(3),
      vpc,
    });

    if (vpc != null) {
      domain.connections.allowDefaultPortFrom(handler);
    }

    const masterUserSecret = domain.node.tryFindChild('MasterUser');
    if (!(masterUserSecret instanceof Secret)) {
      throw new Error(`Cannot find a master user secret for domain ${domain.domainId}`);
    }
    masterUserSecret.grantRead(handler);

    const properties: ResourceProperties = {
      opensearchHost: domain.domainEndpoint,
      restEndpoint: props.restEndpoint,
      payloadJson: props.payloadJson,
      masterUserSecretArn: masterUserSecret.secretArn,
    };

    const resource = new CustomResource(this, 'Resource', {
      serviceToken: handler.functionArn,
      resourceType: 'Custom::OpenSearchCustomResource',
      properties,
      removalPolicy: props.removalPolicy ?? RemovalPolicy.DESTROY,
    });

    // Access policy is required for master user to call OpenSearch APIs.
    const domainAccessPolicy = domain.node.tryFindChild('AccessPolicy')?.node.defaultChild;
    if (domainAccessPolicy == null) {
      throw new Error(`Cannot find an access policy for domain ${domain.domainId}`);
    }
    if (Stack.of(domainAccessPolicy) == Stack.of(resource)) {
      resource.node.addDependency(domainAccessPolicy);
    }

    const domainSecurityGroup = domain.node.tryFindChild('SecurityGroup');
    if (domainSecurityGroup == null) {
      throw new Error(`Cannot find a security group for domain ${domain.domainId}`);
    }
    if (Stack.of(domainSecurityGroup) == Stack.of(resource)) {
      resource.node.addDependency(domainSecurityGroup);
    }
  }
}
