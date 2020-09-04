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
      console.log("A x = " + x + " y = " + y);
      if (i >= 1) {
        if (j >= 1) {
          console.log("B x = "+x+" y = "+y);
          if (oldState[i][j] === "*") {
            console.log("found 1", numberOfAliveCells, i !== y && x !== j);
            numberOfAliveCells++;
          }
        }
      }
    }
  }
  console.log("numberOfAliveCells", numberOfAliveCells);
  if (numberOfAliveCells > 2) {
    return true;
  } else {
    return false;
  }
};
