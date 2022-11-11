import React from 'react';

function profile() {
  return (
    <AppLayout>
      <NicknameEditForm />
      <FollowList header='팔로잉 목록' data={followingList} />
      <FollowList header='팔로워 목록' data={followerList} />
    </AppLayout>
  );
}

export default profile;
