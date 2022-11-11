import { Avatar, Card, Button } from 'antd';
import React from 'react';

function UserProfile() {
  return (
    <Card>
      <Meta avatar={<Avatar>최제운</Avatar>} title='최제운' />
    </Card>
  );
}

export default UserProfile;
