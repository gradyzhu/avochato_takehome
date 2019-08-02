import React from 'react';

const ImageButton = props => {
  const { id, num } = props;
  return (
    <button id={id} className="image-button">
      {num}
    </button>
  )
};

export default ImageButton;