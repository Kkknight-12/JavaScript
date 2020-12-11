// key with spaces can also be denifed with quotes 
let person = {
    'first name': 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking'],

    greet: function() {
        alert('Hi there!');
    },

    // key can also be defined as number
    // number must be >=0 , positive intiger
    1.1 : 'yoo',
};

// to console.log value square Bracket is used in which you define 
// key in quotes 
console.log(person['first name'])

// number key can also be accessed with bracket
console.log(person[1.1]) // ['1.1'] quotes can also be used but not needed as Js do that for us.

console.log(person)
// expanding the output will give us the sorted object
const movieList = document.getElementById('movie-list');

// an object that is made of number as key, when printed will always 
// give output in ascending order
const num = {5:'hey', 1: true}
console.log(num)

// movieList.style['backgroundColor'] = 'red';
// with square bracket css property name can also be used
//  namebackground-color
movieList.style['background-color'] = 'red';

movieList.style.display = 'block';
movieList.style.height = '2rem'