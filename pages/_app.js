import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Loading from '../components/Loading';

import "../styles/style.scss";

function MyApp({ Component, pageProps }) {
  //    Loading state; toggles state if link is clicked/route change started,
  //    conditional rendering if loading is true, renders loading screen.
  //    Else, renders rest of app. Also handles possible user error/multi
  //    clicks.

  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  useEffect(() => {
    const loadStart = () => {
      console.log("Starting...");
      return setLoading(true);
    };
    const loadEnd = () => {
      console.log("Done.");
      return setLoading(false);
    };

    router.events.on("routeChangeStart", loadStart);
    router.events.on("routeChangeComplete", loadEnd);
    router.events.on("routeChangeError", loadEnd);
    return () => {
      router.events.off("routeChangeStart", loadStart);
      router.events.off("routeChangeComplete", loadEnd);
      router.events.off("routeChangeError", loadEnd);
    };
  }, []);

  return (
    <>
      { loading
        ? (<Loading />)
        : (
          <div>
            <NavigationBar />
            <Component {...pageProps} />
            <Footer />
          </div>
        )}
    </>
  );
}

export default MyApp;
