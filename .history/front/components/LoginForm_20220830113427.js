import React, { useState, useCallback, useMemo } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import { login } from '../reducer/ㅕ';
// 이렇게적어야 객체 변환으로쓸수가있음 아래button한개만 적용
// const buttonWrapper = styled.div`
//   margin-top: 10px;
// `;

// useMemo로도가능
// Applayout에서오는 props
function LoginForm() {
  // action을 dispatch
  const dispatch = useDispatch();

  const [id, onChangeId] = useInput('');

  // const [id, setId] = useState('');

  // //컴포넌트에 props를쓰면 useCallback
  // const onChangeId = useCallback((e) => {
  //   setId(e.target.value);
  // }, []);

  const [password, onChangePassword] = useInput('');

  // const [password, setPassword] = useState('');

  // const onChangePassword = useCallback((e) => {
  //   setPassword(e.target.value);
  // }, []);

  //그냥이런식으로해서 리랜더링최적화해도됨
  const style = useMemo(() => ({ marginTop: '10px' }), []);

  //login을 하는순간 true로
  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    // ??이거는 안써주는데 일단대기
    // setLogin(true);
    dispatch(login({ id, password }));
  }, [id, password]);

  //   onFinishi는 e.preventdefault가 자동적용

  return (
    <Form onFinish={onSubmitForm} style={{ padding: '10px' }}>
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

      {/* style에 객체를 넣으면안됨  {}==={} ->false가됨 서로다른 주소를 가리키기때문임 근대 오류나서 나중에 사용*/}
      <div style={style}>
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
