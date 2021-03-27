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
definition as we as ll variables in scope at the point of function definition

 */


