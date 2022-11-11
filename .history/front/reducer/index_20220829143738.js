const initalState = {
  name: '오광민',
  age: 69,
  password: '공부안함',
};

// 액션타입은 객체임
const change = {
  type: 'CHANGE_NICKNAME',
  data: '오광민 집합',
};

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
