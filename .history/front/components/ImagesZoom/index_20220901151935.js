import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Overlay,
  Header,
  CloseBtn,
  SlickWrapper,
  ImgWrapper,
  Indicator,
  Global,
} from './styles';
import Slick from 'react-slick';

function ImagesZoom({ images, onClose }) {
  const [currentSlide, setCurrentSlice] = useState(0);
  return (
    <div>
      <Header>
        <h1>상세이미지</h1>
        <button onClick={onClose}>X</button>
      </Header>
      {/* 케루셀 react-slick  옆으로 넘기면서 볼 수 있는 지원 컴포넌트 */}
      <div>
        <div>
          {/* 0번째부터  현재 슬라이드를  page를 넘기는 슬라이드번호를 state로저장 */}
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentSlice(slide)}
            infinite
            arrows={false}
            slidesToScroll={1}
            slidesToShow={1}
          />
          {/* 이미지들을 반복문으로 넣음 */}
          {images.map((v) => (
            <div>
              <img />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImagesZoom;
