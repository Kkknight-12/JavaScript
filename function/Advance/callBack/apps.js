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







