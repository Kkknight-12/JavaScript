const genericAPIrequest = () => {
   return new Promise((resolve, reject) => {
        resolve({body: "My test data"})
    })
}

genericAPIrequest().then(data => {
    console.log(data);
}).catch(error => console.log(error));