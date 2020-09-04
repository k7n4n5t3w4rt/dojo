// @flow
Test("First test", () => {
  const input /*: Array<Array<string>> */ = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", ".", ".", "*", ".", "."],
  ];

  const expectedOutput /*: Array<Array<string>> */ = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", "*", ".", "."],
    [".", ".", ".", ".", "*", ".", ".", "."],
  ];
  // $FlowFixMe
  const newState /*: Array<Array<string>> */ = newState(input);

  if (JSON.stringify(newState) === JSON.stringify(expectedOutput)) {
    pass(`The result is ${newState.toString()}`);
  } else {
    fail(`The result is ${newState.toString()}`);
  }
});
