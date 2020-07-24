import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faReact,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPortrait, faMailBulk } from "@fortawesome/free-solid-svg-icons";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import InformationSources from "./Pages/InformationSources";
import Preparation from "./Pages/Preparation";
import ProsCons from "./Pages/ProsCons";
import NotFound404 from "./Pages/NotFound404";


import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPage: true,
      setShowPage: true,
    };
    this.handlePage = this.handlePage.bind(this);
  }
  handlePage() {}
  render() {
    return (
      <Container fluid className="App ml-auto mr-auto">
        <Router>
          <Navbar
            bg="dark"
            variant="dark"
            fixed="top"
              style={{ width: "100vw", height: "7vh", zIndex: '100000' }}
          >
            <Nav className="mr-auto ml-auto" style={{ fontSize: "1vw" }}>
              <Nav.Link
                as={NavLink}
                exact
                to="/"
                id="Home"
                onClick={this.handlePage}
                style={{ marginLeft: "3vw", marginRight: "3vw" }}
                activeclass="active"
              >
                Home{" "}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/Preparation"
                id="Preparation"
                onClick={this.handlePage}
                style={{ marginLeft: "3vw", marginRight: "3vw" }}
              >
                Preparation{" "}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/InformationSources"
                id="InformationSources"
                onClick={this.handlePage}
                style={{ marginLeft: "3vw", marginRight: "3vw" }}
              >
                Info & Sources{" "}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/ProsCons"
                id="ProsCons"
                onClick={this.handlePage}
                style={{ marginLeft: "3vw", marginRight: "3vw" }}
              >
                Pros & Cons{" "}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/About"
                id="About"
                onClick={this.handlePage}
                style={{ marginLeft: "3vw", marginRight: "3vw" }}
              >
                About{" "}
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/Contact"
                id="Contact"
                onClick={this.handlePage}
                style={{ marginLeft: "3vw", marginRight: "3vw" }}
              >
                Contact{" "}
              </Nav.Link>
            </Nav>
          </Navbar>
          <Container fluid className="page" style={{ marginTop: "2vh" }}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/About" exact component={About} />
              <Route path="/Contact" exact component={Contact} />
              <Route
                path="/InformationSources"
                exact
                component={InformationSources}
              />
              <Route path="/Preparation" exact component={Preparation} />
              <Route path="/ProsCons" exact component={ProsCons} />
              <Route path="*" component={NotFound404} />
            </Switch>
          </Container>

          <div id="footer">
            <p className="footer-2">
              <a
                className="footer-links"
                href="mailto:pocketpiggy@protonmail.com"
              >
                <FontAwesomeIcon icon={faMailBulk} />
              </a>
            </p>
            <p className="footer-1">
              Made with{" "}
              <span style={{ color: "#61dafb" }}>
                <FontAwesomeIcon icon={faReact} />
              </span>{" "}
              React
            </p>
            <p className="footer-2">
              <a
                className="footer-links"
                href="https://twitter.com/Pocket_Piggy"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </p>
            <p className="footer-2">
              <a className="footer-links" href="https://github.com/pocketpiggy">
                <FontAwesomeIcon icon={faPortrait} />
              </a>
            </p>
            <p className="footer-2">
              <a className="footer-links" href="https://github.com/pocketpiggy">
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
            </p>
          </div>
        </Router>
      </Container>
    );
  }
}

export default App;
