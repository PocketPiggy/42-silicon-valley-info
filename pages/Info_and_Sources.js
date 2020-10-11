import React from "react";

export default function InfoAndSources({ content }) {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>As a test, does this show up in source?</p>
      <br />
      <br />
      <br />
      <p>{content.p1}</p>
    </div>
  );
}

export async function getStaticProps(content) {
  console.log(content);
  return {
    props: {
      content: {
        title: "Page",
        p1: "This is the   page.",
      },
    },
  };
}
