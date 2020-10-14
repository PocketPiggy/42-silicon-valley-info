import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";


import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPortrait,
  faCodeBranch,
  faHome,
  faChevronRight,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubSquare,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPortrait,
  faCodeBranch,
  faHome,
  faChevronRight,
  faArrowAltCircleRight,
  faArrowAltCircleLeft,
  faGithubSquare,
  faTwitterSquare
);

import "../styles/styles.scss";

export default function MyApp({ Component, pageProps }) {
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
      {loading ? (
        <Loading />
      ) : (
        <div className="page-container">
          <NavigationBar />
          <div className="page-content">
            <Component
              {...pageProps}
              className="d-flex flex-column min-vh-100"
            />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
