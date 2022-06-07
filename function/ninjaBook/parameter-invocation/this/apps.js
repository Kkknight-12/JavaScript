/* 
'this' is an implicite parameter passed to function when a function is invoked. It refers to an object that's associated with the function
invocation. Often termed as function context. 

what this parameter points to isn't defined only by how and where the function is defined, but it also heavily influnced by how function is invoked.
*/

/* 
the manner in which a function is invoked has a huge impact on how the code within it operates, primarily in how the 'this' parameter, the function context, is established
*/
// ------------------------------------------------------------------------------

// /////////////////////////////////
// invoke a function in four ways, /
// /////////////////////////////////
/* 
- As as function - simple()
- As a method - ninja.simple() which ties the invocation to an object, 
enabling object-oriented programming.
- As a contructor - new Ninja(), in Which a new object is brought into being
- via function's call and apply methods - simple.call(ninja) or simple.apply(ninja)
*/

// ------------------------------------------------------------------------------

// /////////////////
// Simple function /
// /////////////////
function ninja() {} // function declaration
ninja()

// expression to which the () operator is applied
// doesn’t reference the function as a property of an object.
var samurai = function () {} // function expresion
samurai("a")
;(function () {})() // Immediately invoked expression invoked as a function

// //////////////////////////////////////////
// behaviour of this in simple function    //
// when using strict mode vs not using it  //
// //////////////////////////////////////////
function ninja() {
  return this
}
console.log(ninja()) // return window object

function samurai() {
  "use strict"
  return this
}
console.log(samurai()) // return undefined

// ------------------------------------------------------------------------------

// ////////////////////////////////
// Invoking a function as method //
// ////////////////////////////////

// function is assigned to a property of an object
let ninjaObj = {}
ninjaObj.skill = function () {
  console.log("you got me")
}

// invocation occurs by referencing the function using that property
ninjaObj.skill()

/* 
special thing about it is object to which a method belongs
is available within body of the method as 'this'.
which means you can refer to object with 'this' inside method

When we invoke a function as a method of an object, that
object becomes function context as is available within
function via 'this' parameter.
*/

function getMyThis() {
  return this
}

function getName() {
  return this.name
}

const thisObj = {
  // not invoking getMyThis
  // checkingThis will recieve reference to getMyThis function
  // doing so we created a method named checkingThis on object thisObj
  // getMyThis didn't become a method of object thisObj
  checkingThis: getMyThis,

  getNameValue: getName,

  name: "knight",
}
// return this which is whole object so we are getting whole object as return value
console.log(thisObj.checkingThis())
// this refer to object
/* {
  checkingThis: [Function: getMyThis],
  getNameValue: [Function: getName],
  name: 'knight'
} */
console.log(thisObj.checkingThis() === thisObj) // true
console.log(thisObj.getNameValue()) // knight

/* 
Look closely the getMyThis and getName are normal function.
And this in normal function refer to windows.
But We are invoking these function with the help of object thisObj
so left side of dot is thisObj which means this will refer to 
thisObj which is invoking it.
*/

const thisObjTwo = {
  checkingThisAgain: getMyThis,
}
console.log(thisObjTwo.checkingThisAgain() === thisObjTwo) // true

/* 
here we go again using the same getMyThis function and this time it is returning
this equal to thisObjTwo.

So, we can confirm that context returned by 'this' changes depending on how
getMyThis is invoked.

We dont need make different copy of getMyThis to perform exact same processing on
different object.
*/

// ------------------------------------------------------------------------------

// ///////////////////////////////////////
// invoking a function as a constructor //
// ///////////////////////////////////////

/* 
'Constructor function' can be declared just like any other function.
They can use 'declaration' and 'expression' for constructing 'new object'.

'Constructor function' are function that we use to create and initialise
object insatances.
*/

// we use keyword 'new' to invoke constructor function
function whatMyContext() {
  return this
}
// invoking
console.log("whatMyContext->", whatMyContext()) // global window object
const a = new whatMyContext()
console.log(a) // whatMyContext {}

console.log(typeof a) // object

/* 
re-calling Function() constructors from chapter.
they enable us to new function from string. 3*/
const sum = new Function("a", "b", "return a + b")
console.log(sum(1, 2))
/* 
DONT MIX FUNCTION() CONSTRUCTOR WITH CONSTRUCTOR FUNCTIONS.
Here we are studing constructor function that create and initialise
object instance
*/

function Knight() {
  this.skill = function () {
    return this
  }
}

let knight1 = new Knight()
let knight2 = new Knight()

console.log(knight1.skill() === knight1) // this will be knight1
console.log(knight2.skill() === knight2) // this will be knight2
/* 
new keyword trigger a new empty object, object is passed
to the constructor as this parameter thus becomes constructor's
function context. Newly constructed object is returned as new opertor's value.
if we compare it to the previous function we create to check this.
We escaped the hassle to write the same code again as
we are using new Knight() to refer to the function. We can create
as many new copy as we want and each time the property of new Knight
will be borrowed by new function.
*/

// adding a return value of the function
function Knight1() {
  this.skill = function () {
    return this
  }
  return 1
}
console.log(Knight1()) // 1
let samurai1 = new Knight1()
console.log(samurai1) // Knight1 {skill: ƒ}
console.log(typeof samurai1) // object
console.log(typeof samurai1.skill === "function") // true

