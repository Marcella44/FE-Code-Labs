class Person {
  name1 = 'Ella';
  age1 = 20;
  name2 = 'Jane';
  age2 = 29
  greet() {
    console.log(`Hello, my name is ${this.name1} and I'm ${this.age1} years old.`);
    console.log(`Hello, my name is ${this.name2} and I'm ${this.age2} years old.`);
  }
}

const Ella = new Person();
const Jane = new Person();
Ella.greet();
Jane.greet();


