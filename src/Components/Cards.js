import React, { Component } from "react";
import { Card } from "react-bootstrap";

import "../Styles/Cards.css";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.fillCard = this.fillCard.bind(this);
  }
  fillCard(props) {
    return (
      <Card style={{}} className="card">
        <a href={props.aHref} target="_blank" rel="noopener noreferrer">
          <Card.Img
            variant="top"
            src={props.imgSrc}
            style={{}}
            className="card-img"
          />
          <Card.Body style={{}} className="card-body">
            <Card.Title style={{}} className="card-title">
              {" "}
              {props.title}
            </Card.Title>
            <Card.Text style={{}} className="card-text">
              {props.text}
            </Card.Text>
          </Card.Body>
        </a>
      </Card>
    );
  }
  render() {
    return <div>{this.fillCard(this.props.data)}</div>;
  }
}

export default Cards;
