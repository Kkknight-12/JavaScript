//  index of
let ingredients = [
  "water",
  "corn starch",
  "flour",
  "cheese",
  "shrimp",
  "butter",
];

console.log(ingredients.indexOf("water"));

// when you pass an array item which is not in the list array its gives an output of -1
console.log(ingredients.indexOf("java"));

// you can also run the index of with two argument
// first argument is array item
// second is position for fromIndexl, but it start counting from zero position
console.log(ingredients.indexOf("flour", 2));

// includes
//  first argument is array name
// second argument is array position
console.log(ingredients.includes("water", 0));

console.log(ingredients.includes("water", 4));

// includes can also be passed with one argument to check if the array item exist in the parent array
console.log(ingredients.includes("water"));
