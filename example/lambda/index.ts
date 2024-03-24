import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { Client } from '@opensearch-project/opensearch';
import { AwsSigv4Signer } from '@opensearch-project/opensearch/aws';
import { Handler } from 'aws-lambda';
import { randomBytes } from 'crypto';

// following: https://github.com/opensearch-project/opensearch-js/blob/main/USER_GUIDE.md#using-aws-v3-sdk
const client = new Client({
  ...AwsSigv4Signer({
    region: process.env.AWS_REGION!,
    service: 'es',
    getCredentials: () => {
      const credentialsProvider = defaultProvider();
      return credentialsProvider();
    },
  }),
  requestTimeout: 5000,
  node: `https://${process.env.OPENSEARCH_HOST!}`,
});

export const handler: Handler = async (event, context) => {
  const indexName = `test-index-${randomBytes(10).toString('hex')}`;
  let resp;
  resp = await client.indices.create({
    index: indexName,
  });
  console.log(resp);

  resp = await client.index({
    index: indexName,
    body: {
      id: 1,
    },
  });
  console.log(resp);
};
