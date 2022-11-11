const initalState = {
  name: '오광민',
  age: 69,
  password: '공부안함',
};

// 액션타입은 객체임
// const change = {
//   type: 'CHANGE_NICKNAME',
//   data: '오광민 집합',
// };

// 함수로입력받아서 동적할당
const change2 = (data) => {
  return {
    type: 'CHANGE_NICKNAME',
    data,
  };
};
change2('전두환');
// 그떄그떄 action create를해서 즉흥적으로 dispatch하면 데이터가 들어감
// store.dispatch(change2('김대중'));

// async action creatpr

// (이전상태,액션) => 다음상태로감
const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'CHANGE_NICKNAME':
      return {
        ...state,
        name: action.data,
      };
  }
};

export default rootReducer;
