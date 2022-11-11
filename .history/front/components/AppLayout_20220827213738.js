import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button, Row, Col } from 'antd';
import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode='horizontal'>
        <Menu.Item key='home'>
          <Link href='/'>
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key='profile'>
          <Link href='/profile'>
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key='mail'>
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Link href='/signup'>
        <a>
          <Button>회원가입</Button>
        </a>
      </Link>
      <Row gutter={8}>
        <Col xs={24} md={6}></Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href='http://www.naver.com'
            target='_blank_'
            rel='noreferrer noopnner'
          ></a>
        </Col>
      </Row>
    </div>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;