// @flow

// ------------------------------------------------------------- //
// Functions
// ------------------------------------------------------------- //
const exampleFunction = () /*: boolean */ => {
	return true;
};

// ------------------------------------------------------------- //
// Tests
// ------------------------------------------------------------- //
Test("First test", () => {
	const result /*: boolean */ = exampleFunction();

	if (result === false) {
		pass(`The result is: ${result.toString()}`);
	} else {
		fail(`The result is: ${result.toString()}`);
	}
});
