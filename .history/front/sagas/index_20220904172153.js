import { all, fork, take } from 'redux-saga/effects';

function* Login() {
  yield take('LOG_IN');
}

function* LogOut() {
  yield take('LOG_OUT');
}
function* AddPost() {
  yield take('ADD_POST');
}

// root만들어넣고 -> 비동기액션 넣기
export default function* rootSaga() {
  yield all([fork(Login), fork(LogOut), fork(AddPost)]);
}
