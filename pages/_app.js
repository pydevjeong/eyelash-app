import '../styles/globals.css'
import Navbar from "../components/NavBar";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      </>
  );
}

export default MyApp;
