import React from 'react';
import { Form } from 'antd';

function CommentForm() {
  const [commentText, setCommentText] = useState('');

  const onSubmitComment = useCallback(() => {}, []);

  const onChangeCommentText=

  return <Form onFinish={onSubmitComment}></Form>;
}

export default CommentForm;
