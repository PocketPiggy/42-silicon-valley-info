import { BigHead } from "@bigheads/core";
import Head from "next/head";

export default function About() {
  const FiveHead = () => (
    <BigHead
      accessory="roundGlasses"
      body="breasts"
      circleColor="blue"
      clothing="shirt"
      clothingColor="black"
      eyebrows="concerned"
      eyes="content"
      facialHair="none2"
      graphic="react"
      hair="pixie"
      hairColor="black"
      hat="none"
      hatColor="black"
      lashes
      lipColor="pink"
      mask
      mouth="serious"
      skinTone="brown"
    />
  );

  return (
    <>
      <Head>
        <title>42 Silicon Valley - About</title>
        <meta
          name="description"
          content="The reason of why I decided to create this website about
          42 Silicon Valley and the Piscine.  From C to web development, now
          waiting for the next Piscine."
        />
        <link rel="canonical" href="https://42sv.info/about" />
      </Head>
      <section className="scroll-block" id="block-1">
        <h1>About</h1>
        <p>
          A brief introduction of myself: I was waiting for the April 2020
          Piscine but it was cancelled in February due to 42SV needing to update
          "update their techinical infrastructure." This lead to all Piscines
          being cancelled for 2020 until further notice. Then Covid-19 shortly
          after and the campus was shut down in March. Sometime between August
          and October of 2020, the 42 campus was shut down permanently.
        </p>
        <p>
          Due to 42 SV shutting down permanently, I've decided to dive directly
          into web development and put C on hold for now.
        </p>
        <span className="fivehead">
          <FiveHead />
        </span>
      </section>
    </>
  );
}
