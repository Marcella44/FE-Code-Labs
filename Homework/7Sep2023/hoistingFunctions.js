lion('Aslan');  // this works because of function hoisting

function lion(name) {
  console.log(`The lions name is ${name}`);
}

// only declarations are hoisted, not initializations
// expressions are not hoisted
