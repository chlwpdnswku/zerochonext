import React from 'react';

function PostImages({ images }) {
  // 이미지가 한개면 전체를보여주고 많으면 더보기 버튼식으로 해줌
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
