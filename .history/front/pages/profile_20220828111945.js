import React from 'react';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';

const Profile = () => (
  const followerList = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }];
  const followingList = [{ nickname: '제로초' }, { nickname: '바보' }, { nickname: '노드버드오피셜' }];


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
