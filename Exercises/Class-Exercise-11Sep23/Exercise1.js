function global() {
  console.log('this in Global Scope', this);
}

global(); // window - global scope


const obj = {
  name: 'Ella',
  isStudent: true,
  printStudent: function() {
    console.log(this.isStudent)
  }
};

obj.printStudent(); // this references true

const obj2 = {
  name: 'Jane',
  isStudent: false,
  printStudent: () => {
    console.log(this.isStudent)
  }
}

obj2.printStudent(); // undefined, doesn't work with arrow functions



