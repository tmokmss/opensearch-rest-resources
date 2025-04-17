import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'tmokmss',
  authorAddress: 'tomookam@live.jp',
  cdkVersion: '2.1.0', // we don't guarantee it works in 2.1.0, but it should.
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.8.0',
  name: 'opensearch-rest-resources',
  projenrcTs: true,
  license: 'MIT',
  repositoryUrl: 'https://github.com/tmokmss/opensearch-rest-resources.git',
  description: 'Manage OpenSearch REST resources from AWS CDK.',
  keywords: ['aws', 'cdk', 'aws-cdk', 'opensearch'],
  eslintOptions: {
    dirs: ['src'],
    ignorePatterns: ['example/**/*', 'lambda/**/*', 'test/assets/**/*', 'test/*.snapshot/**/*', '*.d.ts'],
  },
  gitignore: ['*.js', '*.d.ts', '!testq/integ.*.snapshot/**/*', 'test/cdk.out'],
  devDeps: ['aws-cdk-lib', 'aws-cdk', 'constructs', '@aws-cdk/integ-runner@^2.186.2', '@aws-cdk/integ-tests-alpha@^2.189.1-alpha.0', 'esbuild'],
  peerDependencyOptions: {
    pinnedDevDependency: false,
  },
  publishToPypi: {
    distName: 'opensearch-rest-resources',
    module: 'opensearch_rest_resources',
  },
  npmProvenance: false,
});

// Bundle custom resource handler Lambda code
project.projectBuild.compileTask.prependExec('yarn install --frozen-lockfile && yarn build', {
  cwd: 'lambda',
});
// Run integ-test. This takes about 1 hour. Good luck.
project.projectBuild.testTask.exec('yarn integ-runner');
project.synth();
