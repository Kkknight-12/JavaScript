const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post')

/* 
for a post request where you want to create data on the server,
you need to add the data you want to create to the outgoing 
request and to do that, we need to tweak our function, 
the sendHttpRequest function to also expect a data argument 
or to support it at least. By default this can be null or it
actually is undefined by default so if we don't pass it so we don't need to set this up*/
function sendHttpRequest(method, url, data){ // receving post data from line 51
    const promise = new Promise( ( resolve, reject ) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = function() {
            resolve(xhr.response);
        }
        // append the data to outgoing request
        // we use send method and pass the data we want to send
        // Note: data must be a json data 
        // pass data to  JSON.stringify() to convert it to json format
        xhr.send(JSON.stringify(data)); // sending post data
    })
    return promise;
}

// function fetchPosts(){
//     sendHttpRequest( 'GET', 'https://jsonplaceholder.typicode.com/posts').then(
//         responseData => {
//             const listOfPosts = JSON.parse(responseData); // response data
//             for( const post of listOfPosts ){
//                 const postEl = document.importNode( postTemplate.content, true);
//                 postEl.querySelector('h2').textContent = post.title.toLowerCase();
//                 postEl.querySelector('p').textContent = post.body;
//                 listElement.append(postEl);
//             }
//         }
//     )
// }

function createPost( title, content ) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };
    // a post request add data to the server
    // again using sendHttpRequest function to send request
    sendHttpRequest( 'POST', 'https://jsonplaceholder.typicode.com/posts',
    post );
}
// or

// async function fetchPosts(){
//     const responseData = await sendHttpRequest( 
//         'GET', 'https://jsonplaceholder.typicode.com/posts' );
//         const listOfPosts = JSON.parse(responseData);
//         // const listOfPosts = responseData; // run if u run line 8 -> xhr.responseType = 'json';
//         for( const post of listOfPosts ){
//             const postEl = document.importNode( postTemplate.content, true );
//             postEl.querySelector('h2').textContent = post.title.toUpperCase();
//             postEl.querySelector('p').textContent = post.body;
//             listElement.append(postEl);
//         }
// }

// fetchPosts();
// 
createPost( 'DUMMY', 'A dummy post!' );



// const helix = { 'material' : 1000 , 
// 'boost' : 1500,
// // 'Map' : 1000,
// // 'sword' : 350
// }
// console.log(helix.material)
// let s = function () {
// let sum = 0;
// for( let i in helix ){
// sum += parseInt(helix[i])
// }
// return sum
// }
// console.log(s());