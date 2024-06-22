# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpenSearchCustomResource <a name="OpenSearchCustomResource" id="opensearch-rest-resources.OpenSearchCustomResource"></a>

#### Initializers <a name="Initializers" id="opensearch-rest-resources.OpenSearchCustomResource.Initializer"></a>

```typescript
import { OpenSearchCustomResource } from 'opensearch-rest-resources'

new OpenSearchCustomResource(scope: Construct, id: string, props: OpenSearchCustomResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchCustomResource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.OpenSearchCustomResource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.OpenSearchCustomResource.Initializer.parameter.props">props</a></code> | <code><a href="#opensearch-rest-resources.OpenSearchCustomResourceProps">OpenSearchCustomResourceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="opensearch-rest-resources.OpenSearchCustomResource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="opensearch-rest-resources.OpenSearchCustomResource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="opensearch-rest-resources.OpenSearchCustomResource.Initializer.parameter.props"></a>

- *Type:* <a href="#opensearch-rest-resources.OpenSearchCustomResourceProps">OpenSearchCustomResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchCustomResource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#opensearch-rest-resources.OpenSearchCustomResource.getStringAfterResourceCreation">getStringAfterResourceCreation</a></code> | This function converts a string to a token that has an implicit dependency between this resource and a consumer of the string. |

---

##### `toString` <a name="toString" id="opensearch-rest-resources.OpenSearchCustomResource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `getStringAfterResourceCreation` <a name="getStringAfterResourceCreation" id="opensearch-rest-resources.OpenSearchCustomResource.getStringAfterResourceCreation"></a>

```typescript
public getStringAfterResourceCreation(str: string): string
```

This function converts a string to a token that has an implicit dependency between this resource and a consumer of the string.

###### `str`<sup>Required</sup> <a name="str" id="opensearch-rest-resources.OpenSearchCustomResource.getStringAfterResourceCreation.parameter.str"></a>

- *Type:* string

any string.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchCustomResource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="opensearch-rest-resources.OpenSearchCustomResource.isConstruct"></a>

```typescript
import { OpenSearchCustomResource } from 'opensearch-rest-resources'

OpenSearchCustomResource.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="opensearch-rest-resources.OpenSearchCustomResource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchCustomResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="opensearch-rest-resources.OpenSearchCustomResource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### OpenSearchRole <a name="OpenSearchRole" id="opensearch-rest-resources.OpenSearchRole"></a>

#### Initializers <a name="Initializers" id="opensearch-rest-resources.OpenSearchRole.Initializer"></a>

```typescript
import { OpenSearchRole } from 'opensearch-rest-resources'

new OpenSearchRole(scope: Construct, id: string, props: OpenSearchRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.OpenSearchRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.OpenSearchRole.Initializer.parameter.props">props</a></code> | <code><a href="#opensearch-rest-resources.OpenSearchRoleProps">OpenSearchRoleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="opensearch-rest-resources.OpenSearchRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="opensearch-rest-resources.OpenSearchRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="opensearch-rest-resources.OpenSearchRole.Initializer.parameter.props"></a>

- *Type:* <a href="#opensearch-rest-resources.OpenSearchRoleProps">OpenSearchRoleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchRole.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="opensearch-rest-resources.OpenSearchRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="opensearch-rest-resources.OpenSearchRole.isConstruct"></a>

```typescript
import { OpenSearchRole } from 'opensearch-rest-resources'

OpenSearchRole.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="opensearch-rest-resources.OpenSearchRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#opensearch-rest-resources.OpenSearchRole.property.roleName">roleName</a></code> | <code>string</code> | The name of this role. |

---

##### `node`<sup>Required</sup> <a name="node" id="opensearch-rest-resources.OpenSearchRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="opensearch-rest-resources.OpenSearchRole.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of this role.

---


### OpenSearchRoleMapping <a name="OpenSearchRoleMapping" id="opensearch-rest-resources.OpenSearchRoleMapping"></a>

#### Initializers <a name="Initializers" id="opensearch-rest-resources.OpenSearchRoleMapping.Initializer"></a>

