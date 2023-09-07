// 1.

// the outcome is that the function will log to the console as expected because of hoisting
// function declarations are hoisted

book('The Magicians Newphew');

function book(title) {
  console.log(`The book is called ${title}`);
}

// 2.

// the outcome would be an error because initializations are not hoisted
// to fix this you could move console.log under the variable initialization



let book2 = 'The Silver Chair';

console.log(book2);