

const person = {
	name: 'John',
	age: 30,
	address: {
		city: 'New York',
		country: 'USA',
	},
};

const fruits = ['apple', 'banana', 'cherry', 'date'];

const {name: firstName, age: years} = person
console.log(firstName)
console.log(years)

const [, two, ,four] = fruits
console.log(two)
console.log(four)


const {address: {city}} = person
console.log(city)

// destructuring is a javascript expression that allows us to extract data from arrays, objects, and maps and set them into new, distinct variables. 