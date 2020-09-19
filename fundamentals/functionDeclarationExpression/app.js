//Function Decleration

function greet(name) {
  return `Hello ${name}`;
}
console.log(greet("knight"));

// defining  default

function greet(name = "Roku", lastname = "sensei") {
  return `Hello ${name} ${lastname}`;
}
console.log(greet());

//Function Expression

const square = function (x) {
  return x * x;
};

console.log(square(8));

// Imedialty invocable function expression -IIFs

(function () {
  console.log("IIFs Ran...");
})();

(function (name) {
  console.log(`Hello ${name}`);
})("Heroshi");

// Property Methods
//  defining name of function with add:
let todo = {
  add: function () {
    console.log("Add todo...");
  },
};
todo.add();

// editing function
// edit will use id
let todoE = {
  add: function () {
    console.log("Add todo...");
  },
  edit: function (i) {
    console.log(`Edit todo ${i}`);
  },
};
todoE.add();
todoE.edit(23);

// defining the same function outside this function

todoE.delete = function () {
  console.log(`Delete todo...`);
};

todoE.delete();
