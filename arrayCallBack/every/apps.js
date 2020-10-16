const words = ['dog','dig','log','bag','wag'];

// every
// condition must apply to all element of array
// return true when satisfy condition
const all3 = words.every(
    word=> word.length === 3);
console.log(all3)
// 
const all2 = words.every(
    word=> word.length === 2);
console.log(all2)

// 
// 
// every words last word is g
const allEndG = words.every(
    word=>{
    const last = word.length-1;
    return word[last] ==='g'
})
console.log(allEndG);
// 
// every word is a
// every word ends with d
const allEndA = words.every(
    word=>{
    const last = word.length-1;
    return word[last] ==='d'
})
console.log(allEndA);

// 
// 
// 
const books = [{
    title: 'Good Omens',
    author:['Terry  Pratchett', 'Neil Gaiman'],
    rating:4.25
},
{
    title: 'Bone: The Complete Edition',
    author:['Jeff  Smith'],
    rating:4.42
},
{
    title: 'American Gods',
    author:['Neil Gaiman'],
    rating:4.11
}
]
const allGoodBooks = books.every(
    book => book.rating > 4.5)
    console.log(allGoodBooks)

// ////////////////
// some          //
// /////////////// 
const someStartWithD = words.some(
    word=>{
    const first = word[0];
    return first ==='d'
})
console.log(someStartWithD);
// 
// const someStartWithD = words.some(word => word[0]==='d')
// console.log(someStartWithD);
// 
const everyStartWithD = words.every(word => word[0]==='d')
console.log(everyStartWithD);

// 

const any2Authors = books.some(
    book => book.author.length ===2
)
console.log(any2Authors)









