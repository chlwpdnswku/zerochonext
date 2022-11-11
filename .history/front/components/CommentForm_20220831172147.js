import React, { useState } from 'react';
import { Form } from 'antd';

function CommentForm() {
  // 커스텀훅
  const [commentText, setCommentText] = useInput('');

  const onSubmitComment = useCallback(() => {}, []);

  const onChangeCommentText = useState('');

  return <Form onFinish={onSubmitComment}></Form>;
}

export default CommentForm;
