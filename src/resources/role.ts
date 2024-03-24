import { Construct } from 'constructs';
import { ResourcePropsBase, recursiveFromCamelToSnake } from './common';
import { OpenSearchCustomResource } from '../custom-resource';

export interface OpenSearchRoleProps extends ResourcePropsBase {
  /**
   * The name of this role.
   */
  readonly roleName: string;

  /**
   * See https://opensearch.org/docs/latest/security/access-control/api/#create-role for the details.
   */
  readonly payload: RolePayload;
}

export interface RolePayload {
  readonly clusterPermissions?: string[];
  readonly indexPermissions?: IndexPermissions[];
  readonly tenantPermissions?: TenantPermissions[];
}

export interface IndexPermissions {
  readonly indexPatterns?: string[];
  readonly dls?: string;
  readonly fls?: string[];
  readonly maskedFields?: string[];
  /**
   * https://opensearch.org/docs/latest/security/access-control/default-action-groups/
   */
  readonly allowedActions?: string[];
}

export interface TenantPermissions {
  readonly tenantPatterns?: string[];
  readonly allowedActions?: string[];
}

export class OpenSearchRole extends Construct {
  constructor(scope: Construct, id: string, props: OpenSearchRoleProps) {
    super(scope, id);

    const { roleName, payload, ...other } = props;

    new OpenSearchCustomResource(this, 'Resource', {
      ...other,
      restEndpoint: `_plugins/_security/api/roles/${props.roleName}`,
      payloadJson: JSON.stringify(recursiveFromCamelToSnake(payload)),
    });
  }
}
