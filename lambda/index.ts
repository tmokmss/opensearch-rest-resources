import type { CloudFormationCustomResourceEvent, CloudFormationCustomResourceHandler } from 'aws-lambda';
import type { ResourceProperties } from '../src/types';

export const handler: CloudFormationCustomResourceHandler = async (event, context) => {
  try {
    switch (event.RequestType) {
      case 'Create':
      case 'Update':
        break;
      case 'Delete':
        break;
    }
    await sendStatus('SUCCESS', event, context);
  } catch (e) {
    if (false) {
    } else {
      const err = e as Error;
      await sendStatus('FAILED', event, context, err.message);
    }
  }
};

const sendStatus = async (status: 'SUCCESS' | 'FAILED', event: CloudFormationCustomResourceEvent, context: any, reason?: string) => {
  const responseBody = JSON.stringify({
    Status: status,
    Reason: reason ?? 'See the details in CloudWatch Log Stream: ' + context.logStreamName,
    PhysicalResourceId: context.logStreamName,
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
