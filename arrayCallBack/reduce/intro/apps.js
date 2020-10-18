const num = [3,5,7,9,11]
const sum = num.reduce((a,b)=>{
    return a + b
})
console.log(sum)

// 
// 
// max Number
const grade = [67,87,57,88,91,75,95,64,97]
const maxGrade = grade.reduce((max, curVal)=>
{
    if (curVal > max)
    {
     return curVal;
    }
    return max
})

console.log(maxGrade)

// second parameter
// initial value
const sumHundred =num.reduce((a,b)=>{
    return a + b
}, 100) // first value will be 100 in array to add
console.log(sumHundred);

// 
// 
const votes = ['y', 'n', 'y', 'y', 'y', 'n'];
const result = votes.reduce(
    (tally, val)=>{
        // if element in array then add one
        if(tally[val]){
            tally[val]++;
    // if element not in list 
    }else{
        tally[val] = 1;
    }
    return tally;
},  // initialise empty object to store values
   {}
)
console.log(result)

// 
// 
// short version
// boolean logic of (1||0) return 1
// boolean logic of (0||0) return 0
const short = votes.reduce(
        (tally, val) => {
        tally[val] = (tally[val] || 0) +1;
        {
            return tally;
        }
    }
, {}
)
console.log(short)

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

},
{
    title: 'The .........',
    author:'Brandon Sanderson',
    rating: 2.2

},
{
    title: 'The way........',
    author:'Brandon Sanderson',
    rating: 2.9

},
{
    title: 'of kings........',
    author:'Brandon Sanderson',
    rating: 1.6

},
{
    title: 'kings...........',
    author:'Brandon Sanderson',
    rating: 1.2

}
]

const groupedByRatings = books.reduce(
    (groupedBooks, book) => {
        // round of all the keys
        // 
        const key = Math.floor(book.rating);
        // if there is no key present
        // create empty array for key(2,3,4)
        if(!groupedBooks[key]){
            groupedBooks[key] = [];
        }
        // after creating empty array
        // push the values in that key
      groupedBooks[key].push(book);
      return groupedBooks;
    }, {}
)
console.log(groupedByRatings);