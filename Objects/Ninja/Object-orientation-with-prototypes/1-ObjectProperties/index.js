let obj = {
    prop1: 1,
    prop2: function(){},
    prop3:{}
}
console.log(obj) // { prop1: 1, prop2: [Function: prop2], prop3: {} }

// properties assinged can be changes and deleted
obj.prop1 = 2;
obj.prop2 = [];
delete obj.prop3

console.log(obj) // { prop1: 2, prop2: [] }

// can add properties
obj.prop4=  "Hello";
console.log(obj) // { prop1: 2, prop2: [], prop4: 'Hello' }


const yoshi = { skulk: true };
const hattori = { sneak: true };
const kuma = { creep: true };

if("skulk" in yoshi){ console.log("Yoshi can skulk") }; // Yoshi can skulk

if(!("sneak" in yoshi)){ console.log("Yoshi cannot sneak") } // Yoshi cannot sneak
if(!("creep" in yoshi)){ console.log("Yoshi cannot creep")}; // Yoshi cannot creep

// if yoshi doesn't have any property then he will search hattori
console.log(Object.setPrototypeOf(yoshi, hattori)); // { skulk: true }
if("sneak" in yoshi){ console.log("Yoshi can now sneak")}; // Yoshi can now sneak

//
if(!("creep" in hattori)){ console.log("Hattori cannot creep")}; // Hattori cannot creep

// if hattori doesn't have any property he will searh kuma
console.log(Object.setPrototypeOf(hattori, kuma)); // { sneak: true }
if("creep" in hattori){ console.log("Hattori can now creep")}; // Hattori can now creep

// now as we have linked yoshi to hattori and hattori to kuma
// yoshi can search properties of kuma if
// he himself dont have that
// and also if it's not found with hattori
if("creep" in yoshi){ console.log("Yoshi can also creep")} ; // Yoshi can also creep


// Object construction and prototypes
function Ninja(){}

Ninja.prototype.swingSword = function(){
  return true;
};

const ninja1 = Ninja();
if(ninja1 === undefined){ console.log("No instance of Ninja created.") }; // No instance of Ninja created.

const ninja2 = new Ninja();

if(
    ninja2 &&
    ninja2.swingSword &&
    ninja2.swingSword()
){ console.log("Instance exists and method is callable." )}; // Instance exists and method is callable.



