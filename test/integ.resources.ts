import { ExpectedResult, IntegTest } from '@aws-cdk/integ-tests-alpha';
import { App } from 'aws-cdk-lib';
import { OpenSearchTestStack } from '../example/stack';

const app = new App({
  context: {
    '@aws-cdk/custom-resources:logApiResponseDataPropertyTrueDefault': false,
  },
});

const stack = new OpenSearchTestStack(app, 'OpenSearchRestResourcesStack');

const integ = new IntegTest(app, 'OpenSearchRestResourcesIntegTest', {
  testCases: [stack],
  diffAssets: true,
});

const assertion = integ.assertions.invokeFunction({
  functionName: stack.testHandler.functionName,
});
// https://docs.aws.amazon.com/lambda/latest/api/API_Invoke.html#API_Invoke_ResponseElements
assertion.expect(ExpectedResult.objectLike({ StatusCode: 200 }));
