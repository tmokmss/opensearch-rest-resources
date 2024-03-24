import { recursiveFromCamelToSnake } from '../src/resources/common';

test('recursive convert case', () => {
  // GIVEN
  const input = {
    someKey: '1',
    someNestedKey: {
      someChild: 'childValue',
      moreNestedKey: {
        someGrandChild: 1,
      },
    },
  };

  // WHEN
  const output = recursiveFromCamelToSnake(input);

  // THEN
  expect(output).toStrictEqual({
    some_key: '1',
    some_nested_key: {
      some_child: 'childValue',
      more_nested_key: {
        some_grand_child: 1,
      },
    },
  });
});

test('recursive convert case with exclude', () => {
  // GIVEN
  const input = {
    someNestedKey: {
      someChild: 'childValue',
      excludeKey: {
        someGrandChild: 1,
        moreNestedKey: {
          keepCamelCase: 1,
        },
      },
    },
  };
  const exclude = { someNestedKey: { excludeKey: true } } as const;

  // WHEN
  const output = recursiveFromCamelToSnake(input, exclude);

  // THEN
  expect(output).toStrictEqual({
    some_nested_key: {
      some_child: 'childValue',
      exclude_key: {
        someGrandChild: 1,
        moreNestedKey: {
          keepCamelCase: 1,
        },
      },
    },
  });
});
