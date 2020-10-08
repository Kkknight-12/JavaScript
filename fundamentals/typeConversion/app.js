let val;

// Defining a number
val = 4;
console.log(val);
console.log(typeof val);
console.log(val.length);

// NUmer to string

val = String(5);
console.log(val);
console.log(typeof val);
console.log(val.length);

val = "5";
console.log(val);
console.log(typeof val);
console.log(val.length);

// boolean to string
val = String(true);
console.log(val);
console.log(typeof val);
console.log(val.length); // it will count the number of letter in true

// date to string
val = String(new Date());
console.log(val);
console.log(typeof val);
console.log(val.length);

//  array to string
val = String([1, 2, 3, 4, 5]);

console.log(val);
console.log(typeof val);
console.log(val.length);

// toString()
val = (5).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);

val = true.toString();
console.log(val);
console.log(typeof val);
console.log(val.length);

// convert to number

val = Number("6");

console.log(val);
console.log(typeof val);
console.log(val.toFixed(2)); // it will give decimal till specified number

// boolean or null will give zero as output
val = Number(true);
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number(null);
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

//  string and array give nan that is not a number

val = Number("letter");
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

val = Number([1, 2, 3, 4]);
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));

// parseInt and paseFloat will give integer, float

val = parseInt("11.11");
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2)); // int will be return

val = parseFloat("11.11111");
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2)); // float will be returned

// typecoversion
const val1 = 1;
const val2 = 4;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

const val3 = "2";
const val4 = 9;
const newsum = val3 + val4;

console.log(newsum);
console.log(typeof newsum); // js will convert the number to string to add then and ouput datatype will be string
