import React, { useCallback, useState } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import PropTypes from 'prop-types';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
function signup() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = useCallback(() => {}, []);
  const onChangeId = useCallback((e) => {
    e.target.value;
  }, []);

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
              value={nick}
              required
              onChange={onChangeNick}
            />
          </div>
        </Form>
      </AppLayout>
    </>
  );
}

export default signup;
