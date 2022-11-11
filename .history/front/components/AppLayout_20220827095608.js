import React from 'react';
import PropTypes from 'prop-types';

function AppLayout({ children }) {
  return (
    <div>
      <div>공통메뉴</div>
      {/* ?? */}
      {children}
    </div>
  );
}
AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
