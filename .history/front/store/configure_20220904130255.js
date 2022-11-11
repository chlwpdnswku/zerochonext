import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import { applyMiddleware, compose, createStore } from 'redux';
import reducer from '../reducer';
import thunk from 'redux-thunk';

const logger = () => (next) => (action) => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  // 이렇게 배열을 스프레드 해서 넣기 미들웨어는 리덕스성능을 향상시키는 것
  const middlewares = [thunk];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(reducer, enhancer);
  return store;
};

// debug가 true면 더 자세한 설명이나옴
const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
