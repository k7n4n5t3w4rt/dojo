// @flow
const newState = (
  oldState /*: Array<Array<string>> */
) /*: Array<Array<string>> */ => {
  const expectedOutput /*: Array<Array<string>> */ = [
    [".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", "*", "*", ".", ".", "."],
    [".", ".", ".", "*", "*", "*", ".", "."],
    [".", ".", ".", ".", "*", ".", ".", "."],
  ];
  return expectedOutput;
};

const aliveOrDead = (
  oldState /*: Array<Array<string>> */,
  x /*: number */,
  y /*: number */
) /*: boolean */ => {
  let numberOfAliveCells /*: number */ = 0;
  for (let i = y - 1; i <= y + 1; i++) {
    for (let j = x - 1; j <= x + 1; j++) {
      console.log("oldState", i, j, oldState[i][j]);
      if (oldState[i][j] === "*" && i !== y && x !== j) {
        numberOfAliveCells++;
      }
    }
  }
  if (numberOfAliveCells > 2) {
    return true;
  } else {
    return false;
  }
};
