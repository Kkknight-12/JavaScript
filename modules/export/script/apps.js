import { random, people } from './util.js';
console.log( random )


const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const showPeople = () => {
    const newPeople = people
    .map( ( {name, job} )=> {
        // const { name, job } = person;
        return `<p>${name} <strong>${job}</strong></p>`;
    }).join("");
    container.innerHTML = newPeople;
}

btn.addEventListener( 'click', ()=> {
    showPeople();
})