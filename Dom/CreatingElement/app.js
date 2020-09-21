//creating element

const li = document.createElement("li");

// Add class
li.className = "collection-item";
console.log(li);

// Add id
//setting id = "new-item"
li.id = "new-item";
console.log(li);

//Add Attribute
//setting title = "New Item"
li.setAttribute("title", "New Item");
console.log(li);

//
//create text node and append
// adding text hwllo world
li.appendChild(document.createTextNode("Hello World"));
console.log(li);
// creating link element and appending it to list item
const link = document.createElement("a");
// Add classes
link.className = "delete-item secondary-content";
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
// Appending link into li
li.appendChild(link);
// Apending li as child to ul
document.querySelector("ul.collection").appendChild(li);
console.log(li);
