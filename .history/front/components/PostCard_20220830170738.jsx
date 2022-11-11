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
      {/* image가 존재를하면  이미지 안에 배열을 확인을 함? */}
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        // 배열엔에 jsx는 ket값을 넣어주야됨
        actions={[
          <RetweetOutlined key='retweet' />,
          <HeartOutlined key='heart' />,
          <MessageOutlined key='comment' />,
          //더보기 버튼 content를 넣어 더보기가 뭐라뜰지 알게함
          <Popover
            key='more'
            content={
              <Button.Group>
                <Button>수정 </Button>
                <Button>삭제 </Button>
                <Button>수정 </Button>
              </Button.Group>
            }
          >
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
