import React from 'react';
import { Form } from 'antd';

function CommentForm() {
  const [commentText, setCommentText] = useState('');

  const onSubmitComment = useCallback(() => {}, []);

  return <Form onFinish={onSubmitComment}></Form>;
}

export default CommentForm;
