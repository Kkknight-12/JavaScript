let val;

const list = document.querySelector("ul.collection");
val = list;
console.log(val);

const listItem = document.querySelector("li.collection-item:first-child");
val = listItem;
console.log(val);

//get child nodes
val = list.childNodes;
console.log(val);
//but childNodes also count the children which can include line brekas
val = list.childNodes[0];
console.log(val);
val = list.childNodes[0].nodeName;
console.log(val);
val = list.childNodes[1].nodeType;
console.log(val);
// 1 - Element
// 2 - Attributes (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

//Get children element nodes
//it will return html collection/ elements
val = list.children;
console.log(val);

val = list.children[0];
console.log(val);

//changing the text conten
list.children[1].textContent = "changing text";

// children of children
// it will give delete link which is children of 4 the element
val = list.children[3].children[0];
console.log(val);

// adding id
list.children[3].children[0].id = "test-link";
val = list.children[3].children[0];
console.log(val);

// first child
// it will give first node whether it is element or not
val = list.firstChild;
console.log(val);

// firstElementChild
// selecting first child element
val = list.firstElementChild;
console.log(val);

// lastElementChild
val = list.lastElementChild;
console.log(val);

// counting number of children
val = list.childElementCount;
console.log(val);

//get parent node
val = listItem.parentNode;
console.log(val);

val = listItem.parentElement;
console.log(val);

// looking at parent of parent
// ul is made under div with class="card-action"
val = listItem.parentElement.parentElement;
console.log(val);

//get next sibling
val = listItem.nextSibling;
console.log(val);

//next element sibling
val = listItem.nextElementSibling;
console.log(val);
// next to next sibling
val = listItem.nextElementSibling.nextElementSibling;
console.log(val);

// Get prev sibiling
val = listItem.previousSibling;
console.log(val);
val = listItem.previousElementSibling;
// output is null as we are looking at the fist item in list and there is no previous sibling
console.log(val);
