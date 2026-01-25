import 'bootstrap/dist/css/bootstrap.min.css'; // <-- BOOTSTRAP FIRST
import '../styles/globals.css';
import MouseLight from '../components/MouseLight';
import SocialLinks from '../components/SocialLinks';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MouseLight />
      <Component {...pageProps} />
    </>
  );
}
