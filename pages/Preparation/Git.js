import React from "react";
import Data from "../../data/preparation/git.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "../../components/Card";
import SelectCard from "../../components/SelectCard";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollingSideBar from "../../components/ScrollingSideBar";

export default function Git({ content, scroll }) {
  return (
    <>
      <section className="scroll-block" id="block-1">
      <h1>{content.title}</h1>
      <span className="git-logo">
        <img
          src={Data.GitLogo.imgSrc}
          alt={Data.GitLogo.imgAlt}
          title={Data.GitLogo.title}
        />
      </span>
      <p>{content.p1}</p>
      <p>{content.p2}</p>
      <p>{content.p3}</p>
      <span className="img-container">
        <img
          src={Data.GitExample.imgSrc}
          alt={Data.GitExample.imgAlt}
          title={Data.GitExample.title}
        />
      </span>
      <sub>A diagram of branching in action.</sub>
      </section>

      <section className="scroll-block" id="block-2">
      <p>{content.p4}</p>
      <p>{content.p5}</p>

      <Container className="holdr">
        <Row className="rbs-row">
          <Card cardData={SelectCard("Git", "Card-1")} />
          <Card cardData={SelectCard("Git", "Card-2")} />
          <Card cardData={SelectCard("Git", "Card-3")} />
        </Row>
        <Row className="rbs-row">
          <Card cardData={SelectCard("Git", "Card-4")} />
          <Card cardData={SelectCard("Git", "Card-5")} />
          <Card cardData={SelectCard("Git", "Card-6")} />
        </Row>
      </Container>
      </section>

      <section className="scroll-block" id="block-3">
      <Link href="./The_C_Programming_Language" passHref>
        <Button variant="primary" className="btn-next">
          The C Language {" "}
          <FontAwesomeIcon icon='arrow-alt-circle-right' />
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
        title: "Git",
        p1:
          "One of the most important tools you'll be using during the Piscine, Git, is a version control system. What is version control? It's put simply, a way to manage and control changes within programs and other files. Git also allows you to take projects in different directions, while always keeping a backup of different versions.",
        p2:
          "An example could be a program, a camera app. Version 1.0 (master branch), you can take pictures.  In version 1.5 you can now record video but it doesn't have sound. Someone might want to add sound, so they take a copy of version 1.5 (fork or clone) and implement it themselves and make their own version 1.6 that can record video with sound. This is all while till having access to version 1.5. They also have the choice of being able to add those new changes to the older 1.5.",
        p3:
          "Another example would be instead of saving a file like, 'project.txt, project2.txt, final_project.txt, final_final_project.txt, final_final_done_project.txt', you could save changes of a file, without having to make a new file with a new name everytime.  All of that, while being able to see what changes you've made, as well as reverse them.",
        p4:
          "The Vogsphere, is how you will be turning in your assignments, which uses git. Below, I have the video from the Piscine which not only explains it in more detail but will go through a walkthrough on how to use it.",
        p5:
          "As a final note, the commands you'll use most ofter are: init, status, add, push, pull and commit. There are many more features of git, but knowing how to use these as well as understanding what branches are, is the bare minimum to get started successfully. Below are some resources to help get started with git.",
      },
       scroll: [
          {stop: "1", title: "Git"},
          {stop: "2", title: "Learning materials"},
          {stop: "3", title: "The C Language"},
        ],
    },
  };
}
