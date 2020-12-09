// elementById works better in performance prespective then querySelector for ID
const addMovieModal = document.getElementById('add-modal');
// document.bodychildren[1] //this would also work

const startAddMovieButton = document.querySelector('header button');

const backdrop = document.getElementById('backdrop');

const toggleBackdrop = () =>{
    backdrop.classList.toggle('visible');
}

const toggleMovieModal = ()=>{
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
}

const backdropClickHandler = ()=> {
    toggleMovieModal();
}

startAddMovieButton.addEventListener( 'click', toggleMovieModal )

backdrop.addEventListener('click', backdropClickHandler )
