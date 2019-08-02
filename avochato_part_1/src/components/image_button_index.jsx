import React from 'react';
import ImageButton from './image_button';

const ImageButtonIndex = props => {
  // const { arr } = props;
  let arr = [0,1,2,3,4]; // temp
  const imageButtons = arr.map(idx => {
    return <ImageButton id={String(arr[idx])} num={idx}/>
  });

  return (
    <>
      <ul>
        {imageButtons}
      </ul>
    </>
  )
};

export default ImageButtonIndex;