import React from "react";
import Data from "../../data/preparation/cli_zsh.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "../../components/Card";
import SelectCard from "../../components/SelectCard";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function CLIAndZsh({ content }) {
  return (
    <>
      <h1>{content.title}</h1>
      <p>{content.p1}</p>

      <span className="img-container">
        <img
          src={Data.Zsh.imgSrc}
          alt={Data.Zsh.imgAlt}
          title={Data.Zsh.title}
        />
      </span>
      <sub>Example of customized Zsh.</sub>
      <h3>{content.p2Header}</h3>
      <p>{content.p2}</p>

      <span className="img-container">
        <img
          src={Data.Bash.imgSrc}
          alt={Data.Bash.imgAlt}
          title={Data.Bash.title}
        />
      </span>
      <sub>A default setup for bash.</sub>

      <h3>{content.p3Header}</h3>
      <p>{content.p3}</p>
      <ul>
        <li>{content.li1.one}</li>
        <li>{content.li1.two}</li>
        <li>{content.li1.three}</li>
        <li>{content.li1.four}</li>
      </ul>

      <span className="img-container">
        <img
          src={Data.Cygwin.imgSrc}
          alt={Data.Cygwin.imgAlt}
          title={Data.Cygwin.title}
        />
      </span>
      <sub>Cygwin running on windows.</sub>

      <p>
        I highly recommend option one, installing Ubuntu. It's the easiest and
        one of the most user-friendly straight forward distributions. For more
        information, check out{" "}
        <a
          href="https://www.theodinproject.com/courses/web-development-101/lessons/prerequisites"
          target="blank"
          rel="noopener noreferrer"
        >
          The Odin Project in getting set up.
        </a>{" "}
        Highly recommended.
      </p>

      <h3> {content.p4Header} </h3>
      <p>{content.p4}</p>

      <Container className="holdr">
        <Row className="rbs-row">
          <Card cardData={SelectCard("CLI", "Card-1")} />
          <Card cardData={SelectCard("CLI", "Card-2")} />
          <Card cardData={SelectCard("CLI", "Card-3")} />
        </Row>
        <Row className="rbs-row">
          <Card cardData={SelectCard("CLI", "Card-4")} />
          <Card cardData={SelectCard("CLI", "Card-5")} />
          <Card cardData={SelectCard("CLI", "Card-6")} />
        </Row>
      </Container>

      <Link href="./Text_Editor" passHref>
        <Button variant="primary" className="btn-next">
          Text Editor {" "}
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </Button>
      </Link>

      <span className="buffy-the-buffer"></span>
    </>
  );
}

export async function getStaticProps(content) {
  return {
    props: {
      content: {
        title: "CLI and Zsh/Bash",
        p1:
          "For the first couple of days, before even starting programming, the Piscine will go over the Command Line Interface (CLI). A CLI is basically a way to interact with the computer to make it do things, similar to using a mouse and clicking things to start programs or basic navigation, like going back to a different folder.  Focus will be on basic navigation, creating files, manipluating files and making scripts. Being familiar with unix/unix-like commands is extremly helpful in advance.",
        p2Header: "Mac & GNU/Linux",
        p2:
          "To start, if you have a Mac, you are already using a unix-like system, so you can open up the terminal and start right away; same applies if you're using GNU/linux. Currently, Mac OS uses Zsh, an extension from Bash. It doesn't really matter which one you use since Zsh is close to Bash for the most part.  So anything you learn using Bash, should be valid for the most part in Zsh.",
        p3Header: "Windows/Windows 10",
        p3: "If you're using Windows, you have a couple of options: ",
        li1: {
          one:
            "Install a linux distro (like Ubuntu) to your hard drive and dual boot",
          two: "Download a terminal emulator like cygwin",
          three:
            "You can install WSL or WSL2 (Windows Subsystem for Linux) *Windows 10 only*",
          four: "Install a virtual machine",
        },
        p4Header: "Learning materials",
        p4:
          "Here are some resources that are a good place to start. Rmember, if you ever have trouble with someting, either look it up on the internet or use the man pages. Your goal should be at a bare minimum, being familiar with the basics. Don't forget about the man pages!",
      },
    },
  };
}
