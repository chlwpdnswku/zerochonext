import React from 'react';
import AppLayout from '../components/AppLayout';
function signup() {
  return (
    <>
      <AppLayout>
        <Head>회원가입 </Head>
        <Form onFinishi={onSubmit}></Form>
      </AppLayout>
    </>
  );
}

export default signup;
