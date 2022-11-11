// 모든 페이지 공통된 페이지들을 처리하는 것
import PropTypes from 'prop-types';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Component {...pageProps} />
    </>
  );
}

// 점검용도로
MyApp.prototype = {
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
