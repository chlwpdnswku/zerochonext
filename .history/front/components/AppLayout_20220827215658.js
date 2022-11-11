import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button } from 'antd';
import PropTypes from 'prop-types';

function AppLayout({ children }) {
  return (
    <div>
      <Menu mode='horiziontal'>
        <Menu.item key='home'>
          <Link href='/'>
            <a>최제운</a>
          </Link>
        </Menu.item>
      </Menu>
    </div>
  );
}

export default AppLayout;
