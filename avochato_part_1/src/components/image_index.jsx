import React from 'react';
import ImageIndexItem from './image_index_item';

const ImageIndex = props => {
  const { order } = props;
  const imageIndex = order.map((imageId, idx) => {
    return <ImageIndexItem key={idx} id={imageId}/>
  });

  return (
    <div className="carousel-container">
      <ul id="carousel-images">
        {imageIndex}
      </ul>
    </div>
  )
};

export default ImageIndex;