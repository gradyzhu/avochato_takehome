import { rotateLeft, rotateRight, rotateToImage } from './controls.js';

const srcs = {
  0: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
  1: "https://images.unsplash.com/photo-1564402355305-d650dd64d90e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1872&q=80",
  2: "https://images.unsplash.com/photo-1564496448875-9a73a6e81bdf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=947&q=80",
  3: "https://images.unsplash.com/photo-1564447634829-4f4d15e2f846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
  4: "https://images.unsplash.com/photo-1564494906097-524b2670a32a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
};

// creation helpers

const carouselContainer = document.getElementById("carousel-images");
const buttonsContainer = document.getElementById("buttons-container");

const createCarouselItem = (id) => {
  let container = document.createElement("li");
  container.id = id;
  container.className = "image-container";
  return container;
};

const createImageItem = (id, src) => {
  let image = document.createElement("img");
  image.src = src;
  image.id = "image" + id;
  image.className = "image";
  return image;
};

const createButton = (idx) => {
  let button = document.createElement("button");
  button.id = "button"+idx;
  button.className = "image-button";
  return button;
};

// setState methods

export const carousel = [];
export let offset;

export const setCarousel = () => {
  for (let key in srcs) {
    let container = createCarouselItem(key);
    container.style.transition = '1s';
    container.appendChild(createImageItem(key, srcs[key]));
    carousel.push(container);
  }
};

export const appendImages = () => {
  for (let i = 0; i < carousel.length; i++) {
    carouselContainer.appendChild(carousel[i]);
  }
  offset = document.getElementById('image0').width;
};

export const appendButtons = () => {
  for (let i = 0; i < carousel.length; i++) {
    buttonsContainer.appendChild(createButton(i));
  }
};

export const addLeftRightListeners = () => {
  document.getElementById('left').addEventListener("click", rotateLeft);
  document.getElementById('right').addEventListener("click", rotateRight);
};

export const addButtonListeners = () => {
  for (let i = 0; i < carousel.length; i++) {
    document.getElementById(`button${i}`).addEventListener("click", rotateToImage);
  }
};
