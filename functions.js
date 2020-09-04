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

const aliveOrDead(oldState /*: Array<Array<string>> */, x /*: number */, y /*: number */) {

}
