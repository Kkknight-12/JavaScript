// async function returns a promise

/* 
So what this does is do this fetch and this returns a promise and 
this await keyword stalls javascript right here.
 */
const getTodos = async () => {
    /* await stops function from assigning a value to this variable until the
    promise has resolved once the promise has resolved it take 
    the value from that resolve function the response and assign it
    to this variable */ 
    const response = await fetch('../todos/knight.json')
    // we use .json() method to output the data 
    // remember .json() method returns a promise
    const data = await response.json();

    const response1 = await fetch('../todos/luffy.json')
    const data1 = await response1.json();

    return data, data1;
}

getTodos()
    .then( data => { console.log( 'resolved:', data ) });