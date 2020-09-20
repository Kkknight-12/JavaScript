//document.getElementById()

console.log(document.getElementById("main"));

console.log(document.getElementById("task-title"));

//get things from the element
console.log(document.getElementById("task-title").id);

//change styling
let taskTItle = document.getElementById("task-title");
taskTItle.style.background = "red";

taskTItle.style.color = "#f4f4f4";

taskTItle.style.padding = "10px";

//Change contant
taskTItle.textContent = "Task LIst";
taskTItle.innerText = "My LIst of Task";
taskTItle.innerHTML = "<span style='color:blue'>My LIst </span> of Task";

//document.querySelector()
//we dont have to select element by id
// it works like jquery
//  # for id , . for class like css
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));

// note if there is more than 1 h5 it will fetch the 1st one
document.querySelector("li").style.color = "red";

// target element when there are multiple elements
document.querySelector("li:last-child").style.color = "blue";
document.querySelector("li:nth-child(3)").style.color = "green";
document.querySelector("li:nth-child(3)").textContent = "hey how are you";
// this will target single first element
document.querySelector("li:nth-child(odd)").style.background = "#ccc";
document.querySelector("li:nth-child(even)").style.background = "#f4f4";
