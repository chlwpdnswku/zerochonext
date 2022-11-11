import React from 'react';
import { Button, Form, Input } from 'antd';

function LoginForm() {
  return (
    <Form>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <br />
        <Input name='user-id' />
      </div>
    </Form>
  );
}

export default LoginForm;
