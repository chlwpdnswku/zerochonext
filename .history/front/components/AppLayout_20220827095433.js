import React from 'react';
import PropTypes from 'prop-types';

function AppLayout({ children }) {
  return (
    <div>
      <div></div>
    </div>
  );
}
AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
