/* 
you can use JSON.stringfy() to convert
array of object to JSON  */

const todos = [
    {breakfast: ' waffles', popularity: 3 },
    { breakfast: 'sandwiches', popularity: 4},
    { breakfast: 'becon', popularity: 2}
]

localStorage.setItem('todos', JSON.stringify(todos))
// now the stored object is json type
const stored = localStorage.getItem('todos');
console.log(stored)


// convert  JSON to array( java script object )
//  JSON.parse
console.log(JSON.parse(stored))
// now you can access the data
const jsStored = JSON.parse(stored)
console.log(jsStored[0].breakfast)

