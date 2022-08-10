# The Movie API

## General Overview

Get to know the top 20 movies worldwide through this web application for mobile and desktop, which connects to the API of "The Movie Database (TMDB)" (https://www.themoviedb.org/) to obtain the data of the classification. The application also allows you to find movie information by categories, by relationships and by searching through a text input.

To use the App click here: https://darioparejadiaz.com/the-movie-api/

## Technical overview

- This project is built as a single page aplication (SPA) with vanilla JavaScript.
- Each view of the project is controled by the display property (block or none) according to the case
- The HTTP requests to TMDB were made with the bult-in fetch API

## App views

### **Home view**

The home view presents the search bar, a preview of the top 20 trending movies in horizontal scroll and the categories list.

![](/assets/readme-imgs/movie-app-home.jpg)

---

### **Trends view**

When you click on "more" button in trends section, it display a full view of the top 20 trending movies. You can click on each image to get detailed information about the movie you are interested in.

![](/assets/readme-imgs/movie-app-trends.jpg)

---

### **Category view**

When you click on a category of the category list presented in the home page, you can see a full view with 20 movies that belong to the referred categogy; again you can click on every image to display full information about the movie.

![](/assets/readme-imgs/movie-app-category.jpg)

---

### **Movie details view**

This is the view with full information about the movie you selected, there you can see the rating, a short description, the categories the movie belongs and a horizontal scroll list of related movies.

![](/assets/readme-imgs/movie-app-detail.jpg)

---

### **Movie search view**

You can type a movie name in the search bar to get specific movies that match with the name you entered.

![](/assets/readme-imgs/movie-app-search.jpg)

---

### **Invalid search view**

If you type something that does not match with any movie in the data base of TMDB, you get message indicating that there was no successful in the searched name.

![](/assets/readme-imgs/movie-app-invalid-search.jpg)
