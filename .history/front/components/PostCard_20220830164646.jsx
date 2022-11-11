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
function PostCard({}) {
  return (
    <div>
      <Card cover={post.Images[0]}>
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
