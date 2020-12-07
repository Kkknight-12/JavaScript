/* w3schools
The Document Object=> When an HTML document is loaded into a web browser, it becomes a document object.
The document object is the root node of the HTML document.
querySelector=> Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document

|syntax|
var x = document.querySelectorAll(".example");
*/
const form = document.querySelector("form");
const taskInput = document.getElementById("task");

// walk the dog is hard coded so you can remove  it by running
// taskInput.value = "";

//  The document.addEventListener() method attaches an event handler to the document.
form.addEventListener("submit", runEvent);

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  // the above command run and output flicks to prevent it we change default behaviour
  // sometime the form redirect to some page which can be seen by adding action = "http://google.com" to
  // <form id="task-form" action = " "></form>
  e.preventDefault();

  // if you want to return the input value you can run this
  // <input type="text" name="task" id="task" value="Walk the dog">
  console.log(taskInput.value);
}

//
// keydown run when you type something
// keydown is pressing the key
taskInput.value = "";
taskInput.addEventListener("keydown", runEvent);

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);

  // target is the event that happens
  /*The target event property returns the element that      triggered the event.
  The target property gets the element on which the event originally occurred, opposed to the currentTarget property, which always refers to the element whose event listener triggered the event.
  |syntex|
  var x = event.target.tagName;
*/
  console.log(e.target.value);
}

//
//converting the input to heading
const heading = document.querySelector("h5");

function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
  console.log(e.target.value);
  /*
  innerText property sets or returns the text content of the specified node, and all its descendants.

If you set the innerText property, any child nodes are removed and replaced by a single Text node containing the specified string.
  */
  heading.innerText = e.target.value;
}
