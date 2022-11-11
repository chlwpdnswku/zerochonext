import { Avatar, Card, Button } from 'antd';
import React from 'react';

function UserProfile() {
  return (
    <Card
    actions={[
        <div key='twit'>
          짹짹
          <br />
          {dummy.Posts.length}
        </div>,
        <div key='following'>
          팔로잉
          <br />
          {dummy.Followings.length}
        </div>,
        <div key='follower'>
          팔로워
          <br />
          {dummy.Followers.length}
        </div>,
      ]}
      ]}
    >
      <Card.Meta avatar={<Avatar>최제운</Avatar>} title='최제운' />
      <Button>로그아웃</Button>
    </Card>
  );
}

export default UserProfile;
