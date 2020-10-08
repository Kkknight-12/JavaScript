let letter = ["q", "w", "e", "r", "t", "y"];

//
console.log(letter);

// reverse the sequence
console.log(letter.reverse());

// // changes are save,so next time you run the array it is printed out in reversed order
console.log(letter);

// join()
// when  no condition is give the default value i.e ',' is used
console.log(letter.reverse().join(" "));

// you can change the default value
console.log(letter.join("-"));

//
console.log(letter.join("."));

//
console.log(letter.join("=> #"));
