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
