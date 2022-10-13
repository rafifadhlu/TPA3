

const API_KEY = 'd648c421fccb9072d4ab0dad3581d0f4'
const BASE_URL = 'https://api.themoviedb.org/3'
const API_URL = BASE_URL + '/discover/movie?api_key=' + API_KEY + '&sort_by=popularity.desc&page=1'
const IMG_URL = 'https://image.tmdb.org/t/p/w500/'


let main = document.getElementById('card-wrapper')
let submit = document.getElementById('btn')

submit.addEventListener('click', MyFunction = () =>{
    let inputSearch = document.querySelector('input');
    let valueInput = inputSearch.value;
    searchMovies(valueInput);
});

async function searchMovies(search){
    const SEARCH_URL = BASE_URL +'/search/movie?api_key='+ API_KEY+`&query=${search}&page=1`;
    let response = await fetch(SEARCH_URL)
    let result = await response.json()
    listMovie(result.results)
}

/*function getMovies(url){    

    fetch(url)
    .then(response => response.json())
    .then(response => {
        console.log(response.results);
        listMovie(response.results)
    })
}*/


async function getMovies(url){
    let response = await fetch(url)
    let result = await response.json()
    listMovie(result.results)
}

getMovies(API_URL)


function listMovie(response){

    main.innerHTML = '';
    
    response.forEach(movies =>{
        const {title , poster_path , vote_average, release_date} = movies;
        const disMovie = document.createElement('div');
        
        disMovie.classList.add('card');
        disMovie.innerHTML = ` 
        <div class="item-card">
            <h1 class="title"> ${title}</h1>
            <div class="img">
                <img src="${IMG_URL + poster_path}" alt="">
            </div>
            <p class="rating">Rating ${vote_average}</p> 
            <h2 class="rilis-date">${release_date}</h2>
        </div>
        `
        main.appendChild(disMovie)
    })
}


