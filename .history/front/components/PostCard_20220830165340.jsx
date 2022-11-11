import PropTypes from 'prop-types';
import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import {
  RetweetOutlined,
  HeartTwoTone,
  HeartOutlined,
  MessageOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import { useSelector } from 'react-redux';
import Link from 'next/link';

// 처음에 구상을 좀 잘해야됨
function PostCard({ post }) {
  return (
    <div>
      {/* image가 존재를하면 ? */}
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        // 배열엔에 jsx는
        actions={[
          <RetweetOutlined />,
          <HeartOutlined />,
          <MessageOutlined />,
          //더보기 버튼
          <Popover>
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Image />
        <Content />
        <Button></Button>
      </Card>
      <CommentForm />
      <Comments />
    </div>
  );
}

export default PostCard;
