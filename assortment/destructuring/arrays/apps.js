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
const [gold, silver, bronze] = raceResults;
console.log(`Gold goes to -- ${gold}`)
console.log(`Silver goes to -- ${silver}`)
console.log(`Bronze goes to -- ${bronze}`)
// 
// 
// selecting 1st and 4th result
const[ first, , ,fourth]= raceResults;
console.log(`First is -- ${first}`)
console.log(`Fourth is -- ${fourth}`)
// 
// selecting 1st as Winner 2nd as refree remaining as other

const[ winner, second, ...others]= raceResults;
console.log(`Winner is ${winner}. ${second} was on Second Position`)
console.log(`While others are ${others}`)
