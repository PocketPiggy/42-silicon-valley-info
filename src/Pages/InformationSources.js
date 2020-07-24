import React, { Component } from "react";
import ScrollingBar from "../Components/ScrollingBar";
import ImgOnlyCards from "../Components/ImgOnlyCards";
import SelectCard from "../Components/SelectCard";
import { Col, Row, CardDeck } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

//import ReactPlayer from "react-player"; // Will use this when I add modals

import "../Styles/InformationSources.css";
import "bootstrap/dist/css/bootstrap.min.css";

class InformationSources extends Component {
  render() {
    const scroll = [
      { id: "top", title: "Info & Sources", key: "InfoTop" },
      { id: "gcamer", title: "Gcamerli's Piscine info", key: "gc" },
      { id: "kristofk", title: "Kristofk's 42 survival guide", key: "kr" },
      { id: "skunz", title: "Skunz's Piscine: What to expect", key: "sk" },
      {
        id: "mbrave",
        title: "Mbrave's blogs: Piscine to Cadet",
        key: "mb",
      },
      { id: "vnguyen", title: "Vnguyen's blogs: Piscine to Cadet", key: "vn" },
      {
        id: "zedechariaz",
        title: "Zedechariaz's 42 Paris experience",
        key: "ze",
      },
      { id: "codinggirl", title: "Coding Girl's 42 Paris Piscine", key: "co" },
      {
        id: "ekaterina",
        title: "Ekaterina's blog: 42 Paris",
        key: "ek",
      },
      {
        id: "townhall-meetings",
        title: "Townhall notes &  meetings",
        key: "to",
      },
      { id: "dorms", title: "42 SV Dorms", key: "do" },
      { id: "interviews", title: "Interviews", key: "in" },
      { id: "negative", title: "Negative Experiences", key: "ne" },
    ];
    return (
      <div className="InformationSources">
        <span id="top"> </span>
        <h1> Information & Sources </h1>
        <p className="information-stuff">
          This is mostly just an info dump of all sources of information I could
          find regarding 42 Silicon Valley & some of 42 Paris. Most of the
          information I scoured over was in French and was about the main Paris
          campus. I'll continue to update this as more information comes out.
        </p>
        <span className="box" id="gcamer">
          <Row>
            <Col>
              <h4 className="box-subhead">
                {" "}
                Gcamerli's Piscine bootcamp info{" "}
              </h4>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={12} md={6} className="text-center">
              <p className="box-text">
                This site has some good quick tips and what to look out for the
                Piscine. The gist of it is what's covered and what to expect for
                the Piscine.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <span className="box-card">
                <ImgOnlyCards data={SelectCard("InfoCards", 0, 0)} />
              </span>
            </Col>
          </Row>
        </span>

        <span className="box" id="kristofk">
          <Row>
            <Col>
              <h4 className="box-subhead"> Kristofk's 42 survival guide </h4>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <p className="box-text">
                A step by step guide on what was covered in his Piscine, as well
                as general information regarding the surrounding area, the inner
                workings of 42 and other details. Definitely worth the read.
              </p>
            </Col>
            <Col>
              <span className="box-card">
                <ImgOnlyCards data={SelectCard("InfoCards", 1, 0)} />
              </span>
            </Col>
          </Row>
        </span>

        <span className="box" id="skunz">
          <Row>
            <Col>
              <h4 className="box-subhead">
                {" "}
                Skunz's 5 minute video: What to expect{" "}
              </h4>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={12} md={6}>
              <p className="box-text">
                Straight to the point, the most important take away is that you
                must be preared to work hard, extremely hard.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <span className="box-card">
                <ImgOnlyCards data={SelectCard("InfoCards", 2, 0)} />
              </span>
            </Col>
          </Row>
        </span>

        <span id="experiences">
          <span className="box" id="mbrave">
            <Row>
              <Col>
                <h4 className="box-subhead">
                  {" "}
                  MBrave's blogs: From Piscine to Cadet{" "}
                </h4>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <p className="box-text">
                  Here's a couple of blogs from MBrave that detail their
                  experiences:
                </p>
                <ul>
                  <li>
                    {" "}
                    <a
                      href="https://medium.com/@themichaelbrave/why-im-taking-a-chance-on-42-222a698761d3"
                      className="anky-links"
                    >
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Why I'm
                      taking a chance on 42
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://medium.com/@themichaelbrave/i-have-a-place-in-the-dorms-at-42-3b1fc9c4e2c0"
                      className="anky-links"
                    >
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Piscine
                      Dorms
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://medium.com/@themichaelbrave/my-piscine-experience-all-in-one-post-85671e0bf307"
                      className="anky-links"
                    >
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Full Piscine
                      Experience
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://medium.com/@themichaelbrave/lessons-learned-after-a-month-of-code-at-42s-piscine-679afb17fb"
                      className="anky-links"
                    >
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Lessons
                      Learned
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://medium.com/@themichaelbrave/life-as-a-cadet-at-42-silicon-valley-8-months-in-9d86204bf078"
                      className="anky-links"
                    >
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Cadet Life @
                      42
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <span className="box-card">
                  <ImgOnlyCards data={SelectCard("InfoCards", 3, 0)} />
                </span>
              </Col>
            </Row>
          </span>

          <span className="box" id="vnguyen">
            <Row>
              <Col>
                <h4 className="box-subhead">
                  {" "}
                  Vnguyen's blogs: Applying to Cadet{" "}
                </h4>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <p className="box-text">
                  Some short blog posts detailing from first applying to 42, to
                  becoming a Cadet:
                </p>
                <ul>
                  <li>
                    {" "}
                    <a
                      href="https://medium.com/my-journey-at-42-silicon-valley-as-a-non-cs-major/applying-to-42-silicon-valley-e79eaf56e375"
                      className="anky-links"
                    >
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Applying
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://medium.com/my-journey-at-42-silicon-valley-as-a-non-cs-major/42-silicon-valley-piscines-dorm-application-process-3d167846255d"
                      className="anky-links"
                    >
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Dorm
                      Application
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://medium.com/my-journey-at-42-silicon-valley-as-a-non-cs-major/from-acceptance-to-42-silicon-valleys-piscine-what-should-you-know-f2427efd8034"
                      className="anky-links"
                    >
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Acceptance
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      href="https://medium.com/my-journey-at-42-silicon-valley-as-a-non-cs-major/acceptance-into-42-silicon-valley-from-pisciner-to-cadet-418b092fb464"
                      className="anky-links"
                    >
                      <FontAwesomeIcon icon={faAngleDoubleRight} /> Piscine to
                      Cadet
                    </a>
                  </li>
                </ul>
              </Col>
              <Col>
                <span className="box-card">
                  <ImgOnlyCards data={SelectCard("InfoCards", 4, 0)} />
                </span>
              </Col>
            </Row>
          </span>

          <span className="box" id="zedechariaz">
            <Row>
              <Col>
                <h4 className="box-subhead">
                  {" "}
                  Zedechariaz's 42 Paris experience{" "}
                </h4>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <p className="box-text">
                  This was a very helpful post. I messaged him awhile back
                  asking about the exam login process and he was very helpful.
                  While it's not 42 SV, some of his experiences are helpful. One
                  thing to note is that he has an Engineering degree, unlike
                  many prospective Pisciners.
                </p>
              </Col>
              <Col xs={12} md={6}>
                <span className="box-card">
                  <ImgOnlyCards data={SelectCard("InfoCards", 5, 0)} />
                </span>
              </Col>
            </Row>
          </span>

          <span className="box" id="codinggirl">
            <Row>
              <Col>
                <h4 className="box-subhead">
                  {" "}
                  Coding Girl's 42 Paris Piscine{" "}
                </h4>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <p className="box-text">
                  While it's not 42 Silicon Valley, the Paris one is similar but
                  they're quite different in management, more strict and the
                  competition is much, much more extreme to get in.
                </p>
              </Col>
              <Col>
                <span className="box-card">
                  <ImgOnlyCards data={SelectCard("InfoCards", 6, 0)} />
                </span>
              </Col>
            </Row>
          </span>

          <span className="box" id="ekaterina">
            <Row>
              <Col>
                <h4 className="box-subhead">
                  {" "}
                  Ekaterina's blogs regarding 42 Paris{" "}
                </h4>
              </Col>
            </Row>
            <Row className="align-items-center">
              <Col xs={12} md={6}>
                <p className="box-text">
                  A couple of useful tid bits of information throughout some of
                  the blogs, like logging in/signing up for Exams.
                </p>
              </Col>
              <Col>
                <span className="box-card">
                  <ImgOnlyCards data={SelectCard("InfoCards", 7, 0)} />
                </span>
              </Col>
            </Row>
          </span>

          <span
            className="box"
            id="townhall-meetings"
            style={{ marginTop: "5vh" }}
          >
            <Row>
              <Col>
                <h4 className="box-subhead">
                  {" "}
                  Townhall Notes & Townhall meetings{" "}
                </h4>
              </Col>
            </Row>
            <Row className="align-items-center">
              <p className="information-stuff">
                Before Covid, they used to have townhalls for the students
                living in the dorms, where they could bring up questions and
                concerns. The Bocal have compiled some of those into notes
                hosted on github for the public. Since the current pandemic,
                they have resorted to virtual townhalls instead. Reading and
                listening through these made it more clear about the day to day
                experiences of cadets.
              </p>
            </Row>
            <Row>
              <Col className="align-items-center">
                <span className="box-card">
                  <CardDeck className="card-deck">
                    <Row
                      style={{ margin: "0 0 0 0", justifyContent: "center" }}
                    >
                      <Col xs={8} md={4} lg={4}>
                        <ImgOnlyCards data={SelectCard("InfoCards", 8, 0)} />
                        <p className="img-subtext"> Github Townhall notes </p>
                      </Col>
                      <Col xs={8} md={4} lg={4}>
                        <ImgOnlyCards data={SelectCard("InfoCards", 8, 2)} />
                        <p className="img-subtext"> April 8th Townhall </p>
                      </Col>
                      <Col xs={8} md={4} lg={4}>
                        <ImgOnlyCards data={SelectCard("InfoCards", 8, 1)} />
                        <p className="img-subtext"> June 12th Townhall </p>
                      </Col>
                    </Row>
                  </CardDeck>
                </span>
              </Col>
            </Row>
          </span>

          <span className="box" id="dorms">
            <Row>
              <Col>
                <h4 className="box-subhead"> Dorms </h4>
              </Col>
            </Row>
            <Row className="align-items-center">
              <p className="info">
                It was hard finding actual video footage of the dorms but I
                eventually did find a couple videos. There are others but they
                don't show as much.{" "}
              </p>
            </Row>
            <Row>
              <Col className="align-items-center">
                <span className="box-card">
                  <CardDeck className="card-deck">
                    <Row
                      style={{ margin: "0 0 0vw 0", justifyContent: "center" }}
                    >
                      <Col
                        xs={8}
                        md={4}
                        lg={4}
                        style={{ margin: "0 2.5vw 0 2.5vw" }}
                      >
                        <ImgOnlyCards data={SelectCard("InfoCards", 9, 0)} />
                      </Col>
                      <Col
                        xs={8}
                        md={4}
                        lg={4}
                        style={{ margin: "0 2.5vw 0 2.5vw" }}
                      >
                        <ImgOnlyCards data={SelectCard("InfoCards", 9, 1)} />
                      </Col>
                    </Row>
                  </CardDeck>
                </span>
              </Col>
            </Row>
          </span>

          <span className="box" id="interviews">
            <Row>
              <Col>
                <h4 className="box-subhead"> Interviews </h4>
              </Col>
            </Row>
            <Row className="align-items-center">
              <p className="info">
                All three of these interviews were just general information for
                the school by, the then COO, Brittany Bir.
              </p>
            </Row>
            <Row>
              <Col className="align-items-center">
                <span className="box-card">
                  <CardDeck className="card-deck">
                    <Row
                      style={{ margin: "0 0 0 0", justifyContent: "center" }}
                    >
                      <Col xs={8} md={4} lg={4}>
                        <ImgOnlyCards data={SelectCard("InfoCards", 10, 0)} />
                      </Col>
                      <Col xs={8} md={4} lg={4}>
                        <ImgOnlyCards data={SelectCard("InfoCards", 10, 1)} />
                      </Col>
                      <Col xs={8} md={4} lg={4}>
                        <ImgOnlyCards data={SelectCard("InfoCards", 10, 2)} />
                      </Col>
                    </Row>
                  </CardDeck>
                </span>
              </Col>
            </Row>
          </span>

          <span className="box" id="negative">
            <Row>
              <Col>
                <h4 className="box-subhead"> Negative experiences </h4>
              </Col>
            </Row>
            <Row className="align-items-center">
              <p className="info">
                Here's a popular post about 42 Paris and this user's negative
                experiences, as well as other commenters. Some of it kinda
                bothered me but since this website is mostly about the 42
                Silicon Valley campus, lots of those things don't apply. There
                are however, other things regarding the 42 SV campus that I've
                picked up from talking to current & past students. For now, I'd
                put these in the category of rumors.
              </p>
            </Row>
            <Row>
              <Col className="align-items-center">
                <span className="box-card">
                  <CardDeck className="card-deck">
                    <Row
                      style={{ margin: "0 0 0vw 0", justifyContent: "center" }}
                    >
                      <Col
                        xs={8}
                        md={4}
                        lg={4}
                        style={{ margin: "0 2.5vw 0 2.5vw" }}
                      >
                        <ImgOnlyCards data={SelectCard("InfoCards", 11, 0)} />

                        <p
                          className="img-subtext"
                          style={{ marginLeft: "2vw" }}
                        >
                          {" "}
                          View deleted posts{" "}
                        </p>
                      </Col>
                      <Col
                        xs={8}
                        md={4}
                        lg={4}
                        style={{ margin: "0 2.5vw 0 2.5vw" }}
                      >
                        <ImgOnlyCards data={SelectCard("InfoCards", 11, 1)} />
                        <p
                          className="img-subtext"
                          style={{ marginLeft: "2vw" }}
                        >
                          {" "}
                          Current post{" "}
                        </p>
                      </Col>
                    </Row>
                  </CardDeck>
                </span>
              </Col>
            </Row>
          </span>
          <span id="misc"></span>
        </span>

        <ScrollingBar data={scroll} />
      </div>
    );
  }
}

export default InformationSources;
