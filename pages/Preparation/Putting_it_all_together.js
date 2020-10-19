import Head from "next/head";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PuttingItAllTogether() {
  return (
    <>
      <Head>
        <title>42 Silicon Valley - Piscine: Putting it All together</title>
        <meta
          name="description"
          content="After covering all the required material for the
          42 Silicon Valley Piscine, this will hopefully wrap up any questions
          about the rest of the process for the Piscine."
        />
        <link
          rel="canonical"
          href="https://42sv.info/Preparation/Putting_it_all_together"
        />
      </Head>

      <section className="scroll-block" id="block-1">
        <h1>Putting it all Together</h1>
        <span className="img-container">
          <img
            src="/Images/Page/Preparation/putting_it_all_together/42campus.jpeg"
            alt="Entrance of the 42 Silicon Valley campus."
            title="Maybe the beginning of your coding journey."
          />
          <p className="img-subtext">
            Maybe the beginning of your coding journey.
          </p>
        </span>
      </section>

      <section className="scroll-block" id="block-2">
        <h3>So what now?</h3>
        <p>
          So, now you know what to expect in regards to what the Piscine covers
          but there are still some more things that need to be addressed. Exams,
          projects, and other things. This will be a bit verbose, feel free to
          skip past everything after the Norminette & Moulinette section as
          that's just more meta things about 42 Silicon Valley and the Piscine
          in general.
        </p>
      </section>

      <section className="scroll-block" id="block-3">
        <h3>Exams and group projects</h3>
        <p>
          There are group projects which require collaboration, as well as
          making the person who is the 'least experienced/weakest' answer for
          everyone's code and you'll be graded based on that person's
          explanation for example. From people I've talked to and reading, only
          10-20% of people "pass" most exams, and even fewer pass group
          projects. Some past Pisciners have put more focus on their solo
          assignments than group projects. I'm not sure if that's the best way
          to do it, but at least make sure you aren't falling behind on your
          assignments first might be best.
        </p>
        <p>
          There are about three group projects, three solo projects and four
          exams. The exams at the main 42 Paris campus are different, you do not
          get instructions on how to even start the exam, so many people fail
          the first one. At 42 Silicon Valley, I've heard from students that so
          many people failed that they had to change policy and now have the
          exam login instructions as the desktop wallpaper background. Don't
          forget to sign up for the exams!
        </p>

        <span className="img-container">
          <img
            src="/Images/Page/Preparation/putting_it_all_together/42examlogin.jpg"
            alt="A student in the labs of 42 Silicon Valley taking the exam, with the instructions on the computer screen."
            title="Glad that the instructions are easy to find now."
          />
          <p className="img-subtext">
            1. Open iTerm 2. kinit [intra login] 3. Type examshell 4. Start the
            exam
          </p>
        </span>
      </section>

      <section className="scroll-block" id="block-4">
        <h3> The Norm & Moulinette </h3>
        <p>
          The Norminette is 42 Silicon Valley's coding standards. At every job,
          project, programming language, there are certain conventions such as
          camelCase or snake_case, tabs vs. spaces, two or four spaces. At 42
          Silicon Valley, it's very specific and you must abide by all rules or
          you will get a 0 for that assignment, project, or exam.
        </p>
        <p>
          There are a couple of things before you read what the standard is.
          Keep in mind, all of these rules are good rules for the most part but
          taken all together, it can be very limiting and create bad habits. So
          my advice is to learn and understand the norm but dont form your
          programming habits around it strictly when coding for non-related 42
          things.{" "}
          <a
            href="https://github.com/gcamerli/bootcamp_c/blob/master/documents/norme.en.pdf"
            target="blank"
            rel="noopener noreferrer"
          >
            Link to the Norminette pdf.
          </a>
        </p>
        <p>
          So if the Norminette checks your code for spelling and grammar errors,
          the Moulinette grades the actual content of your work. The Moulinette
          is notorious for being fickle and the staff at 42 Silicon Valley say
          that it has the final say. So if you have a small bug or you get the
          desired end result but Moulinette gives you a 0, you get a zero.
        </p>
        <p>
          There are Github repos of people who claim to have gotten a working
          version to test for assignments, but it may or may not work. Also with
          the curriculum update, it will not work with some things most likely.
          Use at your own risk. A sidenote, since 42 Silicon Valley is based on
          Epitech, it's very probable that these rules were in place
          specifically for ease of testing, as well as the coding conventions &
          standards back in the 90s but that's just my speculation.
        </p>

        <span className="img-container">
          <img
            src="/Images/Page/Preparation/putting_it_all_together/Moulinette.png"
            alt="Score results w/ peer reviews from the Moulinette from day 8 of the Piscine."
            title="Example results from Piscine corrections."
          />
          <p className="img-subtext">
            Code review and group projects. Awesome things to be exposed to
            while learning.
          </p>
        </span>
      </section>

      <section className="scroll-block" id="block-5">
        <h3>What are they looking for?</h3>
        <p>
          Well, we can make an educated guess based on how their school is
          structured: They require people to teach themselves as well as teach
          each other. If you're not compatible with this type of pedagogy or
          you're anti-social, you probably won't be accepted since, if they
          accepted people like that en masse, it would be an unsustainable model
          and it wouldn't last long. So the people that they pick tend to have a
          couple of qualities that overlap:
        </p>

        <ul className="fa-ul piscine-prep">
          <li className="pp-item">
            <FontAwesomeIcon icon="chevron-right" />
            They don't give up easy
          </li>
          <li className="pp-item">
            <FontAwesomeIcon icon="chevron-right" />
            They see things through to the end
          </li>
          <li className="pp-item">
            <FontAwesomeIcon icon="chevron-right" />
            They're somewhat sociable
          </li>
          <li className="pp-item">
            <FontAwesomeIcon icon="chevron-right" />
            They can work with others
          </li>
          <li className="pp-item">
            <FontAwesomeIcon icon="chevron-right" />
            They're resourceful
          </li>
        </ul>
        <p>
          Interesting enough, that's what is required to be a developer in the
          job market: You have to teach yourself new things, be good under
          pressure, have good time management skills and you can communicate
          clearly with others. In my honest opinion, the top people in the
          Piscine would succeed regardless of 42, especially since a lot of
          these types of people have STEM backgrounds but maybe haven't ever
          programmed before. While I don't want to necessarily fall into
          survivorship bias, I'm just looking at the type of people who were
          selected and giving a possible reason as to why.
        </p>
        <p>
          How can you be one of those people? A couple of past students have
          told me that since they monitor your login location, as anyone can see
          who is logged in where at the lab, it's good to move seats a lot, sit
          near other people and try to make friends with everyone. At 42 Paris,
          there's even a day or two where you get to select two other Pisciners
          who you believe deserve to get in. I don't think there's anything like
          that in 42 Silicon Valley, but it does show that being social is a
          possible metric. One more thing is the time you spend in the labs.
          Most people have suggested spending at least 8 hours, just purely
          logged in and working every day as another possible metric.
        </p>
        <span className="img-container">
          <img
            src="/Images/Page/Preparation/putting_it_all_together/students.jpg"
            alt="A group of students crowding around a copmuter and collaborating."
            title="Be polite, social and study hard!"
          />
          <p className="img-subtext">
            TL;DR Be social, put in the hours & work, most importantly don't
            give up and stick with it until the end.
          </p>
        </span>
      </section>

      <section className="scroll-block" id="block-6">
        <h3>Stress and time Management</h3>
        <p>
          Stress and time management is important. While most people who get
          accepted do not pass a majority of the assignments and tests, another
          metric to consider is how you spend your time while at the Piscine.
          You'll need to study, sleep, eat as well as talk to other people.
          There's even a specific day in the Piscine where, there's an
          assignment given out every hour, which was intentionally designed to
          make people burnout and fail the exam.
        </p>

        <span className="img-container">
          <img
            src="/Images/Page/Preparation/putting_it_all_together/day09.png"
            alt="Gaetan, an instructor, explaining at a 42 Townhall meeting response why day09 was created."
            title="Kind of devious but the best lessons are learned the hard way."
          />
        </span>

        <p>
          I haven't put much emphasis on how hard the Piscine actually is: it's
          really difficult. The average person who gets accepted tends to put in
          a bare minimum of 8 hours a day, every day during the Piscine. Most
          people who are new to programming can spend 10-16 hours every day on
          average but everyone is different. The most important thing you can do
          during the Piscine: Don't give up, help others but also don't forget
          about yourself, sleep, eat well, be expected to fail a lot.
        </p>
        <p>
          Keep in mind you shouldn't compare yourself to others during the
          Piscine; a better metric and one that they select for is total
          improvement. How much you've improved since the day before, since the
          start. So, if you have to compare yourself to something or someone,
          compare yourself to your past self from a couple days ago, or even at
          the beginning of the Piscine, because that's what you're really up
          against, constant improvement, learn from failures and growing despite
          them.
        </p>
        <span className="img-container">
          <img
            src="/Images/Page/Preparation/putting_it_all_together/stress.jpg"
            alt="A programmer sitting in front of three computers holding his head in his hands in frustration."
            title="Programming is difficult, make sure to manage your stress."
          />
          <p className="img-subtext">
            When learning to program, everyone will experience this.
          </p>
        </span>
      </section>

      <section className="scroll-block" id="block-7">
        <h3> Conclusion </h3>
        <p>
          Well, that's mostly everything that I think is important from many
          hours of listening, talking, and researching about 42 Silicon Valley.
          There's a good chance I might be wrong about some things so make sure
          to take everything here, with a grain of salt. Do your own research on
          top of mine, make your own decisions. If you do choose to do the
          Piscine, don't forget your towel and good luck!
        </p>

        <span className="holdr"></span>
        <a href="https://42.us.org" target="blank" rel="noopener noreferrer">
          <Button variant="primary" className="btn-next">
            42 Silicon Valley <FontAwesomeIcon icon="arrow-alt-circle-right" />
          </Button>
        </a>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      scroll: [
        { stop: "1", title: "Putting it all together" },
        { stop: "2", title: "So what now?" },
        { stop: "3", title: "Exams and group projects" },
        { stop: "4", title: "Norminette & Moulinette" },
        { stop: "5", title: "What they're looking for" },
        { stop: "6", title: "Stress & Time management" },
        { stop: "7", title: "42 Silicon Valley" },
      ],
    },
  };
}
