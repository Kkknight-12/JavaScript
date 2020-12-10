// creating variables 
// elementById works better in performance prespective then querySelector for ID
const addMovieModal = document.getElementById('add-modal');
// document.bodychildren[1] //this would also work

const startAddMovieButton = document.querySelector('header button');

const backdrop = document.getElementById('backdrop');

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')

const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;

const userInputs = addMovieModal.querySelectorAll('input')

const entryTextSection = document.getElementById('entry-text');

const deleteMovieModal = document.getElementById( 'delete-modal' )

const movies = [];

const updateUI = () => {
    if( movies.length === 0 ) {
        entryTextSection.style.display = 'block'
    } else {
        entryTextSection.style.display = 'none'
    }
}

const deleteMovieHandler = ( movieId ) => {
    let movieIndex = 0;
    for( const movie of movies ){
        if( movie.id === movieId ){
            break;
        } movieIndex++;
    } movies.splice( movieIndex, 1 )
    const listRoot = document.getElementById( 'movie-list' );
    listRoot.children[movieIndex].remove();
    // listRoot.removeChild(listRoot.children[movieIndex]);
    closeMovieDeletionModal()
}

const closeMovieDeletionModal = () => {
    toggleBackdrop();
    deleteMovieModal.classList.remove( 'visible' );
}

const startDeleteMovieHandler = ( movieId ) =>{
    deleteMovieModal.classList.add( 'visible' ); 
    toggleBackdrop();

    const cancelDelectionButton = deleteMovieModal.querySelector('.btn--passive');
    let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

    confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
    confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger')

    cancelDelectionButton.removeEventListener('click', closeMovieDeletionModal );
    cancelDelectionButton.addEventListener('click', closeMovieDeletionModal )

    confirmDeletionButton.addEventListener('click', deleteMovieHandler.bind( null, movieId ) )
   
}

const renderNewMovieElement = ( id, title, imageUrl, rating ) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element'
    newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}" >
    </div>
    <div class="movie-element_info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    </div>
    `;
    newMovieElement.addEventListener( 'click', startDeleteMovieHandler.bind( null, id ) );
    const listRoot = document.getElementById( 'movie-list' );
    listRoot.append(newMovieElement)
}

// Event function
const toggleBackdrop = () => {
    backdrop.classList.toggle( 'visible' );
}

const closeMovieModal = () => {
    addMovieModal.classList.remove( 'visible' );
}

const showMovieModal = () => {
    addMovieModal.classList.add( 'visible' );
    toggleBackdrop();
}

const clearMovieInput = ()=> {
    for( const userInput of userInputs ) {
        userInput.value = '';
    }
}

const cancelAddMovieHandler = () => {
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
}

const addMovieHandler = ()=> {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if( // trim will remove excess whitespace at the begning and end of input
    titleValue.trim() ==='' || 
    imageUrlValue.trim() === '' || 
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||  // unary plus operator
    +ratingValue > 5 ) 
    {
        alert( 'Please enter valid values (rating between 1 and 5).')
        return;
    }

    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        image: imageUrlValue,
        rating: ratingValue,
    }

    movies.push(newMovie)
    console.log(movies)
    closeMovieModal();
    toggleBackdrop();
    clearMovieInput();
    renderNewMovieElement( newMovie.id, newMovie.title, newMovie.image, newMovie.rating );
    updateUI();
}

const backdropClickHandler = () => {
    closeMovieModal();
    closeMovieDeletionModal();
    clearMovieInput();
}

// Event Listners
startAddMovieButton.addEventListener( 'click', showMovieModal ) // ADD MOVIE BUTTON

confirmAddMovieButton.addEventListener( 'click', addMovieHandler )

backdrop.addEventListener('click', backdropClickHandler )

cancelAddMovieButton.addEventListener( 'click', cancelAddMovieHandler )
