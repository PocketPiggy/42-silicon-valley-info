import React from "react";

export default function Interviews() {
  return (
    <>
      <h1>42 Silicon Valley Interviews</h1>
      <p>
        There are not many interviews in regards to 42 Silicon Valley that are
        worth watching. Most are very short and don't have many views. The ones
        that I think have at least a little value are linked below. They're not
        necessary to watch or listen to and they don't really give any insight
        or new information that I haven't already found from other primary &
        secondary resources. All three of these interviews were given by then
        COO Brittany Bir.
      </p>

      <span className="yt-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/ZFZ2R1Xa0vs"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </span>

      <span className="yt-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/x5WaYn4s7yA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </span>

      <span className="yt-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/RQwGU_AQsY4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </span>
      <span className="buffy-the-buffer" />
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
