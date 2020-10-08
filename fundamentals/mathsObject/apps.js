let pie = Math.PI;

console.log(pie);

//  rounding
console.log(Math.round(3.8));

// absolute value
console.log(Math.abs(-1234));

// remove decimal
console.log(Math.floor(2.334));

// power
console.log(Math.pow(2, 3));

// Random number
// betweeb zero to one, not including one
const step1 = Math.random();
console.log(step1);

// random number with decimal
// from zero to 9.999...
const step2 = step1 * 10;
console.log(step2);

// random number without decimal
// zero to 9
const step3 = Math.floor(step2);
console.log(step3);

// random number from 1 to 10
const step4 = Math.floor(step2) + 1;
console.log(step4);
console.log(Math.floor(Math.random() * 10) + 1);
