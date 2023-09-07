let myName = 'Kyle';  // global variable

function printName() {
  console.log(myName);  
}

printName();

myName = 'Joey';  // overwrote let variable with most recent value

printName();

myName = 'Kate'; // overwrote let variable with most recent value

printName();

function outerFunction(outerVariable) {
  const outer2 = 'Hi'
  return function innerFunction(InnerVariable) {
    console.log('Outer Variable: ' + outerVariable)
    console.log('Inner Variable: ' + InnerVariable)
    console.log(outer2);
  }
}

const newFunction = outerFunction('outside');
newFunction('inside');

// anything on the inside has access to its parent scope and anything outside of it


// function outerFunction(url) {
// fetch('url').then(() => {
//   console.log(url)
// })
// }

// a closure is a function that remembers its outer variables and can access
