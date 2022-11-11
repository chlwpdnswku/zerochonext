import React from 'react';
import { Form } from 'antd';
function PostForm() {
  return (
    <Form style={{ margin: '10px 0 20px' }} encType='multipart/form-data'>
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder='어떤 신기한 일이 있었나요?'
      />
    </Form>
  );
}

export default PostForm;
