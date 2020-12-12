//  The includes() method determines whether 
// an array includes a certain value among its entries, 
// returning true or false as appropriate.

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

// with for of loop you can search better
for( pet of pets ){
 if ( pet.includes('at')){
   console.log(pet)
 }
}
//output: cat, bat