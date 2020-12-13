const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

// b in target is modified with b in source
const returnedTarget = Object.assign(target, source);

console.log(target); //target is also modified
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget); // data is stored in returnedTarget
// expected output: Object { a: 1, b: 4, c: 5 }

const person = {name: 'Luffy' }
const data = {job: ' whining'}

// creating new Object 
// storing data in empty object
const newUser = Object.assign( {}, person );
console.log(newUser)

// creating new object from multiple sources
const newUserTwo = Object.assign( {}, person, data, returnedTarget)
console.log(newUserTwo)


// updating source don't affect newly created object
person.name = 'Mr. Luffy'
console.log(person.name)
console.log(newUserTwo.name)