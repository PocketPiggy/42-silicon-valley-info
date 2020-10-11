import React from "react";
import Data from '../../data/pages/preparation/clang.json'

export default function Clang({ content }) {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.p1}</p>
      <p>{content.p2}</p>
      <div>
        <img src={Data.Dennis.imgSrc}
             alt={Data.Dennis.imgAlt}
             title={Data.Dennis.title}
        />
      </div>
      <h3>{content.p3Header}</h3>
      <p>{content.p3}</p>
      <h3>{content.p4Header}</h3>
      <p>{content.p4}</p>
      <h3>{content.p5Header}</h3>
      <p>{content.p6}</p>
      <h3>{content.p6Header}</h3>
      <p>{content.p6}</p>
    </div>
  );
}

export async function getStaticProps(content) {
  console.log(content);
  return {
    props: {
      content: {
        title: "The C Programming Language",
        p1: "This is the big one, the main focus taking up the majority of the Piscine and 42's curriculum, as well as being 42's main programming language. There's lots of resources out there but for the most part, there are three main big ones that are useful. I won't go into much detail about C since every learning resouce will go over it in better and more detail.",
        p2: " Whichever resource you choose, it's very important to not go to another tutorial unless that previous tutorial wasn't working at all. It's best to find a learning resource that works for you, then practice, practice, practice. Make programs, simple ones, big ones, little ones, whatever. Just keep making things.  Similar to getting stronger by lifting weights, or getting more endurance with distance running, you need to practice to strengthn those neural conenctions and also to solidfy your understanding of the fundamentals.",
        p3Header: "CS50x",
        p3: "This is probably the most useful resource for someone looking to learn C first, especially without any background or previous experience in programming. It's a free online course from Harvard, an Introduction to Computer Science. It teaches the fundamentals and starts off with some abstractions that C doesn't give you but very quickly gets complicated, fast. I would suggest at a bare minimum, do the parts with Scratch and C. After that, it's up to you to continue since they use other languages.",
        p4Header: "C: A Modern Approach",
        p4: "This is basically the bible for C programmers, straight from the creator's mouth and has his original documentation. It's recommended a lot on the internet for people new to C but do keep in mind who this book's primary audience was for when it was created.  It was written the 70s/80s mostly for established programmers coming from different languages, who didn't have access to other types of learning material like we do today.",
        p5: "While it is possible to use this book to start off learning how to program in general, I wouldn't advise it due to the amount of time you'd spend googling basic things that other materials will explain more clearly. (e.g. Look at the chapter 1 histogram exercise) If you do decide to use this resource, consider definitely using it before the Piscine or after to help solidfy the fundamentals. Otherwise, this is an excellent reference guide and should be read by anyone interested in C in general.",
        p6Header: "Miscellaneous resources",
        p6: "Here are some random resources to start you off with if you learn differently. I would suggest watching the Computerphile videos about Recursion and Pointers if you're still not understanding them after a while. I've heard good things about the other two C programming tutorial videos, but haven't personally watched them in entirety.  There's also a stack overflow post on a list of different C books if none that I've shown so far interest you."
      },
    },
  };
}
