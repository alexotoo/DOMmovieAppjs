// get elements
const addMovieModal = document.getElementById("add-modal");
const startAddMovieBtn = document.querySelector("header button");

// create toggler function
const addMovieModalToggler = () => {
  addMovieModal.classList.toggle("visible");
};

// add eventListener to startAddMovieBtn

startAddMovieBtn.addEventListener("click", addMovieModalToggler);
