// export하면서 합칠 수 있게해놓음
export const initalState = {
  isLoggingIn: false, // 로그인 시도중 true 면 로딩창을 띄우도록함
  isLoggedIn: false,
  isLoggingOut: false, // 로그아웃 시도중

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

export const logoutRequestAction = () => {
  return {
    type: 'LOT_OUT_REQUEST',
  };
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    // LOGIN
    case 'LOG_IN_REQUEST':
      return {
        ...state,
        // isLoggedIn: true,
        isLoggingIn: true,
        // me: action.data,
      };

    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        me: { ...action.data, nickname: 'chlwpdns' },
      };
    case 'LOG_IN_FAILURE':
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
        // me: action.data,
      };

    // LOGOUT
    case 'LOG_OUT_REQUREST':
      return {
        ...state,
        // 요청할떄에는 true
        isLoggingOut: true,
        // me: null,
      };

    case 'LOG_OUT_SUCCESS':
      return {
        ...state,
        isLoggingOut: false,
        isLoggedIn: false,
        me: null,
      };

    case 'LOG_OUT_FAILURE':
      return {
        ...state,
        // 실패해도 요청이끝난거니까 false임
        isLoggingOut: false,
        // isLoggedIn: false,
        // me: null,
      };

    default:
      return state;
  }
};
export default reducer;
