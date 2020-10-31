const fakeRequest = ( url ) => {
    return  new Promise ( ( resolve, reject ) => {
        setTimeout ( ()  => {
            const pages = {
                '/users' : [
                    { id: 1, username: 'Billu' },
                    { id: 2, username: 'Babloo' }
                ],
                '/users/1' : { 
                    id: 1, username: 'Billu' ,
                    upvotes: 360, city: 'Pune',
                    topPostId: 12345
                },
                '/users/2' : { 
                    id: 2, username: 'Babloo' ,
                    upvotes: 460, city: 'Patna',
                },
                '/posts/12345' : {
                    id: 12345,
                    title: ' hey how are you  '
                },
                '/about': 'This is about page'  
            };
            const data = pages[url];
            if ( data ) {
                resolve( { status : 200, data } );
            }
            else {
                reject( { status : 404 });
            }
        }, 1000);
    });
};

// nesting fakeRequest
fakeRequest('/users').then( ( res ) => {
    // console.log(res.data[0].id);
    // console.log( res.data[0].id );
    const id = res.data[0].id;
    console.log(res);

    // nesting another call for request
    // because it want to process request when first request is finished\
    // as it will use id of above res
    fakeRequest(`/users/${id}`).then( (res) => {
        const postId = res.data.topPostId;
        console.log(res);

        // third request depend on second request
        fakeRequest(`/posts/${postId}`).then( (res) => {
        console.log(res);
        })
    });
}); 

// .catch
// when wrong request is send
fakeRequest('user').then( ( res ) => {
    // console.log(res.data[0].id);
    // console.log( res.data[0].id );
    const id = res.data[0].id;
    console.log(res);
})
.catch( ( err ) => {
    console.log('OH NO!', err);
}
);

// drawback of above method is 
// dont work on nested request
// for each nested failed request
// you have to make nexted .catch()


// //////////////
// chain method /
// //////////////

fakeRequest('/users')

    .then( ( res ) => {
    // console.log(res.data[0].id);
    // console.log( res.data[0].id );
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
    })
    // nesting another call for request
    // because it want to process request when first request is finished\
    // as it will use id of above res
    .then( (res) => {
        console.log(res);
        const postId = res.data.topPostId;

        // replacing posts with post to run catch
        return fakeRequest(`/post/${postId}`)
    })

    //  third request depend on second request
    //  if any of the promise don't work catch will work
    .then( (res) => {
        console.log(res);
    })

    .catch( (err)  => {
        console.log( 'Ohhhhhh Nooooooo', err)
    });