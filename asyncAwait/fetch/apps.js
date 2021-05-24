let num = null;

new Promise((resolve, reject) => {
    resolve(['B', 'C', 'D']);
    // reject();
})
.then(data => {
    // foo
    // throw new Error('Error at B');
    console.log(data.shift());
      num = 5;
    return data;
})
.catch(error => console.log(error))
.finally(() => console.log("I'm running!"))

setTimeout(() => {
  console.log("And I'm still running!", num)
}, 5000)
// notice that despite an error in the promise, the code continues running and simply prints the old value of num