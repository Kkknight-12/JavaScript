axios.get("https://swapi.dev/api/planets/") 
    .then(({ data }) => {
        console.log(data)
        for(let planet of data.results){
            console.log(planet.name)
        }

// another request
axios.get(data.next)
    .then(({ data }) =>{
        console.log('SENDING ANOTHER REQUEST')
        console.log(data);
        for(let planet of data.results) {
            console.log(planet.name)
        }
        // USING RETURN
        // return axios.get(data.next);
    }) 
     return axios.get(data.next);
})


// NOW REQUEEST CAN BE SEND WITHOUT axios.get()
.then(({ data }) => {
    console.log('SENDING last REQUEST')
    console.log(data);
    for(let planet of data.results) {
        console.log(planet.name)
    }
    return axios.get(data.next);
})
.then(({ data }) => {
    console.log('PROMISE THIS IS LAST REQUEST')
    console.log(data);
    for(let planet of data.results) {
        console.log(planet.name)
    }
})


.catch((err)=>{
    console.log(err);
})
