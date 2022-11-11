import { all, fork, take, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { logout } from '../reducer/user';

// 4 *붙히면 에러남 실제로 서버에 요청을함
function logInAPI(data, a, b) {
  return axios.post('/api/login', data);
}

// 3
function* logIn(action) {
  // 결과값 을 받을 수 있음 요청실패 성공여부
  try {
    // 5 리턴값을 여기서받음 put === dispatch 같은느낌
    // call을쓰면 logInAPI(action.data)가아니고 아래처럼 써줘야함 첫번째 자리 함수 나머지 매개변수
    const result = yield call(logInAPI, action.data, 'a', 'b');
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
  // 이게 한번밖에 동작을 받지않는다. 그래서 while = takeEvery
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
