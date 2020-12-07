// .createElement
const newh2 = document.createElement('h2')
console.log(newh2)

// putting some text into
// with .innerHTML
newh2.innerHTML = 'I like Animals!'
console.log(newh2)

// adding class special 
//  with .classList
newh2.classList.add('special')
console.log(newh2)

// .append
// appending the created element to webpage
// appending to section

const sec  =  document.querySelector('section');
sec.appendChild(newh2);


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
