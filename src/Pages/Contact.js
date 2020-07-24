import React, { Component } from "react";

import "../Styles/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div>
        <h1> Contact </h1>
        <p className="contact">
          Any questions? Concerns? Inquiries? Bugs on the website?
        </p>
        <p className="contact">
          Feel free to contact me directly at:
          <a href="mailto:pocketpiggy@protonmail.com">
            {" "}
            pocketpiggy@protonmail.com
          </a>
        </p>
        <p className="contact">
          I'll keep this site up to date with new information. If I got anything
          wrong, feel free to message me and I'll update as soon as possible.
        </p>
      </div>
    );
  }
}

export default Contact;
