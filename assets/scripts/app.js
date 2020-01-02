// get elements
const getAddMovieModal = document.getElementById("add-modal");
const getStartAddMovieBtn = document.querySelector("header button");
const getCloseBackdrop = document.querySelector(".btn--passive");
const getAddbackdrop = document.getElementById("backdrop");

// create toggler function
const addMovieModal = () => {
  getAddMovieModal.classList.add("visible");
  addbackdropHandler();
};

// add backdrop function
const addbackdropHandler = () => {
  getAddbackdrop.classList.add("visible");
};

// close closeBackdrop function
const closeBackdrop = () => {
  getAddbackdrop.classList.remove("visible");
  getAddMovieModal.classList.remove("visible");
};

// add eventListener to startAddMovieBtn

getStartAddMovieBtn.addEventListener("click", addMovieModal);
getCloseBackdrop.addEventListener("click", closeBackdrop);
getAddbackdrop.addEventListener("click", closeBackdrop);
