class Person {
   
  constructor(name, age) {
    this.name = name;
    this.age = age; 
  }

  get age() {
    return this.age;
  }

  set age(age) {

    if (age < 0) {
      console.log("Age can't be a negative number");
    } else {
      // console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
      this.age = age;
    }
    
  }
}


const Ella = new Person('Ella', -1);
const Jane = new Person('Jane', -2);

console.log(Ella.age);
console.timeLog(Jane.age);

