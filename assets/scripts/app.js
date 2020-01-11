// get elements
const getAddMovieModal = document.getElementById("add-modal");
const getStartAddMovieBtn = document.querySelector("header button");
const getCloseBackdrop = document.querySelector(".btn--passive");
const getaddMovieBtn = document.querySelector(".btn--success");
const getAddbackdrop = document.getElementById("backdrop");
const getUserInputs = getAddMovieModal.querySelectorAll("input");
const getEntryText = document.getElementById("entry-text");
const getMovieEl = document.getElementById("movie-list");
const getConfirmDel = document.querySelector(".btn--danger");
const getConfirmDelModal = document.getElementById("delete-modal");

let movies = [];

//show added movie
const updateUI = () => {
  if (movies.length === 0) {
    getEntryText.style.display = "block";
  } else {
    getEntryText.style.display = "none";
  }
};

// create toggler function
const addMovieModalHandler = () => {
  getAddMovieModal.classList.add("visible");
  addbackdropHandler();
};

// add backdrop function
const addbackdropHandler = () => {
  getAddbackdrop.classList.add("visible");
};

// close closeBackdrop function
const closeBackdropHandler = () => {
  getAddbackdrop.classList.remove("visible");
  getAddMovieModal.classList.remove("visible");
  getConfirmDelModal.classList.remove("visible");
  clearInputFields();
};

//add new movies to UI
renderNewMovieEl = (id, title, imageUrl, rating) => {
  const newMovieEl = document.createElement("li");
  newMovieEl.className = "movie-element";
  newMovieEl.id = id;
  newMovieEl.innerHTML = `
    <div class="movie-element__image">
    <img src= "${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
    <button class="deletebtn">X</button>
    </div>
    `;
  const getlistadd = document.getElementById("movie-list");
  getlistadd.append(newMovieEl);
};

//delete movie item from DOM

deleteMovieUI = elemID => {
  //remove movie list from DOM
  const movieLI = document.getElementById(elemID);
  // console.log(movieLI);
  // console.log(elemID);
  movieLI.parentNode.removeChild(movieLI);

  // delete movie item from data
  let filteredMovies = movies.filter(filtered => {
    return filtered.id !== parseInt(elemID);
  });
  //update movies list
  movies = filteredMovies;
  // console.log(movies);
  closeBackdropHandler();
  updateUI();
};

popConfirmDeleteModal = elemID => {
  const getCanclefirmDel = document.getElementById("cancle-delete");
  const getConfirmDel = document.querySelector(".btn--danger");
  elemID = event.target.parentNode.parentNode.id;

  getConfirmDelModal.classList.add("visible");
  addbackdropHandler();
  getCanclefirmDel.addEventListener("click", closeBackdropHandler);
  getConfirmDel.addEventListener("click", deleteMovieUI.bind(null, elemID));
};

//get values/movies info function
const addMovieHandler = () => {
  const titleValue = getUserInputs[0].value;
  const imageUrlValue = getUserInputs[1].value;
  const ratingValue = getUserInputs[2].value;

  //the trim method below removes all whitespaces before and after
  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    //modal to be added later. using alert for now
    alert("please enter correct values(ratings can only be from 1 to 5)");
    return;
  }

  let newMovies = {
    id: Math.round(Date.now() + Math.random()),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  };

  movies.push(newMovies);
  console.log(movies);
  closeBackdropHandler();
  renderNewMovieEl(
    newMovies.id,
    newMovies.title,
    newMovies.image,
    newMovies.rating
  );
  clearInputFields();
  updateUI();
};

//makes each input field empty
const clearInputFields = () => {
  for (const userInput of getUserInputs) {
    userInput.value = "";
  }
};

// add eventListener to startAddMovieBtn
getStartAddMovieBtn.addEventListener("click", addMovieModalHandler);
getCloseBackdrop.addEventListener("click", closeBackdropHandler);
getAddbackdrop.addEventListener("click", closeBackdropHandler);
getaddMovieBtn.addEventListener("click", addMovieHandler);
getMovieEl.addEventListener("click", popConfirmDeleteModal);
getConfirmDel.addEventListener("click", deleteMovieUI);
