import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import Head from "next/head";
import MouseLight from "../components/MouseLight";

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