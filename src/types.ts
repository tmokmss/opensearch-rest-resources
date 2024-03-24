export type ResourceProperties = {
  /**
   * Host of OpenSearch domain you want to create a resource in.
   *
   * @example vpc-xxxx.us-east-1.es.amazonaws.com
   */
  opensearchHost: string;

  /**
   * ARN of a Secret Manager secret containing username and password for an OpenSearch master user.
   *
   * JSON Format must be `{ "username": "XXXXX", "password": "XXXXX" }`
   */
  masterUserSecretArn: string;

  /**
   * A REST endpoint to call from the custom resource handler.
   * It sends PUT request on a create/update event and DELETE request on a delete event.
   *
   * @example _plugins/_security/api/roles/roleName
   */
  restEndpoint: string;

  /**
   * A payload in JSON string to send a request on create/update event.
   */
  payloadJson: string;
};
