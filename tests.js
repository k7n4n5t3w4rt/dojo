// @flow
Test("First test", () => {
  const inputArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const outputArray = ["A", "E", "F", "G", "H", "B", "C", "D", "I", "J"];
  const startIndex = 1;
  const endIndex = 3;
  const beforeIndex = 8;
  const result /*: boolean */ = moveElements(inputArray, startIndex, endIndex, beforeIndex);

  if (result === true) {
    pass(`The result is ${result.toString()}`);
  } else {
    fail(`The result is ${result.toString()}`);
  }
});
