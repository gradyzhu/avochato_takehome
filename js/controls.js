import { carousel, offset, srcs } from "./dom_elements.js.js.js";
import { animateOpacityOn, animateOpacityOff, animatePosition } from "./animate_css.js.js.js";
// state

const INTERVALTIME = 3000;
let rotationCount = 0,
    imageCount = 5,
    imageOrder = [ 0, 1, 2, 3, 4 ],
    imagePositions = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0};

const shiftElements = direction => {
  let transVal;
  
  for (let i = 0; i < imageCount; i++) {
    if (direction === "right") {
      transVal = imagePositions[i] + offset;
    } else {
      transVal = imagePositions[i] - offset;
    } 
    animateOpacityOn(carousel[i]);
    animatePosition(carousel[i], transVal);
    
    imagePositions[i] = transVal;
  }
};

const shiftLastToFront = () => {
  rotationCount--;
  if (rotationCount < 0) rotationCount = imageCount + rotationCount;
  let lastIdx = rotationCount % imageCount;
  let lastImage = document.getElementById(`${lastIdx}`);
  let transVal = imagePositions[lastIdx] - offset * imageCount;

  animateOpacityOff(lastImage);
  animatePosition(lastImage, transVal);

  imagePositions[lastIdx] = transVal;
  imageOrder.unshift(imageOrder.pop());
};

const shiftFrontToLast = () => {
  if (rotationCount < 0) rotationCount = rotationCount * -1;
  let frontIdx = rotationCount % imageCount;
  let frontImage = document.getElementById(`${frontIdx}`);
  let transVal = imagePositions[frontIdx] + offset * imageCount;

  animateOpacityOff(frontImage);
  animatePosition(frontImage, transVal);

  imagePositions[frontIdx] = transVal;
  imageOrder.push(imageOrder.shift());
  rotationCount++;
};

export const rotateLeft = () => {
  shiftElements('left');
  shiftFrontToLast();
  resetInt();
};

export const rotateRight = () => {
  shiftElements('right');
  shiftLastToFront();
  resetInt();
};

// specific image handler / interval logic

let interval = setInterval(rotateRight, INTERVALTIME);

const resetInt = () => {
  clearInterval(interval);
  interval = setInterval(rotateRight, INTERVALTIME);
};

const rotateCarousel = (count, rotateFunction) => {
  let timer = 0;
  const addedTime = 1000;

  for (let i = 0; i < count; i++) {
    setTimeout(rotateFunction, timer);
    timer += addedTime;
  }
};

const findRotationsFromCenter = (center, target) => {
  let i = imageOrder.indexOf(target);
  return i > center ? i - center : center - i;
};

const findRotationDirection = (center, target) => {
  let i = imageOrder.indexOf(target);
  return i > center ? rotateLeft : rotateRight;
};

export const rotateToImage = (e) => {
  let target = Number(e.currentTarget.id.split('button')[1]);
  let center = Math.floor(imageCount / 2);
  let count = findRotationsFromCenter(center, target);
  let direction = findRotationDirection(center, target);
  rotateCarousel(count, direction);
  resetInt();
};