import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button } from 'antd';
import PropTypes from 'prop-types';

function AppLayout({ children }) {
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item key='home'>
          <Link href='/'>
            <a>최제운</a>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default AppLayout;
