import { Construct } from 'constructs';
import { ResourcePropsBase, recursiveFromCamelToSnake } from './common';
import { OpenSearchCustomResource } from '../custom-resource';

export interface OpenSearchUserProps extends ResourcePropsBase {
  /**
   * The name of this user.
   */
  readonly userName: string;

  /**
   * See https://opensearch.org/docs/latest/security/access-control/api/#create-user for the details.
   */
  readonly payload: UserPayload;
}

export interface UserPayload {
  readonly password?: string;
  readonly hash?: string;
  readonly opendistroSecurityRoles?: string[];
  readonly backendRoles?: string[];
  readonly attributes?: { [key: string]: string };
}

export class OpenSearchUser extends Construct {
  /**
   * The name of this user.
   */
  public readonly userName: string;

  constructor(scope: Construct, id: string, props: OpenSearchUserProps) {
    super(scope, id);

    const { userName, payload, ...other } = props;

    // we won't convert casing for attributes
    const exclude = { attributes: true } as const;

    const resource = new OpenSearchCustomResource(this, 'Resource', {
      ...other,
      restEndpoint: `_plugins/_security/api/internalusers/${userName}`,
      payloadJson: JSON.stringify(recursiveFromCamelToSnake(payload, exclude)),
    });

    this.userName = resource.getStringAfterResourceCreation(userName);
  }
}
