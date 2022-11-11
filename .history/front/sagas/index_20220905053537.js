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

// root만들어넣고 -> 비동기액션 넣기 1
export default function* rootSaga() {
  yield all([fork()]);
}
