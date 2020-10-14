import React from "react";
import Data from "../../data/preparation/text_editor.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "../../components/Card";
import SelectCard from "../../components/SelectCard";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollingSideBar from "../../components/ScrollingSideBar";

export default function TextEditor({ content, scroll }) {
  return (
    <>
      <section className="scroll-block" id="block-1">
        <h1>{content.title}</h1>
        <p>{content.p1}</p>
        <span className="img-container">
          <img
            src={Data.Default.imgSrc}
            alt={Data.Default.imgAlt}
            title={Data.Default.title}
          />
        </span>
        <sub>The vim splash screen.</sub>
      </section>

      <section className="scroll-block" id="block-2">
        <p>{content.p2}</p>
        <p>{content.p3}</p>
        <span className="img-container">
          <img
            src={Data.Tweaked.imgSrc}
            alt={Data.Tweaked.imgAlt}
            title={Data.Tweaked.title}
          />
        </span>
        <sub>Vim with some addons and theme color changes.</sub>
      </section>

      <section className="scroll-block" id="block-3">
        <p>{content.p4}</p>
        <p>{content.p5}</p>

        <Container className="holdr">
          <Row className="rbs-row">
            <Card cardData={SelectCard("TextEditor", "Card-1")} />
            <Card cardData={SelectCard("TextEditor", "Card-2")} />
            <Card cardData={SelectCard("TextEditor", "Card-3")} />
          </Row>
          <Row className="rbs-row">
            <Card cardData={SelectCard("TextEditor", "Card-4")} />
            <Card cardData={SelectCard("TextEditor", "Card-5")} />
            <Card cardData={SelectCard("TextEditor", "Card-6")} />
          </Row>
          <Row className="rbs-row-2">
            <Card cardData={SelectCard("TextEditor", "Card-7")} />
            <Card cardData={SelectCard("TextEditor", "Card-8")} />
          </Row>
        </Container>
      </section>

      <section className="scroll-block" id="block-4">
        <Link href="./Git" passHref>
          <Button variant="primary" className="btn-next">
            Git <FontAwesomeIcon icon="arrow-alt-circle-right" />
          </Button>
        </Link>
      </section>

      <ScrollingSideBar data={scroll} />
      <span className="buffy-the-buffer"></span>
    </>
  );
}

export async function getStaticProps(content) {
  console.log(content);
  return {
    props: {
      content: {
        title: "Text Editor",
        p1:
          "Similar to writing a document in a program like Microsoft Word, when programming you need to use a program to, well, program. Such text editors include, Sublime Text, Notepad, VSCode and Atom. At 42, you have two options: Vim or Emacs. You can't use anything else, only those two. Everyone has their own preference, but I will only go over Vim since that's the one I chose and it's much simpler to start with and get into. Vim is installed on pretty much every Unix-like system, it's lightweight and fast, and it's keyboard centric meaning, it's to be used without using a mouse.",
        p2:
          "Vim has two modes: An insert mode and normal (command) mode. Insert mode, is like using any other program to type stuff, writing an email on outlook/gmail, Microsoft Word, etc. When you push keys, text appears. Normal mode, is different, in that it allows you to navigate around a document, manipluate text and much more complex hings. As an example, basic navigation is bound to HJKL, left down up right, respectively.  Pressing the 'i' key while in normal mode, will switch you over to insert mode. It takes a little getting used to and it may seem confusing at first, but don't worry.  I have plenty ofl learning resources and direct examples of people using Vim.",
        p3:
          "I'd strongly suggest watching the Piscine video for Vim as well as doing Vimtutor. To exit out of vim, make sure you're in normal mode. You can check by looking at the bottom left of the terminal window. If it says insert, then you're in insert mode. Get out of insert mode by pressing the 'esc' key. Once in normal mode, type the ':' key, followed by 'q'. So it should look like this in the window :q.  Then, press enter. You can also do :exit or qa!. To save, type :w or :wq to save, then quit.",
        p4:
          "With Vim, it can be a stuggle to go from the normal way of typing into a program that has only one mode, to two modes. I'd suggest as a tip, try to do all of your typing within Vim if you can, try to learn the basic verb, modifier and noun keys. Verbs, meaning actions like deleting, selecting, copying and pasting. Modifiers, like start inserting text here or find this word. Noun, more navigation skipping around words, going forwards, backwards and going to the end or beginning of a line.",
        p5:
          "Below are some starter resources for Vim. Just like man pages for the command line, you can use :help for vim while in the editor.",
      },
      scroll: [
        { stop: "1", title: "Text Editor" },
        { stop: "2", title: "Modeless vs Modal?" },
        { stop: "3", title: "Learning materials" },
        { stop: "4", title: "Git" },
      ],
    },
  };
}
