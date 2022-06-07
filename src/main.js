const API_KEY = "860f291728d95546777b463dcf396dc9";
const BASE_API_URL = "https://api.themoviedb.org/3";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w300";
const BASE_BACKGROUND_IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const BASE_MOVIE_DETAIL_URL = "/movie/";
const TREND_URL = "/trending/movie/day";
const CATEGORIES_URL = "/genre/movie/list";
const MOVIES_BY_CATEGORY_URL = "/discover/movie";
const MOVIES_BY_SEARCH_URL = "/search/movie";

//*********************************************************************************** */

const api = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  params: {
    api_key: API_KEY,
  },
});

//*********************************************************************************** */

async function getMovieById(movieId) {
  const { data } = await api(`${BASE_MOVIE_DETAIL_URL}/${movieId}`);

  headerSection.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0.35) 19.27%, rgba(0, 0, 0, 0) 29.17%), url(${BASE_BACKGROUND_IMAGE_URL}/${data.poster_path})`;

  movieDetailTitle.textContent = data.title;
  movieDetailScore.textContent = data.vote_average;
  movieDetailDescription.textContent = data.overview;

  createCategories(movieDetailCategoriesList, data.genres);
}

//*********************************************************************************** */

async function getRelatedMoviesById(movieId) {
  const { data } = await api(
    `${BASE_MOVIE_DETAIL_URL}/${movieId}/recommendations`
  );
  const movies = data.results;

  createMovies(relatedMoviesContainer, movies);
}

//*********************************************************************************** */

function createMovies(container, movieArray) {
  container.textContent = "";

  movieArray.forEach((movie) => {
    const movieContainer = document.createElement("div");
    movieContainer.classList.add("movie-container");

    const movieImg = document.createElement("img");
    movieImg.classList.add("movie-img");
    movieImg.setAttribute("id", movie.id);
    movieImg.setAttribute("alt", movie.title);
    movieImg.setAttribute("src", `${BASE_IMAGE_URL}/${movie.poster_path}`);

    movieContainer.appendChild(movieImg);

    container.appendChild(movieContainer);
  });
}

//*********************************************************************************** */

async function getTrendingMoviesPreview() {
  const { data } = await api(TREND_URL);
  const movies = data.results;

  createMovies(trendingMoviesPreviewList, movies);
}

//*********************************************************************************** */

async function getTrendingMovies() {
  const { data } = await api(TREND_URL);
  const movies = data.results;

  createMovies(genericSection, movies);
}

//*********************************************************************************** */

function createCategories(container, categoryArray) {
  container.textContent = "";

  categoryArray.forEach((category) => {
    const categoryContainer = document.createElement("div");
    categoryContainer.classList.add("category-container");

    const categoryTitle = document.createElement("h3");
    categoryTitle.classList.add("category-title");
    categoryTitle.setAttribute("id", `id${category.id}`);
    categoryTitle.textContent = category.name;

    categoryContainer.appendChild(categoryTitle);

    container.appendChild(categoryContainer);
  });
}

//*********************************************************************************** */

async function getCategoriesPreview() {
  const { data } = await api(CATEGORIES_URL);
  const categories = data.genres;

  createCategories(categoriesPreviewList, categories);
}

//*********************************************************************************** */

async function getMoviesByCategory(id) {
  const { data } = await api(MOVIES_BY_CATEGORY_URL, {
    params: {
      with_genres: id,
    },
  });

  const movies = data.results;

  createMovies(genericSection, movies);
}

//*********************************************************************************** */

async function getMoviesBySearch(query) {
  const { data } = await api(MOVIES_BY_SEARCH_URL, {
    params: {
      query,
    },
  });

  const movies = data.results;

  if (!(movies.length === 0)) {
    createMovies(genericSection, movies);
  } else {
    createInvalidSearchMessage(`No results for "${query}"`);
  }
}
