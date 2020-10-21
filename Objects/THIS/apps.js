// 
// 
function sayHi(){
    // 
    console.log("HI")
    // this inside of a function normally refers  to  window
    console.log(this);
}
console.log(sayHi());

// 
// 
// 
const greet = function (){
    console.log(this);
}
greet();