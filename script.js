const APIURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=ea629a1659a9fd0c11e84fde7a516e59";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=ea629a1659a9fd0c11e84fde7a516e59&query=";


const main = document.getElementById("content");
const form = document.getElementById("form");
const search = document.getElementById("search");

// 영화 api 가져오기
getMovies(APIURL);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);    
    showMovies(respData.results);
}


 // 영화 정보 보여주기
function showMovies(movies) {
    
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview, id } = movie;

        const movieElement = document.createElement("div"); //?
        movieElement.classList.add("movie"); //?
        // HTML에 넣어주기
        movieElement.innerHTML = `
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}" onclick="imgClick('${id}')"
            />
            <div class="movie-info">
                <h3>${title}</h3>
                <p>${vote_average}</p>
            </div>
            <div class="overview">
                <h3>Overview:</h3>
                ${overview}
            </div>
        `;

        main.appendChild(movieElement);
    });
}

function imgClick(id) {

     alert (id);
}






form.addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);

        search.value = "";
    }
});

