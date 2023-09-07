// function a() {
//   let game = 'Sonic';  // local variable
// }

// console.log(game);

// if(true) {
//   console.log(game);
// }

//  error "game is not defined" because game has not been defined in the global scope and that is where we are trying to use it.

function a() {
  let game = 'Sonic';
  console.log(game);
}

a();

if(true) {
  let game = 'Mario';
  console.log(game);
}

// local scope provides some security to your code
// global scope variables have a chance of being over written
// local scope is less prone to errors

