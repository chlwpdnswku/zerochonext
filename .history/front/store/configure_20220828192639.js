const { createWrapper } = require('next-redux-wrapper');

const configureStore = () => {};

const wrapper = createWrapper(configureStore, { de });

export default wrapper;
