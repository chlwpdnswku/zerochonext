import { all, fork } from 'redux-saga';

export default function* rootSaga() {}

// all : 배열을 전부실행 fork: 함수를 실행
//take : 액션실행을 기다림
// 제너레이터 함수 공부하기
// saga는 이벤트리스너같은 느낌을 줌 비동기 액션이 들어오면 제너레이트함수 실행
// fork:비동기 call :동기
// call은 then을 붙혀준다는 의미이고 결과값 기다림/ fork는 그냥 실행
