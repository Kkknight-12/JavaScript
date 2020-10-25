const p = document.querySelector('p');
console.log(p.style)
// return empty properties

// //////////////////////////////////
// .style                           /  
// you can't access                 /  
// style property with .style       /
// you can  access style properties /
// that you have set through html 
// called inline.
// But you can change the existing  /
// property                         /
// 
// //////////////////////////////////

// accessing peroperty set through html
const  h1 = document.querySelector('h1')
console.log(h1.style.color)

// changing style
// .style.color
// changing color
p.style.color = 'blue'
// checking color
console.log(p.style.color)

// changing background color
// .style.backgroundColor = 
// checking background color
p.style.backgroundColor ='#eeee'
console.log(p.style.backgroundColor)

// 
const allLis = document.querySelectorAll('li');
console.log(allLis);
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// assigning color to each li
allLis.forEach((el,i)=>{
    const color = colors[i];
    console.log(el, color)
});