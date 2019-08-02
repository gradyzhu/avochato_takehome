import React from 'react';

const DirectionButton = props => {
  const { id, rotate } = props;

  let innerHTML = (id === "left") ? "◂" : "▸";
  return (
    <>
      <button 
        onClick={rotate} id={id} 
        className="direction-button">
          {innerHTML}
      </button>
    </>
  )
};

export default DirectionButton;