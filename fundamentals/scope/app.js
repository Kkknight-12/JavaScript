//global scope
var a = 1;
let b = 2;
const c = 3;

function test() {
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("Function Scope: ", a, b, c);
}
test();

console.log("Global Scope: ", a, b, c);

if (true) {
  //block scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("If Scope: ", a, b, c);
}
// var is little confusing as you can see var global value get changed, so if you have same variable global and local your value might get changed.
console.log("Global Scope: ", a, b, c);

for (var a = 0; a < 10; a++) {
  console.log(`Loop: ${a}`);
}
console.log("Global Scope: ", a, b, c);
// again it can be seen that the Global value of a changed to 10 so that's the reason to use let and const
//let and const have block level scope where as var has function scope
