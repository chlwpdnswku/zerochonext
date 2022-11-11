import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd';
function AppLayout({ children }) {
  return (
    <div>
      <Menu mode='horizontal'>
        <Link href='/'>
          <a>제운</a>
        </Link>
        <Link href='/profile'>
          <a>프로필</a>
        </Link>
        <Link href='/signup'>
          <a>회원가입</a>
        </Link>
      </Menu>
      {children}
    </div>
  );
}
AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
