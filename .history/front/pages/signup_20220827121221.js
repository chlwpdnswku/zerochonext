import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
function signup() {
  return (
    <>
      <Head>
        <title>회원가입 프로필</title>
        <AppLayout>회원가입</AppLayout>
      </Head>
    </>
  );
}

export default signup;
