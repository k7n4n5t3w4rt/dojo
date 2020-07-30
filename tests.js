// @flow
Test("First test", () => {
  const result /*: boolean */ = exampleFunction();

  if (result === true) {
    pass(`The result is ${result.toString()}`);
  } else {
    fail(`The result is ${result.toString()}`);
  }
});
