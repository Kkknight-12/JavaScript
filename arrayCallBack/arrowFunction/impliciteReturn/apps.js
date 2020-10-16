// use when you have single return

// const square = n => {
//     return n*n;
// }

// we are removing return
// using parenthesis
// but with paranthesis we can only have one return
const square = n =>
    ( n * n )
console.log(square(8))

// 
// making it more shorter
// single line
const triple = n => n*n*n;
console.log(triple(8))

// 
// 
const nums = [1,2,3,4,5,6,7,8,9]

const triple1 = nums.map(function(i){
    return i *  3
})
console.log(triple1)

const triple2 = nums.map(i => {
    return i * 3
});
console.log(triple2)

// 
// removing curly brackets and  return
const triple3 = nums.map(n => n * 3)
console.log(triple3)

// 
// using curly bracket for multiple return
const parityList = nums.map(function (i)
{
    if( i % 2 == 0){
        return 'even'
    }
    return 'odd'
});
console.log(parityList);

const parityList1 = nums.map(
    (i) => {
    if( i % 2 == 0){
        return 'even';
    }
    return 'odd';
});

console.log(parityList1);
