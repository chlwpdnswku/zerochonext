import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { useSelector } from 'react-redux';

import React from 'react';

function index() {
  // 로그인 한사람한테만 보이기
  const { isLoggedIn } = useSelector((state) => state.user);
  // 포스트안에있는 게시물들을
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {/*index 를 key로 쓰지말자! */}
      {mainPosts.map((c) => {
        return <PostCard key={c.id} post={c} />;
      })}
    </AppLayout>
  );
}

export default index;
