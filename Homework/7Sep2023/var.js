// different types of local scope

// variables inside of a function - functional scope
// block scope - variables are limited to these blocks


function hello() {
  var greeting = 'hello';  
}

console.log(greeting);  // greeting is undefined because it is defined locally

if(true) {
  var greeting = 'hello';  // var is not being contained in this code block so it is able to be called globally
}

console.log(greeting);

// var does not have full local scope. It only has a functional local scope.

// var x = 10;
// console.log(x);

// if(true) {
//   var x = 2;   // variable was over written 
//   console.log(x);
// }

// console.log(x);


let x = 10;
console.log(x);

if(true) {
  let x = 2;   // let does not over write the previous variable
  console.log(x);
}

console.log(x);

