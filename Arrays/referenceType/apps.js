// when working with premitive type
// we create a value type varaible

let fruit = "orange";
let color = "orange";
// changing fruit
fruit = "banana";
console.log(fruit);

// but the change don't affect color, it remain same
console.log(color);

// now changing the value of fruit

// reference type => arrays, objects
// making changes in one cause change in other
// value of refence type are not saved arrays
// they hold refrence to place in memory where the value is saved
// after equating 2 variables to same value they both get
// attached to the same reference soo making chaaging in one cause
// change in other

let nums = [2, 3, 4, 5];
let otherNum = nums;

console.log(nums);
console.log(otherNum);
//  other num equal to nums now

nums.push(9);
console.log(nums);
console.log(otherNum);
// 9 will be added to both the arrays
