import { random, people as p } from './util.js';

import callByAnyName from './people.js'


const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener( 'click', ()=> {
    container.innerHTML = callByAnyName(p);
});

(function () {
    import('./util.js').then( module => {
    console.log(module.hobbies)
    });
})();