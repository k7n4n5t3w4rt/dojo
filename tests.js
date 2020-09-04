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
  const returnState /*: Array<Array<string>> */ = newState(input);

  if (JSON.stringify(returnState) === JSON.stringify(expectedOutput)) {
    pass(`Pass: The result is ${returnState.toString()}`);
  } else {
    fail(`Fail: The result is ${returnState.toString()}`);
  }
});

Test("First alive or dead", () => {
  const oldState /*: Array<Array<string>> */ = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", ".", ".", "*", ".", "."],
  ];

  const x = 5;
  const y = 1;
  // $FlowFixMe
  const alive = aliveOrDead(oldState, x, y);

  if (alive) {
    pass(`Pass: The result is ${alive.toString()}`);
  } else {
    fail(`Fail: The result is ${alive.toString()}`);
  }
});
