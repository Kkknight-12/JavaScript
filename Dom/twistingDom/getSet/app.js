// get Attribute
const range = document.querySelector('input[type="range"]')

// 
console.log(range.getAttribute('max'))
console.log(range.getAttribute('min'))
console.log(range.getAttribute('type'))

// set Attribute
console.log(range.setAttribute('min', '-500'));
// change the type
console.log(range.setAttribute('type', 'radio'));

