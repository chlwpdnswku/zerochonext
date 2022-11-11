import { createWrapper } from 'next-redux-wrapper';

import { createStore } from 'redux';
import reducer from '../reducer';

const configureStore = () => {
  const store = crea;
};

// debug가 true면 더 자세한 설명이나옴
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
