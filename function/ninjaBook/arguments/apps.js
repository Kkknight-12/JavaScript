// assert
function assert(value, desc) {
  var li = document.createElement("li")
  li.className = value ? "pass" : "fail"
  li.appendChild(document.createTextNode(desc))
  document.getElementById("results").appendChild(li)
}
// window.onload = function() {
// assert(true, "The test suite is running.");
// assert(false, "Fail!");
// };

// Assigning new object to variable ninja;
var ninja = {}

// dynamically creating properties
ninja.clan = "samurai"

// adding object to an array
var ninjaArray = []
ninjaArray.push({ name: "Knight" })
console.log(ninjaArray)

// adding new object as a property to another object
ninja.data = {}
console.log(ninja)

// passing object as argument
function hide(ninja) {
  ninja.visibility = false
  return ninja
}
console.log(hide({})) // {visibility: false}

// can be returned as values
function returnNewNinja() {
  return {}
}
console.log(returnNewNinja())

console.log("------------------------")
// ////////////////////////////////////////////////////////////////////

// //////////////////////////////////////////////////
// functions posses all the capabilities of object  /
// can be treated link object                       /
// called first-class object                        /
// //////////////////////////////////////////////////
// Assignment
var ninjaFn = function () {}
console.log(ninjaFn)

// add new function to array
var ninjaArray = []

ninjaArray.push(function () {})
console.log(ninjaArray)

// can be assigned as a property of object
var ninja = {}
ninja.data = function () {}
console.log(ninja) // {data: ƒ}

// can be passed as an argument
function call(ninjafunction) {
  return ninjafunction()
}
console.log(
  call(function () {
    return "you passed function as an argument"
  })
)

//can be returned as value
var samurai = function () {
  return "Luffy"
}

function returnSamuraiFun() {
  return samurai()
}
console.log(returnSamuraiFun())

// function can posses property that can be dynamically
// created and assigned;
// NOTE: properties must be assigned after you have
// created empty function, else they will be return undefined
// when you call them
var ninjafunction = function () {}
ninjafunction.ninja = "shadow clone jutsu"
console.log(ninjafunction.ninja) // shadow clone jutsu

console.log("------------------------")
// ////////////////////////////////////////////////////////////////////

// ////////////
// callback  //
// ////////////

/*
- a function to be called at a later time  
*/
var text = "you reached call back"
function getText() {
  return text
}

function useless(ninjaCallback) {
  return ninjaCallback()
}

console.log("useless", useless(getText))

// rewrite callback

var text2 = "you again reached call back"
function useless2(callback) {
  return callback()
}

// now when calling the HOF
// we are defining callback body
// inside annonymous function
console.log(
  useless2(function () {
    return text2
  })
)

/*
// arrow function
console.log(
  useless2( () => text2)
)  
*/

// sorting with callback
var values = [0, 3, 6, 7, 2, 1, 9, 3]

values.sort(function (val1, val2) {
  return val2 - val1 // val2 > val 1 ascending
  // return val1 - val2 // val1 > val 2 descending
})

console.log(values) // [9, 7, 6, 3, 3, 2, 1, 0]

console.log("-----------Callback--ends-------------")
// --------------------------------------------------------

// //////////////////////////////////
// Attaching properties to function /
// //////////////////////////////////

var weildSword = function () {}
weildSword.swordType = "katana"
console.log(weildSword.swordType) // katana

// properties must be added after you have created function
// so you should pass empty function, as properties defined
// while creating function will we refered as undefined when
// when you call them

console.log("-----------Callback--ends-------------")

// /////////////////////////////////
// storing function in collection //
// /////////////////////////////////
var store = {
  nextId: 1,
  cache: {},
  add: function (fn) {
    if (!fn.id) {
      // if function don't have id property then proceed
      // store the current value of nextId to function.id
      // then increment the current value of nextId
      // knight.id = 1, netninja.id = 2
      fn.id = this.nextId++ // here adding property to function
      fn.age = new Date().getTime().toString()
      // now save function as key and id as value {1: ƒ, 2: ƒ}
      this.cache[fn.id] = fn // here we are adding funciton to cache object
      return true
    }
  },
}
function knight() {
  return "this is knight"
}
store.add(knight)
// assert( store.add(knight), "Function was safely added.");
// assert( store.add(knight), "but it was only added once.");
store.add(function netninja() {})
console.log(store.cache) // {1: ƒ, 2: ƒ}
console.log(store.cache[1]())
console.log(store.cache[1].id)

console.log("----------storing function ends--------------")

// //////////////////////////
// Self-memoizing functions /
// //////////////////////////
function isPrime(value) {
  if (!isPrime.answers) {
    // adding answers property to isPrime function
    isPrime.answers = {}
  }
  // new value will be undefined as its not stored in answers obj
  if (isPrime.answers[value] !== undefined) {
    return isPrime.answer[value]
  }
  // will set prime to true if value is neither 0 or 1
  var prime = value !== 0 && value !== 1

  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      prime = false
      break
    }
  }

  return (isPrime.answers[value] = prime)
}
console.log(isPrime(5))
console.log(isPrime.answers) //{5: true}

console.log("--------Attaching properties to function ends----------------")

// -----------------------------------------------------

// ////////////////////////
// function declarations //
// ////////////////////////

/*
- most basic way of defining a function in JavaScript 
function myFunc( arg1, arg2 ) {
}
*/

function samuraiDec() {
  return "samurai is here"
}

console.log(samuraiDec())

// function within function
function ninjaDec() {
  function hiddenLeaf() {
    return "you found us..."
  }

  return hiddenLeaf()
}

console.log(ninjaDec())

/*
function ninjaDec() {
  return function hiddenLeaf() {
    return "you found us..."
  }
}
console.log(ninjaDec()())  
*/
console.log("--------Declaration ends----------------")
// -----------------------------------------------------
// //////////////////////
// function expression //
// //////////////////////
/*
- function expressions, are placed on the expression 
- level, as the right side of a variable declaration 
- function expression is assigned to a variable, 
- we can use that variable to invoke the function 
- When we want to make a function call, we use an 
- expression that evaluates to a func- tion, followed 
- by a pair of function call parentheses, which might
- contain arguments.
*/

var myFuncDec = function () {}

// expression as an argument of funciton call
myFuncDec(function () {
  // returning function exp
  return function () {}
})

console.log("--------function expression ends----------------") +
  // -----------------------------------------------------
  // /////////////////////
  // immediate function //
  // /////////////////////

  //   (function namedFunctionExpression(returnWhatYouGet) {
  //     return returnWhatYouGet
  //   }
  // )(1)

  // ((value) => {
  //   var greet = "Hello"
  //   console.log(greet + " " + value)
  // })("IIFEs")

  // + | - | ! | ~
  // can be used in place of ( )
// +function (val) {console.log(val)}(1)

// -----------------------------------------------------

// //////////////////
// Arrow function //
// /////////////////
/*
- arrow functions are a simplification 
- of function expressions.  
*/

// callback
// using callback function expression
