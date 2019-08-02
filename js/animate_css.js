export const animateOpacityOn = (element) => {
  element.style.transition = '1s';
  element.style.opacity = '1';
};

export const animateOpacityOff = (element) => {
  element.style.transition = '0s';
  element.style.opacity = '0';
};

export const animatePosition = (element, transVal) => {
  element.style.transform = `translateX(${transVal}px)`;
};
