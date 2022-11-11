import React, { useState } from 'react';
import { Form } from 'antd';
import useInput from '../hooks/useInput';

function CommentForm() {
  // 커스텀훅
  const [commentText, onChangeCommentText] = useInput('');

  // const onChangeCommentText = useState('');
  const onSubmitComment = useCallback(() => {}, []);

  return <Form onFinish={onSubmitComment}></Form>;
}

export default CommentForm;
