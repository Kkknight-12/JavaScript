const input = document.querySelector('#username');

input.addEventListener('keydown', (e)=>{
    console.log('Key Down')
})
input.addEventListener('keyup', (e)=>{
    console.log('Key Up')
})
input.addEventListener('keypress', (e)=>{
    console.log('Key Press')
});

console.log('--------------')

const addItemInput = document.querySelector('#addItem');
const itemsUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e){
    if (e.key ==='Enter'){
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemsUL.appendChild(newItem);
        this.value  = "";
    }
})

