import React from 'react';

export default function Apr142020 ({ content }) {
  return(
    <div>
      <h1>{content.title}</h1>
      <p>{content.date}</p>
      <p>{content.p1}</p>
      <img src='/images/Updates/April/14-4-2020_tweet.png' />
      <a href='https://twitter.com/42SiliconValley/status/1250137361335201792'
        target="blank"
        rel="noopener noreferrer"
      >
        {content.p2}
      </a>
    </div>
  );
}

export async function getStaticProps(content) {
  return {
    props: {
      content: {
        title: "May & July - All Cancelled",
        date: "April 14th, 2020",
        p1: "Covid is really starting to ramp up, to take precautions, 42 Silicon Valley has decided to close not only the campus until May 4th, but also cancelled the July start date & Piscine.",
        p2: "Source",
      }
    }
  }
}
