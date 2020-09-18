// @flow
const moveElements = (
  inputArray /*: Array<string> */,
  startIndex /*: number */,
  endIndex /*: number */,
  beforeIndex /*: number */,
) /*: Array<string> */ => {

  const chunk = inputArray.slice(startIndex, endIndex + 1);
  const outputArray = ["A", "E", "F", "G", "H", "B", "C", "D", "I", "J"];
  outputArray.splice(beforeIndex, 0, ...chunk);
  return outputArray;
};
