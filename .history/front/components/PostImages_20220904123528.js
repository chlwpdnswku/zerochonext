import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImagesZoom';
// images에 정보를불러오고
function PostImages({ images }) {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  // 이미지를클릭했을때 전체화면
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  // 이미지가 한개면 전체를보여주고 많으면 더보기 버튼식으로 해줌
  if (images.length === 1) {
    return (
      <>
        {/* 이미지 alt는 정보를보여주니까 도움이되긴함  이미지를 클릭하면 확대되는 클릭
        role은 클릭해도되냐라는 정보
         */}
        <img
          role='presentation'
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        {/* 확대해서 볼수있는거 */}
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }

  if (images.length === 2) {
    return (
      <>
        <div>
          <img
            // role='presentation'
            src={images[0].src}
            alt={images[0].src}
            width='50%'
            onClick={onZoom}
          />
          <img
            role='presentation'
            src={images[1].src}
            alt={images[1].src}
            width='50%'
            onClick={onZoom}
          />
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <div>
        <img
          role='presentation'
          src={images[0].src}
          alt={images[0].src}
          width='50%'
          onClick={onZoom}
        />
        <div
          role='presentation'
          style={{
            display: 'inline-block',
            width: '50%',
            textAlign: 'center',
            verticalAlign: 'middle',
          }}
          onClick={onZoom}
        >
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </div>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
}

PostImages.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
    })
  ).isRequired,
};
export default PostImages;
