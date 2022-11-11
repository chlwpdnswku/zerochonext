import { HYDRATE } from 'next-redux-wrapper';

const initalState = {
  user: {},
  post: {},
};

// 액션타입은 객체임
// const change = {
//   type: 'CHANGE_NICKNAME',
//   data: '오광민 집합',
// };

// 함수로입력받아서 동적할당
// const change2 = (data) => {
//   return {
//     type: 'CHANGE_NICKNAME',
//     data,
//   };
// };
// change2('전두환');
// 그떄그떄 action create를해서 즉흥적으로 dispatch하면 데이터가 들어감
// store.dispatch(change2('김대중'));

// async action creator

// (이전상태,액션) => 다음상태로감
const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('hydrate', action);
      return { ...state, ...action.payload };

    //이거 때문에 오류가났었음
    default:
      return state;
  }
};

export default rootReducer;
