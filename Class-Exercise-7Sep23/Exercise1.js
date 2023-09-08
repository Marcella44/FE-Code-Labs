function outerFunction() {
	let outerVar = "I'm outside!"; // locally scoped variable

	function innerFunction() {
		let innerVar = "I'm inside!";
		console.log(outerVar); // Can we access outerVar? Yes
		console.log(innerVar); // Can we access innerVar? No
	}

	innerFunction();
}

outerFunction();
