import React, { Component } from "react";

import "../Styles/ImgOnlyCards.css";

class ImgOnlyCards extends Component {
  constructor(props) {
    super(props);
    this.fillImgCard = this.fillImgCard.bind(this);
  }
  fillImgCard(props) {
    return (
      <div className="img-only">
        <a href={props.aHref} target="_blank" rel="noopener noreferrer">
          <img src={props.imgSrc} alt={props.title} className="za-imgu" />
        </a>
      </div>
    );
  }
  render() {
    return <div>{this.fillImgCard(this.props.data)}</div>;
  }
}

export default ImgOnlyCards;
