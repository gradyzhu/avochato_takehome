import React, { useState } from 'react';
import ImageButtonItem from './image_button_item';

const ImageButtonIndex = props => {
  const { rotateToImage } = props;
  const [ buttons, setButtons ] = useState([0,1,2,3,4]);
  const imageButtons = buttons.map(id => {
    return (
      <ImageButtonItem 
        rotateToImage={rotateToImage}
        id={id}
        key={id} />
    )
  });

  return <ul>{imageButtons}</ul>
};

export default ImageButtonIndex;