import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
//import ScrollingSideBar from "../components/ScrollingSideBar";

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
          <Container className="page-content">
            <Col xs={12} s={12} md={11} lg={11} xl={11}>
              <Component
                {...pageProps}
                className="d-flex flex-column min-vh-100"
              />
            </Col>
            {/*}
            <Col xs={0} s={0} md={2} lg={2} xl={2}>
              <ScrollingSideBar {...pageProps}/>
            </Col>
            {*/}
          </Container>
          <Footer />
        </div>
      )}
    </>
  );
}
