import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { useSelector } from 'react-redux';

import React from 'react';

function index() {
  const { isLoggedIn } = useSelector((state) => state.user);
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
