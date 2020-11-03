// Sequential Requests!

async function get3pokemon() {
    const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1")
    const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2")
    const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3")
    console.log(poke1.data)
    console.log(poke2.data)
    console.log(poke3.data)
}

// request api indepent of each other can be send all at once.

get3pokemon()
async function geT3pokemon() {
    // now the reqeust is sent at the same time
    const prom1 =  axios.get("https://pokeapi.co/api/v2/pokemon/1")
    const prom2 =  axios.get("https://pokeapi.co/api/v2/pokemon/2")
    const prom3 =  axios.get("https://pokeapi.co/api/v2/pokemon/3")

    // promise pending
    console.log(prom1)

    // waiting for the request to get resolved
    poke1 = await prom1;
    poke2 = await prom2;
    poke3 = await prom3;

    // promise fullfilled
    console.log(prom1)
    console.log(poke1.data)
    console.log(poke2.data)
    console.log(poke3.data)
}

geT3pokemon()

// ////////////////////////
// sequential vs awaiting /
// ////////////////////////


function changeBodyColor(color, delay) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
        document.body.style.backgroundColor = color;
        resolve();
        }, delay)
    })
}

// sequential
// async function lightShow() {
//     await changeBodyColor('teal', 1000);
//     await changeBodyColor('pink', 1000);
//     await changeBodyColor('indigo', 1000);
//     await changeBodyColor('violet', 1000);
// }
// lightShow()

// parallel
// as all the request are made at the same time
// the output will be give out all the once
async function lighTShow() {
    const p1 = changeBodyColor('teal', 1000);
    const p2 = changeBodyColor('pink', 1000);
    const p3 = changeBodyColor('indigo', 1000);
    const p4 = changeBodyColor('violet', 1000);
    // 
    await p1;
    await p2;
    await p3;
    await p4
}
lighTShow()
// only the last color will be visible 











