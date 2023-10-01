// TypeScript is a superset to JavaScript
// adds static typing to JavaScript - JavaScript is dynamically typed

// npm init -y to add a .json file
// npx tsc with-typescript.ts to compile - npx tsc and typescript file name


// Primtiives: number, string, boolean

let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// More complex types: arrays, objects

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

let person: { // defining the type as an object using {}
  name: string;
  age: number;

};  
person =  {
  name: 'Max',
  age: 32
};

person = {          
  isEmployee: true  // error because it is the wrong type  - Boolean does not match the type description above
}

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course = 'React - The Complete Guide';

course = 12341;  // error because it is not a string - even though the type was not described above, typescript infered what type to assign it because of the value assigned to it

let course: string | number = 'React - The Complete Guide';  // create a union of types to allow as many types as you need with |

// Function types, parameters

function add(a: number, b: number) {
  return a + b; // the type is infered
}

function print1(value: any) {
  console.log(value);  // return type - void(never returned)
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) { // generic type features tells typescript the array and value should be the same
  const newArray = [value, ...array];                 // type safe yet flexible, they work with any type, but then once a certain type is used  for that function execution, that type is locked in and known
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]  // the generic feature on the function lets typescript infer that these are and can only be numbers
const stringArray = insertAtBeginning*['a', 'b'];  // the generic feature on the function lets typescript infer that these can only be strings

// classes

class Student {    // class
  firstName: string;  //properties and methods
  lastName: string;
  age: number;
  courses: string[];

  constructor(first: string, last: string, age: number, courses: string[]) {  // constructor arguments
    this.firstName = first;  
    this.lastName = last;
    this.age = age;
    this.courses = courses;
  }  // constructor method to define the default method that will be called when we isntantiate a new objects based on this class

    enroll(courseName: string) { 
      this.courses.push(courseName); // method short hand notation - adding a method to a class
    }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enroll('React');

// student.courses => Angular, React

//Interfaces are object type definitions

interface Human {
  firstName: string;
  age: number;

  greet() => void;  // every Human will have a greet method that takes no parameters and returns nothing
  
}

let max = Human;

max = {                 // this objects follows the interface above
  firstName: 'Max',
  age: 32,
  greet() {
    console.log('Hello!');
  },
};

// interfaces are an alternative to using type keywords
// interfaces can be implemented by classes - they force classes to follow a certain structure

class Instructor implements Human {  // Instructor has an error until you follow the interface exactly
  firstName: string;
  age: number;
  greet() {
    console.log('Hello!!!!');
  }
}