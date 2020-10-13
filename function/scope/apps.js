
function lol(){
    let person = 'tom';
    const age = 45;
    var color = 'teal';
    console.log(person, age, color)
}
lol();
// variable defined inside function will not run when called outside a function
// becasue they are scoped to function
// checking if it will print variable outside function
// console.log(person);


// 
let hi = 'hi'
console.log(hi)
// again declaring the variable 
// but it will not print the value
// beacuse you have already declared it
// let hi = 3
// console.log(hi)

// but it is not in case of function
// you can again declare the variable declared inside a function
//  as the scope of variable declared inside the function is within the function
// it dont run run when you call it outside function

let bird = 'mandarian duck';
console.log(bird)

function birdWatch(){
    // again you can declare it
    let bird = 'golden pheasant'
    console.log(bird)
}
birdWatch();



