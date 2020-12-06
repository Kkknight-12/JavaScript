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
    alert('how are yoouuu')
}
setTimeout(yoo, 200);
// 
setTimeout(function (){
    alert('welcome');
}, 5000)


// selecting the button
const btn = document.querySelector('button');
// adding button to event
// clicking the button will trigger an event 
btn.addEventListener('click', function (){
    alert('WHY DID YOU CLICK ME!!!??')
});







