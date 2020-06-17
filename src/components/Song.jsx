import React from 'react';

const Song = ({chartPosition, title, image}) => {
  return (
    <>
      No {chartPosition} - {title}
      <p><img src={image} alt=""/></p>
    </>
  )
}
export default Song;
