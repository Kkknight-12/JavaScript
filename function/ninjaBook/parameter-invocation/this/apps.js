/* 
'this' is an implicite parameter passed to function when a function is invoked. It refers to an object that's associated with the function
invocation. Often termed as function context. 

what this parameter points to isn't defined only by how and where the function is defined, but it also heavily influnced by how function is invoked.
*/

/* 
the manner in which a function is invoked has a huge impact on how the code within it operates, primarily in how the 'this' parameter, the function context, is established
*/

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

// /////////////////
// Simple function /
// /////////////////
function ninja(){}; // function declaration
ninja();

// expression to which the () operator is applied 
// doesn’t reference the function as a property of an object.
var samurai = function(){}; // function expresion
samurai('a');

( function () {} ) () // Immediately invoked expression invoked as a function


// //////////////////////////////////////////
// behaviour is this in simple function    //
// when using strict mode vs not using it  //
// //////////////////////////////////////////
function ninja(){
    return this;
}
console.log(ninja()) // return window object

function samurai(){
    "use strict"
    return this
}
console.log(samurai()) // return undefined

// ////////////////////////////////
// Invoking a function as method //
// ////////////////////////////////

// function is assigned to a property of an object
let ninjaObj = {}
ninjaObj.skill = function(){ console.log('you got me')}

// invocation occurs by referencing the function using that property
ninjaObj.skill();

/* 
special thing about it is object to which a method belongs
is available within body of the method as 'this'.
which means you can refer to object with 'this' inside method

When we invoke a function as a method of an object, that
object becomes function context as is available within
function via 'this' parameter.
*/

function getMyThis(){
    return this
}
function getName(){
    return this.name
}

const thisObj = {
    // not invoking getMyThis
    // checkingThis will recieve reference to getMyThis function
    // doing so we created a method named checkingThis on object thisObj
    // getMyThis didn't become a method of object thisObj
    checkingThis : getMyThis,

    getNameValue: getName,
    
    name : 'knight',

}
// return this which is whole object so we are getting whole object as return value
console.log(thisObj.checkingThis())
// this refer to object
console.log(thisObj.checkingThis() ===  thisObj )
console.log(thisObj.getNameValue())

/* 
Look closely the getMyThis and getName are normal function.
And this in normal function refer to windows.
But We are invoking these function with the help of object thisObj
so left side of dot is thisObj which means this will refer to 
thisObj which is invoking it.
*/

const thisObjTwo = {
    checkingThisAgain : getMyThis,
}
 console.log(thisObjTwo.checkingThisAgain() === thisObjTwo)

/* 
here we go again using the same getMyThis function and this time it is returning
this equal to thisObjTwo.

So, we can confirm that context returned by 'this' changes depending on how
getMyThis is invoked.

We dont need make different copy of getMyThis to perform exact same processing on
different object.
*/

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
function whatMyContext(){
    return this;
}
// invoking
console.log( whatMyContext() )
const a = new whatMyContext();
console.log(a) // whatMyContext {}

console.log( typeof a) // object

/* 
re-calling Function() constructors from chapter.
they enable us to new function from string. 3*/
const sum = new Function( 'a', 'b','return a + b');
console.log(sum(1,2));
/* 
DONT MIX FUNCTION() CONSTRUCTOR WITH CONSTRUCTOR FUNCTIONS.
Here we are studing constructor function that carea and initialise
object instance
*/

function Knight(){
    this.skill = function(){
        return this;
    }
}

let knight1 = new Knight();
let knight2 = new Knight();

console.log(knight1.skill() === knight1)
console.log(knight2.skill() === knight2)
/* 
new keyword trigger a new empty object, object is passed
to the constructor as this parameter thus becomes constructor's
function context. Newly constructed object is returned as new opertor's value.
if we compare it to the previous function we create to check this.
We excaped the hassle to write the same code again as
we are using new Knight() to refer to the function. We can create
as many new copy as we want and each time the property of new Knight
will be borrowed by new function.
*/

// adding a return value ot the function
function Knight1(){
    this.skill = function(){
        return this;
    }
    return 1;
}
console.log(Knight1())
let samurai1 = new Knight1();
console.log(samurai1) // Knight1 {skill: ƒ}
console.log( typeof samurai1  ) // object
console.log( typeof samurai1.skill === 'function' ) // function

/* 
if we call Knight1 function it returns 1 and if we call it as a constructor
with new key word a new knight1 object is constructed and returned */

let puppy = {
    labrador: false,
}

function Dog(){
    this.labrador = true;
    return puppy;
}

let dog = new Dog()

console.log(  dog === puppy  ) // true
console.log(  dog.labrador === puppy ) // false

/* 
when we try to access the value of labrador constructor dog run
when says labrador is true then function return puppy.
puppy change the value of labrador from true to false
 */