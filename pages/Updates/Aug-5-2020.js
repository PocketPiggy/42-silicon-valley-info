import React from 'react';

export default function Aug52020 ({ content }) {
  return(
    <div>
      <h1>{content.title}</h1>
      <p>{content.date}</p>
      <p>{content.p1}</p>
      <img src='/images/Updates/August/5-8-2020_tweet.png' />
      <a href='https://twitter.com/42SiliconValley/status/1291110169347145728'
        target="blank"
        rel='noopener noreferrer'>
        {content.p2}
      </a>
    </div>
  );
}

export async function getStaticProps(content){
  return {
    props: {
      content: {
        title: "Remainder of 2020 - Cancelled",
        date: "August 5th, 2020",
        p1: "Whelp, due to the skyrocketing cases in the United States, 42 Silicon Valley has decided to cancel the October Piscine & start dates as well as the rest for 2020.  With schools still kinda closed in California, this isn't looking too good for early 2020 in my opinion. There are no set future date for anything and again, they say to keep an eye out on their social media channels.",
        p2: "Source",
      }
    }
  }
}
