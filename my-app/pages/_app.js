import 'bootstrap/dist/css/bootstrap.min.css'; // <-- BOOTSTRAP FIRST
import '../styles/globals.css';
import MouseLight from '../components/MouseLight';
import SocialLinks from '../components/SocialLinks';

import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hiru Wijemanne | Portfolio</title>
        <link rel="icon" href="/images/favicon_perfect.png" />
      </Head>
      <MouseLight />
      <Component {...pageProps} />
    </>
  );
}
