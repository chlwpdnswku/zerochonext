import { all, fork } from 'redux-saga/effects';
import postSage from './post';
import userSage from './user';

// root만들어넣고 -> 비동기액션 넣기 1
export default function* rootSaga() {
  yield all([fork(postSage), fork(userSage)]);
}
