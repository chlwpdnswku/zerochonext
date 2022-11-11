import {
  all,
  fork,
  take,
  call,
  put,
  takeEvery,
  takeLatest,
  throttle,
  delay,
} from 'redux-saga/effects';

function* FirstAddPost() {
  // 2초동안은 한번만 실행하는것  스토클은 특수한 경우만쓰긴함 짜피 서버에서 검사를해서 하는 것이 맞음
  yield takeLatest('ADD_POST_REQUEST', addPost);
}

// root만들어넣고 -> 비동기액션 넣기 1
export default function* rootSaga() {
  yield all([fork(FirstLogin), fork(FirstLogOut), fork(FirstAddPost)]);
}
