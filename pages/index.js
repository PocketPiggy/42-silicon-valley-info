import React from "react";
import Data from "../data/home.json";

export default function Index({ content }) {
  return (
    <>
      <h1>{content.title}</h1>
      <p>{content.p1}</p>
      <p>{content.p2}</p>
      <span className="img-container">
        <img
          src={Data.Marvin.imgSrc}
          alt={Data.Marvin.imgAlt}
          title={Data.Marvin.title}
          className="marvin"
        />
      </span>
    </>
  );
}

export async function getStaticProps(content) {
  console.log(content);
  return {
    props: {
      content: {
        title: "42 Silicon Valley Information",
        p1:
          "Welcome. If you found this website, chances are you're looking for information about the school 42 Silicon Valley. This website is dedicated to putting out all publicly known information about it and how 42 Silicon Valley itself operates. You'll find what the Piscine is, how to prepare for it and more. If you're looking for more information in general, I have sourced everything I've found. You'll find interviews, articles, reviews, the curriculum and even current up to date information about 42 Silicon Valley.",
        p2:
          "The 42 program, especially the Piscine, is very tough and requires some tenacity to get through it. Hopefully with the information I've gathered here, it'll be at least of some help for you regardless if you're on the fence about the whole thing or if you want to prepare as much as possible for the piscine.",
        p3:
          "Well I wish you'd just tell me rather than try to engage my enthusiasm.",
      },
    },
  };
}
