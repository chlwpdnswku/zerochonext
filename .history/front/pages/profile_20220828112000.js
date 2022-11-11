import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';

const Profile = () => (
  <AppLayout>
    <Head>
      <title>NodeBird</title>
    </Head>
    <NicknameEditForm />
    <FollowList header='팔로잉 목록' />
    <FollowList header='팔로워 목록' />
    <div>내 프로필</div>
  </AppLayout>
);

export default Profile;
