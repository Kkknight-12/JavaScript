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