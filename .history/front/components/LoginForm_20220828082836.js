import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPassWordCheck] = useState('');
  return (
    <Form>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <br />
        <Input name='user-id' value={id} onChange={setId} required />
      </div>

      <div>
        <label
          htmlFor='user-password'
          value={password}
          onChange={setPassword}
          type='password'
          required
        >
          비밀번호
        </label>
        <br />
        <Input name='user-id' />
      </div>
      <div>
        <label htmlFor='user-id'></label>
        <br />
        <Input name='user-id' />
      </div>
      <div>
        <Button type='primary' htmlType='submit'></Button>
      </div>
    </Form>
  );
}

export default LoginForm;
