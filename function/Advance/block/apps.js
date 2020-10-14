// pi and circ are scoped to block

let radius = 8; // global scope

if(radius > 0){
    // 
    const pi = 3.14 //local scope // scope to block
    let cicr = 2* pi * radius; //local scope // scope to block
    console.log(`circumference is ${cicr}`)
}
console.log(radius); // runn, as it is global scope variable
// console.log(pi);  // won't run 
// console.log(cicr); // won't run 


// let
// if(true){
//     let animal = 'eel';
// }
// console.log(animal);

//  var
// var works different then let and const

if(true){
    var animal = 'eel';
    console.log(animal);
}
console.log(animal);


// 
function double(arr){
    const result = []; // scoped to entire function
    for(let num of arr){
        let double = num *2 ; // scope to this block
        result.push(double);
}
    return result; // dont have acess to double but you can acess result as 
                   // it's scope is entire function
}

console.log(double([1,2,3]));



console.log('adada');

