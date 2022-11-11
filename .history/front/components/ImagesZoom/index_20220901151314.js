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
    <header>
    <h1>상세이미지</h1>
    <button onClick={onClose}>X</button>
    </header>

  </div>
)

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
    })
  ).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
