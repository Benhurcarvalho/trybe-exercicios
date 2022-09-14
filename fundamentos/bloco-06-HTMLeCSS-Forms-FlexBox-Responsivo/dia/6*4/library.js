const library = document.getElementById('library');

function createMovieElemnte(movieObj) {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const h1 = document.createElement('h1')
    const h2 = document.createElement('h2')

    img.src = movieObj.cover
    h1.textContent = movieObj.title

    if (movieObj.watched) {
        h2.textContent = 'Assistido'
        } else {
        h2.textContent = 'Não assistido'
    }
    
    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(h2)

    return div
}

function loadMovies() {
    const movies = JSON.parse(localStorage.getItem('movies')) || []

    for (let i = 0; i < movies.length; i += 1) {
        const movieElemnte = createMovieElemnte(movies[i])
        library.appendChild(movieElemnte)
    }
}

function onLoad() {
    loadMovies()
}

window.onload = onLoad