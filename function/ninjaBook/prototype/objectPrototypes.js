let obj = {
  prop1: 1,
  prop2: function () {},
  prop3: {},
}
console.log("obj", obj) // { prop1: 1, prop2: [Function: prop2], prop3: {} }

// properties assinged can be changes and deleted
obj.prop1 = 2
obj.prop2 = []
delete obj.prop3

console.log("assign new prop to obj", obj) // { prop1: 2, prop2: [] }

// can add properties
obj.prop4 = "Hello"
console.log("adding property to obj", obj) // { prop1: 2, prop2: [], prop4: 'Hello' }

// -------------------------------------------------------------------------------------

// //////////////////////////
// Understanding Prototype  /
// //////////////////////////

/*  
- Prototype - an object to which serach for a particular property can be delegated. Prototype
- are convenient means of defining properties and functionality which will be automatically
- accessible to other objects. 
- If you search for an object and that object dont have that property. That object prototype will be searched for that property. Every object can have refernece to its prototype.
*/

const yoshi = { skulk: true }
const hattori = { sneak: true }
const kuma = { creep: true }

if ("skulk" in yoshi) {
  console.log("Yoshi can skulk")
} // Yoshi can skulk

if (!("sneak" in yoshi)) {
  console.log("Yoshi cannot sneak")
} // Yoshi cannot sneak
if (!("creep" in yoshi)) {
  console.log("Yoshi cannot creep")
} // Yoshi cannot creep

// ///////////////////////
// Object.setPrototypeOf /
// //////////////////////

/*  
- Object.setPrototypeOf is used to set one object prototype of another
- it is an internal property which is not directly accessible
- it takes two object arguments and set the second object as prototype of another
*/

// if yoshi doesn't have any property then he will search hattori
console.log(Object.setPrototypeOf(yoshi, hattori)) // { skulk: true }
if ("sneak" in yoshi) {
  console.log("Yoshi can now sneak")
} // Yoshi can now sneak

//
if (!("creep" in hattori)) {
  console.log("Hattori cannot creep")
} // Hattori cannot creep

// if hattori doesn't have any property he will searh kuma
console.log(Object.setPrototypeOf(hattori, kuma)) // { sneak: true }
if ("creep" in hattori) {
  console.log("Hattori can now creep")
} // Hattori can now creep

// now as we have linked yoshi to hattori and hattori to kuma
// yoshi can search properties of kuma if
// he himself dont have that
// and also if it's not found with hattori
if ("creep" in yoshi) {
  console.log("Yoshi can also creep")
} // Yoshi can also creep

// -------------------------------------------------------------------------------------

// ////////////////////////////////////
// Object construction and prototypes /
// ////////////////////////////////////

function Ninja() {}

/* 
 - when a funcion is created, it immediately gets a new object assigend to its prototype
 - object, an object that we can extend just like any other object. In this case 
 - we are adding swingsword method.
*/
// with .prototype we can add properties
Ninja.prototype.swingSword = function () {
  return true
}

// calling function as a function
const ninja1 = Ninja()

if (ninja1 === undefined) {
  console.log("No instance of Ninja created.")
} // No instance of Ninja created.

// calling function as a constructor function
const ninja2 = new Ninja()

// have the prototype of function Ninja
if (ninja2 && ninja2.swingSword && ninja2.swingSword()) {
  console.log("Instance exists and method is callable.")
} // Instance exists and method is callable.

console.log("prototype check", ninja2.prototype === Ninja.prototype)
// -------------------------------------------------------------------------------------

// /////////////////////
// Instance Properties /
// /////////////////////

// intance method are accessed before prototype methods

function NinjaIP() {
  this.swung = false
  this.swingSword = function () {
    return !this.swung
  }
}

/*
- swingSword is already defined as a property to NinjaIP
- we are defining a prototype method with same name 
*/
NinjaIP.prototype.swingSword = function () {
  return this.swung
}

const ninjaIp = new NinjaIP()
if (ninjaIp.swingSword()) {
  console.log("Called the instance method, not the prototype method.")
}
// Called the instance method, not the prototype method.
console.log(ninjaIp.swingSword()) // true

/*
- when we try to access swingSword method. The instance method was called not the
- proptotype as the search chain start by search the method's on object itself
- then its prototype.
*/

/*  
NOTE: Every instances gets its own version of properties created within the 
- constructor, but they all have accesss to the same prototype property. 
*/

// -------------------------------------------------------------------------------------

// //////////////////////////////////////////////
// Side Effects of dynamic nature of Javascript /
// //////////////////////////////////////////////

function NinjaSE() {
  this.swung = true
}

const ninja3 = new NinjaSE()

// adding a prototype method
NinjaSE.prototype.swingSword = function () {
  return this.swung
}

console.log("ninja3 instanceof NinjaSE", ninja3 instanceof NinjaSE)

if (ninja3.swingSword()) {
  console.log("Method exists, even out of order.")
}
// Method exists, even out of order.

// new we are resetting the prototype
// watch carefully we are setting new prototype
// we are not adding a new prototype prooerty
NinjaSE.prototype = {
  pierce: function () {
    return true
  },
}

if (ninja3.swingSword()) {
  console.log("Our ninja can still swing!")
}

// but
console.log("is ninja3 still instanceof NinjaSE", ninja3 instanceof NinjaSE)

// Our ninja can still swing!

const ninja4 = new NinjaSE()
if (ninja4.pierce()) {
  console.log("Newly created ninjas can pierce")
}
// Newly created ninjas can pierce
if (!ninja4.swingSword) {
  console.log("But they cannot swing!")
}
// But they cannot swing!

