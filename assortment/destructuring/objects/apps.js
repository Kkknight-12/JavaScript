const data = {
    first : 'Luffy',
    last: 'Monkey D',
    born: 'EastBlue',
    title:'Pirate King'
}


const {first, last, time} = data;
console.log(first)
console.log(last)
// when varaible name is not a key in object
console.log(time)

// change key name from first to name
const {first: name} = data;
console.log(name)
// 
// 
const data1 = {
    namee : 'Garp',
    last: 'Monkey D',
    born: 'EastBlue',
    title:'Marine Hero'
}
// using rest
const {namee,...other} = data1;
console.log(namee, other)


