import React, { Component } from "react";
import fourbi from "../Images/Pages/NotFound404/fourbi_oh_fournobi.gif";

class NotFound404 extends Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <p>
          Oops...well this is awkward. This is not the page you're looking for.
        </p>
        <img src={fourbi} alt="Obi-Wan Kenobi, no droids" />
      </div>
    );
  }
}

export default NotFound404;
