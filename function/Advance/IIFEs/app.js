(function() {
    var age = 30;
    console.log(age); // 30
})()

// Error: "age is not defined"
// console.log(age); 

/* 
note : the snippet uses var, NOT let or const. Remember that
var does NOT use block scope but only differ between global 
and function scope.

As a consequence, it was hard to control where variables were
available - variables outside of function always were available
globally. Well, IIFEs solve that problem since the script 
(or parts of it) essentially are wrapped in a
function => Function scope is used.

Nowadays, this is not really required anymore. With let and 
const we got block scope and if you want to restrict where 
variables are available (outside of functions, if statements,
for loops etc - where you automatically have scoped variables
since these structures create blocks), you can simply wrap the
code that should have scoped variables with {}

*/

{
    const age1 = 30;
    console.log(age1); // 30
}

console.log(age1); // Error: "age is not defined"