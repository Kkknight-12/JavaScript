const eve = document.getElementById('btn-evn');

// wrong way of removing event
// these add and remove event may look same
//  but are targeting differnt event
// eve.addEventListener('click', ()=> {
//     console.log('clicked')
// })

// eve.removeEventListener('click', ()=>{
//     console.log('clicked')
// })
// this remove will fail as both anonymous look same
//  but are targeting different objects
// both create two different object.

// if .bind(this) is used it will also create a new object
// so this method will also fail

// ////////////////////////////////////////////
// event listern and event name must be same  /
// i.e click , buttonClickHandler             /
// ////////////////////////////////////////////

const buttonClickHandler = () =>{
    console.log('you clicked')
};

eve.addEventListener('click', buttonClickHandler)
// after 2sec remove will trigger
setTimeout( () => {
    eve.removeEventListener('click', buttonClickHandler)
}, 2000)

// ///////////////////////////////////////////
// to make bind(this) work you need to store /
// that in variable as above                 /
// ///////////////////////////////////////////

// const boundFn = buttonClickHandler.bind(this);

// eve.addEventListener('click', boundFn)

// setTimeout( () => {
//     eve.removeEventListener('click', boundFn)
// }, 2000)