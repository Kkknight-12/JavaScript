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

// //////////////////////////////////////////
// creating new object with spread operator /
// //////////////////////////////////////////

const person = {name: 'Knight', hobbies: ['Martial Art', 'coding']}

const newPerson = person;

// updating the person will also update the newPerson
person.hobbies[1] = 'Web Development'
console.log(person)
console.log(newPerson)

// as the above method use reference to create new object
// so when you update the original object, 
// newly created object is also updated

// ///////////////////////////////////
// using spread to create new object /
// ///////////////////////////////////
const personTwo = { ...person }
console.log(personTwo)
// updating person will not show newly made changes
// in object created with spread
person.name = 'Luffy' // changing name
console.log(personTwo) // name remain same in new object

// as person object has hobbies array
// you need to apply spread to that array too 
// so that changes made in person not 
// shown in new object
const personThree = { ...person, name: 'Babu Rao'} // overwriting name
console.log(personThree)
person.hobbies.pop()
console.log(person)
console.log(personThree)
// creating new array that will clone the old array
const personFour = { ...person, hobbies: [...person.hobbies] }
console.log(personFour)
person.hobbies[1] = 'Coding' //updating old
console.log(person)
console.log(personFour) // changes will not affect new object
