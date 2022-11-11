import React from 'react';
import { Form } from 'antd';
function PostForm() {
  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType='multipart/form-data'
    ></Form>
  );
}

export default PostForm;
