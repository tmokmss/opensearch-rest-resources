import { GetSecretValueCommand, SecretsManager } from '@aws-sdk/client-secrets-manager';
import type { CloudFormationCustomResourceEvent, CloudFormationCustomResourceHandler, Context } from 'aws-lambda';
import type { ResourceProperties } from '../src/types';

const sm = new SecretsManager({});

export const handler: CloudFormationCustomResourceHandler = async (event, context) => {
  console.log(JSON.stringify(event));

  const { ServiceToken, ...other } = event.ResourceProperties;
  const props = other as ResourceProperties;
  try {
    // We refer to a secret here because CloudFormation currently does not support dynamic reference for custom resources.
    // > Dynamic references for secure values, such as secretsmanager, aren't currently supported in custom resources.
    // > https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager
    const secretValue = await sm.send(new GetSecretValueCommand({ SecretId: props.masterUserSecretArn }));
    const { username, password } = JSON.parse(secretValue.SecretString!);

    // When using FGAC, https is always enforced.
    const baseUrl = `https://${props.opensearchHost}`;
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + Buffer.from(username + ':' + password).toString('base64'));
    headers.append('Content-type', 'application/json');

    switch (event.RequestType) {
      case 'Create':
      case 'Update': {
        console.log(props.payloadJson);
        const res = await fetch(`${baseUrl}/${props.restEndpoint}`, {
          method: 'PUT',
          headers,
          body: props.payloadJson,
        });
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status} ${await res.text()}`);
        }
        const json = await res.json();
        console.log(json);
        if (!['OK', 'CREATED'].includes(json.status)) {
          throw new Error(JSON.stringify(json));
        }
        break;
      }
      case 'Delete': {
        const res = await fetch(`${baseUrl}/${props.restEndpoint}`, {
          method: 'DELETE',
          headers,
        });
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status} ${await res.text()}`);
        }
        const json = await res.json();
        console.log(json);
        if (json.status == 'NOT_FOUND') {
          console.log('Seems the resource has already been removed.');
          break;
        }
        if (!['OK'].includes(json.status)) {
          throw new Error(JSON.stringify(json));
        }
        break;
      }
    }
    await sendStatus('SUCCESS', event, context, props);
  } catch (e) {
    console.log(e);
    const err = e as Error;
    await sendStatus('FAILED', event, context, props, err.message);
  }
};

const sendStatus = async (
  status: 'SUCCESS' | 'FAILED',
  event: CloudFormationCustomResourceEvent,
  context: Context,
  props: ResourceProperties,
  reason?: string
) => {
  const responseBody = JSON.stringify({
    Status: status,
    Reason: (reason ?? '') + ' See the details in CloudWatch Log Stream: ' + context.logStreamName,
    PhysicalResourceId: props.restEndpoint,
    StackId: event.StackId,
    RequestId: event.RequestId,
    LogicalResourceId: event.LogicalResourceId,
    NoEcho: false,
    Data: {},
  });

  const res = await fetch(event.ResponseURL, {
    method: 'PUT',
    body: responseBody,
    headers: {
      'Content-Type': '',
      'Content-Length': responseBody.length.toString(),
    },
  });
  await res.text();
};
