let movies =['The Fantastic Four',
            'Mr. and Mrs. Smith',
            'Mrs. Doubtfire',
            'Mr. Deeds']


// find
// includes
// stops after finding the first match
let movie = movies.find(
    movie => {
        return movie.includes('Mr.')
    }
)
console.log(movie)

// indexOf
// where Mrs index is zero
let movie2 = movies.find(
    m=> m.indexOf('Mrs')===0);
console.log(movie2)

let movie3 = movies.find(m=>
     m.indexOf('Mrs')===8);
console.log(movie3)
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

const goodBook = books.find(b => 
    b.rating >= 4.3)
console.log(goodBook)

const neilBook = books.find(b => 
    b.author.includes('Neil Gaiman'))
console.log(neilBook);

