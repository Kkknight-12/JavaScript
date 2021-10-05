// let obj = {
//     prop1: 1,
//     prop2: function(){},
//     prop3:{}
// }
// console.log(obj) // { prop1: 1, prop2: [Function: prop2], prop3: {} }

// // properties assinged can be changes and deleted
// obj.prop1 = 2;
// obj.prop2 = [];
// delete obj.prop3

// console.log(obj) // { prop1: 2, prop2: [] }

// // can add properties
// obj.prop4=  "Hello";
// console.log(obj) // { prop1: 2, prop2: [], prop4: 'Hello' }


// const yoshi = { skulk: true };
// const hattori = { sneak: true };
// const kuma = { creep: true };

// if("skulk" in yoshi){ console.log("Yoshi can skulk") }; // Yoshi can skulk

// if(!("sneak" in yoshi)){ console.log("Yoshi cannot sneak") } // Yoshi cannot sneak
// if(!("creep" in yoshi)){ console.log("Yoshi cannot creep")}; // Yoshi cannot creep

// // if yoshi doesn't have any property then he will search hattori
// console.log(Object.setPrototypeOf(yoshi, hattori)); // { skulk: true }
// if("sneak" in yoshi){ console.log("Yoshi can now sneak")}; // Yoshi can now sneak

// //
// if(!("creep" in hattori)){ console.log("Hattori cannot creep")}; // Hattori cannot creep

// // if hattori doesn't have any property he will searh kuma
// console.log(Object.setPrototypeOf(hattori, kuma)); // { sneak: true }
// if("creep" in hattori){ console.log("Hattori can now creep")}; // Hattori can now creep

// // now as we have linked yoshi to hattori and hattori to kuma
// // yoshi can search properties of kuma if
// // he himself dont have that
// // and also if it's not found with hattori
// if("creep" in yoshi){ console.log("Yoshi can also creep")} ; // Yoshi can also creep


// // Object construction and prototypes
// function Ninja(){}

// Ninja.prototype.swingSword = function(){
//   return true;
// };

// const ninja1 = Ninja();
// if(ninja1 === undefined){ console.log("No instance of Ninja created.") }; // No instance of Ninja created.

// const ninja2 = new Ninja();

// if(
//     ninja2 &&
//     ninja2.swingSword &&
//     ninja2.swingSword()
// ){ console.log("Instance exists and method is callable." )}; // Instance exists and method is callable.



// ///
// function Ninja(){
//   this.swung = false;
//   this.swingSword = function(){
//     return !this.swung;
//   };
//  }
//  Ninja.prototype.swingSword = function(){
//    return this.swung;
//  };

//  const ninja = new Ninja();
//  if(ninja.swingSword()){ console.log(  "Called the instance method, not the prototype method.")};
// //Called the instance method, not the prototype method.
// console.log(ninja.swingSword()) // true

// //
// function Ninja(){
//   this.swung = true;
// }

// const ninja3 = new Ninja();

// Ninja.prototype.swingSword = function(){
//   return this.swung;
// };
// if(ninja3.swingSword()){console.log("Method exists, even out of order.")};
// // Method exists, even out of order.


// // new we are resetting the prototype
// // watch carefully are setting the new prototype 
// // we are not adding a new prototype prooerty
// Ninja.prototype = {
//   pierce: function() {
//     return true;
//   }
// }

// if(ninja3.swingSword()){console.log("Our ninja can still swing!")};
// // Our ninja can still swing!

// const ninja4 = new Ninja();
// if(ninja4.pierce()){ console.log("Newly created ninjas can pierce")};
// // Newly created ninjas can pierce
// if(!ninja4.swingSword){ console.log("But they cannot swing!")};
// // But they cannot swing!


// function Ninja(){}
// const ninja = new Ninja();


// if(typeof ninja === "object") { console.log("The type of the instance is object.")};
// // The type of the instance is object.
// if(ninja instanceof Ninja){console.log("instanceof identifies the constructor." )}
// // instanceof identifies the constructor.
// if(ninja.constructor === Ninja) {console.log("The ninja object was created by the Ninja function.")};
// // The ninja object was created by the Ninja function.


// console.log(ninja instanceof Ninja)

function Ninja(){}

const ninja = new Ninja();
const ninja2 = new Ninja();

if(ninja2 instanceof Ninja){console.log("It's a Ninja!")};
if(ninja !== ninja2){console.log("But not the same Ninja!")};
