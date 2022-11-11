import { Avatar, Card, Button } from 'antd';
import React from 'react';

function UserProfile() {
  return (
    <Card
      actions={[
        <div key='twit'>
          카드1 <br />0
        </div>,
        <div key='twit'>
          카드1 <br />0
        </div>,
        <div key='twit'>
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
