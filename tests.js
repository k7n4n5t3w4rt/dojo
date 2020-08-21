// @flow
// Leave this one. It won't work until the end
Test("First and final test", () => {
	const testString /*: string */ = "{()}[[{}]]"
  const result /*: boolean */ = isBalanced(testString);

  if (result === true) {
    pass(`The result is ${result.toString()}`);
  } else {
    fail(`The result is ${result.toString()}`);
  }
});
