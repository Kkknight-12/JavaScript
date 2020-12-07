const button = document.querySelector('h1');

const btn = document.querySelector('button');


// //////////////////
// addEventListener
// you can add multiple events
// //////////////////

// mouseEvent
btn.addEventListener('click', () => {
    alert('you clicked');
})

// change text when you hover over the button
btn.addEventListener('mouseover', () => {
    btn.innerText = 'Stop'
})

// change text back what it was
// when you move out of the button
btn.addEventListener('mouseout', () => {
    btn.innerText = 'Click'
});
