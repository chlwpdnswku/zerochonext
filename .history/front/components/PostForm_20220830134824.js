import React from 'react';

import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

function PostForm() {
  const onSubmit = useCallback(() => {}, []);

  const onChangeText = useCallback(() => {}, []);

  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType='multipart/form-data'
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder='어떤 신기한 일이 있었나요?'
      />
      <div></div>
    </Form>
  );
}

export default PostForm;
