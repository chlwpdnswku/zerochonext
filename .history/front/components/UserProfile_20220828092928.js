import { Avatar, Card, Button } from 'antd';
import React from 'react';

function UserProfile() {
  return (
    <Card actions={[<div>ㅋㅋ</div>]}>
      <Card.Meta avatar={<Avatar>최제운</Avatar>} title='최제운' />
      <Button>로그아웃</Button>
    </Card>
  );
}

export default UserProfile;
