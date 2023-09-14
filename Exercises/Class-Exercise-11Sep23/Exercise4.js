class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  static info() {
    return 'This is a Person class.';
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const Ella = new Person('Ella', 20);
const Jane = new Person('Jane', 29);
Ella.greet();
Jane.greet();
console.log(Person.info());




