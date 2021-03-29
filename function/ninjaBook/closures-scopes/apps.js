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
