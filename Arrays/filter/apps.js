// The filter() method creates a new array 
// with all elements that pass the test implemented 
// by the provided function.

// //////////////////////////
// using filter and indexOf /
// //////////////////////////
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']

// Filter array items based on search criteria (query)
const filterItems = (arr, query) => {
    return arr.filter( el => 
        el.toLowerCase().indexOf( query.toLowerCase() ) !== -1 )
}
console.log(filterItems(fruits, 'ap'))

// 
// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange', 'mango']
console.log(fruits.filter( el => el.indexOf('ap') !== -1) )

// 
// 
const info = [ {title: 'popat lal',  kam: 'Duniya Hilana'}, 
                {title: 'jetha lal'}, {title: 'champak lal'} ]
// checking first item of list
console.log(info[0].title)

// searching title with element pop
console.log( info.filter( name =>  name.title.includes('pop') ))

// 
// 
// argument one: will itter over each element -> mostly used
// argument two: is index of items in array -> used in some cases
// argument three is array itself -> rarely used

console.log(info.filter( ( name, index, titles ) => 
{ return  name.title.includes('pop') 
})
)

// //////////////////////////////////
// Modifying | Appending | Deleting /
// //////////////////////////////////

let words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
// Modifying each words
const modifiedWords = words.filter( (word, index, arr) => {
    arr[index+1] += ' extra'; // editing the list will start from 0+1 = index 1 i.e. limit
    // "spray", "limit extra", "exuberant extra", "destruction extra", "elite extra", "present extra"
  return word.length < 6
})

console.log(modifiedWords)

// Appending new words
wordsTwo = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
const appendedWords = wordsTwo.filter( (word, index, arr) => {
    arr.push('new') // 'new' will be the last element in array
    // and will be added to arr 5 times
    // console.log(arr)
    return word.length < 6
})

console.log(appendedWords)

// Deleting words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words.filter( (word, index, arr) => {
  arr.pop() // at each step last element from array will be deleted
  return word.length < 6 // this step will work from left to right
  // this will stop at 3rd element as above 2 step will work simultaneously
})
// output: ["spray" ,"limit"]
console.log(deleteWords)

// Notice 'elite' is not even obtained 
// as its been popped off `words` before filter 
// can even get there