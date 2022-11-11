import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { useSelector } from 'react-redux';

import React from 'react';

function index() {
  // 로그인으로 확인할건데
  const { isLoggedIn } = useSelector((state) => state.user);
  // 포스트안에있는 게시물들을
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((c) => {
        return <PostCard key={c.id} post={c} />;
      })}
    </AppLayout>
  );
}

export default index;
