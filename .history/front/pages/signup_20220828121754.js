import React from 'react';
import AppLayout from '../components/AppLayout';
function signup() {
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
