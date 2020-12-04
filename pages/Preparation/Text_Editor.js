import Head from "next/head";
import Link from "next/link";
import Card from "../../components/Card";
import SelectCard from "../../components/SelectCard";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TextEditor() {
  return (
    <>
      <Head>
        <title>42 Silicon Valley - Piscine: Text Editor</title>
        <meta
          name="description"
          content="At 42 Silicon Valley, you have a choice of Vim or Emacs. This will
          guide you on how to hit the ground running with Vim."
        />
        <link rel="canonical" href="https://42sv.info/Preparation/Text_Editor" />
      </Head>

      <section className="scroll-block" id="block-1">
        <h1> Text Editor - Vim </h1>
        <span className="img-container">
          <img
            src="/Images/Page/Preparation/text_editor/vim_default.png"
            alt="Default splash screen of vim, information about version and simple keybind instructions."
            title=":q!"
          />
          <p className="img-subtext">The vim splash screen.</p>
        </span>
      </section>

      <section className="scroll-block" id="block-2">
        <h3>What's a text editor?</h3>
        <p>
          Similar to writing a document in a program like Microsoft Word, when
          programming you need to use a program to, well, program. Such text
          editors include Sublime Text, Notepad, VSCode, and Atom. At 42 Silicon
          Valley, you have two options: Vim or Emacs. While you can use other
          text editors for other things, for exams you are required to pick from
          Vim or Emacs.
        </p>
        <p>
          Everyone has their preference, but I will only go over Vim since
          that's the one I chose and it's much simpler to start with and get
          into. Vim is installed on pretty much every Unix-like system, it's
          lightweight and fast, and it's keyboard-centric meaning, it's to be
          used without using a mouse.
        </p>

        <span className="img-container">
          <img
            src="/Images/Page/Preparation/text_editor/real_programmers.png"
            alt="XKCD comic with multiple panels talking about which text editor real programmers use."
            title="Always an XKCD for everything."
          />
          <p className="img-subtext">Always an XKCD for everything.</p>
        </span>
      </section>

      <section className="scroll-block" id="block-3">
        <h3>Modeless vs Modal</h3>
        <p>
          So there are two types of editors: modeless and modal. A modeless
          editor is any other word processing program that you might have used
          before, it only has one mode, inserting text. This includes Notepad,
          all of the former text editors like VSCode, etc, as well as Microsoft
          Word.
        </p>
        <p>
          A modal editor is where there is more than one mode. In Vim, there are
          2 main modes, inserting text and normal mode. Inserting text is the
          same as the modeless editors, you type, and text is inputted on the
          screen. Normal mode differs in that when you push a key in normal
          mode, it does not put a character on the screen. It will instead do a
          command. So if you pushed the <code>L</code> key in normal mode, it
          will move your cursor right, similar to using the right arrow key.
        </p>
        <p>
          As an example, basic navigation is bound to <code>HJKL</code>, left
          down up, and right respectively. Pressing the <code>i</code> key while
          in normal mode, will switch you over to insert mode. It takes a little
          getting used to and it may seem confusing at first, but don't worry.
          There are also two other modes for Vim. Command mode allows you to use
          commands for the editor and other things. To bring it up, press{" "}
          <code>:</code> (colon). At the bottom, you'll see a prompt. Visual
          mode allows you to select text, by pressing <code>v</code> then
          highlighting.
        </p>

        <span className="yt-container">
          <p>Video on from the Piscine introducing the Vim editor.</p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/vVbq9Y-oLUQ"
            frameBorder="1"
            className="yt-iframe"
            //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </span>
      </section>

      <section className="scroll-block" id="block-4">
        <h3>More Vimformation</h3>
        <p>
          I'd strongly suggest watching the Piscine video for Vim as well as
          doing <code>Vimtutor</code>. To exit out of Vim, make sure you're in
          normal mode. You can check by looking at the bottom left of the
          terminal window. If it says <code>insert</code>, then you're in insert
          mode. Get out of insert mode by pressing the <code>Esc</code> key.
          Once in normal mode, type the <code>:</code> key, followed by{" "}
          <code>q</code>. Then, press <code>enter</code>. You can also do
          <code>:exit</code> or <code>:qa</code>. To save, type <code>:w</code>{" "}
          or <code>:wq</code> to save, then quit.
        </p>
        <p>
          Vim, while useful, might feel lacking in one way or another. Adding
          plugins, changing color schemes, and making custom keybinds is all
          possible. While there are many guides for these, I won't go into too
          much detail as it's best to get comfortable with basic Vim, then add
          and change what you want as you need to.
        </p>
        <span className="img-container">
          <img
            src="/Images/Page/Preparation/text_editor/vim_tweaked.png"
            alt="A sample of some javascript code with vim plugins enabled."
            title="Making Vim a little like VScode."
          />
          <p className="img-subtext">
            A vim setup with some plugs and a color theme.
          </p>
        </span>
      </section>

      <section className="scroll-block" id="block-5">
        <h3> Learning materials </h3>
        <p>
          With Vim, it can be a struggle to go from the normal way of typing
          into a program that has only one mode, to a modal editor. I'd suggest
          as a tip, try to do all of your typing within Vim if you can, try to
          learn the basic verb, modifier, and noun keys. Verbs, meaning actions
          like deleting, selecting, copying, and pasting. Modifiers, like start
          inserting text here or find this word. Noun, more navigation skipping
          around words, going forwards, backward, and going to the end or
          beginning of a line.
        </p>
        <p>
          Below are some starter resources for Vim. Just like <code>man</code>{" "}
          pages for the command line, you can use <code>:help</code> for Vim
          while in the editor.
        </p>

        <div className="cards-container">
            <Card cardData={SelectCard("TextEditor", "Card-1")} />
            <Card cardData={SelectCard("TextEditor", "Card-2")} />
            <Card cardData={SelectCard("TextEditor", "Card-3")} />
            <Card cardData={SelectCard("TextEditor", "Card-4")} />
            <Card cardData={SelectCard("TextEditor", "Card-5")} />
            <Card cardData={SelectCard("TextEditor", "Card-6")} />
        </div>
        <div className="cards-container-2">
            <Card cardData={SelectCard("TextEditor", "Card-7")} />
            <Card cardData={SelectCard("TextEditor", "Card-8")} />
        </div>
      </section>

      <section className="block">
        <Link href="./Git" passHref>
          <Button variant="primary" className="btn-next">
            Git <FontAwesomeIcon icon="arrow-alt-circle-right" />
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
        { stop: "1", title: "Text Editor" },
        { stop: "2", title: "What's a text editor?" },
        { stop: "3", title: "Modeless vs Modal?" },
        { stop: "4", title: "More vimformation" },
        { stop: "5", title: "Learning materials" },
      ],
    },
  };
}
