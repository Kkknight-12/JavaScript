const people = [
    {name: 'knight', job: 'developer'},
    {name: 'luffy', job: 'designer'},
    {name: 'Babu bhaia', job: 'business man'}
]

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

const showPeople = () => {
    const newPeople = people.map( (person)=> {
        console.log(person)
    })
}

btn.addEventListener( 'click', ()=> {
    showPeople();
})