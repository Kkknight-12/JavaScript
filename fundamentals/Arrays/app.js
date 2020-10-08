const numbers = [2, 3, 45, 65, 77];
const numbers2 = new Array(2, 3, 22, 33, 44);
const fruit = ["apple", "orange", "banana"];
const mixed = [22, "hello", true, undefined, null, { a: 1, b: 2 }, new Date()];

console.log(mixed);

let val;

//  get array length
val = numbers.length;
console.log(val);

//check if array
val = Array.isArray(numbers);
console.log(val);

// array indexing
val = numbers[3];
console.log(val);

//insert into  array
numbers[2] = 100;
console.log(numbers);

//find index of value
val = numbers.indexOf(100);
console.log(val);

//mutating arrays
//add to end
numbers.push(250);
console.log(numbers);
// add to front
numbers.unshift(111);
console.log(numbers);
//take number from end
numbers.pop();
console.log(numbers);
//take off from front
numbers.shift();
console.log(numbers);
// splice values -> take  off number by giving index in agr
numbers.splice(0, 2); // from 0 to 1
console.log(numbers);

//reverse array
numbers.reverse();
console.log(numbers);

//concatinate arrays
val = numbers.concat(numbers2);
console.log(val);

//sort
val = fruit.sort();
console.log(val);

val = numbers.sort();
console.log(val);

// using compare function
val = numbers.sort(function (x, y) {
  return x - y;
});
console.log(val);

// reverse sort
val = numbers.sort(function (x, y) {
  return y - x;
});
console.log(val);

//find
function under33(num) {
  return num < 33;
}

val = numbers2.find(under33);
console.log(val); // first number less then 33 will be returned
