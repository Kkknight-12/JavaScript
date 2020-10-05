// Logical operators
// && || !

// &&
// check for left side and right side expression to be met
console.log(1 < 4 && "a" === "a");

// if any of the side is false then it returns false
console.log(1 < 4 && "a" !== "a");

// case where you can use &&
let password = "taco tuesday";

if (password.length >= 6 && password.indexOf(" ") === -1) {
  console.log("Valid Password");
} else {
  console.log("Invalid Password");
}

//  or returns true if either of the side meet the condition

console.log(1 !== 1 || 10 === 10);

console.log(10 / 2 == 5 || null);

//

let age = 24;

if (age < 6 || age >= 65) {
  console.log("Enjoy yoy free ride");
} else {
  console.log("You need to pay $10");
}

let martialArt = "Taekwondo";

if (martialArt === "Taekwondo" || "Kickboxing" || "Karate" || "Krav Maga") {
  console.log("You are Awesome");
} else {
  console.log("I still like you");
}

// not operator

let flavor = "apple";

if (!(flavor === "grape" || flavor === "pineapple")) {
  console.log("Sorry we dont have it");
}

// Operator precedence
/* NOT(!) has higher precedence than && and ||
 && has higher precende than || 
*/

// parenthesis
let x = 7;
console.log(x == 7 || (x === 3 && x > 10));
// it works in predence order
//(x === 3 && x > 10) is false
// x == 7 true
// true \\ false is true

// if you want your input to run from left to write you need to put parenthesis
console.log((x == 7 || x === 3) && x > 10);
