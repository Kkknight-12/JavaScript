const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post')
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button')
// sending delete request
const postList = document.querySelector('ul');

function sendHttpRequest( method, url, data ){ // receving post data from line 60,40
    // using fetch() 
    // takes url as arugument, if u send just url it will send GET request
    // return fetch(url).then( response => {
    //     return response.json();
    // });
    return fetch(url, {
        // second parameter is an object which is used to configure the request
        method: method, // default is GET
        body: JSON.stringify(data), // can be json, binary, form data
        
        // we can add header to our outgoing request by adding key header key
        headers : {
            'Content-Type' : 'application/json' // can add more the one header by adding more key value pairs.
        }
    }).then( response => {
    /*    
    fetch gives us a streamed response
    json() method of the Body mixin takes a Response stream and reads it to completion. It returns a promise that resolves with the result of parsing the body text as JSON.
    */
        if( response.status >= 200 && response.status < 300 ){
        return response.json();
    } else { // will trigger there is error 404 / 500
        return response.json().then( errData => { 
            console.log(errData);
            throw new Error( 'Something went wrong - server-side.');
        });
    }
    }).catch( error => { // will trigger when there is technical issue -> network connectivity issue 
        console.log( error );
        throw new Error( 'Something went wrong' );

    });
}

function fetchPosts(){

        sendHttpRequest( 
            'GET', 'https://jsonplaceholder.typicode.com/pos').then(
        responseData => {
            const listOfPosts = responseData; // response data
            for( const post of listOfPosts ){
                const postEl = document.importNode( postTemplate.content, true);
                postEl.querySelector('h2').textContent = post.title.toLowerCase();
                postEl.querySelector('p').textContent = post.body;
                postEl.querySelector('li').id = post.id;
                listElement.append(postEl);
            }
        }
        ).catch(
            error => { alert( error.message ) } );
}

function createPost( title, content ) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    }; 
    sendHttpRequest( 
        'POST', 'https://jsonplaceholder.typicode.com/posts', post );
}

fetchButton.addEventListener( 'click', fetchPosts );

// on form when you click add you trigger a post request 
// which will have data from FORM
form.addEventListener( 'submit', event => { 
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredcontent = event.currentTarget.querySelector('#content').value;
    createPost( enteredTitle, enteredcontent );
});

postList.addEventListener( 'click', event => {
    if ( event.target.tagName === 'BUTTON' ) {
        // getting the closed list id
        const postId = event.target.closest('li').id;
        // sending Delete Reqeust
        sendHttpRequest( 
            'DELETE', `https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
});
