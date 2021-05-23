// basic asynchronous program!
const printHelloWorld = () => {
  
  setTimeout(console.log, 2000, "World");
  
  console.log("Hello ");
}

printHelloWorld();

const asyncprintHelloWorld = () => {

    setTimeout(console.log, 4000, "...ronous!");

    setTimeout(console.log, 2000, "async");  
    
    console.log("I'm ");

}

asyncprintHelloWorld();

// Async functions always return a promise
// If the function returns a value, the promise will be resolved
// with that value
// if the function throws an exception, the promise will be rejected

async function hello() {
    return 'Heyyyy!'
}
// console.log(hello());
hello().then( (val) => {
    console.log('PROMISE RESOLVED WITH', val);
})
;

// 
async function add(x, y) {
    if ( typeof x !== 'number' || typeof y !== 'number' ) {
        throw 'X and Y must be numbers!';
    }
    return x + y;
}

add(2,4)
    .then( (val) => {
        console.log('PROMISE RESOLVED', val);
    })
    .catch( (err) => {
        console.log('PROMISE REJECTED', val);
    })


add('four',4)
    .then( (val) => {
        console.log('PROMISE RESOLVED', val);
})
    .catch( (err) => {
        console.log('PROMISE REJECTED', err);
})


// Rewrite above function

function multiply(x, y) {
    return new Promise(( resolve, reject ) => {
        if ( typeof x !== 'number' || typeof y !== 'number' ) {
            reject('X and Y must be numbers!');
        }
        resolve(x * y);
    })
}

multiply(4,4)
    .then( (val) => {
        console.log('PROMISE RESOLVED', val);
})
    .catch( (err) => {
        console.log('PROMISE REJECTED', err);
})

multiply('four',4)
    .then( (val) => {
        console.log('PROMISE RESOLVED', val);
})
    .catch( (err) => {
        console.log('PROMISE REJECTED', err);
})


// //////
//              ( {id: "123765"} ) ( "session-id", handleSession() )
//              ( { firstname: "Bob" } ) ( { id: "123765" }, handleUser() )
// (["lions", "tigers", "bears"]) ( {firstname: "Bob"}, handleFavorites() )
const mockAPI = (returnValue) => (arg, cb) => {
    // setTimeout(() => cb(returnValue), 2000)
    return cb(returnValue); // {id: "123765"} | { firstname: "Bob" } | [ "lions", "tigers", "bears" ]
}

const fetchSession = mockAPI({ id: "123765" })
const fetchUser = mockAPI({ firstname: "Bob" })
const fetchUserFavorites = mockAPI([ "lions", "tigers", "bears" ])

const runCallbacksFlat = () => {

    const handleFavorites = (favorites) => { // ( ["lions", "tigers", "bears"] )
        console.log(favorites)
    }

    const handleUser = (user) => { // { firstname: "Bob" }
        //        {firstname: "Bob"}, handleFavorites()
        fetchUserFavorites(user, handleFavorites)
    }

    const handleSession = (session) => { // { id: "123765" }
        //   { id: "123765" }, handleUser()
        fetchUser(session, handleUser)
    }

    fetchSession("session-id", handleSession)
}
runCallbacksFlat();

//////////////////////////////////////////////////////////
// small function to understand above callback hellllll
//         ( {Name: "Knight"} ) ( "workkkk", fun5 )   
const fun3 = (returnValue) => ( arg , cb) => {
    // console.log(arg) // workkkk
    return cb(returnValue)
}

const fun2 = fun3( { Name: "Knight" } );

const fun1 = function() {

    const fun5 = (user) => {
        console.log(user)
        // { Name: "Knight" }
    }

    fun2( "workkkk", fun5 ) 
};

fun1()