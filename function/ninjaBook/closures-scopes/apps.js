/* 
Closures allow function to access and manipulate variables that are external to that
function. It Allow a function to access all the variables, as well as other functions

Scope is part of the program in which a certain name is bound to a certain variable
*/

// global variables
var outerValue = 'Knight';
var later; // innerFunction()

function outerFunction(){
  var innerValue = 'ninja'; // local variable

  function innerFunction(){
    if( outerValue === 'Knight' ){ // global variable is accessible
      console.log('i can see Knight')
    }
    if( innerValue === 'ninja' ){ // local variable is accessible
      console.log('i can see ninja')
    }
  }
  later = innerFunction // creating refernce to global variable
  // innerFunction();
}
outerFunction(); // -> local innerFunction, innervalue, this- window
later(); // local -> this - window | Closure(outerFunction)-> innervalue

/*
we are executing 'innerFunction' after 'outerFunction' has been executed via
trick-> copying a referencing to the function to global variable 'later'. 
When innerFunction executes, scope inside outerfunction is long gone. But because we have 'closure' the 'innervalue' variable will be available when we execute inner function.

When we declare innerFunction inside the outer function, not only is the function
declaration defined, but the closure is created that encompasses the function
definition as we as all variables in scope at the point of function definition.
*/

function remember(number) {
    return function() {
        return number;
    }
}

const returnedFunction = remember(5);

console.log( returnedFunction() );

/* 
When the Javascript engine enters remember(), it creates a new execution scope that points back to the prior execution scope. This new scope includes a reference to the number parameter (an immutable Number with the value 5). When the engine reaches the inner function (a function expression), it attaches a link to the current execution scope.

This 'process of a function retaining access to its "scope" is called a "closure" '. In this example, the inner function "closes over" number. A closure can capture any number of parameters and variables that it needs. 
*/

const myName = 'Knight';

function introduceMyself() {
	const you = 'Learner';
	
	function inner(){
    /* 
    local - introduce(), str
    Closure - you
    */
    const str = 'nothing'; 
    
    function introduce() {
      /* Closure 1 (inner)
      variable - str: 'nothing'
      Closure 2 (introduceMyself)
      variable - you: 'student'
      */
      console.log(`Hello, ${you}, I'm ${myName}!`);
      console.log(str)
    }
  
    return introduce()
  }
return inner();
}
introduceMyself();
// Hello, Learner, I'm Knight!

/* 
myName is a variable defined outside a function, hence it's a global variable in the global scope. In other words, myName is available for all functions to use.
But let's look closely at the other variable: you and str. you and str is referenced by introduce(), even though it wasn't declared within introduce()! This is possible because a nested function's scope includes variables declared in the scope where the function is nested (i.e., variables from its parent function's scope, where the function is defined).
As it turns out, the introduce() function and its lexical environment form a closure. This way, introduce() has access to not only the global variable myName, but also the variable you and str, which was declared in the scope of its parent function, introduceMyself() and inner().
*/

function outerFunction2() {
  let num1 = 5;

  return function(num2) {
    console.log(num1 + num2);
  };
}

let result = outerFunction2();

result(10);

/* 
After outerFunction2() is returned, it may seem that all of its local variables would be allocated back to available memory. As it turns out, however, the nested innerFunction() still has access to the num1 variable!

Let's take a closer look: outerFunction2() returns a reference to the inner, nested function. The return value of this invocation is saved in result. When this function is called, it maintains access to its scope; that is, all the variables it was able to access back when it was originally defined. This includes the num1 variable in its parent scope. The nested function closes over these variables, and those variables persist as long as the reference to the function itself exists.

When result(10); is executed, then, the function is still able to access num1's value of 5. As a result, 15 is logged to the console.
*/

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
	diet: 'carnivore'
};


function PolarBear() { 
	// ...
}

// wrong way of adding prototype
PolarBear.prototype = bear;

console.dir(PolarBear.prototype)
/* 
Object
	claws: true
	diet: "carnivore"
	__proto__: Object
*/

const snowball = new PolarBear();
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


console.log('---------')

// ///////////////
// Parent Object /
// ///////////////
function Animal(){
  this.specie = 'Animal'
}

// ////////////////////
// prototype property /
// ////////////////////
Animal.prototype.walk = function(){
  console.log(`${this.name} walks`)
}

// //////////////
// Child Object /
// //////////////
function Cat(name) {
		this.lives = 9;
		this.name = name;
		
		this.sayName = function () {
			console.log(`Meow! My name is ${this.name}`);
		};
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
to what argument is passed into it 
*/
// Cat.prototype = Object.create( Animal.prototype );

Cat.prototype.meow = function(){
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
Object.defineProperty( Cat.prototype, 'constructor', {
  enumerable: false, // setting the iterable property to false
  value: Cat,
  writable: true,
});

console.log(Cat.prototype) // Animal {specie: "Animal", meow: ƒ, constructor: ƒ}
// Animal {meow: ƒ, constructor: ƒ}, if you create Cat with Object.create

// as we have set the value of object constructor to non itterable 
// it will not be shown in for loop
// using short cut method will make constructor iterable
for( let prop in Cat.prototype ){
  console.log(prop)
  // object constructor should not be itterable
  /* 
  meow
  walk
  */
}

// /////////////////
// object instance /
// /////////////////
const bill = new Cat('Bailey');
bill.nickName = function(){
  console.log('kill bill panday')
}

console.log(bill.constructor === Cat); // true
// console.log(bill.constructor) 

// ////////////
// instanceof /
// ////////////
/* returns a boolean indicating whether 
the Parent constructor exists in the 
Child object's prototype chain 
*/
console.log( bill instanceof Animal ) // true
console.log( bill instanceof Cat ) // true

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
// /////////////////
/* hasOwnProperty() allows you to find the origin 
of a particular property.  */
console.log(bill.hasOwnProperty('nickName')) // true

bill.walk(); // Animal prototype method
console.log(bill.specie) // Animal property
bill.sayName() // Cat prototype method
bill.meow() // Cat prototype method
bill.nickName() // bill method
console.log(bill.lives)

console.log('---------')



function instantiateDeveloper() {
  let name = 'Veronika'

  return {
    getName: function () {
      return this.name;
    }
  };
}

let developer = instantiateDeveloper();
console.log(developer.getName())
developer.name = 'No Name'
console.log(developer.name) // No Name
console.log(developer.getName()) // No Name