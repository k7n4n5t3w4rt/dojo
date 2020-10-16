// @flow
function pass(message) {
	console.log("PASS: ", message);
}
function fail(message) {
	console.error(message);
}
function Test(message, testFunction) {
	console.log("----------------------------------------------------------");
	console.log(message);
	console.log("----------------------------------------------------------");
	testFunction();
}
