import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import useInput from '../hooks/useInput';
import { useSelector } from 'react-redux';

// 게시글을 받아온이유가 post로받아옴
// post로 데이터를 안불러오면 데이터가 안들어옴!
function CommentForm({ post }) {
  // 커스텀훅으로 줄이기
  const [commentText, onChangeCommentText] = useInput('');
  // const onChangeCommentText = useState('');

  // 로그인을 했을때 내가 없는 경우를 대비해주는 옵셔널 체이닝
  const id = useSelector((state) => state.user.me?.id);

  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);

  //
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea
          value={commentText}
          onChange={onChangeCommentText}
          row={4}
        />
        <Button
          style={{ position: 'absolute', right: 0, bottom: -40, zIndex: 1 }}
          type='primary'
          htmlType='submit'
        >
          눌러
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CommentForm;
