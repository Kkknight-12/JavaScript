const button = document.querySelector('button');


// arrow function ignore any bind you have assign
// so this will refer to window object
button.addEventListener('click', event => {
  event.stopPropagation();
  console.log('arrow function target the window object');
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// normal function this refer to current target 
list.addEventListener('click', function(event) {
  button.click(); // will triger the button element
  console.log('in normal function this target to the event which is ul here')
  console.log(this);
});
