import React from 'react';
import PropTypes from 'prop-types';

function index({ images, onClose }) {
  return <div>index</div>;
}
ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
    })
  ),
};

export default index;