/* 
- if we call Knight1 function it returns 1 and 
- if we call it as a constructor
- with new key word a new samurai1 object is constructed and returned 

- Test varify that the return value of 1 is ignored and 
- that a new, initialzed object has been returend from new*/

let puppy = {
  labradors: false,
  re: this,
}

function Dog() {
  this.labrador = true
  this.name = "knight"
  return puppy
}

let dog = new Dog()

console.log("DOG", dog)
// {labrador: false, re: Window}
console.log(dog === puppy) // true
console.log(dog.labrador === puppy) // false
console.log(dog.re)

/* 
when we return an object from a contructor function, that object ( puppy ) 
becomes the the value of the whole new expression.

all the values/methods before return in the Dog function will be ignored 
in the constructor function. The constructor function will take only the 
object puppy properties which is returned.
*/

/* 
summary
- if a construtor returns an object, that object is returned as the value of whole
- new expression, the newly constructed object passed as this to the constructor is 
- discarded. 
 
- if, a nonobject is returned from the constructor, the returned value is ignored
- and a newly created object is returned
*/

// ------------------------------------------------------------------------------

// /////////////////////////
// apply and call method  //
// ////////////////////////

function Button() {
  this.clicked = false
  this.click = function () {
    this.clicked = true // this refer to window object when invoked with click
    console.log(this)
    console.log(button.clicked) // false
  }
}
let button = new Button()
let ele = document.getElementById("test")
ele.addEventListener("click", button.click) // <button id="test">Click me!</button>
// with bind you can bind the object button and send it with the event listner
// so when ever click invoke the function, the function will
// refer to object button
// ele.addEventListener( 'click', button.click.bind(button) )

function juggle() {
  let result = 0
  for (let n = 0; n < arguments.length; n++) {
    result += arguments[n]
  }
  this.result = result
  // return result;
}
// console.log(juggle(1,2,3))
let ninja1 = {}
let ninja2 = {
  name: "ninja2", // you can also use an object the already have property
  rank: 2,
}

/* 
'apply' have two paramenter
first is the object ot be used as th function context
second is an array of values to be used as the invocation argument

'call' method is similar to apply expect the second argument 
is passed directly in the argument list rather than as an array
*/
juggle.apply(ninja1, [1, 2, 3, 4, 5])
juggle.call(ninja2, 6, 7, 8, 9)

console.log(ninja1) // {result: 15}
console.log(ninja2) // {name: "ninja2", rank: 2, result: 30}

// ///////////////////////////////
// forcing context in call back //
// ///////////////////////////////

let weapons = [{ type: "kusarigama" }, { type: "katana" }, { type: "odachi" }]
console.log(weapons[0]) // { type: "kusarigama" } // typeof -> object
console.log(typeof weapons) // typeof -> object

function foreach(list, callback) {
  for (let n = 0; n < list.length; n++) {
    callback.call(list[n], n) // { type: "kusarigama" }, passing in 'n'
  }
}

//                callback
foreach(weapons, function (index) {
  // index will be our 'n'
  // this.result = index;
  console.log(this) // current entry will become current context
  console.log(this === weapons[index])
})

/* 
when to use call and when to use apply...?
Both do same thing. 
We use 'call' when we have bunch of unrelated values, call let us use them directly 
in its argument list.
We use 'apply' when we have values in array or when its convenient to collect them. 
*/

// ///////////////////////////////
// Back to fixing our click me  //
// //////////////////////////////

/* 
we can use call and apply to get result. But we will using 'bind' and
'arrow function' which is 'more elegent' way to achieve same result
*/

function Button2() {
  ;(this.clicked = false),
    (this.click = () => {
      ;(this.clicked = true), // this will refer to nearest scope
        console.log(this) // Button2 {clicked: true, click: ƒ}
      console.log(button2.clicked) // true
    })
}
let button2 = new Button2()
let elem2 = document.getElementById("test2")
console.log(button2.click === Button2.click)
elem2.addEventListener("click", button2.click) // Button2 {clicked: true, click: ƒ}

console.log(button2) // Button2 {clicked: false, click: ƒ}

// ////////////////////////////
//  strange behavior of this //
// ////////////////////////////
let bt = {
  clicked: false,
  click: () => {
    this.clicked = true
    console.log(this)
  },
}
let elem3 = document.getElementById("test3")
elem3.addEventListener("click", bt.click)
/* 
Arrow functions pick up the value of the this parameter at the moment of their creation. Because the click arrow function is created as a property value on an object literal, and the object literal is created in global code, the this value of the arrow function will be the this value of the global code.
*/

// b is created in global context
let b = {
  click: () => {
    return this
  },
}
console.log(b.click()) // when we call arrow function it will refer to window

// ///////////////
// Bind method  //
// ///////////////
/* 
bind method is available to all functions, and is designed to create and return a new function that’s bound to the passed-in object (in this case, the button object). The value of the this parameter is always set to that object, regardless of the way the bound function was invoked
*/

let bindbt = {
  clicked: false,
  click: function () {
    ;(this.clicked = true), console.log(this) // bindbt{clicked: true, click: ƒ}
    console.log(bindbt.clicked) // true
  },
}

let elem4 = document.getElementById("test4")
elem4.addEventListener("click", bindbt.click.bind(bindbt)) //{clicked: true, click: ƒ}
/* Whenever the button is clicked, that bound function will be invoked with the button object as its context,
 */
console.log(bindbt) // {clicked: false, click: ƒ}
