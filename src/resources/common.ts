import { RemovalPolicy } from 'aws-cdk-lib';
import { IVpc } from 'aws-cdk-lib/aws-ec2';
import { Domain } from 'aws-cdk-lib/aws-opensearchservice';

export interface ResourcePropsBase {
  /**
   * The VPC your OpenSearch domain is in.
   *
   * @default Assumes your Domain is not deployed within a VPC
   */
  readonly vpc?: IVpc;

  /**
   * The OpenSearch domain you want to create a resource in.
   */
  readonly domain: Domain;

  /**
   * Policy to apply when the resource is removed from the stack
   *
   * @default RemovalPolicy.DESTROY
   */
  readonly removalPolicy?: RemovalPolicy;
}

const camelToSnakeCase = (str: string) => str.replace(/[A-Z]/g, (c) => `_${c.toLowerCase()}`);

type Exclude = { [key: string]: Exclude | true };

/**
 * jsii requires property keys to be in camel case in TypeScript,
 * while OpenSearch uses snake case for a REST API request payload.
 *
 * This is a utility function to convert an object with camel-cased keys to snake-cased.
 *
 * @internal
 *
 * @param item The object whose keys will be transformed.
 * @param exclude The keys that will not be transformed and copied to output directly
 */
export const recursiveFromCamelToSnake = (item: unknown, exclude: Exclude = {}): unknown => {
  // https://stackoverflow.com/a/75927783/18550269
  if (Array.isArray(item)) {
    // For arrays we just pass parent's exclude object directly
    // since it makes no sense to specify different exclude options for each array element
    return item.map((el: unknown) => recursiveFromCamelToSnake(el, exclude));
  } else if (typeof item === 'function' || item !== Object(item)) {
    return item;
  }
  return Object.fromEntries(
    Object.entries(item as Record<string, unknown>).map(([key, value]: [string, unknown]) => {
      const childExclude = exclude[key];
      if (childExclude === true) {
        return [camelToSnakeCase(key), value];
      } else {
        return [camelToSnakeCase(key), recursiveFromCamelToSnake(value, childExclude)];
      }
    }),
  );
};
