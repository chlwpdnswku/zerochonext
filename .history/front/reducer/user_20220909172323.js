// export하면서 합칠 수 있게해놓음
export const initalState = {
  isLoggingIn:false // 로그인 시도중
  isLoggedIn: false, 
  isLoggedOut: false, // 로그아웃 시도중
  me: null,
  signUpdata: {},
  loginData: {},
};

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
    // LOGIN
    case 'LOG_IN_REQUEST':
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };

    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        isLoggedIn: true,
        me: action.data,
      };

    // LOGOUT
    case 'LOG_OUT_REQUREST':
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };

    case 'LOG_OUT_SUCCESS':
      return {
        ...state,
        isLoggedIn: false,
        me: null,
      };
    case 'LOG_OUT_FAILURE':
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
