// the builder pattern

class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

// class User {
//   constructor(name, age, phone, address) {
//     this.name = name
//     this.age = age
//     this.phone = phone
//     this.address = address
//   }
//}

// const user = new User('Bob', undefined, undefined, new Address('1', 'Main')) // can be cofusing and incredibly long because you have to add in all the undfines in order
// console.log(user)

/* class UserBuilder {
  constructor(name) {
    this.user = new User(name)
  }


  setAge(age) {
  this.user.age = age
  return this
  }
  setPhone(phone) {
  this.user.phone = phone
  return this
  }
  setAddress(address) {
  this.user.address = address
  return this
  }
  build()  {
  return this.user
  }
}

let user = new UserBuilder('Bob').setAge(10).build() //allows you to dynamically create objects without having to specify undefined parameters with a clean interface to see whats going on 
console.log(user) */



class User {
  constructor(name, {age, phone, address} = {}) {  
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}

let user = new User('Fred', {age: 10, phone: '111111', address: new Address('1', 'Main')})  // simple builder takes up less code and it's more clean. The only time a builder is better is when its incredibly complex
console.log(user)