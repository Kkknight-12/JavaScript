function add(x,y){
    return x + y;
}

console.log(add(9,2))

const total = add(4,5)
console.log(`total is ${total}`)

console.log('---------------')


// multiple return

function isBlack(color){
    if(color.toLowerCase() === 'black'){
        return true;
    }
    return false;
}
console.log(isBlack('black'));
console.log(isBlack('green'));

// shorter way
function isBlue(color){
    return (color.toLowerCase() === 'blue');
        
}
console.log(isBlue('blue'));
console.log(isBlue('green'));


console.log('---------------')
// working with  array

function containsPurple(arr){
    for(let color of arr){
        if(color.toLowerCase() ==='purple' || color.toLowerCase() ==='magenta'){
            return true;
        }
    }
    return false;
}
console.log(containsPurple(['Purple', 'black', 'magenta']))

console.log(containsPurple(['green','black']))