import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import ScrollingSideBar from "../components/ScrollingSideBar";
import { useMediaQuery } from "react-responsive";

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

  const minScreenSize = useMediaQuery({ query: "(min-device-width: 992px)" });

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/Favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/Favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/Favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <div className="page-container">
          <NavigationBar />
          <div>
            <h1
              style={{
                border: "4px solid white",
                position: "fixed",
                zIndex: "9002",
                top: "0",
                //right: '0'
                left: '35vw'
              }}
            >
              Website status: Under Construction
            </h1>
          </div>

          <Container className="page-content">
            <Component {...pageProps} />
            {"scroll" in { ...pageProps } && minScreenSize ? (
              <ScrollingSideBar {...pageProps} />
            ) : null}
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
}
