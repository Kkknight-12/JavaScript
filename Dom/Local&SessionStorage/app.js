/* from w3school
When an HTML document is loaded into a web browser, it becomes a document object.
The document object is the root node of the HTML document.
*/

const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

//addEventListener
/* from w3school
The addEventListener() method attaches an event handler to the specified element.

Tip: Use the removeEventListener() method to remove an event handler that has been attached with the addEventListener() method.

Tip: Use the document.addEventListener() method to attach an event handler to the document.
*/

//CLick
// clearBtn.addEventListener("click", runEvent);
// //Event handeler
// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);
// }

//doubleClick
// clearBtn.addEventListener("dblclick", runEvent);
// //Event handeler
// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);
// }

//Mousedown
//click and hold to run mousedown
// clearBtn.addEventListener("mousedown", runEvent);
// //Event handeler
// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);
// }

//Mouseup
//click and hold and release to run Mouseup
clearBtn.addEventListener("mouseup", runEvent);
//Event handeler
function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
}

//MouseEnter
// runs when you scroll over the area covered by card
//card is class here
card.addEventListener("mouseenter", runEvent);
//Event handeler
function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
}

//MouseLeave
// runs when you leave the area covered by card
// card is class here
card.addEventListener("mouseleave", runEvent);
//Event handeler
function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
}

// Mouseover and Mouseout
// runs when you leave or enter area within the scope of element coverd
// here card is targeted so these command will run when you enter leave new area within the card such as clear tasks or list item
// card.addEventListener("mouseover", runEvent);
// //Event handeler
// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);
// }
// card.addEventListener("mouseout", runEvent);
// //Event handeler
// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);
// }

//Mousemove
// it will run as you enter and hover over the element
card.addEventListener("mousemove", runEvent);
//Event handeler
function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  // changing heading and giving coardinates of mouse movement
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  /* 
  body =>Sets or returns the document's body 
  
  style.backgroundColor=> is body object property it sets or returns the background color of a document
  */
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},40 )`;
}
