// The filter() method creates a new array 
// with all elements that pass the test implemented 
// by the provided function.

const info = [ {title: 'popat lal',  kam: 'Duniya Hilana'}, {title: 'jetha lal'}, {title: 'champak lal'} ]
console.log(info[0].title)

// searching title with element pop
console.log( info.filter( name =>  name.title.includes('pop') ))


// argument one: will itter over each element -> mostly used
// argument two: is index of items in array -> used in some cases
// argument three is array itself -> rarely used

console.log(info.filter( ( name, index, titles ) => //index is
{ return  name.title.includes('pop') 
})
)

let words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']

const modifiedWords = words.filter( (word, index, arr) => {
    arr[index+1] +=' extra'; // editing the list will start from 0+1 = index 1 i.e. limit
    // "spray", "limit extra", "exuberant extra", "destruction extra", "elite extra", "present extra"
  return word.length < 6
})

console.log(modifiedWords)

// words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
// const appendedWords = words.filter( (word, index, arr) => {
//   arr.push('new')
//   return word.length < 6
// })

// console.log(appendedWords)

// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

// /**
//  * Filter array items based on search criteria (query)
//  */
// const filterItems = (arr, query) => {
//   return arr.filter( el => 
//     el.toLowerCase().indexOf(query.toLowerCase()) !== -1 )
// }
// console.log(filterItems(fruits, 'ap'))



// // ////
// let words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']

// const modifiedWords = words.filter( (word, index, arr) => {
// //   const ama = 
//   arr[index+1] +=' extra';
// //   console.log(ama)
//   return word.length < 6
// })

// console.log(modifiedWords)

// words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
// const appendedWords = words.filter( (word, index, arr) => {
//   arr.push('new')
//   return word.length < 6
// })

// console.log(appendedWords)

// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange', 'mango']
// console.log(fruits.filter( el=> el.indexOf('a') !== -1))

// const indexOfFirst = fruits.indexOf('mango')
// console.log(fruits.indexOf('mango', (indexOfFirst + 1 )))

// const term = 'bananana'
// console.log(term.indexOf('na', 3))

// /**
//  * Filter array items based on search criteria (query)
//  */
// const filterItems = (arr, query) => {
//   return arr.filter( el => 
//     el.toLowerCase().indexOf(query.toLowerCase())  )
// }
// console.log(filterItems(fruits, 'ap'))