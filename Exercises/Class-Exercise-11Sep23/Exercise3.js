class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, ${this.name}.`);
  }
}

const Ella = new Person('Ella', 20);
const Jane = new Person('Jane', 29);
Ella.greet();
Jane.greet();