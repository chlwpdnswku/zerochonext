// export하면서 합칠 수 있게해놓음
export const initalState = {
  isLoggedIn: false,
  user: null,
  signUpdata: {},
  loginData: {},
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
