const inputs = document.querySelectorAll('input')
console.log(inputs);

// taking first input
console.log(inputs[0]);

// .value
// when you write value in html page, it can be acessed with  .value
// work when the below code is written in crome
console.log(inputs[0].value);

// when input type is check box
// .checked is used
console.log(inputs[2]);

console.log(inputs[2].checked);
// it return true or false depending whether the box is checked or not

// 
// check input for range
console.log(inputs[3].value);

// placeholder
// check  for placeholder value
console.log(inputs[1].placeholder)
// changing the place holder  text
console.log(inputs[1].placeholder = 'enter password');

// 
// a tag AKA Anchor Tag
const a = document.querySelector('a');

// .href
// acessing the link with .href
console.log(a.href)
// updating the link 
console.log(a.href='http://www.google.com')
console.log(a.href)

// 
// img
const img = document.querySelector('img');

// acessing the href
console.log(img.src)

// changing the url
console.log(img.src  = 'https://images.unsplash.com/photo-1603536764976-e2d8a6d805fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80');
