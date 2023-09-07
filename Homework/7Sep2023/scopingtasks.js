
// 1.
const firstName = 'John';
const lastName = 'Smith';
const age = 29;

function about() {
  console.log(`${firstName} ${lastName} is ${age} years old.`);
}

about();

// 2.
function about2() {
  const firstName2 = 'John';
  const lastName2 = 'Smith';
  const age2 = '29';
  const country = 'Canada'

  console.log(`${firstName2} ${lastName2} is ${age2} years old and lives in ${country}`);
}

about2();

// 3.

const firstName3 = 'James'

function about3() {
  const firstName3 = 'John';
  const lastName3 = 'Smith';
  const age3 = '29';
  const country3 = 'Canada'

  console.log(`${firstName3} ${lastName3} is ${age3} years old and lives in ${country3}`);
}

about3();

// the name did not change because they are seen as two different variables. One in local and one in global.

// 4.
// the local variable "mario" will log to the console 1st
// the global variable "sonic" will log to the console 2nd

let game = 'Sonic';

if(true) {
  let game = 'Mario';
  console.log(game);
}

console.log(game);