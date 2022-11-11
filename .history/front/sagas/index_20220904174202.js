import { all, fork, take, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { logout } from '../reducer/user';

// 4 *붙히면 에러남 실제로 서버에 요청을함
function logInAPI() {
  return axios.post('/api/login');
}

// 3
function* logIn(action) {
  // 결과값 을 받을 수 있음 요청실패 성공여부
  try {
    // 5 리턴값을 여기서받음 put === dispatch 같은느낌
    const result = yield call(logInAPI, action.data);
    // 비동기 fork ->   axios.post('/api/login'); 인데 result값이없잖음

    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: error.response.data,
    });
  }
}

// 로그아웃
function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut() {
  // 결과값 을 받을 수 있음 요청실패 성공여부
  try {
    // 5 리턴값을 여기서받음 put === dispatch 같은느낌
    const result = yield call(logOutAPI);
    // 비동기 fork ->   axios.post('/api/login'); 인데 result값이없잖음

    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: error.response.data,
    });
  }
}

// 포스트 추가
function addPostAPI() {
  return axios.post('/api/addpost');
}

function* addPost() {
  // 결과값 을 받을 수 있음 요청실패 성공여부
  try {
    // 5 리턴값을 여기서받음 put === dispatch 같은느낌
    const result = yield call(addPostAPI);
    // 비동기 fork ->   axios.post('/api/login'); 인데 result값이없잖음

    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: error.response.data,
    });
  }
}

//2 비동기액션 creator
function* FirstLogin() {
  yield take('LOG_IN_REQUEST', logIn);
}

function* FirstLogOut() {
  yield take('LOG_OUT_REQUEST', logOut);
}
function* FirstAddPost() {
  yield take('ADD_POST_REQUEST', addPost);
}

// root만들어넣고 -> 비동기액션 넣기 1
export default function* rootSaga() {
  yield all([fork(FirstLogin), fork(FirstLogOut), fork(FirstAddPost)]);
}
