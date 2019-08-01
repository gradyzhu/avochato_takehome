import { carousel, offset } from "./dom_elements.js";

// state
let count = 0,
    length = 5,
    imageOrder = [ 0, 1, 2, 3, 4 ],
    imageTransPos = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0};

const shiftElements = (direction) => {
  let transVal;
  
  for (let i = 0; i < length; i++) {
    if (direction === "right") {
      transVal = imageTransPos[i] + offset;
    } else {
      transVal = imageTransPos[i] - offset;
    } 
    carousel[i].style.transition = `1s`;
    carousel[i].style.opacity = `1`;
    carousel[i].style.transform = `translateX(${transVal}px)`;

    imageTransPos[i] = transVal;
  }
};

const shiftLastToFront = () => {
  count--;
  if (count < 0) count = length + count;

  let lastIdx = count % length;
  let lastImage = document.getElementById(`${lastIdx}`);
  let transVal = imageTransPos[lastIdx] - offset * length;

  lastImage.style.transition = '0s';
  lastImage.style.opacity = '0';
  lastImage.style.transform = `translateX(${transVal}px)`;

  imageTransPos[lastIdx] = transVal;
  imageOrder.unshift(imageOrder.pop());
};

const shiftFrontToLast = () => {
  if (count < 0) count = count * -1;

  let frontIdx = count % length;
  let frontImage = document.getElementById(`${frontIdx}`);
  let transVal = imageTransPos[frontIdx] + offset * length;

  frontImage.style.transition = '0s';
  frontImage.style.opacity = '0';
  frontImage.style.transform = `translateX(${transVal}px)`;

  imageTransPos[frontIdx] = transVal;
  imageOrder.push(imageOrder.shift());
  count++;
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

const intTime = 3000;
let interval = setInterval(() => rotateRight(), intTime);

const resetInt = () => {
  clearInterval(interval);
  interval = setInterval(() => rotateRight(), intTime);
};

export const rotateToImage = (e) => {
  let imageIdx = Number(e.currentTarget.id.split('button')[1]);
  // find number of rotations until selected image
  let rotations;
  for (let i of imageOrder) {
    let midIdx = Math.floor(length / 2);
    if (imageOrder[i] === imageIdx) {
      //execute rotations
      if (i > midIdx) {
        rotations = i - midIdx;
        for (let i = 0; i < rotations; i++) rotateLeft();
      } else {
        rotations = midIdx - i;
        for (let i = 0; i < rotations; i++) rotateRight();
      }
      break;
    }
  }  
  resetInt();
};