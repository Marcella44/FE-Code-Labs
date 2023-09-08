function setupCounter() {
  let counter = 0;

  while (counter < 15) {
    console.log(counter++);
    }
    return counter;
}

setupCounter();








function setupCounter2() {
  let count = 0;

  return function() {
    count ++;
    console.log(count)
  }
}

let myVar = setupCounter2();

myVar();
myVar();
myVar();
myVar();
myVar();
myVar();
