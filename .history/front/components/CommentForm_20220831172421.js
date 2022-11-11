import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import useInput from '../hooks/useInput';

function CommentForm() {
  // 커스텀훅으로 줄이기
  const [commentText, onChangeCommentText] = useInput('');
  // const onChangeCommentText = useState('');
  const onSubmitComment = useCallback(() => {
    console.log(post.id, commentText);
  }, [commentText]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item>
        <Input.TextArea></Input.TextArea>
      </Form.Item>
    </Form>
  );
}

export default CommentForm;
