// 공통된 페이지들을 처리하는 것
import PropTypes from 'prop-types';
import '../styles/globals.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// 점검용도로
MyApp.prototype = {
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
