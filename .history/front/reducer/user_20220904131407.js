// export하면서 합칠 수 있게해놓음
export const initalState = {
  isLoggedIn: false,
  me: null,
  signUpdata: {},
  loginData: {},
};

export const login = (data) => {
  return {
    type: 'LOG_IN',
    data,
  };
};
export const logout = (data) => {
  return {
    type: 'LOG_OUT',
    data,
  };
};

// 이 모든기록들이 서버로 갔다가 오는거라 요청이 3단계로 보통되어있음
// thunk example

export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  };
};

export const loginSuccessAction = (data) => {
  return {
    type: 'LOG_IN_SUCCESS',
    data,
  };
};
export const loginRequestFailure = (data) => {
  return {
    type: 'LOG_IN_FAILURE',
    data,
  };
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };

    case 'LOG_OUT':
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    default:
      return state;
  }
};
export default reducer;
