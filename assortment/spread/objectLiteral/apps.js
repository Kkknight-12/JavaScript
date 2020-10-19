// SPREAD in object literal copies propeties from one
// objectinto another object literal

const feline = {
    legs:4,
    family:'Felidae'
}
const canine = {
    family: 'Caninae',
    furry:true,
    legs:4,

}
// joining two objects
const catDog={
    ...canine,
    ...feline
}
console.log(catDog)

// adding new property

const dog ={
    ...canine,
    isPet: true,
    adorable: true
}
console.log(dog)

const houseCat ={
    ...feline,
    isGrumpy:true,
    personality:'unpredictable'
}
console.log(houseCat)

// overwriting with new properties
const tripod = {
    ...canine,
    legs:3
}
console.log(tripod)
// 
// order matters when overwtiting the properties
// if legs was mentioned before canine, 
// legs property would be overwritten by cannies 4 leg 
// property
const tripod4 = {
    legs:3,
    ...canine
}
console.log(tripod4)

// 
// 
// 
console.log(...[4,5,6])
// spreading array in object literal
console.log({...[4,5,6]})
// spreading string in objects
console.log({...'asdsddf'})
