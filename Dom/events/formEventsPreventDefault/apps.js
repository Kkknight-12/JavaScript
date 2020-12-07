const form = document.querySelector('#signup-form');
const crediCardinput = document.querySelector('#cc')
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggies')

form.addEventListener('submit', (e)=>{
    // alert('Form Submited');
    console.log('cc', crediCardinput.value);
    console.log('terms', termsCheckbox.checked);
    console.log('veggieSelect', veggieSelect.value);
    e.preventDefault();
}
);


