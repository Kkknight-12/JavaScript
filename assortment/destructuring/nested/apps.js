const results = [
    {
        first: 'Luffy',
        last: 'Monkey D',
        devilFruit: 'Yes',
        status:'Alive'

    },
    {
        first: 'Portgas',
        last: ' D Ace',
        devilFruit: 'Yes',
        status:'Dead'
    },
    {
        first: 'Zoro',
        last: 'Ronoroa',
        devilFruit: 'No',
        status:'Alive'
    }
]

let [{last, status}] = results;
console.log(last,status)

// , is to skip object
// renaming devilFruit to fruitUser
const [,,{devilFruit: fruitUser}]= results;
console.log(fruitUser)


// skiping first object with comma
// selecting second object devil fruit
// and Third Object first name
const[, {devilFruit}, {first}] = results;
console.log(devilFruit, first)


