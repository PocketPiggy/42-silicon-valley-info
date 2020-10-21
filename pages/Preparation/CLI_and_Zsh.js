import Head from "next/head";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "../../components/Card";
import SelectCard from "../../components/SelectCard";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CLIAndZsh() {
  return (
    <>
      <Head>
        <title>42 Silicon Valley - Piscine: CLI & Zsh </title>
        <meta
          name="description"
          content="A brief guide on what type of shell/command-line interface (CLI)
          will be used during the 42 Silicon Piscine, as well as learning
          materials to help get you started."
        />
        <link
          rel="canonical"
          href="https://42sv.info/Preparation/CLI_and_Zsh"
        />
      </Head>

      <section className="scroll-block" id="block-1">
        <h1>CLI and Zsh/Bash</h1>
        <span className="img-container">
          <img
            src="/Images/Page/Preparation/cli/zsh_tweaked.png"
            alt="iTerm2 terminal displaying more information, like time with different fonts and git status."
            title="A setup using iTerm2 & powerlevel10k theme for Zsh."
          />
          <p className="img-subtext">Example of customized Zsh.</p>
        </span>
      </section>

      <section className="scroll-block" id="block-2">
        <h3>Where to start</h3>
        <p>
          For the first couple of days, before programming, the Piscine will go
          over the Command Line Interface (CLI). A CLI is a way to interact with
          the computer to make it perform actions. Similar to using a mouse and
          clicking things to start programs ord clicking a folder to change your
          current working directory.{" "}
        </p>

        <span className="yt-container">
          <p>
            Here is a short video from the Piscine going over the basics of the
            CLI.
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/Q0mZn__JB0o"
            frameBorder="1"
            //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </span>

        <p>
          The focus will be on basic navigation, creating files, manipulating
          files, and making scripts. Being familiar with Unix/Unix-like commands
          is recommended. More detail is usually covered in most learning
          materials across the internet. Now, depending on your setup, you have
          some options.
        </p>
      </section>

      <section className="scroll-block" id="block-3">
        <h3>Mac & GNU/Linux</h3>
        <p>
          To start, if you have a Mac, you are already using a UNIX-like system,
          so you can open up the terminal and start right away; the same applies
          if you're using GNU/Linux. Currently, Mac OS uses Zsh by default, an
          extension from Bash. It doesn't matter which one you use since Zsh is
          close to Bash for the most part. So anything you learn using Bash
          should be valid for the most part in Zsh.
        </p>

        <span className="img-container">
          <img
            src="/Images/Page/Preparation/cli/bash_default.png"
            alt="A default terminal displaying bash, uncustomized."
            title="Basic Bash"
          />
          <p className="img-subtext">A default terminal displaying bash.</p>
        </span>
      </section>

      <section className="scroll-block" id="block-4">
        <h3>Windows/Windows 10</h3>
        <p>If you're using Windows, you have a couple of options:</p>
        <p>
          {" "}
          <FontAwesomeIcon icon="chevron-right" /> Install a Linux distro (like
          Ubuntu) to your hard drive and dual boot. If you've ever installed
          Windows yourself then installing something like Ubuntu will be no
          problem.
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon="chevron-right" /> Download Cygwin (CLI) or a
          console emulator like Cmder. Out of the box, Cmder is probably easier
          to set up and use overall.
        </p>

        <p>
          {" "}
          <FontAwesomeIcon icon="chevron-right" /> You can install Windows
          Subsystem for Linux (WSL/WSL2). This is for Windows 10 only. This
          might be the hardest option for someone who has never used Linux
          before. In my opinion, I would avoid this unless you know what you're
          doing. Otherwise, be prepared to spend many hours configuring and
          fixing possible bugs.
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon="chevron-right" /> Install a virtual machine.
          Pretty straightforward and reliable. You get to keep running Windows,
          without having to restart your computer. It can be slow though,
          depending on your hardware specifications.
        </p>

        <span className="img-container">
          <img
            src="/Images/Page/Preparation/cli/cygwin.png"
            alt="Terminal showing off different unix commands working on Windows."
            title="A default cygwin example."
          />
          <p className="img-subtext">Cygwin running on windows.</p>
        </span>

        <p>
          For more information, check out a really good guide for this on
          <a
            href="https://www.theodinproject.com/courses/web-development-101/lessons/prerequisites"
            target="blank"
            rel="noopener noreferrer"
          >
            {" "}
            The Odin Project.{" "}
          </a>
          For more information and explanation between the different options,
          here is
          <a
            href="https://www.theodinproject.com/courses/web-development-101/lessons/installation-overview"
            target="blank"
            rel="nooopener noreferer"
          >
            {" "}
            another helpful link.{" "}
          </a>
        </p>
      </section>

      <section className="scroll-block" id="block-5">
        <h3> Learning materials </h3>
        <p>
          Here are some resources that are a good place to start. Remember, if
          you ever have trouble with something, either search it up on the
          internet or use the man pages. Your goal should be at a bare minimum,
          being familiar with the basics. Don't forget about the man pages!
        </p>

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
      </section>

      <section className="block">
        <Link href="./Text_Editor" passHref>
          <Button variant="primary" className="btn-next">
            Text Editor <FontAwesomeIcon icon="arrow-alt-circle-right" />
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
        { stop: "1", title: "CLI & Zsh" },
        { stop: "2", title: "Where to start" },
        { stop: "3", title: "Mac & GNU/Linux" },
        { stop: "4", title: "Windows" },
        { stop: "5", title: "Learning materials" },
      ],
    },
  };
}
