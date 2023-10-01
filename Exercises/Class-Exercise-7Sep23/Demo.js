let whatIsMyValue; // declare an empty variable

function checkValue() {
	console.log('whatIsMyValue Before', whatIsMyValue); // Check the variables value before
	whatIsMyValue = 5; // initialize the variable
	console.log('whatIsMyValue After', whatIsMyValue); // Check the variables value after
}

checkValue();

// ~ DEMO 2 START ~ \\
let testVariable = 'Globally Initialized'; // declare + initialize testVariable GLOBALLY

function callLocalFunction() {
	let testVariable = 'Locally Initialized'; // declare + initialize the testVariable LOCALLY in the function
	console.log('testVariable inside function:', testVariable); // Check the value of the testVariable inside the function

	// Note: Creating a new function creates a new local scope called function scope.
}

callLocalFunction(); // call the checkValue function

console.log('testVariable outside function:', testVariable); // Check the value of the testVariable outside the function after the function call
// ~ DEMO 2 END ~ \\

// ~ DEMO 1 START ~ \\
// Variable declaration is hoisted. Assignment doesn't happen until later.
let someVar;

function checkIfHoisted() {
	let someVar = 10;
	console.log('someVar inside function:', someVar); // 10
}

checkIfHoisted();

console.log('someVar after function:', someVar); // undefined
// ~ DEMO 1 END ~ \\

// ~ DEMO 2 START ~ \\
let highVar = 99;

let midVar;

fakeoutFunc();

midVar = 44;

function fakeoutFunc() {
	console.log('Still Works!');
	console.log('highVar:', highVar);
	console.log('midVar:', midVar);
	console.log('lowVar:', lowVar);
}

let lowVar = 1;
// ~ DEMO 2 END ~ \\