// function sum(){
//     // you fist need to open the
//     const argsArr = [...arguments]
//     return argsArr.reduce((total, currVal)=> {
//         return total + currVal
//     })
// }
// console.log(sum(1,2,3))

// 
// 
//  rest function
function sum(...nums){
    return nums.reduce((total, currVal)=> {
        return total+ currVal
    })
}
console.log(sum(1,2,3))
// 
// 
// function with fistname, last name, and list of titles
// rest parameter must be the last parameter
function fullName(first, last, ...titles){
    console.log('first', first)
    console.log('last', last)
    console.log('titles',titles)
}
fullName('tom', 'jones', 'III', 'order of')

// 
// 
// we can write an arrow function
const multiply = (...nums)=>(
     nums.reduce( (total, currVal) => total * currVal )
)
console.log(multiply(1,2,3))