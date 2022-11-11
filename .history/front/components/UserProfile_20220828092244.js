import { Avatar, Card, Button } from 'antd';
import React from 'react';

function UserProfile() {
  return (
    <Card>
      <Card.Meta avatar={<Avatar></Avatar>} title='최제운' />
    </Card>
  );
}

export default UserProfile;
