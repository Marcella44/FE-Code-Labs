// Exercise 2

let name: string;
name = 'Ella';

console.log(name);

// Exercise 3

const length: number;
length = 4;
const width: number;
width = 2

function area() {
  return length * width;
}

console.log(area());

// Exercise 4

let num: number;
num = parseInt(prompt('Enter a number: '));

let even: Boolean;
even = true;

if (num % 2 !== 0) {
  even = false;
}

if(even) {
  console.log('even');
} else {
  console.log('odd');
};

// Exercise 5

let count: number;
count = 10;

for(let i=1; i <= count; i++) {
  console.log(i);
}

// Exercise 6

let userName: String;
userName = prompt('What is your name? ');

console.log(`Hello, ${userName}.`);

// Exercise 7

let userNumber: number;
userNumber = prompt('Pick a number. ');

console.log()