/* 
Closures allow function to access and manipulate variables that are external to that
function. It Allow a function to access all the variables, as well as other functions

Scope is part of the program in which a certain name is bound to a certain variable.

// using closure with callbacks
- Closue isn't a snapshot of the state of scope at the time of creation, but
- an active encapsulation of that start that we can
- modify as long as the closure exists.
*/

// global variables
var outerValue = "Knight"
var later // innerFunction()

function outerFunction() {
  var innerValue = "ninja" // local variable

  function innerFunction() {
    if (outerValue === "Knight") {
      // global variable is accessible
      console.log("i can see Knight")
    }
    if (innerValue === "ninja") {
      // local variable is accessible
      console.log("i can see ninja")
    }
  }
  later = innerFunction // creating refernce to global variable
  // innerFunction();
}
outerFunction() // -> local innerFunction, innervalue, this- window
later() // local -> this - window | Closure(outerFunction)-> innervalue

// -------------------------------------------------------------------------------------

// ///////////////////
// private variable //
// ///////////////////
console.log("PRIVATE VARIABLES")
/* 
Many programming languages use private variables—properties of an object that are hidden from outside parties. This is a useful feature, because we don’t want to overburden the users of our objects with unnecessary implementation details when accessing those objects from other parts of the code. Unfortunately, JavaScript doesn’t have native support for private variables. But by using a closure, we can achieve an acceptable approximation, as demonstrated by the following code
*/

function Football() {
  // private variable - which can't be accessed directly from outside, which prevents us from being able to make uncontrolled changes to the value of the variable
  let goals = 0

  // accessor method -> use to obtain value of private variable
  this.getGoals = function () {
    return goals
  }
  this.goal = function () {
    goals++
  }
}
//
let TeamA = new Football()
TeamA.goal()

console.log(TeamA.goals) //undefined
// private data is inaccessible to us

console.log(TeamA.getGoals()) // 1
// we are able to access internal goals count

// creating new Team
// new will have there number of goals
let TeamB = new Football()
console.log(TeamB.getGoals()) // 0
//  second ninja will get its own goals varaible

/* 
using closure allows the state of Football to be maintained within a method, 
without letting it be directly accessed by a user of the method - because variable is available to inner methods via their closures, but not to code that lies outside the constructor.
*/

/*
we are executing 'innerFunction' after 'outerFunction' has been executed via
trick-> copying a referencing to the function to global variable 'later'. 
When innerFunction executes, scope inside outerfunction is long gone. But because we have 'closure' the 'innervalue' variable will be available when we execute inner function.

When we declare innerFunction inside the outer function, not only is the function
declaration defined, but the closure is created that encompasses the function
definition as we as all variables in scope at the point of function definition.
*/

// -------------------------------------------------------------------------------------

// //////////////////////////////
// using closure with callbacks /
// //////////////////////////////

function animateIt(elementID) {
  var elem = document.getElementById(elementID)
  var tick = 0
  /* 
  - every 300 milisecond this timer function will be called
  - which will increase the tick count
  - the count will increase till 100 then the 
  - clear function will run 
  
  https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript
  
  - setInterval is an async function
  - so it will run after the main thread is complete, 
  - will run at last, after all the functions have been executed 
  
  - closure can be seen here as the timer function needs to remember
  - and access variable tick, elem, timer
  */
  //                       callback
  var timer = setInterval(function () {
    if (tick < 100) {
      elem.style.left = elem.style.top = tick + "px"
      console.log("tick", tick) // increment by 1 every time till reach 100
      tick++
    } else {
      clearInterval(timer)

      if (tick === 100) {
        console.log("tick accessed via a colsure.")
      }
      if (elem) {
        console.log("Element also accessed via a closure")
      }
      if (timer) {
        console.log("Timer reference also obtained via a closure")
      }
    }
  }, 300)
}

// animateIt("box1")
// tick accessed via a colsure.
// Element also accessed via a closure
// Timer reference also obtained via a closure
/*  
- If we keep the variable in the global scope, we need new set of varaibles 
- for each function we needed to run.
- By defining the variable inside function 
- relying on closures to make them available to the
- timer callback invocations, each animation gets its own
- private 'bubble' of variables
*/

// -------------------------------------------------------------------------------------

// ///////////////////
// Execution Context /
// ///////////////////

