import React from "react";

export default function Interviews({ content }) {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.p1}</p>

      <span className="img-container">
        <img
          src="/Images/infosources/interview/interview1.jpg"
          alt="Youtube thumbnail inside 42 silicon valley, 3 men and 1 woman talking ."
        />
        <a
          href="https://www.youtube.com/watch?v=ZFZ2R1Xa0vs"
          target="blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </span>

      <span className="img-container">
        <img
          src="/Images/infosources/interview/interview2.jpg"
          alt="Youtube thumbnail 42 silicon valley logo with title caption ."
        />
        <a
          href="https://www.youtube.com/watch?v=x5WaYn4s7yA"
          target="blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </span>
      <span className="img-container">
        <img
          src="/Images/infosources/interview/interview3.jpg"
          alt="Youtube thumbnail of the thinker statue with dollar bills floating next to it."
        />
        <a
          href='https://www.youtube.com/watch?v=RQwGU_AQsY4'
          target="blank"
          rel="noopener noreferrer"
        >
          Source
        </a>
      </span>
    </div>
  );
}

export async function getStaticProps(content) {
  console.log(content);
  return {
    props: {
      content: {
        title: "Interviews",
        p1:
          "There's not many interviews in regards to 42 SV that are really worth watching. Most are very short and don't have many views. The ones that I think that have at least a little value are linked below. They're not necessary to watch or listen to and they don't really give any insight or new information that I haven't already found from other primary & secondary resources.  All three of these interviews were given by then COO Brittany Bir.",
      },
    },
  };
}
