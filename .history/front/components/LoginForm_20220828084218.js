import React, { useState, useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';

function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPassWordCheck] = useState('');

  //컴포넌트에 props를쓰면 useCallback
  const onSubmitForm = useCallback(() => {
    console.log({ id, password });
  }, [id, password]);

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <br />
        <Input name='user-id' value={id} onChange={setId} required />
      </div>

      <div>
        <label htmlFor='user-password'>비밀번호</label>
        <Input
          htmlFor='user-password'
          value={password}
          onChange={setPassword}
          type='password'
          required
        />
      </div>

      <div style={{ mt: '10px' }}>
        <Button type='primary' htmlType='submit' loading={false}>
          로그인
        </Button>
        <Link href='/signup'>
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </Form>
  );
}

export default LoginForm;
