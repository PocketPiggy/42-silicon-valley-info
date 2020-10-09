import React from "react";

export default function Mar112020 ({ content }) {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.date}</p>
        <p>{content.p1}</p>
        <a href='https://twitter.com/42SiliconValley/status/1237872224570228737'
          target="blank"
          rel="noopener noreferrer">
        {content.p2}
        </a>
      <img src='/images/updates/March/11-3-2020_tweet.jpg' />

    </div>
  );
}

export async function getStaticProps(content) {
  return {
    props: {
      content: {
        title: "42 Silicon Valley - Shutting down",
        date: "March 11th, 2020",
        p1: "Covid-19 is really starting to take affect in the United States, especially the Bay Area and New York at the moment. 42 Silicon Valley has decided to shut their campus down immediately.",
        p2: "Source",
      }
    }
  }
}