```typescript
import { OpenSearchRoleMapping } from 'opensearch-rest-resources'

new OpenSearchRoleMapping(scope: Construct, id: string, props: OpenSearchRoleMappingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleMapping.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleMapping.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleMapping.Initializer.parameter.props">props</a></code> | <code><a href="#opensearch-rest-resources.OpenSearchRoleMappingProps">OpenSearchRoleMappingProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="opensearch-rest-resources.OpenSearchRoleMapping.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="opensearch-rest-resources.OpenSearchRoleMapping.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="opensearch-rest-resources.OpenSearchRoleMapping.Initializer.parameter.props"></a>

- *Type:* <a href="#opensearch-rest-resources.OpenSearchRoleMappingProps">OpenSearchRoleMappingProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleMapping.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="opensearch-rest-resources.OpenSearchRoleMapping.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleMapping.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="opensearch-rest-resources.OpenSearchRoleMapping.isConstruct"></a>

```typescript
import { OpenSearchRoleMapping } from 'opensearch-rest-resources'

OpenSearchRoleMapping.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="opensearch-rest-resources.OpenSearchRoleMapping.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleMapping.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleMapping.property.roleName">roleName</a></code> | <code>string</code> | The name of the OpenSearch role this mapping is created for. |

---

##### `node`<sup>Required</sup> <a name="node" id="opensearch-rest-resources.OpenSearchRoleMapping.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="opensearch-rest-resources.OpenSearchRoleMapping.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of the OpenSearch role this mapping is created for.

---


### OpenSearchUser <a name="OpenSearchUser" id="opensearch-rest-resources.OpenSearchUser"></a>

#### Initializers <a name="Initializers" id="opensearch-rest-resources.OpenSearchUser.Initializer"></a>

```typescript
import { OpenSearchUser } from 'opensearch-rest-resources'

new OpenSearchUser(scope: Construct, id: string, props: OpenSearchUserProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.OpenSearchUser.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.OpenSearchUser.Initializer.parameter.props">props</a></code> | <code><a href="#opensearch-rest-resources.OpenSearchUserProps">OpenSearchUserProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="opensearch-rest-resources.OpenSearchUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="opensearch-rest-resources.OpenSearchUser.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="opensearch-rest-resources.OpenSearchUser.Initializer.parameter.props"></a>

- *Type:* <a href="#opensearch-rest-resources.OpenSearchUserProps">OpenSearchUserProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchUser.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="opensearch-rest-resources.OpenSearchUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="opensearch-rest-resources.OpenSearchUser.isConstruct"></a>

```typescript
import { OpenSearchUser } from 'opensearch-rest-resources'

OpenSearchUser.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="opensearch-rest-resources.OpenSearchUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#opensearch-rest-resources.OpenSearchUser.property.userName">userName</a></code> | <code>string</code> | The name of this user. |

---

##### `node`<sup>Required</sup> <a name="node" id="opensearch-rest-resources.OpenSearchUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `userName`<sup>Required</sup> <a name="userName" id="opensearch-rest-resources.OpenSearchUser.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

The name of this user.

---


## Structs <a name="Structs" id="Structs"></a>

### IndexPermissions <a name="IndexPermissions" id="opensearch-rest-resources.IndexPermissions"></a>

#### Initializer <a name="Initializer" id="opensearch-rest-resources.IndexPermissions.Initializer"></a>

