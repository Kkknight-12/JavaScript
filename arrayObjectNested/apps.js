// nested
//  object { id: 1, username: 'Kenichi' },
//  inside array [ { id: 1, username: 'Kenichi' }, { id: 2, username: 'Honda' } ],
//  which is inside another object { '/users' : }

const pages = {
        // creating array of objects
        '/users' : [
        { id: 1, username: 'Kenichi' },
        { id: 2, username: 'Honda' }
        ],
        '/about' : 'This is about page!'
};

// access the array object with pages[' ']
// access the whole array 
console.log(pages['/users']);

// access array with [ ] , number inside the square bracket
console.log(pages['/users'][0]);

// access object inside array 
console.log(pages['/users'][0]['id']);