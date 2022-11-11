import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { createGlobalStyle } from 'styled-components';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

function AppLayout({ children }) {
  // const [login, setLogin] = useState(false);
  // console.log(children);

  // 리덕스에서 가져온
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  // 구조분해할당 취향차이임이거는
  // const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <div>
      <Global />
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
          {/* Login 구분 */}
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href='http://www.naver.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            깃허브 주소아이디추가
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
