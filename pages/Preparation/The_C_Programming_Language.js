import React from "react";
import Data from "../../data/preparation/clang.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "../../components/Card";
import SelectCard from "../../components/SelectCard";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollingSideBar from "../../components/ScrollingSideBar";

export default function Clang({ content, scroll }) {
  return (
    <>
      <section className="scroll-block" id="block-1">
        <h1>{content.title}</h1>
        <p>{content.p1}</p>
        <p>{content.p2}</p>
        <span className="img-container">
          <img
            src={Data.Dennis.imgSrc}
            alt={Data.Dennis.imgAlt}
            title={Data.Dennis.title}
          />
        </span>
        <sub>
          Dennis Ritchie, creator of the C language and co-developer of Unix.
        </sub>
      </section>

      <section className="scroll-block" id="block-2">
        <h3>{content.p3Header}</h3>
        <p>{content.p3}</p>

        <Container>
          <Row className="rbs-row-2">
            <Card cardData={SelectCard("CLang", "Card-1")} />
            <Card cardData={SelectCard("CLang", "Card-2")} />
          </Row>
        </Container>
      </section>

      <section className="scroll-block" id="block-3">
        <h3>{content.p4Header}</h3>
        <p>{content.p4}</p>

        <Container>
          <Row className="rbs-row-2">
            <Card cardData={SelectCard("CLang", "Card-3")} />
          </Row>
        </Container>
      </section>

      <section className="scroll-block" id="block-4">
        <h3>{content.p5Header}</h3>
        <p>{content.p5}</p>

        <Container>
          <Row className="rbs-row-2">
            <Card cardData={SelectCard("CLang", "Card-4")} />
          </Row>
        </Container>
      </section>

      <section className="scroll-block" id="block-5">
        <h3>{content.p6Header}</h3>
        <p>{content.p6}</p>

        <Container className="holdr">
          <Row className="rbs-row">
            <Card cardData={SelectCard("CLang", "Card-5")} />
            <Card cardData={SelectCard("CLang", "Card-6")} />
            <Card cardData={SelectCard("CLang", "Card-7")} />
          </Row>
          <Row className="rbs-row">
            <Card cardData={SelectCard("CLang", "Card-8")} />
            <Card cardData={SelectCard("CLang", "Card-9")} />
            <Card cardData={SelectCard("CLang", "Card-10")} />
          </Row>
        </Container>
      </section>

      <section className="scroll-block" id="block-6">
        <Link href="./Putting_it_all_together" passHref>
          <Button variant="primary" className="btn-next">
            Putting it all Together{" "}
            <FontAwesomeIcon icon="arrow-alt-circle-right" />
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
        title: "The C Programming Language",
        p1:
          "This is the big one, the main focus taking up the majority of the Piscine and 42's curriculum, as well as being 42's main programming language. There's lots of resources out there but for the most part, there are three main big ones that are useful. I won't go into much detail about C since every learning resouce will go over it in better and more detail.",
        p2:
          " Whichever resource you choose, it's very important to not go to another tutorial unless that previous tutorial wasn't working at all. It's best to find a learning resource that works for you, then practice, practice, practice. Make programs, simple ones, big ones, little ones, whatever. Just keep making things.  Similar to getting stronger by lifting weights, or getting more endurance with distance running, you need to practice to strengthn those neural conenctions and also to solidfy your understanding of the fundamentals.",
        p3Header: "CS50x",
        p3:
          "This is probably the most useful resource for someone looking to learn C first, especially without any background or previous experience in programming. It's a free online course from Harvard, an Introduction to Computer Science. It teaches the fundamentals and starts off with some abstractions that C doesn't give you but very quickly gets complicated, fast. I would suggest at a bare minimum, do the parts with Scratch and C. After that, it's up to you to continue since they use other languages.",
        p4Header: "C: A Modern Approach",
        p4:
          "This is basically the bible for C programmers, straight from the creator's mouth and has his original documentation. It's recommended a lot on the internet for people new to C but do keep in mind who this book's primary audience was for when it was created.  It was written the 70s/80s mostly for established programmers coming from different languages, who didn't have access to other types of learning material like we do today.",
        p5Header: "The C Programming Language",
        p5:
          "While it is possible to use this book to start off learning how to program in general, I wouldn't advise it due to the amount of time you'd spend googling basic things that other materials will explain more clearly. (e.g. Look at the chapter 1 histogram exercise) If you do decide to use this resource, consider definitely using it before the Piscine or after to help solidfy the fundamentals. Otherwise, this is an excellent reference guide and should be read by anyone interested in C in general.",
        p6Header: "Miscellaneous resources",
        p6:
          "Here are some random resources to start you off with if you learn differently. I would suggest watching the Computerphile videos about Recursion and Pointers if you're still not understanding them after a while. I've heard good things about the other two C programming tutorial videos, but haven't personally watched them in entirety.  There's also a stack overflow post on a list of different C books if none that I've shown so far interest you.",
      },
      scroll: [
        { stop: "1", title: "The C Language" },
        { stop: "2", title: "CS50x" },
        { stop: "3", title: "C: A Modern Approach" },
        { stop: "4", title: "The C Programming Language" },
        { stop: "5", title: "Miscellaneous resources" },
        { stop: "6", title: "Putting it all together" },
      ],
    },
  };
}
