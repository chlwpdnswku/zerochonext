import React from 'react';

function PostForm() {
  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType='multipart/form-data'
      onFinish={onSubmit}
    ></Form>
  );
}

export default PostForm;