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
  // local variable
  var innerValue = "ninja"

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
  // creating refernce to global variable
  // which will allow us to call the function later
  later = innerFunction
  // innerFunction();
}

outerFunction() // -> local innerFunction, innervalue: 'ninja', this- window
later() // local -> this - window | Closure(outerFunction)-> innervalue: 'ninja'

/*
- later is a variable which we are using to form a refrence to Func innerFunction()
- outerFunction() runs an registeres variable innerValue
- and create link later = innerFunction
- later() is then used to call innerFunction()
- when innerFunction() runs it needs  var innerValue which is
- inside outerFunction()
- its is kept alive with closure which is formed when outerFunction() ran
*/

/*
we are executing 'innerFunction' after 'outerFunction' has been executed via
trick-> copying a referencing to the function to global variable 'later'. 
When innerFunction executes, scope inside outerfunction is long gone. But because we have 'closure' the 'innervalue' variable will be available when we execute inner function.

When we declare innerFunction inside the outer function, not only is the function
declaration defined, but the closure is created that encompasses the function
definition as we as all variables in scope at the point of function definition.
*/

console.log("-----------------")

// -------------------------------------------------------------------------------------

// ///////////////////
// private variable //
// ///////////////////

console.log("PRIVATE VARIABLES")
/* 
- private variables — properties of an object that are hidden from outside parties.
- JavaScript doesn’t have native support for private variables. 
- But by using a closure, we can achieve an acceptable approximation, 
  - as demonstrated by the following code
*/

function Football() {
  // private variable - which can't be accessed directly from outside, which prevents us from being able to make uncontrolled changes to the value of the variable
  let goals = 0

  // getter method
  // accessor method -> use to obtain value of private variable
  this.getGoals = function () {
    return goals
  }

  // setter method
  this.goal = function () {
    goals++
  }
}

// creating instance of Football object
let TeamA = new Football()
// incrementing
TeamA.goal()

console.log("goals", TeamA.goals) //undefined
// private data is inaccessible to us

console.log("getGoals", TeamA.getGoals()) // 1
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

console.log("----PRIVATE VARIABLES INTRO ENDS-----")

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
    if (tick < 10) {
      elem.style.left = elem.style.top = tick + "px"
      console.log("tick", tick) // increment by 1 every time till reach 100
      tick++
    } else {
      clearInterval(timer)

      if (tick === 10) {
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

console.log("-------using closure with callbacks ENDS-------")
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
- can be accessed through "this" keyword.

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

// **var**
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

  // i is defined in block scope
  // but i will find nearest function or global scope
  // scope -> checkVarBlockScope()
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

  // const let are blocked scope
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

console.log("----------------------")
// -------------------------------------------------------------------------------------

// ///////////////////////////////////////////////////
// Registering Identifiers within lexical environment /
// ///////////////////////////////////////////////////

// -------------------------------------------------------------------------------------

// ///////////////////////////////////////////
// Mimicking private varaibles with closures /
// ///////////////////////////////////////////

// constructor function
function NinjaPR() {
  // variable declared inside function are
  // not accessible form outside the function
  // they act as private variable
  var feints = 0
  // methods are defined with this
  // as they will get attached to the
  // NinjaPR directly
  this.getFeints = function () {
    return feints
  }

  this.feint = function () {
    feints++
  }

  this.accesibleWithThis = "I am Accessible"
}

var ninjaPR1 = new NinjaPR()

/*
console.log(ninjaPR1)

NinjaPR {
  getFeints: [Function (anonymous)],
  feint: [Function (anonymous)],
  accesibleWithThis: 'I am Accessible'
}  

above mentioned properties are accessible with dot notation
*/

// not accessible directly
if (ninjaPR1.feints === undefined) {
  console.log("And the private data is inaccessible to us.")
}

ninjaPR1.feint()

if (ninjaPR1.getFeints() === 1) {
  console.log("We're able to access the internal feint count.")
}

var ninjaPR2 = new NinjaPR()

if (ninjaPR2.getFeints() === 0) {
  console.log("The second ninja object gets its own feints variable.")
}

/*
- everytime we invoke a construtor function, 
- we create a new lexical environment
- which keeps track of variable local to 
- contructor

- whenever function is created
- it keeps reference to the lexial environment
- in which it was created
- through internal [[Environment]] property
https://www.notion.so/Closure-and-Scope-b63161840b5d40388552499c2551ef4f

- Every object created with Ninja constructor gets its 
- own methods that close around the variables
- defined when the constructor was invoked
- Private variables are only accessible
- through object methods created within
- constructor.
*/

console.log("----------------------")

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

  // will increment "private" varaible by 1
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

console.log("------------------")
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
