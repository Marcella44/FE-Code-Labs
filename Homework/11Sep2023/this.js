// this is a reference to the object that is executing the current running function

function test() {
  console.log(this);
}

test();  // being executed from the global scope - the object that is calling it is the window

const user = {
  firstName: "Patrick",
  lastName: "Scott",
  fullName: function() {
    console.log(this)  // this refers to the object immediately before the function call
    console.log(this.firstName + " " + this.lastName) //
  }
}

user.fullName();  // this refers to user - the object before the function call // implicit scope

const user2 = {
  firstName2: "Patrick",
  lastName2: "Scott",
  hobbies: ["programming", "piano"],
  listHobbies: function() {
    this.hobbies.forEach(function(hobby) {
      console.log(hobby)
      console.log(this.firstName2)
    }, this);  // pass in the this reference that points to user2 (this doesn't work for all methods)  // explicit scope
  }
}

user2.listHobbies();

function user3(name) {
  this.name = name;
  console.log(this);
}

const devsage = new user3 ("DevSage"); // this references the new object recreated with the new keyword