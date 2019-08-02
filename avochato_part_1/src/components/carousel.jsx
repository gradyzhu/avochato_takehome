import React, { useState, useEffect } from 'react';
import ImageButtonIndex from './image_button_index';
import ImageIndex from './image_index';
import DirectionButton from './direction_button';

const Carousel = props => {
  const [ order, setOrder ] = useState([0,1,2,3,4]);
  const [ imgPositions, setImgPositions ] = useState({0: 0, 1: 0, 2: 0, 3: 0, 4: 0});
  // const [ intTime, intervalTime ] = useState(3000);

  useEffect(() => {
    
  });

  const rotate = (e) => {
    // let direction = e.currentTarget.id;
    // shiftElements(direction);
    // shiftFrontToLast();
    // resetInt();
  };

  // const shiftElements = (direction) => {
  //   let transVal;
    
  //   for (let i = 0; i < length; i++) {
  //     if (direction === "right") {
  //       transVal = imageTransPos[i] + offset;
  //     } else {
  //       transVal = imageTransPos[i] - offset;
  //     } 
  //     // carousel[i].style.transition = `1s`;
  //     // carousel[i].style.opacity = `1`;
  //     // carousel[i].style.transform = `translateX(${transVal}px)`;
  
  //     imageTransPos[i] = transVal;
  //   }
  // };


  return (
    <>
      <div className="carousel-wrap">
        <DirectionButton rotate={rotate} id={"left"}/>
        <ImageIndex />
        <DirectionButton rotate={rotate} id={"right"}/>
      </div>
      <ImageButtonIndex />
    </>
  )
};

export default Carousel;