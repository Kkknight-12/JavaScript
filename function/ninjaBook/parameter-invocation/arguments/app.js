// //////////////////////////////
// implicit function parameters /
// //////////////////////////////
/* 
- function invocations are usually passed two implicit
parametes: arguments and this 
implite means that these parameters aren't explicitly
listed in the function signature, but are silenty passed to the function
and accessible within the function

- arguments is collection of all parameters passed to a function, usefull as it allow us to access all funciton parameter.

- 'arguments' object have property name 'length' indicates the exact number of argument. value can be obtained by using array indexing notation.
 */

function abc(a, b, b) {
  console.log(`argument 1 is ${arguments[0]}`) // argument 1 is a
  console.log(`argument 2 is ${arguments[1]}`) // argument 2 is b
  console.log(`argument 3 is ${arguments[2]}`) // argument 3 is c
}

abc("a", "b", "c")

// checking the length of arguments passed
// with arguments.length
function agrLength(a, b, c, d) {
  console.log(arguments.length)
}
agrLength("a", "b", "c", "d") // // 4

// ------------------------------------------------------------------------------------

/*
arguments parameter is not and array, array method won't
work on it
*/

function sum() {
  var sum = 0
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sum(1, 2, 34)) // 37
console.log(sum(1, 2)) // 3
console.log(sum(1, 2, 3, 4)) // 10

// ------------------------------------------------------------------------------------

/*
in sum function we are not explicity listing parameters. Still
we are accessing all the function arguments throught arguments object
*/

/* 
we can use Rest parameter instead of arguments parameter.
rest parameter is a real array so we can use array methods
which gives use advantage over arguments.
*/

function resSum(...a) {
  let lis = a // we could also directly have written a.length in loop
  var sum = 0
  for (var i = 0; i < lis.length; i++) {
    sum += lis[i]
  }
  return sum
}
console.log(resSum(1, 2, 3, 4, 5)) // 15

// ------------------------------------------------------------------------------------

// //////////////////////////////////////////////////////
// Arguments object is an alias to function parameters  /
// //////////////////////////////////////////////////////
function infiltrate(person) {
  // accessing value 'Mali Bhaia' through parameter person
  // and also through arguments object.
  if (person === "Kaido Fortress") {
    console.log(person) // Kaido Fortress
  }
  if (arguments[0] === "Kaido Fortress") {
    console.log("Luffy will penetrate through the defence") // Bingo
  }

  /*
    arguments parameter aliases function parameter. So if
    we set arguments[0] to some value, first paramter will be
    changed.

    changing parameter 
    */
  arguments[0] = "Luffy, Zoro, Kid, Yamato"
  console.log(person) // Luffy, Zoro, Kid, Yamato

  /*  
    same is true if we change parameter, the changes can be observed in paramter and arguments
     */
  person = "Sanji, Nami, Yoho Ho ho, Samurai, Ussop, Chopper are on there way"
  console.log(arguments[0]) // Sanji, Nami, Yoho Ho ho, Samurai, Ussop, Chopper are on there way
}

infiltrate("Kaido Fortress")
