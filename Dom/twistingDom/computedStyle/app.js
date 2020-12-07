const li = document.querySelector('li');

// ///////////////////////////////////
// getComputedStyle return all the  //
// return all the properties in css //
// ///////////////////////////////////
const styles = getComputedStyle(li)
console.log(styles)

// get color propery
console.log(styles.color)

// change color
li.style.color = 'red';

// now color propery is changed to 
// red rgb value
console.log(styles.color)

console.log('-------------------')

// /////////////////////////////////
// getComputedStyle vs .style      /
// with .style you can only access /
// inline style                    /
// with getComputedStyle you can   /
// access all 3 css style          /
// i.e inline, internal, external  /
// /////////////////////////////////
const h1 = document.querySelector('h1');
const compStyles = getComputedStyle(h1)

console.log(compStyles.color)
console.log(compStyles.fontSize)

// accessing same with .style
// return empty string
console.log(h1.style.color)
console.log(h1.style.fontSize)