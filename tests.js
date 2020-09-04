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

  const x = 3;
  const y = 1;
  // $FlowFixMe
  const alive = aliveOrDead(oldState, x, y);

  console.log('alive', alive);
  if (alive) {
    pass(`Pass: The result is ${alive.toString()}`);
  } else {
    fail(`Fail: The result is ${alive.toString()}`);
  }
});

Test("Search first cell and return dead", () => {
  const oldState /*: Array<Array<string>> */ = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", ".", ".", "*", ".", "."],
  ];

  const x = 0;
  const y = 0;
  // $FlowFixMe
  const alive = aliveOrDead(oldState, x, y);

  console.log("alive", alive);
  if (alive) {
    fail(`Fail: The result is ${alive.toString()}`);
  } else {
    pass(`Pass: The result is ${alive.toString()}`);
  }
});
