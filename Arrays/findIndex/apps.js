// findIndex() method returns the index of the first element
// in the array that satisfies the provided testing function.
// Otherwise, it returns -1, indicating that no element
// passed the test.
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
const array1Index = array1.findIndex(isLargeNumber)
// expected output: 3
console.log(array1[array1Index])


//
//
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

const index = fruits.findIndex(fruit => fruit === "blueberries");

console.log(index); // 3
console.log(fruits[index]);

const products = [{id: 1},{id: 2}]
const producId = 1
const projectIndex = products.findIndex( p => { p.id === producId });
console.log(projectIndex)
// return - 1
// findIndex - Returns the index of the first
// element in the array where predicate is true, and -1 otherwise.

const indexOne = products.filter( p => p.id === producId )
console.log(indexOne);
