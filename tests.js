// @flow
Test("First test", () => {
  const inputArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const outputArray = ["A", "E", "F", "G", "H", "B", "C", "D", "I", "J"];
  const startIndex = 1;
  const endIndex = 3;
  const beforeIndex = 8;
  const result /*: Array<string> */ = moveElements(inputArray, startIndex, endIndex, beforeIndex);

  if (JSON.stringify(result) === JSON.stringify(outputArray)) {
    pass(`The result is ${result.toString()}`);
  } else {
    fail(`The result is ${result.toString()}`);
  }
});

Test("Second test", () => {
  const inputArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const outputArray = ["A", "B", "F", "G", "H", "C", "D", "E", "I", "J"];
  const startIndex = 2;
  const endIndex = 4;
  const beforeIndex = 8;
  const result /*: Array<string> */ = moveElements(
    inputArray,
    startIndex,
    endIndex,
    beforeIndex,
  );

  if (JSON.stringify(result) === JSON.stringify(outputArray)) {
    pass(`The result is ${result.toString()}`);
  } else {
    fail(`The result is ${result.toString()}`);
  }
});
