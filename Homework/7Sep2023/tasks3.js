// 1.

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi();  // uses the most recent value

// When a function wants a variable, it takes the current value from its own Lexical Environment or the outer one.

// 2.
function makeWorker() {
  let name2 = "Pete";

  return function() {
    alert(name2);
  };
}

let name2 = "John";  // global variable


let work = makeWorker();


work(); // gets name from the place of its origin 

// if name was not in the makeWorker() function, then the search would go outside into the global scope.

// 3.

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

alert( counter2() ); // 0
alert( counter2() ); // 1

// counter and counter2 are created by different invocations of makeCounter. They have independent outer Lexical Environments.

// 4.

function Counter() {
  let count = 0;

  this.up = function() {
    return ++count;
  };
  this.down = function() {
    return --count;
  };
}

let counter3 = new Counter();

alert( counter3.up() ); // 1
alert( counter3.up() ); // 2
alert( counter3.down() ); // 1

//Both nested functions are created within the same outer Lexical Environment, so they share access to the same count variable.

// 5.

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

// supposed to be an error because the function is inside the if and the call is outside of it. However, it runs fine.
// In non-strict code, function declarations inside blocks behave strangely. Do not use them.
// In strict mode, starting with ES2015, functions inside blocks are scoped to that block. Prior to ES2015, block-level functions were forbidden in strict mode.

// 6.

function sum(a) {
  return function (b) {
    return a + b;
  };
}

alert ( sum(1)(2) );
alert ( sum(5)(-1) ); // for the second parentheses to work, the first ones must return a function.


// 7.

/* let x = 1;

function func() {
  console.log(x); // ?
  // dead zone - zone of temporary unusability of a bariable from the beginning of the code block till let
  let x = 2;
}

func(); */

// 8.

let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a, b) {
  return function(x) {
    return x >= a && x <= b;
  };
}

function inArray(arr) {
  return function(x) {
    return arr.includes(x);
  };
}
  
alert( arr.filter(inBetween(3, 6)) );
alert( arr.filter(inArray([1, 2, 10])) );

inBetween();
inArray();


// 9.

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField (fieldName) {
  users.sort(byField('name'));
  users.sort(byField('age'));
  return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}
  



// 10.

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function() { // create a shooter function,
      alert( j ); // that should show its number
    };
    shooters.push(shooter); // and add it to the array
    i++;
  }

  // ...and return the array of shooters
  return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.
