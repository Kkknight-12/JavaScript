//  index of
let ingredients = [
  "water",
  "corn starch",
  "flour",
  "cheese",
  "shrimp",
  "butter",
];

// when you pass an array item which is not in the list array its gives an output of -1
console.log(ingredients.indexOf("java"));

// you can also run the index of with two argument
// first argument is array item
// second is position for fromIndex, but it start counting from zero position
console.log(ingredients.indexOf("flour", 2));

// includes
// first argument is array name
// second argument is array position
console.log(ingredients.includes("water", 0));

// searching the position for term after its occurence, 
// in this case 0 will return -1
console.log(ingredients.includes("water", 4));

// includes can also be passed with one argument to check if the array item exist in the parent array
console.log(ingredients.includes("water"));

// 
// 
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

// indexOf will find the first occurance of searchTerm
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(indexOfFirst) 
// output is 40

// now as we have got the index of first occurance
// we can search the second occurance of searchTerm
// now the search for term will start from index 40
console.log(paragraph.indexOf(searchTerm, (indexOfFirst + 1))
  )
// output is 52
