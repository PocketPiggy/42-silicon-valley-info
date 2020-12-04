import Link from "next/link";
import Head from "next/head";
import Card from "../../components/Card";
import SelectCard from "../../components/SelectCard";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Git() {
  return (
    <>
      <Head>
        <title>42 Silicon Valley - Piscine: Git</title>
        <meta
          name="description"
          content="A very brief explanation of how the version control git works, how
          it will be used in tandem at 42 Silicon Valley and what the
          Vogsphere is."
        />
        <link rel="canonical" href="https://42sv.info/Preparation/Git" />
      </Head>

      <section className="scroll-block" id="block-1">
        <h1>Git</h1>
        <span className="img-container">
          <img
            src="/Images/Page/Preparation/git/git_xkcd.png"
            alt="An XKCD comic talking about git and how to use it as a joke."
            title="Seriously, always an XKCD."
          />
        </span>
        <p className="img-subtext">Seriously, always an XKCD.</p>
      </section>

      <section className="scroll-block" id="block-2">
        <h3>Version control?</h3>
        <p>
          One of the most important tools you'll be using during the Piscine,
          Git, is a version control system. What is version control? It's put
          simply, a way to manage and control changes within programs and other
          files. Git also allows you to take projects in different directions,
          while always keeping a backup of different versions.
        </p>
        <p>
          An example could be a photo editing program that only allows the user
          to resize & crop images. A user wants to add some extra functionality,
          like adding filters to the images. So they make a copy (fork/clone) of
          the app code, then add their changes to now add filters to images.
          They can now request to add their new code (pull request) or keep
          their code and make it it's own thing (fork).
        </p>
        <p>
          Another example would be instead of saving a file such as,{" "}
          <code>
            project.txt, project2.txt, final_project.txt,
            final_final_project.txt, final_final_done_project.txt{" "}
          </code>
          . You could save changes of a file, without having to make a new file
          with a new name every time. All of that, while being able to see what
          changes you've made, as well as reverse them.
        </p>
        <span className="img-container">
          <img
            src="/Images/Page/Preparation/git/git_joke.jpg"
            alt="Comic of two people in front of an eisle."
          />
          <p className="img-subtext">
            Funny, but it happens more often then we like to admit.
          </p>
        </span>
      </section>

      <section className="scroll-block" id="block-3">
        <h3> Vogsphere </h3>
        <p>
          The Vogsphere is how you will be turning in your assignments, which
          uses git. Below, there are two videos from the Piscine which not only
          explains it in more detail but will go through a walkthrough on how to
          use it.
        </p>
        <span className="yt-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/dyLOcpZwuEA"
            frameBorder="1"
            className="yt-iframe"
            //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </span>
        <span className="yt-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/Vp_1Yyoh43E"
            frameBorder="1"
            className="yt-iframe"
            //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </span>
      </section>

      <section className="scroll-block" id="block-4">
        <h3>Learning materials</h3>
        <p>
          As a final note, the commands you'll use most ofter are:{" "}
          <code>init, status, add, push, pull, </code>and <code> commit.</code>{" "}
          There are many more features of git, but knowing how to use these as
          well as understanding what branches are, is the bare minimum to get
          started successfully. Below are some resources to help get started
          with git.
        </p>

        <div className="cards-container">
          <Card cardData={SelectCard("Git", "Card-1")} />
          <Card cardData={SelectCard("Git", "Card-2")} />
          <Card cardData={SelectCard("Git", "Card-3")} />
          <Card cardData={SelectCard("Git", "Card-4")} />
          <Card cardData={SelectCard("Git", "Card-5")} />
          <Card cardData={SelectCard("Git", "Card-6")} />
        </div>
      </section>

      <section className="block">
        <Link href="./The_C_Programming_Language" passHref>
          <Button variant="primary" className="btn-next">
            The C Language <FontAwesomeIcon icon="arrow-alt-circle-right" />
          </Button>
        </Link>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      scroll: [
        { stop: "1", title: "Git" },
        { stop: "2", title: "Version control?" },
        { stop: "3", title: "Vogsphere" },
        { stop: "4", title: "Learning materials" },
      ],
    },
  };
}
