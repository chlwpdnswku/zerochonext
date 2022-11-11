import React from 'react';

function PostImages({ images }) {
  if (images.length === 1) {
    return (
      <>
        {/* 이미지  */}
        <img src={images[0].src} alt={images[0].src} />
      </>
    );
  }
}

export default PostImages;
