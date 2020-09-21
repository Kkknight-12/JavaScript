/* w3schools
JavaScript HTML DOM EventListener
The addEventListener() method attaches an event handler to the specified element.
The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

Event Bubbling or Event Capturing?
There are two ways of event propagation in the HTML DOM, bubbling and capturing.

Event propagation is a way of defining the element order when an event occurs. If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?

In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.

In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.

With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter:
*/

const card = document.querySelector(".card-title");

card.addEventListener("click", runEvent);

function runEvent(e) {
  console.log(`card title`);
}

//
// bubbling an even
// bubble flow in upward direction to parent element will be called here, upward direction

// document.querySelector(".card-title").addEventListener("click", function () {
//   console.log("card-title");
// });
// document.querySelector(".card-content").addEventListener("click", function () {
//   console.log("card-content");
// });
// document.querySelector(".card").addEventListener("click", function () {
//   console.log("card");
// });
// document.querySelector(".col").addEventListener("click", function () {
//   console.log("col");
// });

//
//EventDelegation=> opposite of bubbling, run in downward direction

const delItem = document.querySelector(".delete-item");
delItem.addEventListener("click", deleteItem);
function deleteItem() {
  console.log(`delete item`);
}

// document.body.addEventListener("click", deleteItem);
// function deleteItem(e) {
//   if (e.target.parentElement.classList.contains("delete-item")) {
//     console.log(`delete item`);

//     //deleting the list item
//     //when we click the target x its parent element is a tag
//     // we want to delete whole list item which is parent of a tag
//     // we will go from a to i to a then to li
//     e.target.parentElement.parentElement.remove();
//   }
// }
