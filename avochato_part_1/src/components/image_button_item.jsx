import React from 'react';

const ImageButtonItem = props => {
  const { id, rotateToImage } = props;

  return (
    <button
      onClick={rotateToImage}
      className="image-button"
      id={id} >
        {id}
    </button>
  )
};

export default ImageButtonItem;