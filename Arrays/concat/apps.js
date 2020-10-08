let fruits = ["apple", "orange"];
let veggies = ["asparagus", "brusset", "sprouts"];
let meats = ["steak", "chicken", "breast"];
let dairy = ["cheese", "milk", "yogurt"];

console.log(fruits.concat(veggies));

console.log(veggies.concat(fruits));

// concating more then 1 array
let food = fruits.concat(veggies, meats, dairy);
console.log(food);
