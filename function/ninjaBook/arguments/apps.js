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
// callback  /
// ///////////
var text = "you reached call back"
function getText() {
  return text
}
function useless(ninjaCallback) {
  return ninjaCallback()
}
console.log(useless(getText))

// rewrite callback
var text2 = "you again reached call back"
function useless2(callback) {
  return callback()
}

console.log(
  useless2(function () {
    return text2
  })
)

// sorting with callback
var values = [0, 3, 6, 7, 2, 1, 9, 3]
values.sort(function (val1, val2) {
  return val2 - val1
})
console.log(values) // [9, 7, 6, 3, 3, 2, 1, 0]

console.log("------------------------")
// ////////////////////////////////////////////////////////////////////

// //////////////////////////////////
// Attaching properties to function /
// //////////////////////////////////

var weildSword = function () {}
weildSword.swordType = "katana"
console.log(weildSword.swordType) // katana

// properties must be added after you have created function
// so you should pass empty function as properties defined
// while creating function will we refered as undefined when
// when you call them
let fnProp = function () {
  namE = "knight"
  return this // this will refer to window even if you use arrow function
}
fnProp.skill = "Class A"
console.log(fnProp.namE) // undefined
console.log(fnProp.skill) // Class A
console.log(fnProp()) // window

// storing function in collection
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

console.log("------------------------")
// ////////////////////////////////////////////////////////////////////

// //////////////////////////
// Self-memoizing functions /
// //////////////////////////
function isPrime(value) {
  if (!isPrime.answers) {
    isPrime.answers = {}
  }
  // new value will be undefined as its not stored in answer obj
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
