const apiOptions = {
    method: 'GET', headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2M2I0NmU3NDcyOGFkNzNkODE2YWU0M2FmYTJlMGNjNSIsInN1YiI6IjY1MTYyZmIzOTY3Y2M3MDBhY2I4MjM1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u_NGIUxsMnP98Ijk0HifrH8I470oj86MV5oMTPsc888'
    }
};

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'

let movies = []
let keyword = ''
const loadingEl = document.querySelector('.loading')
let pager = {
    current: 1, max: 1
}

const showLoading = (show) => {
    loadingEl.style.display = show ? 'flex' : 'none'
    const prevBtn = document.querySelector('.prev')
    const nextBtn = document.querySelector('.next')

    prevBtn.style.display = show ? 'none' : 'flex'
    nextBtn.style.display = show ? 'none' : 'flex'

}
const renderMovies = () => {
    const container = document.querySelector('.container')
    container.innerHTML = ''
    for (const movie of movies) {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <img src="${IMAGE_URL}/${movie.poster_path}" 
            onerror="this.src='https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg'"
            alt="${movie.title}"/>
            
            <div class="info">
                <div class="title">${movie.title}</div>
                <div class="point">${movie.vote_average}</div>
            </div>
            <div class="overview">
                <div class="overview__tittle">Overview</div>
                <div class="overview__value">${movie.overview}</div>
            </div>
        `
        container.appendChild(card)
    }
    showLoading(false)
}

const getAllMovies = () => {
    showLoading(true)
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pager.current}&sort_by=popularity.desc`, apiOptions)
        .then(response => response.json())
        .then(response => {
            movies = response.results
            renderMovies()
            pager.max = response.total_pages
        })
        .catch(err => console.error(err));
}

const searchMovies = () => {
    showLoading(true)
    fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&page=${pager.current}&include_adult=false`, apiOptions)
        .then(response => response.json())
        .then(response => {
            movies = response.results
            renderMovies()
            pager.max = response.total_pages
        })
        .catch(error => console.log('error', error));
}

const inputEl = document.querySelector('.search input')


inputEl.addEventListener('keyup', (e) => {
    keyword = inputEl.value.trim()
    if (e.keyCode === 13) { // 13 is Enter button
        if (keyword === '') {
            getAllMovies()
        } else {
            searchMovies()
        }
    }
})

const handleClickOnPager = () => {
    if (keyword.trim() === "") {
        getAllMovies()
    } else {
        searchMovies(keyword)
    }
}
const renderPager = () => {
    const prevBtn = document.querySelector('.prev')
    const nextBtn = document.querySelector('.next')

    prevBtn.addEventListener('click', () => {
        pager.current = pager.current - 1 <= 1 ? 1 : pager.current - 1
        handleClickOnPager()
    })

    nextBtn.addEventListener('click', () => {
        pager.current = pager.current + 1 >= pager.max ? pager.max : pager.current + 1
        handleClickOnPager()
    })
}


getAllMovies()
renderPager()

