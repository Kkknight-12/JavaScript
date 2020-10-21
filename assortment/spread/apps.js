// spread expand the element in array and object

const nums = [1,2,3,4,5]

console.log(Math.max(nums))
// nan is return as list is one component and elements inside it can't be compared
// 
// 
// three dots ... will expand the list into individual
//  then we can compare the elements inside it
console.log(Math.max(...nums))

// 
// joining the two arays

const num2 = [6,7,8,9,10]

console.log(...nums,...num2)

console.log(...nums,...num2,11,12,13)

// 
// objects
const feline = { legs: 4, family: 'Felidae'}
const canine = { family: 'Caninae', furry: true}
// 
// combining two
const catDog = {...feline,...canine }
console.log(catDog)
// 
// 
// as both the object have family, so latest family 
//  value will be updated
const dog = { ...canine, isPet:true }
console.log(dog)