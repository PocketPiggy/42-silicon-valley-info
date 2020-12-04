import Link from "next/link";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BeforeThePiscine() {
  return (
    <>
      <Head>
        <title>42 Silicon Valley - Piscine: Before the Piscine </title>
        <meta
          name="description"
          content="Have you heard about the Piscine and dont know where to start? Well
          this has all of the information in regards to 42 Silicon valley and
          its Piscine and more."
        />
        <link
          rel="canonical"
          href="https://42sv.info/Preparation/Before_the_Piscine"
        />
      </Head>
      <section className="scroll-block" id="block-1">
        <h1>Before the Piscine</h1>
        <span className="img-container">
          <img
            src="/Images/Page/Preparation/before_the_piscine/42sv-labs-piscine.jpg"
            alt="A bunch of people, Pisciners, crowding around computers during the piscine."
            title="Looks like fun, eh?"
          />
          <p className="img-subtext">
            This is where it all begins: The Piscine.
          </p>
        </span>
      </section>

      <section className="scroll-block" id="block-2">
        <h3> What's the Piscine? </h3>
        <p>
          42 Silicon Valley works like this: Before becoming a student, you must
          go through a one month long 'Bootcamp' of sorts called the Piscine.
          It's an application tryout to see if you have what they're looking for
          to be accepted as a student. While it's currently unknown 100% exactly
          what they want in a student, there are some traits that people who are
          accepted all have.
        </p>

        <p>
          The Piscine, or 'swimming pool' in French, is all about hands-on
          programming. It's a small glimpse of how most learning and activities
          will be done at 42 but highly accelerated. The style of learning
          relies on self-teaching and peer-to-peer teaching. There are no
          teachers, courses, or classes: it's all self-paced. This is extremely
          different than what almost everyone has experienced before.
        </p>

        <p>
          To give an example of an average day in the Piscine: Wake up, look at
          the exercises that are assigned for that day, then attempt them. If
          you don't know how to do something, you have to get out of your
          comfort zone. Ask the person on your left, your right. Neither of them
          knows? Time to start googling for more information. Share,
          collaborate, and improve, that's the 42 experience. Like its namesake
          swimming pool, being thrown in without knowing how to swim (code),
          you'll struggle and feel uncomfortable. That's a good thing because
          getting outside your comfort zone, understanding how to fail, and
          striving to get past those failures and move on is a very important
          part of life that helps with character development.
        </p>

        <span className="img-container">
          <img
            src="/Images/Page/Preparation/before_the_piscine/42-paris-labs.jpg"
            alt="Hundreds of iMacs with lots of students using them in the 42 Paris lab."
            title="That's a lot of iMacs..."
          />
        </span>
        <p className="img-subtext">That's a lot of iMacs...</p>
      </section>

      <section className="scroll-block" id="block-3">
        <h3>Piscine material</h3>
        <p className='pp'>
          Some people have said that 'you can't prepare for the Piscine'. I
          don't quite agree with that, especially since the Piscine curriculum
          is freely available on the internet if you know where to{" "}
          <a
            href="https://github.com/jraleman/42_Piscine-C"
            target="blank"
            rel="noopener noreferrer"
          >
            look.
          </a>{" "}
          So you'll know exactly what to expect, even with the updated material.
          There are 4 main things you can prepare for which are what the Piscine
          will ask of you to learn anyways. They are:
        </p>
        <ul className="fa-ul piscine-prep">
          <li className="pp-item">
            <FontAwesomeIcon icon="chevron-right" /> Command-line interface.
            Unix commands.
          </li>
          <li className="pp-item">
            <FontAwesomeIcon icon="chevron-right" /> Text editor. Vim or Emacs.
          </li>
          <li className="pp-item">
            <FontAwesomeIcon icon="chevron-right" /> Git. Version control.
          </li>
          <li className="pp-item">
            <FontAwesomeIcon icon="chevron-right" /> C. Main programming
            language.
          </li>
        </ul>
      </section>

      <section className="scroll-block" id="block-4">
        <h3> The next steps </h3>
        <p>
          How you prepare for the Piscine is up to you. You can go in blind, you
          can prep a little or you can just start learning now to ease the
          burden later on. I've compiled a list of learning material as a
          starter, you don't have to follow it, you can use any material you
          want. These are just what I've found to be somewhat useful or have
          heard are okay resources. Whatever you choose, no amount of
          preparation can prepare for the amount of work required while at the
          Piscine. Even if you know most or everything covered, you still have
          to put in the work!
        </p>
        <span className="img-container">
          <img
            src="/Images/Page/Preparation/before_the_piscine/42-paris-niel-labs.jpeg"
            alt="Lots of students crowding around 42 founder Xavier Niel."
            title="All those people there, to learn how to code."
          />
        </span>
        <p className="img-subtext">The founder, Xavier Niel at 42 Paris.</p>
      </section>

      <section className="block">
        <Link href="./CLI_and_Zsh" passHref>
          <Button variant="primary" className="btn-next">
            CLI & Zsh <FontAwesomeIcon icon="arrow-alt-circle-right" />
          </Button>
        </Link>
      </section>

      <span className="buffy-the-buffer"></span>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      scroll: [
        { stop: "1", title: "Before the Piscine" },
        { stop: "2", title: "What's the Piscine?" },
        { stop: "3", title: "Piscine material" },
        { stop: "4", title: "The next steps" },
      ],
    },
  };
}
