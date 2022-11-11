import React from 'react';

function PostImages({ images }) {
  if (images.length === 1) {
    return (
      <>
        <img src={images[0].src} />
      </>
    );
  }
}

export default PostImages;
