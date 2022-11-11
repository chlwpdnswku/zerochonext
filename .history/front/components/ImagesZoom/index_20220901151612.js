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
  return (
    <div>
      <Header>
        <h1>상세이미지</h1>
        <button onClick={onClose}>X</button>
      </Header>
      {/* 케루셀 react-slick  옆으로 넘기면서 볼 수 있는 지원 컴포넌트 */}
      <div>
        <div>
          {/* 0번째부터  현재 슬라이드를 */}
          <Slick initialSlide={0} />
        </div>
      </div>
    </div>
  );
}

export default ImagesZoom;
