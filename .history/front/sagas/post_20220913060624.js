import { all, put, call, fork, takeLatest } from 'redux-saga/effects';

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
      // data: result.data,
    });
  } catch (error) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: error.response.data,
    });
  }
}

function* FirstAddPost() {
  // 2초동안은 한번만 실행하는것  스토클은 특수한 경우만쓰긴함 짜피 서버에서 검사를해서 하는 것이 맞음
  yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* postSaga() {
  yield all([fork(FirstAddPost)]);
}
