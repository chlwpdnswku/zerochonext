import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Input, Button, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

function AppLayout({ items }) {
  const [login, setLogin] = useState(false);
  const dummy = {
    nickname: '제로초',
    Post: [],
    Followings: [],
    Followers: [],
    isLoggedIn: false,
  };

  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item key='home'>
          <Link href='/'>
            <a>최제운</a>
          </Link>
        </Menu.Item>
        <Menu.Item key='profile'>
          <Link href='/profile'>
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key='mail'>
          <Input.Search
            enterButton
            style={{
              verticalAlign: 'middle',
            }}
          />
        </Menu.Item>
      </Menu>

      <Row gutter={8}>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href='https://www.zerocho.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            Made by ZeroCho
          </a>
        </Col>
      </Row>
    </div>
  );
}
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
