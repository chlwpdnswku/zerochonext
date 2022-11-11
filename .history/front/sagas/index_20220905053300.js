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

//2 비동기액션 creator
function* FirstLogin() {
  yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* FirstLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}
function* FirstAddPost() {
  // 2초동안은 한번만 실행하는것  스토클은 특수한 경우만쓰긴함 짜피 서버에서 검사를해서 하는 것이 맞음
  yield takeLatest('ADD_POST_REQUEST', addPost);
}

// root만들어넣고 -> 비동기액션 넣기 1
export default function* rootSaga() {
  yield all([fork(FirstLogin), fork(FirstLogOut), fork(FirstAddPost)]);
}
