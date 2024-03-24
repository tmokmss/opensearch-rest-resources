import { App } from 'aws-cdk-lib';
import { OpenSearchTestStack } from './stack';

class TestApp extends App {
  constructor() {
    super();

    new OpenSearchTestStack(this, 'OpenSearchTestStack');
  }
}

new TestApp().synth();
