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

const data = [ {id: 1, name: 'BabuRao'},{id: 2, name: 'Anuradha'} ]
const id = 2
const idIndex = data.findIndex( 
        p => { return p.id === id } );
console.log( idIndex )

const nameIndex = data.findIndex( 
        p => { return p.name === 'BabuRao' } );
console.log( nameIndex )


// return - 1
// findIndex - Returns the index of the first
// element in the array where predicate is true, and -1 otherwise.

// const indexOne = data.filter( p => p.id === 1 )
// console.log(indexOne);
