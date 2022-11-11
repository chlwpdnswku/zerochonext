import React from 'react';
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
      {/* 케루셀 react-slick  옆으로 넘기면서 볼 수 있는 지원컴포넌트 */}
      <div>
        <div>
          <Slick />
        </div>
      </div>
    </div>
  );
}

export default ImagesZoom;
