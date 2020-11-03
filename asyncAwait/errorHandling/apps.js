async function getPlanets() {
    // await function wait till the promsie is resolevd
    // const res = await axios.get("https://swapi.dev/api/planets/")
    const res = await axios.get("https://swapi.dev/api/planets/asdasd")
    console.log(res.data)
}
getPlanets().catch( (err) => {
    console.log('IN CATCH !!!');
    console.log(err);
})

// use try when you want to catch one specific error
async function geTPlanets() {
    try {
        const res = await axios.get('https://swapi.dev/api/planets/asdasd')
        console.log(res.data);
    } catch (err) {
        console.log('IN CATCH!', err);
    }
}
geTPlanets();