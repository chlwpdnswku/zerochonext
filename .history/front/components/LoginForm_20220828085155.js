import React, { useState, useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';

function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  //컴포넌트에 props를쓰면 useCallback
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  return (
    <Form style={{ padding: '10px' }}>
      <div>
        <label htmlFor='user-id'>아이디</label>
        <br />
        <Input name='user-id' value={id} onChange={onChangeId} required />
      </div>

      <div>
        <label htmlFor='user-password'>비밀번호</label>
        <Input
          htmlFor='user-password'
          value={password}
          onChange={onChangePassword}
          type='password'
          required
        />
      </div>

      {/* style에 객체를 넣으면안됨  {}==={} ->false*/}
      <div style={{ marginTop: '10px' }}>
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
