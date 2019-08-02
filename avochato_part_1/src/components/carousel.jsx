import React, { useState } from 'react';
import ImageButtonIndex from './image_button_index';
import ImageIndex from './image_index';
import DirectionButton from './direction_button';

const Carousel = props => {
  const [ order, setOrder ] = useState([0, 1, 2, 3, 4]);

  const rotate = (direction, count) => {
    if (direction === 'left') {
      rotateLeft(count);
    } else {
      rotateRight(count);
    }
  };

  const rotateLeft = (count) => {
    let updatedOrder = order.slice();
    for (let i = 0; i < count; i++) {
      updatedOrder.unshift(updatedOrder.pop());
    }
    setOrder(updatedOrder);
  };

  const rotateRight = (count) => {
    let updatedOrder = order.slice();
    for (let i = 0; i < count; i++) {
      updatedOrder.push(updatedOrder.shift());
    }
    setOrder(updatedOrder);
  };
  
  const handleDirectionClick = e => {
    let direction = e.currentTarget.id;
    rotate(direction, 1);
  };

  const rotateToImage = (e) => {
    let target = Number(e.currentTarget.id);
    let targetPosition = order.indexOf(target);
    let center = Math.floor(order.length / 2);
    let distFromCenter = center - targetPosition;
    let direction = distFromCenter < 0 ? "right" : "left";
    let count = Math.abs(distFromCenter);
    rotate(direction, count);
  };

  return (
    <>
      <div className="carousel-wrap">
        <DirectionButton rotate={handleDirectionClick} id={"left"}/>
        <ImageIndex order={order}/>
        <DirectionButton rotate={handleDirectionClick} id={"right"}/>
      </div>
      <ImageButtonIndex rotateToImage={rotateToImage} />
    </>
  )
};

export default Carousel;