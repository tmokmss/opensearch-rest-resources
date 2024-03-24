import { GetSecretValueCommand, SecretsManager } from '@aws-sdk/client-secrets-manager';
import type { CloudFormationCustomResourceEvent, CloudFormationCustomResourceHandler, Context } from 'aws-lambda';
import type { ResourceProperties } from '../src/types';
import { setTimeout } from 'timers/promises';

const sm = new SecretsManager({});

const fetchWithRetry = async (
  url: string,
  method: string,
  headers: Headers,
  body: string | undefined,
  successStatus: string[],
  count = 0
): Promise<void> => {
  const res = await fetch(url, {
    method,
    headers,
    body,
  });
  if (res.status == 403) {
    // There is sometimes some delay before domain access policy takes effect,
    // especially when we call API right after a domain is provisioned.
    // It seems it usually takes about 15 seconds, so we will retry a few times.
    if (count > 5) {
      throw new Error(`Request failed: ${res.status} ${await res.text()}`);
    }
    console.log(`Retrying... ${res.status} ${await res.text()}`);
    await setTimeout(Math.min(count ** 2 * 1000, 30000));
    return await fetchWithRetry(url, method, headers, body, successStatus, count + 1);
  }
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status} ${await res.text()}`);
  }
  const json = await res.json();
  console.log(json);
  if (!successStatus.includes(json.status)) {
    throw new Error(JSON.stringify(json));
  }
};

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
        await fetchWithRetry(`${baseUrl}/${props.restEndpoint}`, 'PUT', headers, props.payloadJson, ['OK', 'CREATED']);
        break;
      }
      case 'Delete': {
        await fetchWithRetry(`${baseUrl}/${props.restEndpoint}`, 'DELETE', headers, undefined, ['OK', 'NOT_FOUND']);
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
