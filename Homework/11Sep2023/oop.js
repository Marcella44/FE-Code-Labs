// Object oriented programming is one style of programming
// A way to manage and think about state
// Models interactions within and between states

// Inheritance
// Abstraction - 
// Encapsulation
// Polymorphism

// Javascript is not a traditional OOP language
// Classes are built on top of prototypes
// We can simulate most/all of the core OOP concepts

/* const player = {
  name: "?",
  hp: 100,
  mp: 0,
  items: []
}

const hanSolo = player;
hanSolo.name = "Han Solo";
hanSolo.hp = 80;
hanSolo.mp = 20;
hanSolo.items = ["Blaster"];
const darthVader = player;

console.log(hanSolo);
console.log(darthVader); */




/* const createPlayer = (name, hp, mp, items) => {
  return {
    name,
    hp,
    mp,
    items
  }
}

const hanSolo = createPlayer("Han Solo", 100, 10, ["Blaster"]);
console.log(hanSolo);
hanSolo.hp = 150;

const darthVader = createPlayer("Darth Vader", 200, 50, ["Saber"]);
console.log(darthVader); */



class Player {
  constructor (name, hp, mp, items) {  // Class Constructor
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }
  speak(phrase) {
    console.log(`${this.name} says: "${phrase}"`);  // Class Method
  }
}

const hanSolo = new Player("Han Solo", 100, 101, ["Blaster"]);
hanSolo.speak("Never tell me the odds!");
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));


const nader = new Player("Nader", 10, 5, ["Computer"]);
nader.speak("Monkeys are the best animal!");
console.log(nader);
console.log(Object.getOwnPropertyNames(nader));
console.log(Object.getOwnPropertyNames(nader.__proto__));


function AnotherPlayer(name, hp, mp, items) {
  this.name = name;
  this.hp = hp;
  this.mp = mp;
  this.items = items;
}

AnotherPlayer.prototype.speak = function (phrase) {
  console.log(`${this.name} says: ${phrase}`);
}

const darthVader = new AnotherPlayer("Darth Vader", 200, 50, ["Saber"]);
console.log(darthVader);
darthVader.speak("kfjdkljafkdlajfk");
console.log(Object.getOwnPropertyNames(darthVader.__proto__));