```typescript
import { IndexPermissions } from 'opensearch-rest-resources'

const indexPermissions: IndexPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.IndexPermissions.property.allowedActions">allowedActions</a></code> | <code>string[]</code> | https://opensearch.org/docs/latest/security/access-control/default-action-groups/. |
| <code><a href="#opensearch-rest-resources.IndexPermissions.property.dls">dls</a></code> | <code>string</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.IndexPermissions.property.fls">fls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.IndexPermissions.property.indexPatterns">indexPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.IndexPermissions.property.maskedFields">maskedFields</a></code> | <code>string[]</code> | *No description.* |

---

##### `allowedActions`<sup>Optional</sup> <a name="allowedActions" id="opensearch-rest-resources.IndexPermissions.property.allowedActions"></a>

```typescript
public readonly allowedActions: string[];
```

- *Type:* string[]

https://opensearch.org/docs/latest/security/access-control/default-action-groups/.

---

##### `dls`<sup>Optional</sup> <a name="dls" id="opensearch-rest-resources.IndexPermissions.property.dls"></a>

```typescript
public readonly dls: string;
```

- *Type:* string

---

##### `fls`<sup>Optional</sup> <a name="fls" id="opensearch-rest-resources.IndexPermissions.property.fls"></a>

```typescript
public readonly fls: string[];
```

- *Type:* string[]

---

##### `indexPatterns`<sup>Optional</sup> <a name="indexPatterns" id="opensearch-rest-resources.IndexPermissions.property.indexPatterns"></a>

```typescript
public readonly indexPatterns: string[];
```

- *Type:* string[]

---

##### `maskedFields`<sup>Optional</sup> <a name="maskedFields" id="opensearch-rest-resources.IndexPermissions.property.maskedFields"></a>

```typescript
public readonly maskedFields: string[];
```

- *Type:* string[]

---

### OpenSearchCustomResourceProps <a name="OpenSearchCustomResourceProps" id="opensearch-rest-resources.OpenSearchCustomResourceProps"></a>

#### Initializer <a name="Initializer" id="opensearch-rest-resources.OpenSearchCustomResourceProps.Initializer"></a>

```typescript
import { OpenSearchCustomResourceProps } from 'opensearch-rest-resources'

const openSearchCustomResourceProps: OpenSearchCustomResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchCustomResourceProps.property.domain">domain</a></code> | <code>aws-cdk-lib.aws_opensearchservice.Domain</code> | The OpenSearch domain you want to create a resource in. |
| <code><a href="#opensearch-rest-resources.OpenSearchCustomResourceProps.property.payloadJson">payloadJson</a></code> | <code>string</code> | A payload in JSON string to send with a request on create/update event. |
| <code><a href="#opensearch-rest-resources.OpenSearchCustomResourceProps.property.restEndpoint">restEndpoint</a></code> | <code>string</code> | A REST endpoint to call from the custom resource handler. |
| <code><a href="#opensearch-rest-resources.OpenSearchCustomResourceProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the resource is removed from the stack. |
| <code><a href="#opensearch-rest-resources.OpenSearchCustomResourceProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC your OpenSearch domain is in. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="opensearch-rest-resources.OpenSearchCustomResourceProps.property.domain"></a>

```typescript
public readonly domain: Domain;
```

- *Type:* aws-cdk-lib.aws_opensearchservice.Domain

The OpenSearch domain you want to create a resource in.

---

##### `payloadJson`<sup>Required</sup> <a name="payloadJson" id="opensearch-rest-resources.OpenSearchCustomResourceProps.property.payloadJson"></a>

```typescript
public readonly payloadJson: string;
```

- *Type:* string

A payload in JSON string to send with a request on create/update event.

---

##### `restEndpoint`<sup>Required</sup> <a name="restEndpoint" id="opensearch-rest-resources.OpenSearchCustomResourceProps.property.restEndpoint"></a>

```typescript
public readonly restEndpoint: string;
```

- *Type:* string

A REST endpoint to call from the custom resource handler.

It sends PUT request on a create/update event and DELETE request on a delete event.

---

*Example*

```typescript
_plugins/_security/api/roles/roleName
```


##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="opensearch-rest-resources.OpenSearchCustomResourceProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.DESTROY

Policy to apply when the resource is removed from the stack.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="opensearch-rest-resources.OpenSearchCustomResourceProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Assumes your Domain is not deployed within a VPC

The VPC your OpenSearch domain is in.

---

### OpenSearchRoleMappingProps <a name="OpenSearchRoleMappingProps" id="opensearch-rest-resources.OpenSearchRoleMappingProps"></a>

#### Initializer <a name="Initializer" id="opensearch-rest-resources.OpenSearchRoleMappingProps.Initializer"></a>

