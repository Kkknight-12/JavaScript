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

//create text node and append
li.appendChild(document.createTextNode("Hello World"));
console.log(li);
