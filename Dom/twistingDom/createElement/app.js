// .createElement
// .createElement is always called on document which will create a new element 
const ul = document.createElement('ul') // only tag name will come inside quote
// console.log(ul)

// putting some text into
// with .innerHTML
// .innerHTML replace the existing containt with the new one
ul.innerHTML = 'I like Animals!'
// console.log(ul)

// adding class special 
//  with .classList
ul.classList.add('special')

// you can also create Html element with innerHtml
ul.innerHTML = ul.innerHTML + '<li>Item 2</li>'
console.log(ul)
// but innerHtml is not so good when you want to add something to the existing
// because it re render the html containt so data link input will be lost


// better approch is 
// .insertAdjacentHTML()

// .append
// appending the created element to webpage
// appending to section

const sec  =  document.querySelector('section');
sec.appendChild(ul);


// creating image tag
const newImg = document.createElement('img');
// adding the src 
newImg.src =  'https://images.unsplash.com/photo-1601758003839-512c0f4159e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'
newImg.style.width = '200px'

// appending the img tag to body element
document.body.appendChild(newImg);

// creating a tag
const newLink= document.createElement('a')
newLink.innerText =  "Youtube"

// adding href
newLink.href = 'https://www.youtube.com/';

// adding the a tag to another webpage element
// using heading tag h1 for it
const h1 = document.querySelector('h1');
h1.appendChild(newLink);