```typescript
import { OpenSearchRoleMappingProps } from 'opensearch-rest-resources'

const openSearchRoleMappingProps: OpenSearchRoleMappingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleMappingProps.property.domain">domain</a></code> | <code>aws-cdk-lib.aws_opensearchservice.Domain</code> | The OpenSearch domain you want to create a resource in. |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleMappingProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the resource is removed from the stack. |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleMappingProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC your OpenSearch domain is in. |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleMappingProps.property.payload">payload</a></code> | <code><a href="#opensearch-rest-resources.RoleMappingPayload">RoleMappingPayload</a></code> | See https://opensearch.org/docs/latest/security/access-control/api/#create-role-mapping for the details. |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleMappingProps.property.roleName">roleName</a></code> | <code>string</code> | The role you create a role mapping for. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="opensearch-rest-resources.OpenSearchRoleMappingProps.property.domain"></a>

```typescript
public readonly domain: Domain;
```

- *Type:* aws-cdk-lib.aws_opensearchservice.Domain

The OpenSearch domain you want to create a resource in.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="opensearch-rest-resources.OpenSearchRoleMappingProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.DESTROY

Policy to apply when the resource is removed from the stack.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="opensearch-rest-resources.OpenSearchRoleMappingProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Assumes your Domain is not deployed within a VPC

The VPC your OpenSearch domain is in.

---

##### `payload`<sup>Required</sup> <a name="payload" id="opensearch-rest-resources.OpenSearchRoleMappingProps.property.payload"></a>

```typescript
public readonly payload: RoleMappingPayload;
```

- *Type:* <a href="#opensearch-rest-resources.RoleMappingPayload">RoleMappingPayload</a>

See https://opensearch.org/docs/latest/security/access-control/api/#create-role-mapping for the details.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="opensearch-rest-resources.OpenSearchRoleMappingProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The role you create a role mapping for.

Create a role by {@link OpenSearchRole} class, or use [a predefined role](https://opensearch.org/docs/latest/security/access-control/users-roles/#predefined-roles).

---

### OpenSearchRoleProps <a name="OpenSearchRoleProps" id="opensearch-rest-resources.OpenSearchRoleProps"></a>

#### Initializer <a name="Initializer" id="opensearch-rest-resources.OpenSearchRoleProps.Initializer"></a>

```typescript
import { OpenSearchRoleProps } from 'opensearch-rest-resources'

const openSearchRoleProps: OpenSearchRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleProps.property.domain">domain</a></code> | <code>aws-cdk-lib.aws_opensearchservice.Domain</code> | The OpenSearch domain you want to create a resource in. |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the resource is removed from the stack. |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC your OpenSearch domain is in. |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleProps.property.payload">payload</a></code> | <code><a href="#opensearch-rest-resources.RolePayload">RolePayload</a></code> | See https://opensearch.org/docs/latest/security/access-control/api/#create-role for the details. |
| <code><a href="#opensearch-rest-resources.OpenSearchRoleProps.property.roleName">roleName</a></code> | <code>string</code> | The name of this role. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="opensearch-rest-resources.OpenSearchRoleProps.property.domain"></a>

```typescript
public readonly domain: Domain;
```

- *Type:* aws-cdk-lib.aws_opensearchservice.Domain

The OpenSearch domain you want to create a resource in.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="opensearch-rest-resources.OpenSearchRoleProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.DESTROY

Policy to apply when the resource is removed from the stack.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="opensearch-rest-resources.OpenSearchRoleProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Assumes your Domain is not deployed within a VPC

The VPC your OpenSearch domain is in.

---

##### `payload`<sup>Required</sup> <a name="payload" id="opensearch-rest-resources.OpenSearchRoleProps.property.payload"></a>

```typescript
public readonly payload: RolePayload;
```

- *Type:* <a href="#opensearch-rest-resources.RolePayload">RolePayload</a>

See https://opensearch.org/docs/latest/security/access-control/api/#create-role for the details.

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="opensearch-rest-resources.OpenSearchRoleProps.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

The name of this role.

---

### OpenSearchUserProps <a name="OpenSearchUserProps" id="opensearch-rest-resources.OpenSearchUserProps"></a>

#### Initializer <a name="Initializer" id="opensearch-rest-resources.OpenSearchUserProps.Initializer"></a>

