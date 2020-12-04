import Head from "next/head";
import Link from "next/link";
import Card from "../../components/Card";
import SelectCard from "../../components/SelectCard";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Clang() {
  return (
    <>
      <Head>
        <title>42 Silicon Valley - Piscine: C Programming</title>
        <meta
          name="description"
          content="The main programming language used at 42 Silicon Valley as
          well as the only one that the Piscine will be using. Heres how to get
          started."
        />
        <link
          rel="canonical"
          href="https://42sv.info/Preparation/The_C_Programming_Language"
        />
      </Head>

      <section className="scroll-block" id="block-1">
        <h1>The C Programming Language</h1>
        <span className="img-container">
          <img
            src="/Images/Page/Preparation/c_lang/dennis_ritchie.jpg"
            alt="Dennis Ritchie holding an award and smiling at the camera."
            title="The creator of C and co-developer of Unix."
          />
          <p className="img-subtext">
            The creator of C and co-developer of Unix.
          </p>
        </span>

        <p>
          This is the big one, the main focus taking up the majority of the
          Piscine and 42 Silicon Valley's curriculum, as well as being 42 SV's
          main programming language. There are lots of resources out there but
          for the most part, there are three main big ones that are useful. I
          won't go into much detail about C since every learning resource will
          go over it in better and more detail.
        </p>
        <p>
          Whichever resource you choose, it's very important to not go to
          another tutorial unless that previous tutorial wasn't working at all.
          It's best to find a learning resource that works for you, then
          practice, practice, practice. Make programs, simple ones, big ones,
          little ones, whatever. Just keep making things. Similar to getting
          stronger by lifting weights, or getting more endurance with distance
          running, you need to practice programming to learn and cement your
          understanding.
        </p>
      </section>

      <section className="scroll-block" id="block-2">
        <h3>CS50x</h3>
        <p>
          This is probably the most useful resource for someone looking to learn
          C first, especially without any background or previous experience in
          programming. It's a free online course from Harvard, an Introduction
          to Computer Science. It teaches the fundamentals and starts off with
          some abstractions that C doesn't give you but very quickly gets
          complicated, fast. I would suggest at a bare minimum, do the parts
          with Scratch and C. After that, it's up to you to continue since they
          use other languages. As a heads up, many people watch lectures of
          CS50x during the Piscine and the early parts of the curriculum as a
          student. Most students will recommend it in general.
        </p>

        <div className='cards-container-2'>
            <Card cardData={SelectCard("CLang", "Card-1")} />
            <Card cardData={SelectCard("CLang", "Card-2")} />
        </div>
      </section>

      <section className="scroll-block" id="block-3">
        <h3>C: A Modern Approach</h3>
        <p>
          A more modernized programming book, covering both C89/99 standards. In
          my opinion, it's good reference guide for its plain examples. It also
          has numerous exercises for every topic that it covers, so it's helpful
          cementing knowledge. While quite verbose, it has some very good
          explanations. Most questions one might have will be answered within
          the book and everything is explained in detail.
        </p>

        <div className='cards-container-1'>
            <Card cardData={SelectCard("CLang", "Card-3")} />
        </div>
      </section>

      <section className="scroll-block" id="block-4">
        <h3>The C Programming Language</h3>
        <p>
          The main programming book for C programmers, straight from the
          creator's mouth and has his original documentation. It's recommended a
          lot on the internet for people new to C but do keep in mind who this
          book's primary audience was for when it was created. It was written
          the 70s/80s mostly for established programmers coming from different
          languages, who didn't have access to other types of learning material
          like we do today.
        </p>
        <p>
          While it is possible to use this book to start off learning how to
          program in general, I wouldn't advise it due to the amount of time
          you'd spend googling basic things that other materials will explain
          more clearly. (e.g. Look at the chapter 1 histogram exercise) If you
          do decide to use this resource, consider using it before the Piscine
          or after to help solidify the fundamentals. Otherwise, this is an
          excellent reference guide and should be read by anyone interested in C
          in general.
        </p>

        <div className='cards-container-1'>
            <Card cardData={SelectCard("CLang", "Card-4")} />
        </div>
      </section>

      <section className="scroll-block" id="block-5">
        <h3>Miscellaneous resources</h3>
        <p>
          Here are some various resources to start you off with if you learn
          differently. I would suggest watching the Computerphile videos about
          Recursion and Pointers if you're still not understanding them after a
          while. I've heard good things about the other two C programming
          tutorial videos, but haven't personally watched them in entirety.
          There's also a stack overflow post on a list of different C books if
          none that I've shown so far interest you.
        </p>
        <div className='cards-container'>
            <Card cardData={SelectCard("CLang", "Card-5")} />
            <Card cardData={SelectCard("CLang", "Card-6")} />
            <Card cardData={SelectCard("CLang", "Card-7")} />
            <Card cardData={SelectCard("CLang", "Card-8")} />
            <Card cardData={SelectCard("CLang", "Card-9")} />
            <Card cardData={SelectCard("CLang", "Card-10")} />
        </div>
      </section>

      <section className="scroll-block" id="block-6">
        <Link href="./Putting_it_all_together" passHref>
          <Button variant="primary" className="btn-next">
            Putting it all Together{" "}
            <FontAwesomeIcon icon="arrow-alt-circle-right" />
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
