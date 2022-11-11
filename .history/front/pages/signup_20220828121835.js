import React, { useCallback } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import PropTypes from 'prop-types';

import AppLayout from '../components/AppLayout';
function signup() {
  const onSubmit = useCallback(() => {}, []);

  return (
    <>
      <AppLayout>
        <Head>회원가입 </Head>
        <Form onFinish={onSubmit} style={{ padding: 10 }}></Form>
      </AppLayout>
    </>
  );
}

export default signup;
