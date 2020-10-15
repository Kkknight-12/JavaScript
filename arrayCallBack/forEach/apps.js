// forEach

const numbers = [20,21,22,23,24,25,26,27];

console.log('-----forEach( function (num)----')
numbers.forEach( function (num){
 console.log(num*2);
})


// 
// second parameter for foreach
// index
console.log('----forEach( function (num, idx)-----')

numbers.forEach( function (num, idx){
    console.log(idx, num)
})

console.log('--------------------')

// 
// creating funcion name printTriple
// adding forach to it
function printTriple(n){
    console.log(n*3)
}
numbers.forEach(printTriple);

// 
// 
console.log('------forEach------')
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

books.forEach(function(book){
    console.log(book.title.toUpperCase())
})


// loop which work  same
console.log('------loop which work  same------')
for(let book of books){
    console.log(book.title.toUpperCase()
        )
}

// 
console.log('-----Normal Loop-----')
for (let i = 0; i< books.length; i++){
    console.log(books[i].title.toUpperCase())
}