/* 
- Two main types of Javascript code 
- global code, function code

- When a code is executed in Js engine, each statement is executed
- in a certain EXECUTION CONTEXT.

Two types of EXECUTION CONTEXT
- global execution context
- function execution context

- only one GLOBAL EXECUTION CONTEXT which is created when the JS program starts
- executing
- whereas a new FUNCTION EXECUTION CONTEXT is created on each function invocation

- FUNCTION EXECUTION CONTEXT is an object on which our function is invoked, which 
- can be accessed through this keyword.

WARNING: Dont confuse FUNCTION EXECUTION CONTEXT with EXECUTION CONTEXT.

- EXECUTION CONTEXT is an internal Js concept which it uses to track the execution
- of our functions.

- Js is single-threaded. One piece of code is executed at a time. 
- Everytime a function is invoked. current execution context is stopped
- new function context is created. After function perform its task
- function execution context is discarded. And Caller ( the function which called it )
- execution context is restored.

- EXECUTION CONTEXT STACK is used to keep track of all these execution contexts- both
- one that's executing and one that is waiting. 

- STACK is a Data Structure in which you can put new items only to top and can
- take existing items only from top. 
*/

function sneak(ninja) {
  crouch(ninja + " time running") // calling another function
}

function crouch(message) {
  console.log(message) // logging message to console
}

// funciton call from global code
sneak("first")
sneak("second")

// -------------------------------------------------------------------------------------

// /////////////////////
// Lexical Environment /
// /////////////////////

/* 
- LEXICAL ENVIRONMENT is used to keep track of mapping from identifiers to 
- specific varaibles.
------------------------------------------------------------------
|- All JavaScript variables must be identified with unique names.  |
|- These unique names are called identifiers.                      |
------------------------------------------------------------------
*/

/* 
- Execution Context is vital in IDENTIFIER RESOLUTION
- ( process of figuring out which variable a certain identifier refers to eg:
- const | var | let naam = "champak lal" 
- function Bhide() { } ).
- Execution context do this via LEXICAL ENVIRONMENT.
- */

// identifier      value
// variable
var ninjaLE = "Hattori Hanzo"
console.log(ninjaLE)

// -------------------------------------------------------------------------------------

// //////////////
// Code Nesting /
// //////////////

/*  
- Lexical Environemnt is heavily based on code nesting.
- Enable One code structure to be contained within another

- nesting () is contained within gloabal code
- report is nested within nesting function
- loop is nested within report function*/

// global variable and function
var ninjaN = "Misashi"

function nesting() {
  /* 
  scope - https://www.w3schools.com/js/js_scope.asp */
  // function scope
  var action = "Sneak"

  function report() {
    var reportNum = 3

    // block scope
    for (var i = 0; i < reportNum; i++) {
      console.log(`${ninjaN} ${action} level ${i}`)
    }
  }
  report()
}

nesting()
/* 
- each of these code structure gets an associated lexical environment
- everytime code is evaluated.
- inner code structure has access to varaibles defined in outter code
 
*/

// -------------------------------------------------------------------------------------

// /////////////////////////////////////
// Code Nesting and Lexical Environment/
// /////////////////////////////////////
/*  
- In addition to keeping track of local variables, function declarations,
- function parameters, each lexical env has to keep track of its outer
- lexical enviroment.

- If the identifier is not found in the current enviroment, outer
- environment is searched.
*/

// global variable
var ninjaNLE = "Yamamoto"

function sneakNLE() {
  // have access to local action and gobal ninjaNLE
  var action = "Skulking"

  function report() {
    // have access to local intro and outer action and gobal ninjaNLE
    var intro = "Aye Aye..!"

    if (intro === "Aye Aye..!") {
      console.log("local")
    }
    if (action === "Skulking") {
      console.log("Outer")
    }
    if (ninjaNLE === "Yamamoto") {
      console.log("Global")
    }
  }
  report()
}
sneakNLE()

/* 
- sneakNLE will keep a reference to global environment, 
- report function will keep a reference to skull environment
*/

// -------------------------------------------------------------------------------------

// /////////////////////
// Variable Mutability /
// /////////////////////

// **const**
// while initializing const, it should be given the value.

const firstConst = "Knight"

function ChangeConst() {
  if (firstConst === "Knight") {
    console.log("firstConst is a Knight")
  }

  try {
    firstConst = "Samurai"
  } catch (error) {
    console.error("An exception has occurred.")
  }

  if (firstConst === "Knight") {
    console.log("firstConst is still a Knight")
  }
}

ChangeConst()
/* can't assign a new value to const after it's initializtion */

//
const secondConst = {}
secondConst.skills = "Long Sword"
console.log(secondConst)
/* 
- an object | array initilized with const can be modified later
*/

// var
/* var scope is either defined in global or function lexical environment 

NOTE: blocks are ignored in case of var. With Es6 we have been give const, 
- let to work with bock. 
*/

