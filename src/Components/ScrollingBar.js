import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/ScrollingBar.css";

class ScrollingBar extends Component {
  constructor(props) {
    super(props);
    this.showItems = this.showItems.bind(this);
  }
  showItems(props) {
    const ids = this.props.data.map((item) => item.id);
    return (
      <Container fluid style={{ padding: "0" }}>
        <ScrollspyNav
          scrollTargetIds={ids}
          offset={-100}
          activeNavClass="current"
          scrollDuration="1000"
        >
          <ul className="side-ul">
            {props.map((item) => (
              <li key={item["id"].toString()} className="side-li">
                <a href={`#${item.id}`} className="link-color">
                  <p className="side-p">
                    <FontAwesomeIcon icon={faChevronRight} /> {item.title}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </ScrollspyNav>
      </Container>
    );
  }
  render() {
    return <div id="side-nav">{this.showItems(this.props.data)}</div>;
  }
}

export default ScrollingBar;
