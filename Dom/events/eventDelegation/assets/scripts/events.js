// Event delegation refers to the process of using event 
// propagation (bubbling) to handle events at a higher level 
// in the DOM than the element on which the event originated. 
// It allows us to attach a single event listener for 
// elements that exist now or in the future.
const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// listItems.forEach(listItem => {
//   listItem.addEventListener('click', event => {
//     event.target.classList.toggle('highlight');
//   });
// });

// The closest() method searches up the DOM tree for the 
// closest element which matches a specified CSS selector. It 
// starts at the element itself, then tests the parent, 
// grandparent, and so on until a match is found. If a match 
// is not found, this method returns null.
list.addEventListener('click', event => {
  // console.log(event.currentTarget);
  // event.target.classList.toggle('highlight');
  event.target.closest('li').classList.toggle('highlight');
});
