import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
function profile() {
  return (
    <>
      <Head>
        <title>내 프로필</title>
        <AppLayout>profile</AppLayout>
      </Head>
    </>
  );
}

export default profile;
