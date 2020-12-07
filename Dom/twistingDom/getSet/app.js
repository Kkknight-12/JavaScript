// get Attribute
const range = document.querySelector('input[type="range"]')

// 
console.log(range.getAttribute('max'))
console.log(range.getAttribute('min'))
console.log(range.getAttribute('type'))

// set Attribute
range.setAttribute('min', '-500');
console.log(range.getAttribute('min'))
// change the type
range.setAttribute('type', 'radio');
console.log(range.getAttribute('type'))


// Set Attribute vs change value through .value method
const d = document.querySelector('#items')
const d_one = d.querySelector('input[value="Name"]');
console.log(d_one)
d_one.value = 'Naya Naam'
console.log(d_one.value)
// change made throught .value can't be seen in element  
// tab in crome dev tool


// when you change the attribute with setAttribute
//  you make the changes to html
// making changes to the html content
// can be accessed throught element tab in crome dev tool
// but it can't overwrite the value on Html page
// Html page will still show the old value
// .ie Naya Naam
d_one.setAttribute('value', 'new Name')
console.log(d_one.value)

// reseting Attribute in your crome html
// value here reflect what you have defined with 
// setAttribute('value', 'new Name') or in you html file
d_one.value = d_one.getAttribute('value') 
console.log(d_one.value)