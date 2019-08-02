import React from 'react';
import { imageSrcs } from '../imageSrcs.js';

const ImageIndexItem = props => {
  const { id } = props;

  return (
    <li id={id} className={"image-container"}>
      <img 
        className="image"
        src={imageSrcs[Number(id)]}>
      </img>
    </li>
  )
};

export default ImageIndexItem;