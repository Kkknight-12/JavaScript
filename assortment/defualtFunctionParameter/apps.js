// function multiply (x,y){
//     return x*y
// }
// console.log(multiply(2,2));

// default parameter
// long approch
function multiply (x,y){
    // when you dont mention value of y
    // it is undefined
    if (typeof y === 'undefined'){
        // assume y = 1
        y=1;
    }
    return x*y
}
console.log(multiply(2,2));
// not defining value of y
console.log(multiply(2));

// 
function defaulty (x,y) {
    // when you dont mention value of y
    // it is undefined
    // assume y = 1
    y = typeof y ==='undefined' ? 1 : y;
    
    return x*y;
}
console.log(defaulty(2))
// 
// 
// 
// better approch
function betterapproch (x,y=1){
    return x* y
}
console.log(3)
// 
// 
// greet
const greet = (person, greeting='hi',punctuation = '!')=>{
    console.log(`${greeting}, ${person} ${punctuation}`)
}
greet('knight','morning');
// 
// 
// order matter in default parameter
// passsing person and punctuation 
greet('Sam', '?')
// order was person greeting, punctuation
// value is passed to first and second parameter, for third default value is used.

// 
// 
// you can also use an array as a default value
const blah = (x,y = [1,2,3])=>{
    console.log(x,y);
}
// defining value of x
// using the default value of y
console.log(blah(2))

// 
// 
// what not to do 
// when giving default value of first parameter
// passing the second paramater is must if you dont
// function will not run
function defaultX (x=1,y){
    return x * y
}
console.log(defaultX(3))
// 3 is taken as x value,
// you are not passing y so output is nan