import React, { useState } from 'react';
import { Form } from 'antd';

function CommentForm() {
  const [commentText, setCommentText] = useState('');

  const onSubmitComment = useCallback(() => {}, []);

  const onChangeCommentText = useState;

  return <Form onFinish={onSubmitComment}></Form>;
}

export default CommentForm;
