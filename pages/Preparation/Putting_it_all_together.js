import React from "react";
import Data from '../../data/pages/preparation/putting_it_all_together.json'

export default function PuttingItAllTogether({ content }) {
  return (
    <div>
      <h1>{content.title}</h1>
      <div>
        <img
          src={Data.Campus.imgSrc}
          alt={Data.Campus.imgAlt}
          title={Data.Campus.title}
        />
      </div>

      <p>{content.p1}</p>
      <h3>{content.p2Header}</h3>
      <p>{content.p2}</p>
      <div>
        <img
          src={Data.Exam.imgSrc}
          alt={Data.Exam.imgAlt}
          title={Data.Exam.title}
        />
      </div>
      <h3>{content.p3Header}</h3>
      <p>{content.p3}</p>
      <p>
        <a href="https://github.com/gcamerli/bootcamp_c/blob/master/documents/norme.en.pdf">
          Here's a link to the Piscine's pdf about the Norm.
        </a>
      </p>
      <div>
        <img
          src={Data.Moulinette.imgSrc}
          alt={Data.Moulinette.imgAlt}
          title={Data.Moulinette.title}
        />
      </div>

      <p>{content.p4}</p>
      <h3>{content.p5Header}</h3>
      <p>{content.p5}</p>
      <p>{content.p6}</p>
      <p>{content.p7}</p>
      <ul>
        <li>{content.li1.one}</li>
        <li>{content.li1.two}</li>
        <li>{content.li1.three}</li>
        <li>{content.li1.four}</li>
        <li>{content.li1.five}</li>
      </ul>
      <p>{content.p8}</p>
      <p>{content.p9}</p>
      <div>
        <img
          src={Data.Students.imgSrc}
          alt={Data.Students.imgAlt}
          title={Data.Students.title}
        />
      </div>

      <p>{content.p10}</p>
      <h3>{content.p11Header}</h3> <p>{content.p11}</p>
      <p>{content.p12}</p>
      <p>{content.p13}</p>
      <div>
        <img
          src={Data.Stress.imgSrc}
          alt={Data.Stress.imgAlt}
          title={Data.Stress.title}
        />
      </div>

      <p>{content.p14}</p>
    </div>
  );
}

