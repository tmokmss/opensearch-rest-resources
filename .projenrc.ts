import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Masashi Tomooka',
  authorAddress: 'tomookam@live.jp',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.3.0',
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
  devDeps: ['aws-cdk@^2.38.0', 'aws-cdk-lib@^2.38.0', 'constructs@^10.0.5', '@aws-cdk/integ-runner', '@aws-cdk/integ-tests-alpha'],
  peerDependencyOptions: {
    pinnedDevDependency: false,
  },
  npmProvenance: false,
});

// Bundle custom resource handler Lambda code
project.projectBuild.compileTask.prependExec('yarn install --frozen-lockfile && yarn build', {
  cwd: 'lambda',
});
// Run integ-test
// project.projectBuild.testTask.exec('yarn integ-runner');
project.synth();
