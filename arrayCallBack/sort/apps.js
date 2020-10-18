const prices =[400.50, 3000, 99.99, 35.99, 12.00, 9500]

// sort convert number to string
//  then arrange them
console.log(prices.sort());

// creating function
// if compareFunc(a,b) return less than 0.
// sort a before b.
// if return 0 then leave a and b unchanged with respect to each other.
// if return greater than 0 sort b before a.

// sorting update the original array
// using slice to make new array
const ascSort = prices.slice().sort((a, b) => a - b);


console.log(ascSort)

// 
const descSort = prices.slice().sort((a, b) => b - a);
console.log(descSort)

console.log(prices);
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
},
{
    title: 'Lord of the flies',
    author:'William Golding',
    rating:3.67

},
{
    title: 'The way of kings',
    author:'Brandon Sanderson',
    rating: 4.67

}
]

const descSortRating = books.slice().sort((a, b) => b.rating - a.rating);
console.log(descSortRating)
