// Exercise 2
var name;
name = 'Ella';
console.log(name);
// Exercise 3
var length;
length = 4;
var width;
width = 2;
function area() {
    return length * width;
}
console.log(area());
// Exercise 4
var num;
num = parseInt(prompt('Enter a number: '));
var even;
even = true;
if (num % 2 !== 0) {
    even = false;
}
if (even) {
    console.log('even');
}
else {
    console.log('odd');
}
;
// Exercise 5
var count;
count = 10;
for (var i = 1; i <= count; i++) {
    console.log(i);
}
// Exercise 6
var userName;
userName = prompt('What is your name? ');
console.log("Hello, ".concat(userName, "."));
// Exercise 7
var userNumber;
userNumber = prompt('Pick a number. ');
console.log();
