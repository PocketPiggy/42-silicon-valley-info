import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1> Home </h1>
        <p id="home-p">
          Hello, this is a compilation of all information that I personally
          could find about 42 Silicon Valley campus, located in Fremont,
          California. Hopefully, this will help shed some light on what 42 is
          about, how they operate, how to prepare for the Piscine and other
          stuff. If you're looking for information specifically about the
          Piscine, head on over to the{" "}
          <NavLink as={NavLink} exact to="/Preparation">
            Preparation
          </NavLink>{" "}
          page.
        </p>
        <img
          src={require("../Images/Pages/Home/Marvin.jpg")}
          alt="Marvin from Hitchhiker's guide to the galaxy"
          style={{ maxWidth: "30vw", maxHeight: "30vh", marginTop: "3vh" }}
        />
      </div>
    );
  }
}

export default Home;
