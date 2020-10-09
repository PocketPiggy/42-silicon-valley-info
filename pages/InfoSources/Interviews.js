import React from "react";

export default function Interviews({ content }) {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.p1}</p>
    </div>
  );
}

export async function getStaticProps(content) {
  console.log(content);
  return {
    props: {
      content: {
        title: "Interviews",
        p1: "There's not many interviews in regards to 42 SV that are really worth watching. Most are very short and don't have many views. The ones that I think that have at least a little value are linked below. They're not necessary to watch or listen to and they don't really give any insight or new information that I haven't already found from other primary & secondary resources.  All three of these interviews were given by then COO Brittany Bir.",
      },
    },
  };
}
