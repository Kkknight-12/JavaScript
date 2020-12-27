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

/* 
-- creating tag templates --
A tag template is in the end a function that works 
together with a template literal. It all starts by 
creating a function
 */

function productDescription( strings, productName, productPrice ){
  console.log(strings); // first argument is non dynamic part of temlate string
  console.log(productName);
  console.log(productPrice);
  let priceCategory = 'cheap';
  if(productPrice > 20){
    priceCategory = 'fairly priced'
  }
  return `${strings[0]}${productName}${strings[1]}${priceCategory}${strings[2]}`
}

const prodName = 'JavaScript Course';
const prodPrice = 21.00;

// after function name paranthesis are not used
// template literals are used
// Behind the scenes, Javascript will call this 
// function and pass in this template literal 
// but not just like this as a single string but it 
// will actually split it up into
const productOutput = productDescription`This product (${prodName}) is ${prodPrice}.`
/* 
Now I said that Javascript would call this function and 
pass this in but not as a single argument but actually
as three argument
*/
console.log(productOutput);