/*  
- Even Though we have completely replaced
- Ninja constructor's proptotype 
- our Ninja can still swing sword, because it 
- keep reference to Old Ninja prototype
*/
console.log("------END-------")

// -------------------------------------------------------------------------------------

// ///////////////////////////////
// Object typing via constructor /
// ///////////////////////////////

function NinjaOT() {}
const ninjaOT = new NinjaOT()

if (typeof ninjaOT === "object") {
  console.log("The type of the instance is object.")
}
// The type of the instance is object.
if (ninjaOT instanceof NinjaOT) {
  console.log("instanceof identifies the constructor.")
}
// instanceof identifies the constructor.
if (ninjaOT.constructor === NinjaOT) {
  console.log("The ninja object was created by the Ninja function.")
}
// The ninja object was created by the Ninja function.

console.log("------END-------")

// ///////////////////////////////////////////////////////
// instatiating new object using refernce to constructor /
// ///////////////////////////////////////////////////////

function NinjaRE() {}

const ninjaRE = new NinjaRE()
const ninjaRE2 = new ninjaRE.constructor()

if (ninjaRE2 instanceof NinjaRE) {
  console.log("It's a Ninja!")
}

if (ninjaRE !== ninjaRE2) {
  console.log("But not the same Ninja!")
}

console.log("------END-------")
///////////////////////////
// Achieving inheritance
////////////////////////////

function PersonAI() {}
PersonAI.prototype.dance = function () {}

function NinjaAI() {}
NinjaAI.prototype = { dance: PersonAI.prototype.dance }

const ninjaAI = new NinjaAI()

if (ninjaAI instanceof NinjaAI) {
  // true
  console.log("ninja receives functionality from the Ninja prototype")
}

if (ninjaAI instanceof PersonAI) {
  // false
  console.log("... and the Person prototype")
}
if (ninjaAI instanceof Object) {
  // true
  console.log("... and the Object prototype")
}
/* 
- what we really wanted was to achieve a prototype chain.
- so Ninja can be a Person 

- BEST way to acheive prototype chain is use
- instance of an object as other object's prototype

SubClass.prototype = new SuperClass();
*/

// //////////////////////////////////////
// Acheiving Inheritance with prototype /
// //////////////////////////////////////

function PersonAIP() {}

PersonAIP.prototype.dance = function () {}

function NinjaAPI() {}

/* 
- makes a Ninja a Person by making Ninja prototype 
- an instance of Person
*/
NinjaAPI.prototype = new PersonAIP()

const ninja1API = new NinjaAPI()

if (ninja1API instanceof NinjaAPI) {
  // true
  console.log("true")
}
if (ninja1API instanceof PersonAIP) {
  // true
  console.log("true")
}
if (ninja1API instanceof Object) {
  // true
  console.log("true")
}

/* 
- In order to achieve inheritace, we replace prototype of Ninja
- function with new Person instance.

- now when we create ninja object
- internal prototype property of newly created ninja(ninja1API) object 
- will be set to object to which current Ninja(NinjaAPI) prototype 
- property points to(PersonAIP)
*/

/*  
- Internal mechanism to search method.
- first Js will check ninja object itself,
- then will check person object, 
- then will check person object prototype
*/

console.log("-------END Inhetitance-------")
// -------------------------------------------------------------------------------------

// ///////////////////////////////////////////
// Problem of Overiding Constructor property /
// ///////////////////////////////////////////

/*  
- by setting new Person object as prototype of Ninja
- constructor, we have lost our connection to Ninja
- constructor. 
*/
function checkConnection() {
  if (ninja1API.constructor !== NinjaAPI) {
    console.log("The Ninja object connection to Ninja constructor is broken")
  }
}
checkConnection()

/*  
- If we ask the ninja object which function has constructed it,
- we'll get Person as the answer.
*/
console.log(ninja1API.constructor) // [Function: PersonAIP]

console.log("---------END--------")

// ///////////////////////
// Object.defineProperty /
// ///////////////////////
var ninjaDP = {}
ninjaDP.name = "yosshhh"
ninjaDP.weapon = "split staff"

Object.defineProperty(ninjaDP, "sneak", {
  configurable: false,
  enumerable: false,
  value: true,
  writable: true,
})

function checkSneak() {
  if ("sneak" in ninjaDP) {
    console.log("We can access the new property")
  }
}
checkSneak()
// we can access sneak property
console.log(ninjaDP.sneak) // true

// but its not iterable
// we have set enumerable: false,
for (let props in ninjaDP) {
  if (props != undefined) {
    console.log("enumerable property : ", props)
  }
}

/*  
- by setting enumerable to false
- we can be sure that the property won't appear
- when using the for in loop
*/

// ////////////////////////////////////
// solution to overriding constructor /
// ////////////////////////////////////

function PersonOC() {}
PersonOC.prototype.dance = function () {}

function NinjaOC() {}
NinjaOC.prototype = new PersonOC()

// define a new non enumerable
// constructor property pointing
// back to Ninja
Object.defineProperty(NinjaOC.prototype, "constructor", {
  enumerable: false,
  value: NinjaOC,
  writable: true,
})
var ninjaOC = new NinjaOC()

function checkOCWorking() {
  if (ninjaOC.constructor === NinjaOC) {
    console.log(
      "Connection from ninja instance to Ninja constructor re-established."
    )
  }
}
checkOCWorking() // Connection... re-established.

for (let prop in NinjaOC.prototype) {
  if (prop === "dance") {
    console.log("The only enumerable property is dance")
  }
}

/*  
- we have re-stablished the connection between 
- ninja and Ninja function. In addition, if anybody 
- tries to loop through the property of Ninja.prototype
- object, we have made sure the our patched-on property
- constructor won't be visited
*/
