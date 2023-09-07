// Hoisting is JavaScripts default behaviour where Variables and Function declarations are moved to the top of their scope before code execution. 

function hello() {
  console.log('hello');
}

hello();

// Declaration

let game;
console.log(game);  // undefined

// Initialization 

game = "Super Mario";
console.log(game); // Super Mario

// With hoisting, only declarations are moved to the top. Intiliazations or assignments are left in place.

console.log(typeof num);  // undefined - haven't assigned a value or initialized num

// let and const do not hoist

