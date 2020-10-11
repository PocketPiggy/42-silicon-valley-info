import React from "react";
import Data from '../data/pages/home.json';

export default function Index({ content }) {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.p1}</p>
      <p>{content.p2}</p>
      <span>
        <img src={Data.Marvin.imgSrc} alt={Data.Marvin.imgAlt} title={Data.Marvin.title}/>
      </span>
    </div>
  );
}

export async function getStaticProps(content) {
  console.log(content);
  return {
    props: {
      content: {
        title: "42 Silicon Valley information",
        p1: "Welcome. If you found this website, chances are you're looking for information about the school 42 Silicon Valley. This website is dedicated to putting out all pubically known information about it and how 42 itself operates. Within this website, you'll find what the Piscine is, how to prepare for it and more. If you already know about the Piscine, head on over to 'Before the Piscine'. If you're looking for more information in general, I have sourced everything I've found. You'll find interviews, articles, reviews, the curriculum and even current up to date information about 42SV.",
        p2: "The 42 program, especially the Piscine, is very tough and requires some tenacity to get through it. Hopefully with the information I've gathered here, it'll be at least of some help for you regardless if you're on the fence about the whole thing or if you want to prepare as much as possible for the piscine. And with that out of the way, here's a quote from Marvin: 'Well I wish you'd just tell me rather than try to engage my enthusiasm.'"
      },
    },
  };
}
