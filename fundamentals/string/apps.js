// string
let a = "asdasd";
console.log(a);

// checking type of data
console.log(typeof a);

// anything within the quote is string
a = "123";
console.log(`123 is now`, typeof a);

// quotes inside string
// by changing single double quotes you can

let b = "he said, 'i can do it  believe me'";
console.log(b);

//  concatinating
a = "lift";
b = "heavy";

console.log(a + " " + b);

//length
console.log(a.length);
// spaces also counts
a = "aa    ";
console.log(a.length);

// /////////////////
// indexing
// ////////////////

// square bracket []
a = "Knight";
console.log(a[0]);

// index of()
console.log(a.indexOf("t"));

// substring and slice
console.log(a.substring(1, 6));
console.log(a.slice(1, 6));
console.log(a.slice(2));

console.log("a" + " " + a.substring(1, 6));

// touppercase
let msg = "here i am ";
console.log(msg.toUpperCase());

// .trim()
// remove spaces at begining, end of string
a = " remove space ";
console.log(a.trim());

// indexof
console.log(a.indexOf("r"));

//replace
a = "Taekwondo is awesome";
console.log(a.replace(a.slice(0, 9), "jijutsu"));

// ///////////////////
// Escaping character
// //////////////////

//backslash
// using single quote with single quote
a = "i can't do it";
console.log(a);

//\n
a = "line\nchange";
console.log(a);

// backslash
a = "i\\ can\\ do\\ it";
console.log(a);

// templet literals
// not supported by internet explorer

let item = "kerele";
let price = 10;
let quantity = 12;
let output = `you bought ${quantity} ${item}, total price: $${
  price * quantity
}`;
console.log(output);
