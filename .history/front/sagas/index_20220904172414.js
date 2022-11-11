import { all, fork, take, call } from 'redux-saga/effects';

function* logIn() {
  yield call();
}

//2
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