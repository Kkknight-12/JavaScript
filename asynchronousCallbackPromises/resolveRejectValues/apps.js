const fakeRequest = ( ) => {
    return new Promise(( resolve , reject ) => {
        setTimeout( () => {
            const rand = Math.random();
            if ( rand < 0.3 ) {
                // passing information/value to reject
                reject( { status : 404 });
            } else {
                resolve( );
            }
        }, 1000);
    });
};

fakeRequest( )
.then(() => {
    console.log('Request Worked')
})
// giving parameter to access
// whats inside reject
.catch((res) => {
    // res.status will access the status value 404
    console.log(res.status);
    console.log('REQUEST FAILED');
});


// ////////////////////////////////////////////
// acessing multiple information from request /
// ////////////////////////////////////////////
const fakERequest = (url) => {
    return new Promise(( resolve , reject ) => {
        setTimeout( () => {
            const rand = Math.random();
            if ( rand < 0.3 ) {
                reject( { status : 404 });
            } else {
                const pages = {
                    // creating array of objects
                    '/users' : [
                    { id: 1, username: 'Kenichi' },
                    { id: 2, username: 'Honda' }
                    ],
                    '/about' : 'This is about page!'
                };
                // access the array object with pages[url]
                const data = pages[url];
                const user = [pages[url][0]['username'], pages[url][1]['username']];
                resolve( { status: 200, data, user } );
            }
        }, 1000);
    });
};

fakERequest( '/users' )
.then((res) => {
    console.log('Status Code', res.status)
    console.log('Status Code', res.data)
    console.log('Status Code', res.user)
    console.log('Request Worked')
})
.catch((res) => {
    console.log(res.status);
    console.log('REQUEST FAILED');
});



// /////////////////////////////////////////////////////////
// rejecting url when it does't contain the page mentioned /
// /////////////////////////////////////////////////////////
const faKERequest = (url) => {
    return new Promise(( resolve , reject ) => {
        setTimeout( () => {
           const pages = {
                // creating array of objects
                '/users' : [
                { id: 1, username: 'Kenichi' },
                { id: 2, username: 'Honda' }
                ],
                '/about' : 'This is about page!'
            };
            // access the array object with pages[url]
            const data = pages[url];

            // if the url passed in was found return the page
            if ( data ) {
                const user = [pages[url][0]['username'], pages[url][1]['username']];
                resolve( { status : 200, data, user } );
            }
            // else show 404 message
            else {
                reject( { status : 404 } );
            }
        }, 1000);
    });
};

// passing correct url
faKERequest( '/users' )
.then((res) => {
    console.log('Status Code', res.status)
    console.log('Status Code', res.data)
    console.log('Status Code', res.user)
    console.log('Request Worked')
})
.catch((res) => {
    console.log(res.status);
    console.log('REQUEST FAILED');
});

// passing wrong url
faKERequest( '/use' )
.then((res) => {
    console.log('Status Code', res.status)
    console.log('Status Code', res.data)
    console.log('Status Code', res.user)
    console.log('Request Worked')
})
.catch((res) => {
    console.log(res.status);
    console.log('REQUEST FAILED');
});

