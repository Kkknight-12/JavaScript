let val;
const today = new Date();

val = today;
console.log(val);

console.log(typeof val);

// converting to string
val = today.toString();
console.log(typeof val);

//changing to different format

let birthday = new Date("1-01-1900");
val = birthday;
console.log(val);

birthday = new Date("January 01 1900");
val = birthday;
console.log(val);

birthday = new Date("1/01/1900");
val = birthday;
console.log(val);

//changing the birthday date with set
birthday.setMonth(2);
val = birthday;
console.log(val);

birthday.setDate(29);
val = birthday;
console.log(val);

birthday.setFullYear(1800);
val = birthday;
console.log(val);

// getting month, date, day, full year, hours, minutes , seconds, milliseconds
val = today.getMonth();
console.log(val);

val = today.getDate();
console.log(val);

val = today.getDay();
console.log(val);

val = today.getFullYear();
console.log(val);

val = today.getHours();
console.log(val);
