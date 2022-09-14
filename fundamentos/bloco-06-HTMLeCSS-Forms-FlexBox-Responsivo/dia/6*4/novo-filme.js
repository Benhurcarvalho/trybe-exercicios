const form = document.querySelector('form');
const inputTitle = form.querySelector('#title');
const inputCover = form.querySelector('#cover');
const checkboxWatched = form.querySelector('#watched');


function submitNewMovie(event) {
    event.preventDefault()

    const movies = JSON.parse(localStorage.getItem('movies')) || []

    const newMovie = {
        title: inputTitle.value,
        cover: inputCover.value,
        watched: checkboxWatched.checked
    }

    movies.push(newMovie)

    inputTitle.value = ''
    inputCover.value = ''
    checkboxWatched.checked = false

    localStorage.setItem('movies', JSON.stringify(movies))

    location.href = 'http://127.0.0.1:5500/fundamentos/bloco-06-HTMLeCSS-Forms-FlexBox-Responsivo/dia/6*4/index.html'
}

form.addEventListener('submit', submitNewMovie)