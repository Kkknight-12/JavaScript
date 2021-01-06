const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post')
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button')
// sending delete request
const postList = document.querySelector('ul');

function sendHttpRequest(method, url, data){ // receving post data from line 51
    const promise = new Promise( ( resolve, reject ) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function() {
            if( xhr.status >= 200 && xhr.status < 300 ){
                resolve(xhr.response);
            } else{
                reject(new Error('Something Went Wrong'));
            }
        };

        xhr.onerror = function (){
            // will trigger only when e fail to send request
            reject( new Error(' Failed to send Request'))
        };

        xhr.send(JSON.stringify(data)); // sending post data
    });
    return promise;
}

function fetchPosts(){
    sendHttpRequest( 'GET', 'https://jsonplaceholder.typicode.com/pos').then(
        responseData => {
            const listOfPosts = JSON.parse(responseData); // response data
            for( const post of listOfPosts ){
                const postEl = document.importNode( postTemplate.content, true);
                postEl.querySelector('h2').textContent = post.title.toLowerCase();
                postEl.querySelector('p').textContent = post.body;
                postEl.querySelector('li').id = post.id;
                listElement.append(postEl);
            }
        }
    )
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

function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();