import React from 'react';
import AppLayout from '../components/AppLayout';
function profile() {
  const followerList = [
    { nickname: '제로초' },
    { nickname: '바보' },
    { nickname: '노드버드오피셜' },
  ];
  const followingList = [
    { nickname: '제로초' },
    { nickname: '바보' },
    { nickname: '노드버드오피셜' },
  ];

  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList header='팔로잉 목록' data={followingList} />
      <FollowList header='팔로워 목록' data={followerList} />
    </AppLayout>
  );
}

export default profile;
