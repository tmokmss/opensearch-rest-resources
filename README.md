# Custom Resources Library for Amazon OpenSearch Service

An AWS CDK construct library to manage OpenSearch resources via CloudFormation custom resource.

![architecture](./imgs/architecture.png)

## Currently supported resources
* [Role](https://opensearch.org/docs/latest/security/access-control/api/#create-role)
* [RoleMapping](https://opensearch.org/docs/latest/security/access-control/api/#create-role-mapping)
* [User](https://opensearch.org/docs/latest/security/access-control/api/#create-role-mapping)

You can manage any other REST resources via our low level API (`ResourceBase` class).

## Usage

Instal it via npm:

```sh
npm install opensearch-rest-resources
```

Then you can create OpenSearch resources using [`Domain`](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_opensearchservice.Domain.html) construct.

```ts
import { IVpc } from 'aws-cdk-lib/aws-ec2';
import { Domain } from 'aws-cdk-lib/aws-opensearchservice';
import { OpenSearchRole, OpenSearchRoleMapping } from 'opensearch-rest-resources';

declare const vpc: IVpc;
declare const role: IRole;
declare const domain: Domain;

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
    }
});

const roleMapping = new OpenSearchRoleMapping(this, 'RoleMapping1', {
    vpc,
    domain,
    roleName: 'Role1',
    payload: {
        backendRoles: [role.roleArn],
    },
    removalPolicy: RemovalPolicy.RETAIN,
});
roleMapping.node.addDependency(role);
```
