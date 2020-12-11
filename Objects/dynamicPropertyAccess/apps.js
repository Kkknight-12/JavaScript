// dynamic keyname must be declared before they are called in object
const userFname = 'User'

// dynamic value is also declared before they are called in object
const userLname = 'Strength'

let person = {
    // key with spaces can also be denifed 
    // but needs to be kept in quotes 
    'first name': 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],

    greet: function() {
        alert('Hi there!');
    },

    // key can also be defined as number
    // number must be >=0 , positive intiger
    1.1 : 'yoo',

    // dynamically setting the property
    // value inside square braket are NOT taken as key name
    // it will search for variable of that name
    // and take value i.e 'User' stored in that as a key name which is added to object person
    [userFname] : "", // username = 'User'

    // dynamic value
    lastName : userLname

};

const keyName = 'first name'

// dynamically accesing the properties
console.log(person[keyName])
person.User = 'Knight'
console.log(person.User)

console.log(person)