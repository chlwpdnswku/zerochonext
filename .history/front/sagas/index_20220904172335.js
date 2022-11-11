import { all, fork, take, call } from 'redux-saga/effects';

function* logIn() {
  yield;
}

//2
function* Login() {
  yield take('LOG_IN', logIn);
}

function* LogOut() {
  yield take('LOG_OUT');
}
function* AddPost() {
  yield take('ADD_POST');
}

// root만들어넣고 -> 비동기액션 넣기 1
export default function* rootSaga() {
  yield all([fork(Login), fork(LogOut), fork(AddPost)]);
}
