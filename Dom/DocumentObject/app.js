let val;

val = document;
console.log(val);

// html collection from entire document tags
val = document.all;
console.log(val);

//indexing 1st one
val = document.all[0];
console.log(val);

// getting total number of elements in dom/document
val = document.all.length;
console.log(val);

//indxing head and body
val = document.head;
console.log(val);

val = document.body;
console.log(val);

// some other general commands
val = document.doctype;
console.log(val);

val = document.domain;
console.log(val);

val = document.URL;
console.log(val);

val = document.characterSet;
console.log(val);

val = document.contentType;
console.log(val);

// selecting stuffs without using selectors
val = document.forms;
console.log(val);

val = document.forms[0];
console.log(val);

val = document.forms[0].id;
console.log(val);

val = document.forms[0].method;
console.log(val);

val = document.forms[0].action;
console.log(val);

val = document.links;
console.log(val);

val = document.links[0];
console.log(val);

val = document.links[0].id;
console.log(val);

val = document.links[0].className;
console.log(val);

val = document.links[0].classList;
console.log(val);

val = document.links[0].classList[0];
console.log(val);

val = document.images;
console.log(val);

val = document.scripts;
console.log(val);

val = document.scripts[2].getAttribute("src");
console.log(val);

let scripts = document.scripts;
let scriptsArray = Array.from(scripts);
console.log(`Scripts converted to array${scriptsArray}`);

scriptsArray.forEach(function (script) {
  console.log(script);
});