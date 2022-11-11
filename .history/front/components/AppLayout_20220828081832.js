import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button, Row, Col } from 'antd';
import PropTypes from 'prop-types';

function AppLayout({ children }) {
  const [] = useState('');
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
      <Link href='/signup'>
        <a>
          <button>회원가입</button>
        </a>
      </Link>
      <Row gutter={8}>
        <Col xs={24} md={6}></Col>
        <Col xs={24} md={12}>
          {' '}
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
