// Await Keyword
// we can only use the await keyword inside  of function declared
// with async.
// await will pause the execution of function, 
// waiting for a promise to be resolved.
// await work only inside async function

// 
async function geTPlanets(){
   return axios.get("https://swapi.dev/api/planets/")

} 
geTPlanets().then( (res) => {
    console.log(res.data);
})

// 
async function getPlanets() {
    // await function wait till the promsie is resolevd
    const res = await axios.get("https://swapi.dev/api/planets/")
    console.log(res.data)
}
getPlanets()