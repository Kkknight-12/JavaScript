import { random, people } from './util.js';

import callByAnyName from './people.js'


const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener( 'click', ()=> {
    container.innerHTML = callByAnyName(people);
})