// callback and foreach 
// in callback function we pass function as an argument 
// (function(value) { console.log(value) })
// which is called in another function as a parameter-> myFunc
const myFunc = ( callbackFunc ) => {
    let value = 50;
    callbackFunc(value);
}
myFunc( function(value) {
    console.log(value)
});

// 
// 
function greeting( name = 'Knight' ) { // 5  name = 'Knight'
  console.log( 'Hello ' + name ); // 6 name = 'Knight'
}

function processUserInput( callback ) { // 2 greeting(name = 'Knight')
  var name = prompt( `Enter Your Name` ); // 3
  callback( name ); // 4 callback = greeting(name = 'Knight')
}

processUserInput( greeting ); // 1 greeting(name = 'Knight')


// 
//              resultHandler = (result)=>{..}, numbers 
const sumUp = ( resultHandler, ...numbers )=>{ //  numbers = [6, 2]
    // function with local scope
    // will run  only inside sumUp
    const validateNumber = (number) =>{ // number = 6, 2
        return isNaN(number) ? 0: number;
    }

    let sum = 0;
    for ( const num of numbers ){ // numbers = [6, 2]
        sum += validateNumber(num) // 6+2 = 8
    }
    resultHandler(sum); // resultHandler = (result) => { ${8} } 
}

const showResult = (result)=>{
    console.log(`result after adding all number is: ${result}`)
}
sumUp(showResult,6,2)


// setTimeout
// set time will run the code after certain number of seconds
function yoo (){
    console.log('how are yoouuu')
}
setTimeout(yoo, 200);
// 
setTimeout(function (){
    console.log('welcome');
}, 5000)


// selecting the button
const btn = document.querySelector('button');
// adding button to event
// clicking the button will trigger an event 
btn.addEventListener('click', function (){
    alert('WHY DID YOU CLICK ME!!!??')
});



// //////////////////////


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


// //////////////////////////////////////
// simplifying function inside function /
// /////////////////////////////////////
// const f2 = (ret) =>  (name)=>{
//         return {ret, name}
// }

const f2 = (ret) => {
    return function(name){
        return {ret, name}
    }
}
const f = f2('returrnnnn')


console.log(f('knight'))