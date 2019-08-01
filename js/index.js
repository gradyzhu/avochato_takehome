import {
  setCarousel, appendImages, 
  appendButtons, addButtonListeners,
  addLeftRightListeners
} from "./dom_elements.js";

document.addEventListener("DOMContentLoaded", () => {
  setCarousel();
  appendImages();
  appendButtons();
  addLeftRightListeners();
  addButtonListeners();
});