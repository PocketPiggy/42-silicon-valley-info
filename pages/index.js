import Head from "next/head";
import FatCard from "../components/FatCard";
import SelectCard from "../components/SelectCard";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <Head>
        <title>42 Silicon Valley - Information & Guide for the Piscine</title>
        <meta
          name="description"
          content="This website is dedicated to collect all publicly known
          information about 42 Silicon Valley and its Piscine, process,
          curriculum and more. 42 School BornToCode!"
        />
        <link rel="canonical" href="https://42sv.info" />
      </Head>

      <section className="block">
        <h1>42 Silicon Valley Information</h1>
        <p>
          Welcome. If you found this website, chances are you're looking for
          information about the coding school 42 Silicon Valley. This website is
          dedicated to putting out all publicly known information about 42
          Silicon Valley and how it differs from other 42 campuses. We'll go
          over the the Piscine, what you'd want to learn before starting it and
          the whole process of the Piscine.
        </p>

        <p>
          The 42 curriculum, especially the Piscine, is very tough and requires
          some tenacity to get through it as many people fall behind. Hopefully,
          with the information I've gathered here, it'll be at least of some
          help for you regardless if you're on the fence about the whole thing
          or if you want to prepare as much as possible for the Piscine. At the
          bare minimum, consider looking over what the Piscine actually covers.
          (Hint: It's not web development!)
        </p>

        <section className="fat-card-container">
          <span className="card-1">
            <FatCard cardData={SelectCard("Root", "Before_the_piscine")} />
          </span>
          <span className="card-2">
            <FatCard cardData={SelectCard("Root", "About_42SV")} />
          </span>
        </section>

        <span className="mini-img-container">
          {/*
          <img
            src="/Images/Page/Home/Marvin.jpg"
            alt="Marvin the Android from 'The Hitchhiker's guide to the galaxy', looking depressed."
            title="Well I wish you'd just tell me rather than try to engage my
            enthusiasm. 42 Silicon Valley BornToCode"
          />
          */}
          <Image
            src="/Images/Page/Home/Marvin.jpg"
            alt="Marvin the Android from 'The Hitchhiker's guide to the galaxy', looking depressed."
            title="Well I wish you'd just tell me rather than try to engage my
            enthusiasm. 42 Silicon Valley BornToCode"
            unsized
          />
        </span>
      </section>
    </>
  );
}