export async function getStaticProps(content) {
  console.log(content);
  return {
    props: {
      content: {
        title: "Putting it all Together",
        p1:
          "So, now you know what to expect in regards to what the Piscine covers but there's still some more things, rather meta, that needs to be addressed. This will be very long, feel free to skip this, as this page is mostly about the meta stuff from talking to past and current students, listening and reading about peoples experiences and observations and other little details about 42.",
        p2Header: "Tests and group projects",
        p2:
          "There are group projects which require collaboration, as well as making the person who is the 'least experience/weakest' answer for everyone's code and you'll be graded based on that person's explanation for example. There are about three group projects, three solo projects and four exams. The exams at the main 42 Paris campus are different, in the sense of you do not get instructions on how to even start the exam, so many people fail the first one. At 42 SV, I've heard from students that so many people failed that they had to change policy and now have the exam login instructions as the desktop wallpaper background.",
        p3Header: "The Norm & Moulinette",
        p3:
          "The Norminette is 42's coding standards. At every job, project or even programming language, there are certain conventions, like camelCase or snake_case. At 42, it's very specific, you must abide by all rules or you will get a 0 for that assignment, project or exam.  There are a couple of things before you read what the standard are. Keep in mind, all of these standards are good rules for the most part but taken all together, it can be very limiting and create bad habits. So my advice is to learn and understand the norm but dont form your programming habits around it strictly when coding for non-related 42 things.",
        p4:
          "The Moulinette is what grades your work. So if the Norminette checks it for spelling and grammar errors, the Moulinette grades the actual content of your work. The Moulinette is notorious for being fickle and the staff at 42 say that it has the final say. So if you have a small bug or you get the desired end result but Moulinette gives you a 0, you get a zero. There are github repos of people who claim to have gotten a working version to test for assignments, but it may or may not work. Also with the curriculum update, it will not work with some things most likely. Use at your own risk. A sidenote, since 42 is based off of Epitech, it's very probable that these rules were in place specifically for ease of testing, as well as the coding conventions & standards back in the 90s.",
        p5Header: "What they're looking for",
        p5:
          "This is one thing that no matter how much research anyone does, no one can find a clear answer even the students & possibly bocal. At 42 Paris, the competition is much more fierce for example, so many people who get accepted tend to have a background in programming or improved dramatically over the course of the Piscine.",
        p6:
          "At 42 SV, I'll be honest, through my research I've found from both students, previous employees and even current ones (from what they've said publically) that 42 SV is lacking in enrollement. The barrier to entry at 42 SV and other 42/21 schools is much lower, they're more focused on just keeping the people who stay throughout the Piscine it seems like.  So if a full Piscine is 300 people, about a quarter usually drops out within the first week.  From 42 SV's numbers in interviews and hearing past students experiences, not only is that true, but about 1/2 of people drop out before the Piscine is completed and even fewer pass most assignemnts and exams. So what are they really looking for?",
        p7:
          "Well, we can make an educated guess based on how their school is structured: They require people to teach themselves as well as teach each other. If you're not really compatabile with this type of pedagogy or you're anti-social, you probably won't be accepted since, if they accepted people like that en masse, it would be an unsustainable model and it wouldn't last long. So the people that they pick tend to have a couple of qualities that overlap: ",
        p8:
          "In my honest opinion, some of types of people, would succeed regardless of 42, especially since a lot of these types of people have STEM backgrounds but maybe haven't ever programmed before.  While I don't want to necesarially fall into survivorship bias, I'm just looking at the type of people who were selected and giving a possible reason as to why.",
        p9:
          "How can you be one of those people? A couple of past students have told me that since they monitor your login location, as anyone can see who is logged in where at the lab, it's good to move seats a lot, sit near other people and try to make friends with everyone. At 42 Paris, there's even a day or two where you get to select two other Pisciners who you believe deserve to get in. I don't think there's anything like that in 42 SV, but it does show that being social is a possible metric. One more thing is is hours in the lab. Most people have suggested spending at least 8 hours, just purely logged in and working everyday as another possible metric.",
        p10:
          "TL;DR Be be social, put in the hours & work, most importantly don't give up and stick with it until the end.",
        p11Header: "Stress and time management",
        p11:
          "Stress and time management is important. While most people who get accepted do not pass a majority of the assignments and tests, a somewhat other metric to consider is how you spend your time while at the Piscine. You'll need to study, sleep, eat as well as talk to other people. There's even a specific day in the Piscine where, there's an assignement given out every hour, which was intentionally designed to make people burnout and fail the exam.",
        p12:
          "I haven't put much emphasis on how hard the Piscine actually is, it's really difficult.  The average person who actually gets accepted tends to put in a bare minimum of 8 hours a day, everyday during the Piscine. Most people who are new to programming can spend 12-16 hours everyday on average but everyone is different. The most important things you an do during the Piscine are: Don't give up, help others but also don't forget about yourself, sleep and eat well and be expected to fail a lot.",
        p13:
          "Keep in mind you shouldn't compare yourself to others during the Piscine; a better metric and one that they select for is total improvent. How much you've improved since the day before.  So, if you have to compare yourself to something or someone, compare yourself to your past self from a couple days ago, or even at the beginning of the Piscine, because that's what you're really up against, constant improvement, learn from failures and growing despite them.",
        p14:
          "Well, that's mostly everything that I think is important from many hours of listening, talking and researching about 42SV. There's a good chance I might be wrong about some things so make sure to take everything here, with a grain of salt. Do your own research on top of mine, make your own decisions. If you do choose to do the Piscine, good luck!",
        li1: {
          one: "They don't give up easy",
          two: "They see things through to the end",
          three: "They're somewhat socialable",
          four: "They can work with others",
          five: "They're resourceful",
        },
      },
    },
  };
}
