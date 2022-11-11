import React from 'react';

import NicknameEditForm from '../components/NicknameEditForm';
import AppLayout from '../components/AppLayout';
import FollowList from '../components/FollowList';

const Profile = () => {
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
      {/* props 개수가 너무많으면 컴포넌트를 분리해줘야된다 */}
      <FollowList header='팔로잉 목록' data={followingList} />
      <FollowList header='팔로워 목록' data={followerList} />
    </AppLayout>
  );
};

export default Profile;
