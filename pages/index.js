import Head from "next/head";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          dedicated to putting out all publicly known information about it and
          how 42 Silicon Valley itself operates. You'll find out what the
          Piscine is, how to prepare for it, and more.
        </p>

        <p>
          The 42 curriculum, especially the Piscine, is very tough and requires
          some tenacity to get through it. Hopefully, with the information I've
          gathered here, it'll be at least of some help for you regardless if
          you're on the fence about the whole thing or if you want to prepare as
          much as possible for the Piscine.
        </p>

        <span className="mini-img-container">
          <img
            src="/Images/Page/Home/Marvin.jpg"
            alt="Marvin the Android from 'The Hitchhiker's guide to the galaxy', looking depressed."
            title="Well I wish you'd just tell me rather than try to engage my
            enthusiasm."
            className="marvin"
          />
        </span>
      </section>

      <section className="block">
        <Link href="/Preparation/Before_the_Piscine" passHref>
          <Button variant="primary" className="btn-next">
            Before the Piscine <FontAwesomeIcon icon="arrow-alt-circle-right" />
          </Button>
        </Link>
      </section>

      <span className="buffy-the-buffer" />
    </>
  );
}
