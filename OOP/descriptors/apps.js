// object can be create with object keyword
const person = { 
    name: 'Knight', 
    greet(){console.log(`hello ${this.name}`)}
}
person.greet();

// object descriptor
console.log(Object.getOwnPropertyDescriptors(person))
// name:
// configurable: true -> you can delete it
// enumerable: true -> appears in for in loop
// value: "Knight"
// writable: true -> you can assign new value

// ///////////////////////////////////////////////////
// sometime you may want to lockdown someproperties  /
// ///////////////////////////////////////////////////

Object.defineProperty(person, 'name', {
    configurable: true,
    enumerable: true,
    value: person.name,
    writable: false, // now the property name can't be changed
})

person.name = 'Luffy'
console.log(person) // name will remain knight
// other property will run as usual like delete
delete person.name

// changing again
Object.defineProperty(person, 'name', {
    configurable: false, // turining it to false 
    enumerable: true,
    value: 'Js',
    writable: false, // now the property name can't be changed
})
// now the peroperty name neither be changed nor be deleted
person.name = 'KNight'
console.log(person)

delete person.name
console.log(person)

// changing enumerable to false
for(const k in person) { //iterating over keys
    console.log(k);
}

Object.defineProperty(person, 'greet', { // cnat't use name as it is non configurable now
    configurable: true,
    enumerable: false, // greet wont apper in for in loop now
    value: person.greet,
    writable: false, // now the property name can't be changed
})
// 
for(const k in person) { //iterating over keys
    console.log(k); // only name will be shown now
}