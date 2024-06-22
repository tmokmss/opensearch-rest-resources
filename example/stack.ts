import { Stack, StackProps, RemovalPolicy, Duration } from 'aws-cdk-lib';
import { EbsDeviceVolumeType, Vpc } from 'aws-cdk-lib/aws-ec2';
import { PolicyStatement, AnyPrincipal } from 'aws-cdk-lib/aws-iam';
import { Domain, EngineVersion } from 'aws-cdk-lib/aws-opensearchservice';
import { Construct } from 'constructs';
import { OpenSearchRole } from '../src/resources/role';
import { OpenSearchRoleMapping } from '../src/resources/role-mapping';
import { OpenSearchUser } from '../src/resources/user';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { join } from 'path';
import { IFunction } from 'aws-cdk-lib/aws-lambda';

export class OpenSearchTestStack extends Stack {
  public readonly testHandler: IFunction;

  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const vpc = new Vpc(this, 'Vpc', { maxAzs: 2, natGateways: 1 });

    const targetSubnets = [vpc.privateSubnets[0]];

    // Following the best practices:
    // https://docs.aws.amazon.com/opensearch-service/latest/developerguide/bp.html
    const domain = new Domain(this, 'Domain', {
      version: EngineVersion.OPENSEARCH_2_11,
      capacity: {
        // https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html
        dataNodeInstanceType: 't3.small.search',
        dataNodes: targetSubnets.length,
        // masterNodeInstanceType: 't3.small.search',
        // masterNodes: 1,
        multiAzWithStandbyEnabled: false,
      },
      // zoneAwareness: {
      //   enabled: true,
      //   availabilityZoneCount: targetSubnets.length,
      // },
      ebs: {
        volumeSize: 30,
        volumeType: EbsDeviceVolumeType.GP3,
        throughput: 125,
        iops: 3000,
      },
      enforceHttps: true,
      fineGrainedAccessControl: {
        masterUserName: 'admin',
      },
      nodeToNodeEncryption: true,
      encryptionAtRest: {
        enabled: true,
      },
      vpc,
      vpcSubnets: [{ subnets: targetSubnets }],
      logging: {
        auditLogEnabled: true,
        slowSearchLogEnabled: true,
        appLogEnabled: true,
        slowIndexLogEnabled: true,
      },
      removalPolicy: RemovalPolicy.DESTROY,
    });

    // Recommended policy when using fine-grained access control
    // https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html#fgac-recommendations
    domain.addAccessPolicies(
      new PolicyStatement({
        principals: [new AnyPrincipal()],
        actions: ['es:ESHttp*'],
        resources: [domain.domainArn + '/*'],
      })
    );

    const testHandler = new NodejsFunction(this, 'TestHandler', {
      entry: join(__dirname, 'lambda', 'index.ts'),
      depsLockFilePath: join(__dirname, 'lambda', 'package-lock.json'),
      bundling: {
        commandHooks: {
          beforeBundling: (i, _o) => [`cd ${i} && npm install`],
          afterBundling: (_i, _o) => [],
          beforeInstall: (_i, _o) => [],
        },
      },
      vpc,
      environment: {
        OPENSEARCH_HOST: domain.domainEndpoint,
      },
      timeout: Duration.seconds(10),
    });
    domain.connections.allowDefaultPortFrom(testHandler);
    this.testHandler = testHandler;

    // Never remove all of them when testing! VPC Lambda requires 20 minutes to delete itself.
    const role = new OpenSearchRole(this, 'Role1', {
      vpc,
      domain,
      roleName: 'Role1',
      payload: {
        clusterPermissions: ['indices:data/write/bulk'],
        indexPermissions: [
          {
            indexPatterns: ['*'],
            allowedActions: ['read', 'write', 'index', 'create_index'],
          },
        ],
      },
      removalPolicy: RemovalPolicy.RETAIN_ON_UPDATE_OR_DELETE,
    });

    new OpenSearchRoleMapping(this, 'RoleMapping1', {
      vpc,
      domain,
      roleName: role.roleName,
      payload: {
        backendRoles: [testHandler.role!.roleArn],
      },
    });

    new OpenSearchUser(this, 'User1', {
      vpc,
      domain,
      userName: 'User1',
      payload: {
        password: '64loxy5K;5jr',
        attributes: {
          foo: 'bar',
        },
      },
    });
  }
}
