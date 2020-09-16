const name = "Jhon";
const age = 31;
const job = "Web Developer";
const city = "Miami";

//without templete strings (es5)
// html =
//   "<ul><li>Name: " +
//   name +
//   "</li><li>Age: " +
//   age +
//   " </li><li>Job: " +
//   job +
//   "</li><li>City: " +
//   city +
//   " </li></ul>";

// document.body.innerHTML = html;

// with  templete strings (es6)
html1 = `
<ul> 
    <li>Name: ${name}</li> 
    <li>Age: ${age}</li> 
    <li>Job: ${job}</li> 
    <li>City: ${city}</li> 
</ul> 
`;

document.body.innerHTML = html1;

// you can add fucntion string
function hello() {
  return "hello";
}

html1 = `
<ul> 
    <li>Name: ${name}</li> 
    <li>Age: ${age}</li> 
    <li>Job: ${job}</li> 
    <li>City: ${city}</li> 
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? "over 30" : "Under 30"}</li>
</ul> 
`;

document.body.innerHTML = html1;
