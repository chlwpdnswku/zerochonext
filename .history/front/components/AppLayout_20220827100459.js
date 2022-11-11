import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
function AppLayout({ children }) {
  return (
    <div>
      <div>
        <Link href='/'>
          <a>제운</a>
        </Link>
        <Link href='/profile'>
          <a>프로필</a>
        </Link>
        <Link href='/signup'>
          <a>회원가입</a>
        </Link>
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
