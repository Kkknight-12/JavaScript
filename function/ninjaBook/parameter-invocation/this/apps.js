/* 
this is an implicite parameter passed to function when a function is invoked. It refers to an object that's associated with the function
invocation. Often termed as function context. 

what this parameter points to isn't defined only by how and where the function is defined, but it also heavily influnced by how function is invoked.
*/

/* 
the manner in which a function is invoked has a huge impact on how the code within it operates, primarily in how the this parameter, the function context, is established
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
