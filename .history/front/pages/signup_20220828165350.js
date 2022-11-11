import React, { useCallback, useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import PropTypes from 'prop-types';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
function signup() {
  // const [id, setId] = useState('');
  // const onChangeId = useCallback((e) => {
  //   e.target.value;
  // }, []);

  // const [password, setPassword] = useState('');
  // const onChangePassword = useCallback((e) => {
  //   e.target.value;
  // }, []);

  // const [nickname, setNickname] = useState('');
  // const onChangeNickname = useCallback((e) => {
  //   e.target.value;
  // }, []);

  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [nickname, onChangeNickname] = useInput('');

  const [passwordCheck, setPasswordCheck] = useState('');

  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value);
    // 패스워드 에러때문에
    setPasswordError(e.target.value !== password);
  }, []);

  const onSubmit = useCallback(() => {}, []);
  return (
    <>
      <AppLayout>
        <Head>회원가입 </Head>
        <Form onFinish={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor='user-id'>아이디</label>
            <br />
            <Input name='user-id' value={id} required onChange={onChangeId} />
          </div>

          <div>
            <label htmlFor='user-nick'>닉네임</label>
            <br />
            <Input
              name='user-nick'
              value={nickname}
              required
              onChange={onChangeNickname}
            />
          </div>

          <div>
            <label htmlFor='user-password'>비밀번호</label>
            <br />
            <Input
              name='user-password'
              type='password'
              value={password}
              required
              onChange={onChangePassword}
            />
          </div>

          <div>
            <label htmlFor='user-password'>비밀번호 체크</label>
            <br />
            <Input
              name='user-password-check'
              type='password'
              value={passwordCheck}
              required
              onChange={onChangePasswordCheck}
            />
          </div>
        </Form>
      </AppLayout>
    </>
  );
}

export default signup;
