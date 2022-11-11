import { Avatar, Card, Button } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducer/user';

const dummy = {
  nickname: '제로초',
  Posts: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};

function UserProfile() {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  const onLogout = useCallback(() => {
    // setLogin(false);
    // 비동기는 항상 requset success faile
    dispatch(logoutRequestAction());
  }, []);

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
    >
      {/* <Card.Meta
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
      <Button>로그아웃</Button>
    </Card> */}

      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogout} loading={isLogOut}>
        로그아웃
      </Button>
    </Card>
  );
}

export default UserProfile;
