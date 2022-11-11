import { all } from 'redux-saga/effects';

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
    yield delay(1000);

    yield put({
      type: 'ADD_POST_SUCCESS',
      //   data: result.data,
    });
  } catch (error) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: error.response.data,
    });
  }
}

export default function* postSaga() {
  yield all([fork(FirstLogin), fork(FirstLogOut)]);
}
