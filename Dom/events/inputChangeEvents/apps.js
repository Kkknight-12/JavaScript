// const form = document.querySelector('#signup-form');
const crediCardinput = document.querySelector('#cc')
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggies')

const formData = {};
// formInput = [crediCardinput,termsCheckbox,veggieSelect]
for( let input of [crediCardinput,termsCheckbox,veggieSelect] ){
    input.addEventListener('input', ({ target })  => {
        const { name, type, value, checked } = target;
        formData[name] = type === 'checkbox' ? checked : value;
        console.log(formData); 
    });
}


