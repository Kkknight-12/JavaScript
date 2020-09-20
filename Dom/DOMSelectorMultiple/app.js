var items = document.getElementsByClassName("collection-item");
console.log(items);

console.log(items[0]);
// changing the first item color to red
items[0].style.color = "red";

items[0].textContent = "changing the text";

//
// querySelector

// selecting the ul element then class collection-item
//  this method will help when you have two or more classes with same name, here we are targeting the class colletion-item from ul
var listitems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");
console.log(listitems[0]);

//
//get elements by tag names
var lis = document.getElementsByTagName("li");
console.log(lis);
console.log(lis[0]);
lis[0].style.color = "blue";
lis[0].textContent = "changing text with element selector";

console.log(lis);

//
// converting html collection to array
lis = Array.from(lis);
lis.reverse();
console.log(lis);

lis.forEach(function (li, index) {
  console.log(li.className);
  li.textContent = `${index} changing the whole list text`;
});
console.log(lis);
// no need to convert to array if you are using for loop as for loop use length which work with html elements

//
//
//document.querySelectorAll
// return nodelist so no need to convert items to Array
//ul -> class="collection" then li=> class="collectionitem"
var newitems = document.querySelectorAll("ul.collection li.collection-item");

newitems.forEach(function (item, index) {
  item.textContent = `${index} changing the whole list text`;
});
console.log(newitems);

//
var liOdd = document.querySelectorAll("li:nth-child(odd)");
var liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function (li, index) {
  li.style.background = "#ccc";
});
console.log(liOdd);
// for loop will also work
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}
console.log(liOdd);
