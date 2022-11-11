import { all } from 'redux-saga/effects';

// 4 *붙히면 에러남 실제로 서버에 요청을함
function logInAPI(data) {
  return axios.post('/api/login', data);
}

// 3
function* logIn(action) {
  // 결과값 을 받을 수 있음 요청실패 성공여부
  try {
    // 가짜 서버 만들기
    yield delay(1000);
    // 5 리턴값을 여기서받음 put === dispatch 같은느낌
    // call을쓰면 logInAPI(action.data)가아니고 아래처럼 써줘야함 첫번째 자리 함수 나머지 매개변수
    // const result = yield call(logInAPI, action.data);
    // 비동기 fork ->   axios.post('/api/login'); 인데 result값이없잖음

    yield put({
      type: 'LOG_IN_SUCCESS',
      //   data: result.data,
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
    yield delay(1000);

    yield put({
      type: 'LOG_OUT_SUCCESS',
      //   data: result.data,
    });
  } catch (error) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: error.response.data,
    });
  }
}

export default function* userSaga() {
  yield all([fork(FirstLogin), fork(FirstLogOut)]);
}