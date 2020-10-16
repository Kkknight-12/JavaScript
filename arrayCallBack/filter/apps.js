const nums = [9, 8, 7, 6, 5, 4, 2, 1];
const  odds = nums.filter(num => {
    return num %  2  === 1;
})
console.log(odds);
// 
const  evens = nums.filter(num => {
    return num %  2  === 0;
})
console.log(evens)
// 
const bigNums = nums.filter(  n => n > 6);
console.log(bigNums);

// 
// 
const books = [{
    title: 'Good Omens',
    author:['Terry  Pratchett', 'Neil Gaiman'],
    rating:4.25,
    genres:['fiction', 'fantasy']
},
{
    title: 'Changing My Mind',
    author:['Zadie  Smith'],
    rating:3.83,
    genres:['nonfiction', 'eassys']
},
{
    title: 'Bone: The Complete Edition',
    author:['Jeff  Smith'],
    rating:4.42,
    genres:['fiction', 'graphic novel', 'fantasy']
},
{
    title: 'American Gods',
    author:['Neil Gaiman'],
    rating:4.11,
    genres: ['fiction', 'fantasy']
}
]

const goodBooks = books.filter(

    b=> b.rating > 4.3
)
console.log(goodBooks)

const fantasyBooks = books.filter(
   book=> book.genres.includes('fantasy')
)
console.log(fantasyBooks)

const shortForm = books.filter(
    book=> book.genres.includes('short stories')||
    book.genres.includes('eassys')
)
console.log(shortForm);
// 
const query = 'American';
const results = books.filter( book =>
    { const title = book.title.toLowerCase();
       return title.includes(query.toLowerCase())
    });
console.log(results);