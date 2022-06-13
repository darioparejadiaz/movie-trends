function navigator() {
  if (location.hash.startsWith("#trends")) {
    trendsPage();
  } else if (location.hash.startsWith("#search=")) {
    searchPage();
  } else if (location.hash.startsWith("#category=")) {
    categoriesPage();
  } else if (location.hash.startsWith("#movie=")) {
    movieDetailsPage();
  } else {
    homePage();
  }

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//*********************************************************************************** */

function homePage() {

  headerSection.style.background = "";

  arrowBtn.classList.add("inactive");
  headerCategoryTitle.classList.add("inactive");
  movieDetailSection.classList.add("inactive");
  genericSection.classList.add("inactive");

  headerSection.classList.remove("header-container--long");
  headerSection.classList.remove("header-container--categoryView");
  headerTitle.classList.remove("inactive");
  searchForm.classList.remove("inactive");
  trendingPreviewSection.classList.remove("inactive");
  categoriesPreviewSection.classList.remove("inactive");

  removeClasses(headerSection);

  searchForm.reset();

  getTrendingMoviesPreview();
  getCategoriesPreview();
}

//*********************************************************************************** */

function trendsPage() {

  headerSection.style.background = "";

  headerTitle.classList.add("inactive");
  searchForm.classList.add("inactive");
  movieDetailSection.classList.add("inactive");
  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");

  arrowBtn.classList.remove("inactive");
  headerSection.classList.remove("header-container--long");
  headerSection.classList.remove("header-container--categoryView");
  headerCategoryTitle.classList.remove("inactive");
  genericSection.classList.remove("inactive");

  headerCategoryTitle.textContent = "Trends";

  getTrendingMovies();
}

//*********************************************************************************** */

function searchPage() {

  headerSection.style.background = "";

  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.add("inactive");
  movieDetailSection.classList.add("inactive");
  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");

  arrowBtn.classList.remove("inactive");
  searchForm.classList.remove("inactive");
  headerSection.classList.remove("header-container--long");
  headerSection.classList.remove("header-container--categoryView");
  genericSection.classList.remove("inactive");

  if (searchFormInput.value === "") {
    createInvalidSearchMessage("Please type something...");
  } else {
    const hash = location.hash;
    const index = hash.indexOf("=");
    const searchValue = hash.slice(index + 1);
    const query = removeRareChars(searchValue);

    getMoviesBySearch(query);
  }
}

//*********************************************************************************** */

function categoriesPage() {

  headerSection.style.background = "";
  removeClasses(headerSection);

  headerSection.classList.add("header-container--categoryView");
  headerTitle.classList.add("inactive");
  searchForm.classList.add("inactive");
  movieDetailSection.classList.add("inactive");
  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");

  arrowBtn.classList.remove("inactive");
  headerSection.classList.remove("header-container--long");
  headerCategoryTitle.classList.remove("inactive");
  genericSection.classList.remove("inactive");

  const hash = location.hash;
  const index1 = hash.indexOf("=") + 1;
  const index2 = hash.indexOf("-");
  const categoryId = hash.slice(index1, index2);
  const categoryName = hash.slice(index2 + 1);
  const fixedCategoryName = removeRareChars(categoryName);

  headerCategoryTitle.textContent = fixedCategoryName;

  headerSection.classList.add(`id${categoryId}`);

  getMoviesByCategory(categoryId);
}

//*********************************************************************************** */

function movieDetailsPage() {

  removeClasses(headerSection);

  headerSection.classList.add("header-container--long");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.add("inactive");
  genericSection.classList.add("inactive");
  searchForm.classList.add("inactive");
  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");

  arrowBtn.classList.remove("inactive");
  movieDetailSection.classList.remove("inactive");
  headerSection.classList.remove("header-container--categoryView");

  const hash = location.hash;
  const index = hash.indexOf("=");
  const movieId = hash.slice(index + 1);

  getMovieById(movieId);
  getRelatedMoviesById(movieId);
}

//*********************************************************************************** */

function displayMovieDetail(e) {
  if (e.target.className === "movie-img") {
    const id = e.target.id;
    location.hash = `movie=${id}`;
  }
}

//*********************************************************************************** */

arrowBtn.addEventListener("click", () => {
  location.hash = "home";
});

//*********************************************************************************** */

searchFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.hash = `search=${searchFormInput.value}`;
});

//*********************************************************************************** */

trendingBtn.addEventListener("click", () => {
  location.hash = "trends";
});

//*********************************************************************************** */

function displayCategoryPage(e) {
  if (e.target.className === "category-title") {
    const id = e.target.id.slice(2);
    const category = e.target.innerText;
    location.hash = `category=${id}-${category}`;
  }
}

//*********************************************************************************** */

categoriesPreviewList.addEventListener("click", displayCategoryPage);
movieDetailCategoriesList.addEventListener("click", displayCategoryPage);
genericSection.addEventListener("click", displayMovieDetail);
trendingMoviesPreviewList.addEventListener("click", displayMovieDetail);
relatedMoviesContainer.addEventListener("click", displayMovieDetail);

window.addEventListener("DOMContentLoaded", navigator, false);
window.addEventListener("hashchange", navigator, false);
