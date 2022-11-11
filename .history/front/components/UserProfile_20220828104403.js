import { Avatar, Card, Button } from 'antd';
import React from 'react';

const dummy = {
  nickname: '제로초',
  Posts: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};

function UserProfile() {
  return (
    <Card
      style={{ width: 300 }}
      actions={[
        <div key='twit'>
          카드1 <br />0
        </div>,
        <div key='following'>
          카드1 <br />0
        </div>,
        <div key='follower'>
          카드1 <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>최제운</Avatar>} title='최제운' />
      <Button>로그아웃</Button>
    </Card>
  );
}

export default UserProfile;
