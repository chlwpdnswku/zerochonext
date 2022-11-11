// 특정 컴포넌트들은 (일부)레이아웃을 만들어서 넣기
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd';
const items = [
  { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
  { label: 'item 2', key: 'item-2' }, // which is required
  {
    label: 'sub menu',
    key: 'submenu',
    children: [{ label: 'item 3', key: 'submenu-item-1' }],
  },
];
return <Menu items={items} />;

// props를왜써주면 indexjs안에있는 내용들이옴
function AppLayout({ children }) {
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item>
          <Link href='/'>
            <a>제운</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/profile'>
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href='/signup'>
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
}
AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
