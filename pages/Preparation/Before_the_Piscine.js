import Link from "next/link";
import Button from "react-bootstrap/Button";
import Data from "../../data/preparation/before_the_piscine.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollingSideBar from "../../components/ScrollingSideBar";

export default function BeforeThePiscine({ content, scroll }) {
  return (
    <>
      <section className="scroll-block" id="block-1">
        <h1>{content.title}</h1>
        <span className="img-container">
          <img
            src={Data.Students.imgSrc}
            alt={Data.Students.imgAlt}
            title={Data.Students.title}
          />
        </span>
        <sub>This is where it all begins: The Piscine.</sub>
      </section>

      <section className="scroll-block" id="block-2">
        <p>{content.p1}</p>
        <p>{content.p2}</p>
        <p>{content.p3}</p>
        <p>{content.p4}</p>
        <span className="img-container">
          <img
            src={Data.ParisLabs.imgSrc}
            alt={Data.ParisLabs.imgAlt}
            title={Data.ParisLabs.title}
          />
        </span>
        <sub>That's a lot of iMacs...</sub>
      </section>

      <section className="scroll-block" id="block-3">
        <p>{content.p5}</p>
        <ul>
          <li>CLI or command line interface. Specifically Unix stuff. </li>
          <li>Text editor. Vim or eMacs.</li>
          <li>Git. Version control.</li>
          <li>C Language. A low level programming language.</li>
        </ul>
        <p>{content.p6}</p>
        <span className="img-container">
          <img
            src={Data.ParisNiel.imgSrc}
            alt={Data.ParisNiel.imgAlt}
            title={Data.ParisNiel.title}
          />
        </span>
        <sub>The founder, Xavier Niel at 42 Paris.</sub>
      </section>

      <section className="scroll-block" id="block-4">
        <Link href="./CLI_and_Zsh" passHref>
          <Button variant="primary" className="btn-next">
            CLI & Zsh <FontAwesomeIcon icon="arrow-alt-circle-right" />
          </Button>
        </Link>
      </section>

  <ScrollingSideBar data={scroll} />
      <span className="buffy-the-buffer"></span>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      content: {
        title: "Before the Piscine",
        p1:
          "So, you hear about this place called 42 but you're not sure what it's all about?  Well, no worries, this section should help shed some light on what 42 is and the mysterious 'Piscine' and what to expect.",
        p2:
          "42 works like this: Before becoming a student, you must go through a 1 month long 'bootcamp' of sorts called the Piscine. It's like a try out period to see if you have what they're looking for. While it's currently unknown 100% exactly what they want in a student, I've found lots of information that seems to correlate with the types of people they're looking for.",
        p3:
          "The Piscine, or 'swimming pool' in French, is all about hands on programming and a glimpse on how most learning and activities will be done at 42 but ramped up at a fast pace and turned up to 11. The style of learning relies on self teaching and peer-to-peer teaching. There are no teachers, courses or classes: its all self-paced. This is extremely different than what almost everyone has experienced before, which can be a good or bad thing depending on the person.",
        p4:
          "To give an exmaple of an average day in the Piscine: Wake up, look at the exercises that are assigned for that day, then attempt them. If you don't know how to do something, you have to get out of your comfort zone. Ask the person on your left, your right. Neither of them know? Time to start googling for more information.  Share, collaborate and improve, that's the 42 experience. That's an average day of the Piscine; like its namesake swimming pool, being thrown in without knowing how to swim (code), you'll struggle and feel uncomfortable. That's a good thing because getting outside your comfort zone, understanding how to fail and striving to get past those failures and move on is a very important part of life that applies to everything.",
        p5:
          "In my research, I've found lots of people saying that 'you can't prepare for for the Piscine'. I don't quite agree with that, especially since the Piscine curriculum is freely available on the internet if you know where to look. So you know exactly what to expect.  There are 4 main things you can prepare for which are what the Piscine will ask of you to learn anyways. They are: ",
        p6:
          "How you prepare for the Piscine is up to you, you can go in blind, you can prep a little or you can just start learning now. In my opinion, if I wanted to learn another language, I would start now to help alleviate some of the hard parts now, rather than during a time sensitive event. I've compiled a list of learning material as a starter, you don't have to follow it and you can use any material you want. This is just what I used in my path to learning all of these topics.",
      },
      scroll: [
        { stop: "1", title: "Before the Piscine" },
        { stop: "2", title: "What's the Piscine?" },
        { stop: "3", title: "Piscine Material" },
        { stop: "4", title: "Command Line" },
      ],
    },
  };
}
