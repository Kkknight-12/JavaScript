// map creates a new array with the results of calling
// a callback one every element in the array

const texts = ['rofl', 'lol', 'omg', 'ttyl'];
console.log(texts)

// 
console.log('----map-----')
// t represent each on of string
const caps = texts.map(function (t)
                {
                // map is generating a new array which is stored in
                // variable called caps
                return t.toUpperCase();
            }
            );
console.log(caps);

// 
console.log('----num * 2-----')
const numbers = [20,21,23,24,26];

const output = numbers.map(function(num)
                  {
                    return num*2
                }
                );

console.log(output);


// 
// return object

const numOutput = numbers.map(function (n){
    return{
        value: n,
        // boolean
        // return true if remainder is 0
        isEven: n % 2 == 0

    }
})
console.log(numOutput)

// 
// array of string
const words = ['asap', 'byob', 'rsvp', 'diy'];

const outWords = words.map(function( word){
    return word.toUpperCase().split('').join('.')
})
console.log(outWords);

// 
console.log('--------------')
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
const title = books.map(function(book){
    return book.title
})
console.log(title)