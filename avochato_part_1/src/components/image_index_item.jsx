import React from 'react';
import { imageSrcs } from '../imageSrcs.js';

const ImageIndexItem = props => {
  const { id } = props;
  const src = imageSrcs[Number(id)];

  return (
    <li id={id} className={"image-container"}>
      <img className="image" src={src} >
      </img>
    </li>
  )
};

export default ImageIndexItem;