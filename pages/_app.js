import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from 'react-redux';
import store from '../redux/store';
import GlobalStyle from '../styles/global';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Next Dashboard</title>
      <meta name="description" content="Dashboard app using Next.js" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyle />
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
