import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { useSelector } from 'react-redux';

const Home = () => (
  // 로그인 될때에만 보여주고

  <AppLayout>
    <Head>
      <title>NodeBird</title>
    </Head>
    <PostForm />
    <PostCard />
  </AppLayout>
);

export default Home;
