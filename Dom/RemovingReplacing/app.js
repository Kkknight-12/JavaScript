// Replacing Elements

//Create Element
const newHeading = document.createElement("h2");
console.log(newHeading);

// Add id
newHeading.id = "task-title";

// new next node
newHeading.appendChild(document.createTextNode("New Task List"));

// Get the old heading
const oldHeading = document.getElementById("task-title");
// selecting Parent to repalce heading
const cardAction = document.querySelector(".card-action");

//Replace
cardAction.replaceChild(newHeading, oldHeading);
console.log(newHeading);

//
// removing elements
const lis = document.querySelectorAll("li");
//removing the first list item
lis[0].remove();
// Remove child element
const list = document.querySelector("ul");
list.removeChild(lis[3]);

// Class & ATTR
//selecting fist list item
const firstLi = document.querySelector("li:first-child");
console.log(firstLi);
//selecting a tag inside this item which is child
console.log(firstLi.children[0]);
//putting link in variable to work further
const link = firstLi.children[0];

let val;
val = link.className;
// getting list of classes ie class="delete-item secondary-content"
// val = link.classList;
// // geting the first class in list i.e delete-item
// val = link.classList[0]
// // adding test to class names so class will be  =' delete-item secondary-content test
// link.classList.add('test')
// val = link;
// console.log(val);
// // you can also remove the class
// link.classList.remove('test')
// val = link;
// console.log(val);

//Attribute
// getting attribute
val = link.getAttribute("href");
console.log(val);
//setting attribute
val = link.setAttribute("href", "http://google.com");

// checking if there is attribute
val = link.hasAttribute("href");
console.log(val);
val = link.hasAttribute("title");
console.log(val);
//adding title attribute giving it name google
link.setAttribute("title", "google");
val = link.hasAttribute("title");
console.log(val);
//removing title
link.removeAttribute("title");
val = link;
console.log(val);
