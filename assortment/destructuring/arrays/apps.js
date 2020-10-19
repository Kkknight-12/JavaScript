// DESTRUCTING
//  A short, clean syntax to unpack:
// - Values from arrays
// - Properties from objects
//  INto distinct variables.

const raceResults = [
    'Eliud KIpchoge',
    'Feyisa Lelisa',
    'Galen Rupp',
    'Ghrimay Ghebreslassie',
    'Alpacheno Simbu',
    'Jared Ward'
]
// creating variables for first 3
// order is important
const [gold, silver, bronze]= raceResults;
console.log(gold)
console.log(silver)
console.log(bronze)
// 
// 
// selecting 1st and 4th result
const[ first,,,fourth]= raceResults;
console.log(first)
console.log(fourth)
// 
// selecting 1st as Winner 2nd as refree remaining as other

const[ winner, second, ...others]= raceResults;
console.log(winner, second)
console.log(others)
