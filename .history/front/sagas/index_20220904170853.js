import { all, fork } from 'redux-saga';

// root만들어넣고 -> 비동기액션 넣기
export default function* rootSaga() {
  yield all([fork(Login)]);
}
