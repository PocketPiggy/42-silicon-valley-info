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

  //    If screen is at least 992px & page has scroll prop, render Scrollbar
  const [hasScroll, setScroll] = React.useState(false);
  const minScreenSize = useMediaQuery({ query: "(min-device-width: 992px)" });

  useEffect(() => {
    const isBigEnough = () => {
      console.log("is big enough");
      return setScroll(true);
    };
    const isNotBigEnough = () => {
      console.log("not big enough");
      return setScroll(false);
    };

<<<<<<< HEAD
    if (minScreenSize)
    {
      "scroll" in {...pageProps}
        ? isBigEnough
        : isNotBigEnough;
=======
    if (minScreenSize) {
      if ("scroll" in { ...pageProps }) {
        return isBigEnough;
      } else {
        return isNotBigEnough;
      }
>>>>>>> restructure
    }
  });

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
          <Container className="page-content">
<<<<<<< HEAD
            <Col xs={12} s={12} md={9} lg={9} xl={9}>
              <Component {...pageProps} />
            </Col>
            <Col xs={0} s={0} md={3} lg={3} xl={3}>
=======
            <Col xs={12} s={12} md={11} lg={11} xl={11}>
              <Component {...pageProps} />
            </Col>

            <Col xs={0} s={0} md={2} lg={2} xl={2}>
>>>>>>> restructure
              {hasScroll ? <ScrollingSideBar {...pageProps} /> : null}
            </Col>
          </Container>

          <Footer />
        </div>
      )}
    </>
  );
}
