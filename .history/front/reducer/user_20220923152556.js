// export하면서 합칠 수 있게해놓음
export const initalState = {
  isLoggingIn: false, // 로그인 시도중 true 면 로딩창을 띄우도록함
  isLoggedIn: false,
  isLoggingOut: false, // 로그아웃 시도중

  me: null,
  signUpdata: {},
  loginData: {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
// 회원가입 까지

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
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
