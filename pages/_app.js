import "../styles/globals.css";
import "../styles/App.css";
import "../styles/navbar.css";
import "../styles/featuredContent.css";
import "../styles/spinner.css";
import "../styles/newCarousel.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
