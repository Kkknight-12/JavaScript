// local storage remain  untill you manually clear you setting
// session storage leave as you close the browser
// API is same for both

// set local storage item
localStorage.setItem("name", "jhon");
localStorage.setItem("age", 29);

//set session storage item
sessionStorage.setItem("name", "Knight");

//remove from storage
localStorage.removeItem("name");

//get from storage
const name = localStorage.getItem("name");
const age = localStorage.getItem("age");
console.log(name, age);

//clear local storage
localStorage.clear();
console.log(name, age);

//
//taking input and saving it to local storage
document.querySelector("form").addEventListener("submit", function (e) {
  const task = document.getElementById("task").value;
  // console.log(task);

  // taking the input
  // storing the input from user to local storage
  localStorage.setItem("task", task);
  alert("Task saved");

  e.preventDefault();
});
//above code will replace the old task with new to prevent this  we need to change code
//
// document.querySelector("form").addEventListener("submit", function (e) {
//   const task = document.getElementById("task").value;
//   // console.log(task);

//   // initialling let
//   let tasks;
//   //pulling out of local storage whatever in there or checking is something is in there
//   if (localStorage.getItem("tasks") === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//   }

//   tasks.push(task);

//   localStorage.setItem("tasks", JSON.stringify("tasks"));
//   // taking the input
//   // storing the input from user to local storage
//   alert("Task saved");

//   e.preventDefault();
// });
