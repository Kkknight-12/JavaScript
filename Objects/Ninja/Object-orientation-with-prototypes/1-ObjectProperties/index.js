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

assert("skulk" in yoshi, "Yoshi can skulk");
assert(!("sneak" in yoshi)), "Yoshi cannot sneak");
assert(!("creep" in yoshi)), "Yoshi cannot creep");

Object.setPrototypeOf(yoshi, hattori);

assert("sneak" in yoshi, "Yoshi can now sneak");
assert(!("creep" in hattori)), "Hattori cannot creep");

Object.setPrototypeOf(hattori, kuma);
assert("creep" in hattori, "Hattori can now creep");
assert("creep" in yoshi, "Yoshi can also creep");


