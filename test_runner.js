// @flow
function pass(message) {
  console.log(message);
}
function fail(message) {
  console.error(message);
}
function Test(message, testFunction) {
  console.log(message);
  testFunction();
}
