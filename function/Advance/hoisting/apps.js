// javaascript run things behind the scene
// var animal;
// console.log('animal');
var animal = 'Tapir';
console.log(animal);

// let and const are not hoisting
let knight = 'Batman';
console.log(knight)


// function declartion are hoisted 
howl()
function howl(){
    console.log('Awoooooo')
} 

// don't work same way as function 
// function expression
hoot();
let hoot = function (){
    console.log('HOOOO HOOOOOO')
}
