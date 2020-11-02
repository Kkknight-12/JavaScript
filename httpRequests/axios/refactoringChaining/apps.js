const fetchNextPlanets = (url = "https://swapi.dev/api/planets/")=>{
    return axios.get(url);
}

const printPlanets = ( {data} ) =>{
    console.log(data);
    for(let planet of data.results) {
        console.log(planet.name)
    }
    return Promise.resolve(data.next);
}

fetchNextPlanets()
    .then(printPlanets)

    .then(fetchNextPlanets)
    .then(printPlanets) 

    .then(fetchNextPlanets)
    .then(printPlanets) 

    .catch((err)=>{
        console.log(err);
    })

    