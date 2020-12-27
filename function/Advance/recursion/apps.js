function powerOf( x, n ){  // x = 2, n = 3

    if( n == 1){ // n = 3
        return x;
    }
    return x * powerOf( x, n - 1 ); // 3-1, 2-1, 1 

}
console.log( powerOf( 2, 3 ) );

/* 
it is a nested loop
powerOf(x, n - 1) will trigger another
if check and
return x * powerOf( x, n - 1 ) 
*/

const myself = { 
    name: 'max',
        friends: [
            { name: 'Manuel',
                friends: [
                    { name: 'Chris',
                        friends: [ {name: 'Hari'}, {name: 'Amilia'} ]
                    }
                ]
            }, 
            {name: 'Julia'}
        ]
}
console.log(myself)

function getFriendNames( person ){
    const collectedNames = [];

    if( !person.friends ){
        return [];
    };

    for( const friend of person.friends ){
        collectedNames.push( friend.name );
        // the function call itself which will make it
        // loop through any level of nested array
        collectedNames.push( ...getFriendNames(friend) );
        // nested array are list item so we have to take
        // each element out of it with spread
        // if not done friends of friend will be in another array
        // ["Manuel", Array(2), "Julia", Array(0)]
    }
    return collectedNames;
}
console.log(getFriendNames(myself));

console.log(Math.floor(Math.random() * 20 ) + 10)
console.log(Math.floor(Math.random() * (20 - 10 + 1) + 10))