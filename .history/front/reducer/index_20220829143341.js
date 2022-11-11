const initalState = {
  name: '오광민',
  age: 69,
  password: '공부안함',
};

// 액션타입은 객체임
const change = {
  type: 'CHANGE_NICKNAME',
  action: '',
};

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
