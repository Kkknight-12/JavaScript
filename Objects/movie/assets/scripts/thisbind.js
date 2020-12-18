const addMovieBtn = document.getElementById('add-movie-btn')
const searchBtn = document.getElementById('search-btn')

const userInputs = document.querySelectorAll('input')

const movies = [];

const clearInput = ()=> {

    for( const userInput of userInputs ) {
        userInput.value = '';
    }
}

const renderMovies = ( filter = '' ) => {
  const movieList = document.getElementById('movie-list');

  if( movies.length === 0 ){
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  
  movieList.innerHTML = '';

  const filteredMovies = !filter ? movies 
  : movies.filter( movie => 
    movie.info.title.toLowerCase().includes( filter.toLowerCase() )  ) 

  filteredMovies.forEach( (movie) => {
    const movieEl = document.createElement('li');
    const { info, ...otherProperties } = movie;

    let text = movie.getFormatterTitle();

    // to use bind uncomment below line
    // let { getFormatterTitle } = movie;
    // getFormatterTitle = getFormatterTitle.bind(movie)
    // let text = getFormatterTitle();

    for ( const key in info ){
      if( key !== 'title'){
        text = text + ` ${key}: ${info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl)
  });
}

const addMovieHandler = () => {
  const title = document.getElementById('title').value
  const extraName = document.getElementById('extra-name').value
  const extraValue = document.getElementById('extra-value').value

  if ( 
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ){
    return;
  }

  const newMovie = {
    info: {
      title,
      [extraName]:extraValue,
    },
    id: Math.random().toString(),

    getFormatterTitle(){
      return this.info.title.toUpperCase()
    }
  };
  movies.push(newMovie);
  console.log(newMovie)
  renderMovies();
  clearInput();
};

const searchMovieHandler = ()=> {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovies( filterTerm );
  clearInput();
}

addMovieBtn.addEventListener( 'click', addMovieHandler );
searchBtn.addEventListener( 'click', searchMovieHandler );