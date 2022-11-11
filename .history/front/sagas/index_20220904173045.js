import { all, fork, take, call, put } from 'redux-saga/effects';
import axios from 'axios';

// 4 *붙히면 에러남 실제로 서버에 요청을함
function logInAPI() {
  return axios.post('/api/login');
}

// 3
function* logIn() {
  // 결과값 을 받을 수 있음 요청실패 성공여부
  try {
    const result = yield call(logInAPI);
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

//2 비동기액션 creator
function* FirstLogin() {
  yield take('LOG_IN', logIn);
}

function* FirstLogOut() {
  yield take('LOG_OUT');
}
function* FirstAddPost() {
  yield take('ADD_POST');
}

// root만들어넣고 -> 비동기액션 넣기 1
export default function* rootSaga() {
  yield all([fork(FirstLogin), fork(FirstLogOut), fork(FirstAddPost)]);
}
