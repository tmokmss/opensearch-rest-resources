import { Construct } from 'constructs';
import { ResourcePropsBase, recursiveFromCamelToSnake } from './common';
import { OpenSearchRole } from './role';
import { OpenSearchCustomResource } from '../custom-resource';

export interface OpenSearchRoleMappingProps extends ResourcePropsBase {
  /**
   * The role you create a role mapping for.
   * Create a role by {@link OpenSearchRole} class, or use [a predefined role](https://opensearch.org/docs/latest/security/access-control/users-roles/#predefined-roles).
   */
  readonly roleName: string;
  /**
   * See https://opensearch.org/docs/latest/security/access-control/api/#create-role-mapping for the details.
   */
  readonly payload: RoleMappingPayload;
}

export interface RoleMappingPayload {
  readonly backendRoles?: string[];
  readonly hosts?: string[];
  readonly users?: string[];
}

export class OpenSearchRoleMapping extends Construct {
  constructor(scope: Construct, id: string, props: OpenSearchRoleMappingProps) {
    super(scope, id);

    const { roleName, payload, ...other } = props;

    new OpenSearchCustomResource(this, 'Resource', {
      ...other,
      restEndpoint: `_plugins/_security/api/rolesmapping/${props.roleName}`,
      payloadJson: JSON.stringify(recursiveFromCamelToSnake(payload)),
    });
  }
}
