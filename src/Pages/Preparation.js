import React, { Component } from "react";
import ScrollingBar from "../Components/ScrollingBar";
import Cards from "../Components/Cards";
import SelectCard from "../Components/SelectCard";
import { Container, Col, Row, CardDeck } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";

import "../Styles/Preparation.css";

class Preparation extends Component {
  render() {
    //  For scrollbar component, eventually move to seperate file
    const scroll = [
      { id: "top", title: "Preparation", key: "to" },
      { id: "prep", title: "Before the Piscine", key: "pr" },
      { id: "cli", title: "CLI", key: "cl" },
      { id: "text-editor", title: "Text editor", key: "te" },
      { id: "git", title: "Git", key: "gi" },
      { id: "C", title: "The C programming language", key: "c" },
    ];
    return (
      <div>
        <Container fluid>
          <Col>
            <span className="block">
              <span id="top"> </span>
              <h1> Preparation </h1>
              <img
                src={require("../Images/Pages/Preparation/42-sv-piscine.jpg")}
                alt="A bunch of people crowding around computers during the piscine"
                className="piscine"
              />
            </span>
            <span className="block" id="prep">
              <h4> Before the Piscine </h4>
              <p className="information-stuff">
                There's a couple of things that I think, would be best to know
                or at the very least, familiar with, before attending your
                Piscine. You can learn all of these things for free through a
                near infinite amount of resources on the internet. These are all
                covered throughout the Piscine:
              </p>
              <Container
                className="covered-items"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ul className="checklist">
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheckSquare} /> Command Line & bash
                    scripting
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheckSquare} /> Text editor: VIM or
                    eMacs
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheckSquare} /> Version control:
                    Git{" "}
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faCheckSquare} /> The C Programming
                    language
                  </li>
                </ul>
              </Container>
            </span>
            <span className="block" id="cli">
              <h4> Terminal/Command Line Interface stuff </h4>
              <img
                src={require("../Images/Pages/Preparation/zsh_example.png")}
                alt="Iterm2 using zsh & powerlevel10k theme"
                className="terminal-ex"
              />
              <p className="img-subtext">
                {" "}
                iTerm2 using zsh & powerlevel10k theme{" "}
              </p>
              <p className="information-stuff">
                The first couple of days, before even programming, you're
                starting off with shell scripting & basic terminal navigation.
                If you're unfamiliar with a CLI, it's just like a GUI (graphics
                user interface) in Windows explorer or finder in Mac OS but
                instead it's all text. You need to be at the very least familiar
                with the command line because you'll be using it for almost
                everything you do while at the Piscine.
              </p>
              <p>
                After basic navigation & common unix commands, shell scripts are
                next. Scripts are usually commands within a script file, such as
                .sh that are executed when ran. Something as simpe as:{" "}
                <span style={{ fontWeight: "bold" }}>
                  <code>echo "Hello World!"</code>
                </span>{" "}
                being printed in the console. Some resources to start off with
                below:
              </p>
              <p className="card-category">Command Line learning materials</p>
              <CardDeck className="card-deck">
                <Row
                  className="align-items-center"
                  style={{ margin: "1vh 0 1vh 0", justifyContent: "center" }}
                >
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 0, 0)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 0, 1)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 0, 2)} />
                  </Col>
                </Row>
                <Row
                  className="align-items-center"
                  style={{ margin: "1vh 0 1vh 0", justifyContent: "center" }}
                >
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 0, 3)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 0, 4)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 0, 5)} />
                  </Col>
                </Row>
              </CardDeck>
              <p className="remember">
                <span style={{ fontWeight: "bold" }}>Remember</span>, if you
                ever have trouble with something, either look it up on the
                internet or if you can't, then use the man pages. Your goal
                should be at a bare minimum, being familiar with the basics.
              </p>
            </span>
            <span className="block" id="text-editor">
              <h4> Text editor of choice </h4>
              <p className="information-stuff">
                A text editor is just a program that allows you to write stuff
                and save them as a file, kinda like Microsoft Word but
                specifically for programming. Popular/well known ones include
                Notepad, Sublime Text, Vim, eMacs, etc. There are more powerful
                ones such as Visual Studio Code (VS Code) and ATOM but those are
                not allowed when taking exams.
              </p>
              <p className="information-stuff">
                42 gives you a choice of either Vim or eMacs. Everyone has their
                own preference, though I will only go over Vim since it's much
                simpler to use and set up. Vim has two modes, normal (command)
                mode and insert mode. Insert mode is the mode that allows you to
                type text. However, normal mode does not allow you to type text
                but its use is rather only for movement and other commands.
              </p>
              <p className="information-stuff">
                For example, navigation is used with the HJKL keys. To enter
                insert mode from normal mode you can press I and you can type
                text starting at your cursor. To exit insert mode, press escape.
                A more advanced topic is custom keybinds for your terminal, vim
                and vim addons. When starting Vim for the first type, it's
                advised to go through the vimtutor. From your terminal window,
                type vimtutor and press enter. Finishing it shouldn't take
                longer than 30-40 minutes.
              </p>
              <p className="information-stuff">
                To exit Vim, first make sure you're in normal mode. Then type :q
                and press enter. Depending on the version you can also type
                :exit as well. :qa! if you can't exit for some reason.
              </p>
              <p className="card-category">Places to help learn Vim</p>
              <CardDeck className="card-deck">
                <Row
                  style={{ margin: "1vh 0 1vh 0", justifyContent: "center" }}
                >
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 1, 0)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 1, 1)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 1, 2)} />
                  </Col>
                </Row>
              </CardDeck>
              <p className="card-category">Cheatsheets & Addons</p>
              <CardDeck className="card-deck">
                <Row
                  style={{ margin: "1vh 0 1vh 0", justifyContent: "center" }}
                >
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 2, 0)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 2, 1)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 2, 2)} />
                  </Col>{" "}
                </Row>
              </CardDeck>
              <p className="card-category">Video guides & other things:</p>
              <CardDeck className="card-deck">
                <Row
                  style={{ margin: "1vh 0 1vh 0", justifyContent: "center" }}
                >
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 3, 0)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 3, 1)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 3, 2)} />
                  </Col>
                </Row>
              </CardDeck>
            </span>
            <span className="block" id="git">
              <h4> Version control: Git </h4>
              <p className="information-stuff">
                This is one of the most important tools you'll be using during
                the Piscine,{" "}
                <span style={{ fontWeight: "bold" }}>
                  <code>Git</code>{" "}
                </span>
                . A version control allows you to track changes in your files &
                programs. So instead of saving a file like:{" "}
                <code>project.txt</code> ,<code>final_project.txt</code>,{" "}
                <code>final_final_project.txt </code>
                you can instead save changes of a file, without having to make a
                new file with a new name every time., while being able to revert
                and track changes as well. It's important to note that the
                vogsphere requires you to use git in order to submit
                assignments.
              </p>
              <p className="information-stuff">
                You'll be using Github, a website that you will store and submit
                all your code. Commands that you must be familiar with are:
                <span style={{ fontWeight: "bold" }}>
                  <code>init, status, add, push, pull and commit. </code>
                </span>
                There are many, many more features of git but those are the bare
                minimum in order to get started successfully.
              </p>
              <p className="card-category">Tutorials</p>
              <CardDeck className="card-deck">
                <Row
                  style={{ margin: "1vh 0 1vh 0", justifyContent: "center" }}
                >
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 4, 0)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 4, 1)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 4, 2)} />
                  </Col>
                </Row>
              </CardDeck>
              <p className="card-category">Other useful materials</p>
              <CardDeck className="card-deck">
                <Row
                  style={{ margin: "1vh 0 1vh 0", justifyContent: "center" }}
                >
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 4, 3)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 4, 4)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 4, 5)} />
                  </Col>
                </Row>
              </CardDeck>
            </span>
            <span className="block" id="C">
              <h4> The C Programming Language </h4>
              <p className="information-stuff">
                This is the big one, taking up a majority of the Piscine and 42
                curriculum as 42's main programming language. There's lots of
                resources out there but for the most part, there are three main
                big ones that are very useful.
              </p>
              <h5> CS50x </h5>
              <p className="information-stuff">
                It's free, it's very friendly to complete beginners and they
                have an intergrated IDE so you can do all your coding on their
                platform. They also have their own library that does some
                abstraction for you. Most people would advise taking this for
                general purpose programming first, especially since the
                exercises (problem sets) are very hard but help make you think
                like a programmer. You only have to do the parts that involve
                Scratch and C, everything else is up to you.
              </p>
              <CardDeck className="card-deck">
                <Row
                  style={{ margin: "1vh 0 1vh 0", justifyContent: "center" }}
                >
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 5, 0)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 5, 1)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 5, 2)} />
                  </Col>
                </Row>
              </CardDeck>
              <p className="remember" style={{ fontWeight: "bold" }}>
                Check out their forums and social media, such as the CS50
                subreddit, discord, etc.
              </p>
              <h5> C: A Modern Approach </h5>
              <p className="information-stuff">
                A more modernized programming book, covering both C89/99
                standards. It's best used as a reference guide and for it's
                exercises. While quite verbose, it has some very good
                explanations on lots of topics.
              </p>
              <Container
                fluid
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Cards data={SelectCard("PrepCards", 6, 0)} />
              </Container>
              <h5> K&R's: The C Programming Language </h5>
              <p className="information-stuff">
                Basically the Bible for C programmers, straight from the
                creator's mouth and with his original documentation. It's
                recommend a lot on the internet for people new to C but do keep
                in mind who this book was written for back in the 70s/80s:
                established programmers coming from different languages.
              </p>
              <p className="information-stuff">
                This book is not newbie friendly and many exercises are
                extremely difficult for a new programmer. Be prepared to do lots
                of googling and spending less time coding while using this
                resource. Best to definitely read before the Piscine or after
                the Piscine, if you use it.
              </p>
              <Container
                fluid
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Cards data={SelectCard("PrepCards", 7, 0)} />
              </Container>

              <p className="card-category">Miscellaneous resources</p>
              <CardDeck className="card-deck">
                <Row style={{ margin: "0 0 8vw 0", justifyContent: "center" }}>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 8, 0)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 8, 1)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 8, 2)} />
                  </Col>
                </Row>
                <Row
                  style={{ margin: "1vh 0 1vh 0", justifyContent: "center" }}
                >
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 8, 3)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 8, 4)} />
                  </Col>
                  <Col xs={12} md={4} lg={4}>
                    <Cards data={SelectCard("PrepCards", 8, 5)} />
                  </Col>
                </Row>
              </CardDeck>
            </span>
            <span id="bottom"></span>
          </Col>
          <Col>
            <ScrollingBar data={scroll} />
          </Col>
        </Container>
      </div>
    );
  }
}

export default Preparation;
