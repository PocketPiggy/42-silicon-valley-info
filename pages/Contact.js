import React from "react";

export default ({ content }) => (
  <div>
    <h1>{content.title}</h1>
    <p>As a test, does this show up in source?</p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p> Yes, I bought your colgate toothpaste. </p>
    <p> The one with Tartar control. </p>
    <p>{content.p1}</p>
  </div>
);

export async function getStaticProps(content) {
  console.log(content);
  return {
    props: {
      content: {
        title: "Contact",
        p1: "This is the   page.",
      },
    },
  };
}
