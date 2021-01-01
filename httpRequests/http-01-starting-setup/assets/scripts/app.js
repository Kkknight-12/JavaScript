const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post')

/* 
to create an http request you need to create a new xml http request object(xhr)

syntax new XMLHttpRequest() to create new xml http request object */

const xhr = new XMLHttpRequest();

// .open() takes two argument
// first argument is  http method -> here GET
// sec argument is URL you want to send request
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

/* 
parsing the data from repsonse to get the output.
.response() will be used to get the response output
*/
xhr.onload = function() {
    // JSON.parse will convert the json format to js array
    const listOfPosts = JSON.parse(xhr.response);
    // console.log(listOfPosts);
    for( const post of listOfPosts ){
        /* 
        importNode() method creates a copy of a Node or 
        DocumentFragment from another document, to be 
        inserted into the current document later.
        */
        const postEl = document.importNode( postTemplate.content, true);
        postEl.querySelector('h2').textContent = post.title.toLowerCase();
        postEl.querySelector('p').textContent = post.body;
        listElement.append(postEl);
    }
}

// or you can set the response type to json and 
// js will do the rest of the conversion job
// xhr.responseType = 'json';
// xhr.onload = function() {
//     const listOfPosts = xhr.response
//     console.log(listOfPosts);
// }

// .send() is used to send the request
xhr.send(); 

game = 5200
cloths = 6000;
dumbell = 8000;
udemy = 8640
6480;