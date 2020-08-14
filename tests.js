// @flow
Test("First test", () => {
  const testString /*: string */ = "{{)(}}";
  const result /*: boolean */ = balanced(testString);

  if (result === true) {
    pass(
      `The parentheses are balanced because the result is ${result.toString()}`
    );
  } else {
    fail(
      `The parentheses are NOT balanced because the result is ${result.toString()}`
    );
  }
});
