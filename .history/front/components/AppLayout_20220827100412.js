import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
function AppLayout({ children }) {
  return (
    <div>
      <div>
        <Link></Link>
      </div>
      {/* ?? */}
      {children}
    </div>
  );
}
AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
