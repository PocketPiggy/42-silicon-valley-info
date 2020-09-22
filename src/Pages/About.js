import React, { Component } from "react";
import { BigHead } from "@bigheads/core";

import "../Styles/About.css";

class About extends Component {
  render() {
    const FiveHead = () => (
      <BigHead
        accessory="roundGlasses"
        body="breasts"
        circleColor="blue"
        clothing="shirt"
        clothingColor="black"
        eyebrows="concerned"
        eyes="content"
        facialHair="none2"
        graphic="react"
        hair="pixie"
        hairColor="black"
        hat="none"
        hatColor="black"
        lashes
        lipColor="pink"
        mask
        mouth="serious"
        skinTone="brown"
      />
    );
    return (
      <div>
        <h1> About </h1>
        <p className="info">
          A brief introduction of myself, I was waiting for the April 2020
          Piscine but it was cancelled in February due to 42 SV needing to
          update their infrastructure. The specific reason that was given to me,
          was updating to the "newer" curriculum that the other 42 campuses had
          been using. This led to cancelling all Piscines for 2020 until further
          notice.
        </p>
        <p className="info">
          {" "}
          Then, Covid-19 happened and they shut the campus down in March and the
          campus has been been closed for the most part, excluding dorms. So, in
          the meantime, I've moved away from C and just started learning web
          development. So now, I'm currently just waiting for the last Piscine
          of 2020, supposedly in October. Assuming the current pandemic doesn't
          get too much worse, I'll finally be able to start then.
        </p>
        <div
          id="foovehead"
          style={{ width: "10vw", height: "10vh", margin: "0 auto" }}
        >
          <FiveHead />
        </div>
      </div>
    );
  }
}

export default About;
