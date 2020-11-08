// get set allow us to write custom
// logic
class Person {
    constructor(name) {
        // underscore name is a private property 
        // which can't be accessed from outside
        // only way to access it is to use get name()
        // which will return this private property
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        // assign the value only if the length of
        // value is greater then 2
        if( value.length > 2 ) {
            this._name = value;
        } else {
        console.log('Rejected!')
        }
    }
}

// 
let person = new Person('KNight');
// _name will be shown 
console.log(person);
//  
console.log(person.name);

// overwrite the name 
person.name = 'Bablu';
console.log(person.name)
// original name
console.log(person._name)


// reject if value is less then 2
person.name = 'B'
console.log(person.name)

// /////////////
// example 2  /
// ////////////
const data = {
    location: ''
}
data.location = 'phill'
console.log(data.location)

const data1 = {
    // empty array where all the location will be stored
    locations: [],

    // overwrite what happens when someone tries to fetch the value
    get location() {
        return this._location;
    },
    // value passed in location will be sent here
    // trip will be passed here
    set location(value) {
        // remove spaces in trip with trim function
        // save that in _location
        this._location = value.trim()
        this.locations.push(this._location.toUpperCase())
    }
}
data1.location = ' trip '
console.log(data1.location)
console.log(data1)
// 
data1.location = ' Hawai'
console.log(data1.location)

console.log(data1.locations)
