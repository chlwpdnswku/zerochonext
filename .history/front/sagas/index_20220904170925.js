import { all, fork } from 'redux-saga';

function* Login() {
  yield take('LOG_In');
}
// root만들어넣고 -> 비동기액션 넣기
export default function* rootSaga() {
  yield all([fork(Login)]);
}