```typescript
import { OpenSearchUserProps } from 'opensearch-rest-resources'

const openSearchUserProps: OpenSearchUserProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.OpenSearchUserProps.property.domain">domain</a></code> | <code>aws-cdk-lib.aws_opensearchservice.Domain</code> | The OpenSearch domain you want to create a resource in. |
| <code><a href="#opensearch-rest-resources.OpenSearchUserProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the resource is removed from the stack. |
| <code><a href="#opensearch-rest-resources.OpenSearchUserProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC your OpenSearch domain is in. |
| <code><a href="#opensearch-rest-resources.OpenSearchUserProps.property.payload">payload</a></code> | <code><a href="#opensearch-rest-resources.UserPayload">UserPayload</a></code> | See https://opensearch.org/docs/latest/security/access-control/api/#create-user for the details. |
| <code><a href="#opensearch-rest-resources.OpenSearchUserProps.property.userName">userName</a></code> | <code>string</code> | The name of this user. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="opensearch-rest-resources.OpenSearchUserProps.property.domain"></a>

```typescript
public readonly domain: Domain;
```

- *Type:* aws-cdk-lib.aws_opensearchservice.Domain

The OpenSearch domain you want to create a resource in.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="opensearch-rest-resources.OpenSearchUserProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.DESTROY

Policy to apply when the resource is removed from the stack.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="opensearch-rest-resources.OpenSearchUserProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Assumes your Domain is not deployed within a VPC

The VPC your OpenSearch domain is in.

---

##### `payload`<sup>Required</sup> <a name="payload" id="opensearch-rest-resources.OpenSearchUserProps.property.payload"></a>

```typescript
public readonly payload: UserPayload;
```

- *Type:* <a href="#opensearch-rest-resources.UserPayload">UserPayload</a>

See https://opensearch.org/docs/latest/security/access-control/api/#create-user for the details.

---

##### `userName`<sup>Required</sup> <a name="userName" id="opensearch-rest-resources.OpenSearchUserProps.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

The name of this user.

---

### ResourcePropsBase <a name="ResourcePropsBase" id="opensearch-rest-resources.ResourcePropsBase"></a>

#### Initializer <a name="Initializer" id="opensearch-rest-resources.ResourcePropsBase.Initializer"></a>

```typescript
import { ResourcePropsBase } from 'opensearch-rest-resources'

const resourcePropsBase: ResourcePropsBase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.ResourcePropsBase.property.domain">domain</a></code> | <code>aws-cdk-lib.aws_opensearchservice.Domain</code> | The OpenSearch domain you want to create a resource in. |
| <code><a href="#opensearch-rest-resources.ResourcePropsBase.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | Policy to apply when the resource is removed from the stack. |
| <code><a href="#opensearch-rest-resources.ResourcePropsBase.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC your OpenSearch domain is in. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="opensearch-rest-resources.ResourcePropsBase.property.domain"></a>

```typescript
public readonly domain: Domain;
```

- *Type:* aws-cdk-lib.aws_opensearchservice.Domain

The OpenSearch domain you want to create a resource in.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="opensearch-rest-resources.ResourcePropsBase.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.DESTROY

Policy to apply when the resource is removed from the stack.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="opensearch-rest-resources.ResourcePropsBase.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* Assumes your Domain is not deployed within a VPC

The VPC your OpenSearch domain is in.

---

### RoleMappingPayload <a name="RoleMappingPayload" id="opensearch-rest-resources.RoleMappingPayload"></a>

#### Initializer <a name="Initializer" id="opensearch-rest-resources.RoleMappingPayload.Initializer"></a>

```typescript
import { RoleMappingPayload } from 'opensearch-rest-resources'

const roleMappingPayload: RoleMappingPayload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.RoleMappingPayload.property.backendRoles">backendRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.RoleMappingPayload.property.hosts">hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.RoleMappingPayload.property.users">users</a></code> | <code>string[]</code> | *No description.* |

---

##### `backendRoles`<sup>Optional</sup> <a name="backendRoles" id="opensearch-rest-resources.RoleMappingPayload.property.backendRoles"></a>

```typescript
public readonly backendRoles: string[];
```

- *Type:* string[]

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="opensearch-rest-resources.RoleMappingPayload.property.hosts"></a>

```typescript
public readonly hosts: string[];
```

- *Type:* string[]

---

##### `users`<sup>Optional</sup> <a name="users" id="opensearch-rest-resources.RoleMappingPayload.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

### RolePayload <a name="RolePayload" id="opensearch-rest-resources.RolePayload"></a>

#### Initializer <a name="Initializer" id="opensearch-rest-resources.RolePayload.Initializer"></a>

```typescript
import { RolePayload } from 'opensearch-rest-resources'

