import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => (
  <AppLayout>
    <Head>
      <title>NodeBird</title>
    </Head>
    <PostForm />
    <PostCard />
  </AppLayout>
);

export default Home;
