import React, { useState, useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

// 이렇게적어야 객체 변환으로쓸수가있음 아래button한개만 적용

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

  const ButtonWrapper = styled.div`
    margin-top: 10px;
  `;

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

      {/* style에 객체를 넣으면안됨  {}==={} ->false가됨 서로다른 주소를 가리키기때문임 성능적으로큰차이없으면 그냥하기*/}
      <ButtonWrapper>
        <Button type='primary' htmlType='submit' loading={false}>
          로그인
        </Button>
        <Link href='/signup'>
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </Form>
  );
}

export default LoginForm;
