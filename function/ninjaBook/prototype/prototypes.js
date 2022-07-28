// const bear = {
// 	claws: true,
// 	diet: 'carnivore'
// };

// function PolarBear() {
// 	// ...
// }

// PolarBear.prototype = bear;

// console.dir(PolarBear.prototype)
// /*
// Object
// 	claws: true
// 	diet: "carnivore"
// 	__proto__: Object
// */

// const snowball = new PolarBear();
// console.log(snowball.__proto__)
// snowball.__proto__.claws = false;
// console.log(snowball.__proto__)
// console.dir(PolarBear.prototype)

const bear = {
  claws: true,
  diet: "carnivore",
}

function PolarBear() {
  // ...
}

// wrong way of adding prototype
PolarBear.prototype = bear

console.dir(PolarBear.prototype)
/* 
Object
	claws: true
	diet: "carnivore"
	__proto__: Object
*/

const snowball = new PolarBear()
console.log(snowball.__proto__)

// changing proto property of child also affect proto of parent
snowball.__proto__.claws = false
console.log(snowball.__proto__)

// changes can be seen in proto of parent
console.log(PolarBear.prototype)

const riceBowl = Object.create(bear)
console.log(Object.getPrototypeOf(riceBowl))
// riceBowl.__proto__.claws = true;

// console.log(riceBowl.__proto__)

// console.log(PolarBear.prototype)

console.log("---------")

// -------------------------------------------------------------------------------------

// ///////////////
// Parent Object /
// ///////////////
function Animal() {
  this.specie = "Animal"
}

// ////////////////////
// prototype property /
// ////////////////////
Animal.prototype.walk = function () {
  console.log(`${this.name} walks`)
}

// //////////////
// Child Object /
// //////////////
function Cat(name) {
  this.lives = 9
  this.name = name

  this.sayName = function () {
    console.log(`Meow! My name is ${this.name}`)
  }
}

// //////////////////////
// creating inheritance /
// //////////////////////

// wrong way to inherit
/* 
we previosly used this method to transfer inheritance
but its a wrong way 
Cat.prototype = Animal.prototype
*/

// two better way to create inheritance

// new operator
Cat.prototype = new Animal()

// Object.create()

// but with this method you will inherit just the
// prototype properties and method,
// we will not be access Animal own properties/method link specie
/* 
Object.create() takes in a single object as an argument,
and returns a new object with its __proto__ property set 
to what argument is passed into it.  
*/
// Cat.prototype = Object.create( Animal.prototype );

Cat.prototype.meow = function () {
  console.log(`My name is ${this.name} I do Meow`)
}

// //////////////////////////////////////
// Set construtor back to object itself /
// //////////////////////////////////////
/* 
always remeber to set the constructor function back to itself 
*/

// shortcut method
// but the constructor will be iterable, which is not good
// Cat.prototype.constructor = Cat;
// console.log(bill.constructor)

// proper way to create constructor
Object.defineProperty(Cat.prototype, "constructor", {
  enumerable: false, // setting the iterable property to false
  value: Cat,
  writable: true,
})

console.log(Cat.prototype) // Animal {specie: "Animal", meow: ƒ, constructor: ƒ}
// Animal {meow: ƒ, constructor: ƒ}, if you create Cat with Object.create

// as we have set the value of object constructor to non itterable
// it will not be shown in for loop
// using short cut method will make constructor iterable
for (let prop in Cat.prototype) {
  console.log(prop)
  // object constructor should not be itterable
  /* 
  meow
  walk
  */
}

// -------------------------------------------------------------------------------------

// /////////////////
// object instance /
// /////////////////
const bill = new Cat("Bailey")
bill.nickName = function () {
  console.log("kill bill panday")
}

console.log(bill.constructor === Cat) // true
// console.log(bill.constructor)

// ////////////
// instanceof /
// ////////////
/* returns a boolean indicating whether 
the Parent constructor exists in the 
Child object's prototype chain 
*/
console.log(bill instanceof Animal) // true
console.log(bill instanceof Cat) // true

// ////////////////
// getPrototypeOf /
// ////////////////
/* 
Object.getPrototypeOf() is great for 
retrieving the prototype of a given object. 
*/
console.log(Object.getPrototypeOf(bill))
// Animal {specie: "Animal", meow: ƒ, constructor: ƒ}
// Animal {meow: ƒ, constructor: ƒ}, if you create Cat with Object.create

// /////////////////
// isPrototypeOf() /
// /////////////////
/* checks whether or not an object exists in 
another object's prototype chain.
*/
const checkProto = Object.getPrototypeOf(bill)
console.log(checkProto.isPrototypeOf(bill))

// /////////////
// constructor /
// /////////////
/* 
Accessing an object's constructor property 
returns a reference to the constructor function (Cat)
that created that object (bill) in the first place 
*/
console.log(bill.constructor)

// //////////////////
// hasOwnProperty() /
// //////////////////
/* hasOwnProperty() allows you to find the origin 
of a particular property.  */
console.log(bill.hasOwnProperty("nickName")) // true

bill.walk() // Animal prototype method
console.log(bill.specie) // Animal property
bill.sayName() // Cat prototype method
bill.meow() // Cat prototype method
bill.nickName() // bill method
console.log(bill.lives)

console.log("---------")