const rolePayload: RolePayload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.RolePayload.property.clusterPermissions">clusterPermissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.RolePayload.property.indexPermissions">indexPermissions</a></code> | <code><a href="#opensearch-rest-resources.IndexPermissions">IndexPermissions</a>[]</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.RolePayload.property.tenantPermissions">tenantPermissions</a></code> | <code><a href="#opensearch-rest-resources.TenantPermissions">TenantPermissions</a>[]</code> | *No description.* |

---

##### `clusterPermissions`<sup>Optional</sup> <a name="clusterPermissions" id="opensearch-rest-resources.RolePayload.property.clusterPermissions"></a>

```typescript
public readonly clusterPermissions: string[];
```

- *Type:* string[]

---

##### `indexPermissions`<sup>Optional</sup> <a name="indexPermissions" id="opensearch-rest-resources.RolePayload.property.indexPermissions"></a>

```typescript
public readonly indexPermissions: IndexPermissions[];
```

- *Type:* <a href="#opensearch-rest-resources.IndexPermissions">IndexPermissions</a>[]

---

##### `tenantPermissions`<sup>Optional</sup> <a name="tenantPermissions" id="opensearch-rest-resources.RolePayload.property.tenantPermissions"></a>

```typescript
public readonly tenantPermissions: TenantPermissions[];
```

- *Type:* <a href="#opensearch-rest-resources.TenantPermissions">TenantPermissions</a>[]

---

### TenantPermissions <a name="TenantPermissions" id="opensearch-rest-resources.TenantPermissions"></a>

#### Initializer <a name="Initializer" id="opensearch-rest-resources.TenantPermissions.Initializer"></a>

```typescript
import { TenantPermissions } from 'opensearch-rest-resources'

const tenantPermissions: TenantPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.TenantPermissions.property.allowedActions">allowedActions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.TenantPermissions.property.tenantPatterns">tenantPatterns</a></code> | <code>string[]</code> | *No description.* |

---

##### `allowedActions`<sup>Optional</sup> <a name="allowedActions" id="opensearch-rest-resources.TenantPermissions.property.allowedActions"></a>

```typescript
public readonly allowedActions: string[];
```

- *Type:* string[]

---

##### `tenantPatterns`<sup>Optional</sup> <a name="tenantPatterns" id="opensearch-rest-resources.TenantPermissions.property.tenantPatterns"></a>

```typescript
public readonly tenantPatterns: string[];
```

- *Type:* string[]

---

### UserPayload <a name="UserPayload" id="opensearch-rest-resources.UserPayload"></a>

#### Initializer <a name="Initializer" id="opensearch-rest-resources.UserPayload.Initializer"></a>

```typescript
import { UserPayload } from 'opensearch-rest-resources'

const userPayload: UserPayload = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#opensearch-rest-resources.UserPayload.property.attributes">attributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.UserPayload.property.backendRoles">backendRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.UserPayload.property.hash">hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.UserPayload.property.opendistroSecurityRoles">opendistroSecurityRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#opensearch-rest-resources.UserPayload.property.password">password</a></code> | <code>string</code> | *No description.* |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="opensearch-rest-resources.UserPayload.property.attributes"></a>

```typescript
public readonly attributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `backendRoles`<sup>Optional</sup> <a name="backendRoles" id="opensearch-rest-resources.UserPayload.property.backendRoles"></a>

```typescript
public readonly backendRoles: string[];
```

- *Type:* string[]

---

##### `hash`<sup>Optional</sup> <a name="hash" id="opensearch-rest-resources.UserPayload.property.hash"></a>

```typescript
public readonly hash: string;
```

- *Type:* string

---

##### `opendistroSecurityRoles`<sup>Optional</sup> <a name="opendistroSecurityRoles" id="opensearch-rest-resources.UserPayload.property.opendistroSecurityRoles"></a>

```typescript
public readonly opendistroSecurityRoles: string[];
```

- *Type:* string[]

---

##### `password`<sup>Optional</sup> <a name="password" id="opensearch-rest-resources.UserPayload.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---



