import React from "react";
import { BigHead } from "@bigheads/core";

export default function About({ content }) {
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
      <h1>{content.title}</h1>
      <p>{content.p1} </p>
      <p>{content.p2} </p>
      <div className='fivehead'>
        <FiveHead />
      </div>
    </div>
  );
}

export async function getStaticProps(content) {
  console.log(content);
  return {
    props: {
      content: {
        title: "About",
        p1:
          "A brief introduction of myself: I was waiting for the April 2020 Piscine but it was cancelled in February due to 42SV needing to update 'update their techinical infrastructure.' This lead to all Piscines being cancelled for 2020 until further notice.  Then Covid-19 shortly after and the campus was shut down in March.",
        p2:
          "In the meantime, I've decided to continue self teaching, moving away from C and towards web development. I'm currently eagerly waiting on news for the next Piscine, which hopefully will be early next year.",
      },
    },
  };
}
