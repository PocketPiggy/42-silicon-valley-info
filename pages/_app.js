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

  //  Adds a promise to act as a sleep function to give a minimum
  //  threshold timer for the Loading component. Useful for CSS transitions
  //  when loading and transitioning without needing an external library.

  const timeout = ms => new Promise(res => setTimeout(res, ms));

  function delayIt() {
    let unixTime = Math.round(+new Date() / 1000);
  }

  async function delayStart() {
    fadeOut();
    setLoading(true);
    delayIt();
    await timeout(1000);
    delayIt();
  }

  async function delayEnd() {
    await timeout(1000);
    delayIt();
    await timeout(1000);
    setLoading(false);
    delayIt();
  }

  //    Loading state; toggles state if link is clicked/route change started,
  //    conditional rendering if loading is true, renders loading screen.
  //    Else, renders rest of app. Also handles possible user error/multi
  //    clicks.

  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadStart = () => {
      fadeOut();
      //console.log("Starting...");
      return delayStart();
    };
    const loadEnd = () => {
      //console.log("Done.");
      return delayEnd();
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

  const minScreenSize = useMediaQuery({ query: "(min-device-width: 1280px)" });


  //  Using vanilla instead of ref because there will only be one instance
  //  or ID, forever for this use case. If JS disabled, it will still play
  //  the fadeIn CSS animations regardless, which is enough for this website.
  function fadeOut() {
    const foggyContainer = document.getElementById('foggy-container');
    //console.log('foggyContainer!');
    foggyContainer.style.animation = "fadeOut 1.6s linear";
  }


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
            <div className='foggy' id='foggy-container'>
              <Component {...pageProps} />
              {"scroll" in { ...pageProps } && minScreenSize ? (
                <ScrollingSideBar {...pageProps} />
              ) : null}
            </div>
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
}