// scope is global
var globalKnight = "Sir Dot"

function reportActivity() {
  console.log(globalKnight)
  // functionActivity -> scope is within the function.
  var functionActivity = "Strong Attacks"
}

reportActivity()

try {
  console.log(functionActivity)
} catch (error) {
  console.error(error) // functionActivity is not defined
}

// var dont work in block scope
function checkVarBlockScope() {
  var functionScope = "Fun"

  for (var i = 1; i < 3; i++) {
    var forMessage = globalKnight + " " + functionScope

    if (forMessage === "Sir Dot Fun") {
      console.log("JS is fun")
    }
  }

  // can assess the block scope value ( i and forMessage ) outside the loop
  if (i === 3 && forMessage === "Sir Dot Fun") {
    console.log("Loop variable is assesible outside the loop")
  }
}

checkVarBlockScope()

// **const and let**

const globalKnightCL = "Luffy"

function reportActivityCL() {
  const functionActivityCL = "Jumping"

  for (let i = 1; i < 3; i++) {
    let forMessage = globalKnightCL + " " + functionActivityCL

    if (forMessage === "Luffy Jumping") {
      console.log("luffy is jumping within for block") // luffy is jumping within for block
    }
  }

  // you can't access varaible declared with let or const inside
  // the block scope | loop outiside the scope
  if (typeof i === "undefined" && typeof forMessage === "undefined") {
    console.log("loop varaible are not accessible outiside the loop") // loop varaible are not accessible outiside the loop
  }
}

reportActivityCL()

if (
  typeof functionActivityCL === "undefined" &&
  typeof i === "undefined" &&
  typeof forMessage === "undefined"
) {
  console.table("we can't see function varaibles outside of a function")
}

// -------------------------------------------------------------------------------------

// ///////////////////////////////////////////////////
// Registering Identifiers within lexical environment /
// ///////////////////////////////////////////////////

// -------------------------------------------------------------------------------------

// ///////////////////////////////////////////
// Mimicking private varaibles with closures /
// ///////////////////////////////////////////

// -------------------------------------------------------------------------------------

// //////////////////////////
// Private Variables Caveat /
/////////////////////////////

function superNinja() {
  var feints = 0

  // will output the value of "private" variable
  this.getFients = function () {
    return feints
  }

  // will increase "private" varaible
  this.feints = function () {
    feints++
  }
}

var ninja1 = new superNinja()
// incrementing feints
ninja1.feints()

var imposter = {}
// copying the method from ninja1 object
imposter.getFients = ninja1.getFients

function checkPrivate() {
  if (imposter.getFients() === 1) {
    console.log("The imposter has access to the feints variables!")
  }
}
checkPrivate() // The imposter......varaibles!

// -------------------------------------------------------------------------------------

// //////////
// Udacity  /
// //////////

function remember(number) {
  return function () {
    return number
  }
}

const returnedFunction = remember(5)

console.log(returnedFunction())

/* 
When the Javascript engine enters remember(), it creates a new execution scope that points back to the prior execution scope. This new scope includes a reference to the number parameter (an immutable Number with the value 5). When the engine reaches the inner function (a function expression), it attaches a link to the current execution scope.

This 'process of a function retaining access to its "scope" is called a "closure" '. In this example, the inner function "closes over" number. A closure can capture any number of parameters and variables that it needs. 
*/

const myName = "Knight"

function introduceMyself() {
  const you = "Learner"

  function inner() {
    /* 
    local - introduce(), str
    Closure - you
    */
    const str = "nothing"

    function introduce() {
      /* Closure 1 (inner)
      variable - str: 'nothing'
      Closure 2 (introduceMyself)
      variable - you: 'student'
      */
      console.log(`Hello, ${you}, I'm ${myName}!`)
      console.log(str)
    }

    return introduce()
  }
  return inner()
}
introduceMyself()
// Hello, Learner, I'm Knight!

/* 
myName is a variable defined outside a function, hence it's a global variable in the global scope. In other words, myName is available for all functions to use.
But let's look closely at the other variable: you and str. you and str is referenced by introduce(), even though it wasn't declared within introduce()! This is possible because a nested function's scope includes variables declared in the scope where the function is nested (i.e., variables from its parent function's scope, where the function is defined).
As it turns out, the introduce() function and its lexical environment form a closure. This way, introduce() has access to not only the global variable myName, but also the variable you and str, which was declared in the scope of its parent function, introduceMyself() and inner().
*/

function outerFunction2() {
  let num1 = 5

  return function (num2) {
    console.log(num1 + num2)
  }
}

let result = outerFunction2()

result(10)

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
