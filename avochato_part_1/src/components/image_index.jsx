import React from 'react';
import ImageIndexItem from './image_index_item';

const ImageIndex = props => {
  const {} = props;
  let arr = [0,1,2,3,4];
  const imageIndex = arr.map((image, i) => {
    return <ImageIndexItem id={i}/>
  });
  return (
    <>
    <div className="carousel-container">
      <ul id="carousel-images">
        {imageIndex}
      </ul>
    </div>
    </>
  )
};

export default ImageIndex;