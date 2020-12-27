const num1 = 100;
const num2 = 50;

//  declaring an empty variable
let val;

// giving maths value to empty function
val = num1 + num2;
console.log(val);

val = num1 - num2;
console.log(val);

val = num1 * num2;
console.log(val);

val = num1 / num2; // division
console.log(val);

val = num1 % num2;
console.log(val); // remiander

// Math Object
// it have proptery and methods(function)
val = Math.PI;
console.log(val);

val = Math.E;
console.log(val);

val = Math.round(2.345567);
console.log(val);

// round up
val = Math.ceil(2.345567);
console.log(val);

// round down
val = Math.floor(2.345567);
console.log(val);

val = Math.sqrt(64);
console.log(val);

val = Math.abs(-64);
console.log(val);

val = Math.pow(6, 3); // 6^3=216
console.log(val);

val = Math.min(64, 23, 14, 16);
console.log(val);

val = Math.max(64, 23, 14, 16);
console.log(val);

val = Math.random(); // generate random decimal
console.log(val);

val = Math.random() * 20; // it will give random number between 1-20 but with decimal
console.log(val);

val = Math.floor(Math.random() * 100 + 1); // it will give whole number between 1- 100
console.log(val);


// the above method fail when you try to change
// min num other than 1
function randomIntBetween( min, max ){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(randomIntBetween( 5, 10))