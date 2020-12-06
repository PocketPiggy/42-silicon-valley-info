import Head from "next/head";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoBack from "../../components/GoBack";

export default function BlogsAndReviews() {
  return (
    <>
      <Head>
        <title>42 Silicon Valley - Blogs & Reviews </title>
        <meta
          name="description"
          content="A compilation of resources about 42 Silicon Valley, 42 Paris, 21
          Moscow and the Piscine. Also lots of information about the inner workings
          of 42 SV."
        />
        <link
          rel="canonical"
          href="https://42sv.info/sources/blogs_and_reviews"
        />
      </Head>
      <section className="scroll-block bar" id="block-1">
        <h1>Blogs and Reviews</h1>
        <p>
          A good chunk of my research comes from these sources and others, but
          I've found these to be the most enlightening about 42 Silicon Valley
          or 42 in general. Some of them are quite detailed, others are more
          about what the authors felt as well as what was going on and what to
          expect during the Piscine. If you have to look at any, I'd suggest
          <a>Kristofk's survival guide</a> as well as <a>Skunz's video</a>. Most
          of all the others are more for if you want to know more about the in's
          and out's of 42 Silicon Valley and 42 Paris though they aren't
          necessary.
        </p>
      </section>
      <section className="scroll-block bar" id="block-2">
        <h3>Kristofk's 42 Survival guide</h3>
        <p>
          A guide on what was covered in his Piscine, as well as general
          information regarding the surrounding area, the inner workings of 42
          Silicon Valley, and other details. Straight to the point; highly
          recommended reading.
        </p>
        <span className="img-container">
          <img
            src="/images/sources/blogreview/kristofk.png"
            alt="Article with sidebar on right side for quick navigation."
          />
        </span>
        <a
          href="https://kristofk.com/posts/s42-survival-guide"
          target="blank"
          rel="noopener noreferrer"
        >
          <Button variant="light" className="btn-next">
            Source
          </Button>
        </a>
      </section>

      <section className="scroll-block bar" id="block-3">
        <h3>Skunz's Piscine: What to expect</h3>
        <p>
          A straight to the point 5-minute video. The most important take away
          is that you must be prepared to work hard, extremely hard.
          Recommended.",
        </p>
        <span className="yt-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/NZZo114BSnY"
            frameBorder="1"
            className="yt-iframe"
            allowFullScreen
          ></iframe>
        </span>
      </section>

      <section className="scroll-block bar" id="block-4">
        <h3>Gcamerli's 42 Bootcamp</h3>
        <p>
          This was the first source I came across when I was just starting my
          research into 42 Silicon Valley. It helped me prepare for the Piscine
          as a good place to start but not all of the learning materials are up
          to date in regards to accessibility. It's really good for quick tips
          and what to look out for during the Piscine. Highly recommended.
        </p>
        <span className="img-container">
          <img
            src="/images/sources/blogreview/gcamer.png"
            alt="Landing page with picture from HHGTTG; marvin watching the sunset."
          />
        </span>
        <a
          href="https://42boot.gcamer.li/getting-started"
          target="blank"
          rel="noopener noreferrer"
        >
          <Button variant="light" className="btn-next">
            Source
          </Button>
        </a>
      </section>
      <section className="scroll-block bar" id="block-5">
        <h3>Michael Brave's: Piscine to Cadet</h3>
        <p>
          Michael Brave wrote a lot about 42 Silicon Valley, one of the first
          sources for actual Piscine experiences in depth that I could find. He
          has a lot of opinions and goes through what he felt during each day
          more than most other sources. It was a good insight into lots of
          things, like how many people just up and quit during the Piscine.
          While it's very verbose, I found it to be somewhat helpful.",
        </p>
        <span className="img-container">
          <img
            src="/images/sources/blogreview/mbrave.png"
            alt="Medium article post with authors face underneath title."
          />
        </span>

        <div className="btn-link-container">
          <a href="https://medium.com/@themichaelbrave/why-im-taking-a-chance-on-42-222a698761d3">
            <Button variant="light" className="btn-next">
              Why I'm taking a chance on 42
            </Button>
          </a>
          <a href="https://medium.com/@themichaelbrave/i-have-a-place-in-the-dorms-at-42-3b1fc9c4e2c0">
            <Button variant="light" className="btn-next">
              Piscine Dorms
            </Button>
          </a>
          <a href="https://medium.com/@themichaelbrave/my-piscine-experience-all-in-one-post-85671e0bf307">
            <Button variant="light" className="btn-next">
              Full Piscine Experience
            </Button>
          </a>
          <a href="https://medium.com/@themichaelbrave/lessons-learned-after-a-month-of-code-at-42s-piscine-679afb17fbData.MBrave.links.four">
            <Button variant="light" className="btn-next">
              Lessons Learned
            </Button>
          </a>
          <a href="https://medium.com/@themichaelbrave/life-as-a-cadet-at-42-silicon-valley-8-months-in-9d86204bf078Data.MBrave.links.five">
            <Button variant="light" className="btn-next">
              Cadet Life @ 42 Silicon Valley
            </Button>
          </a>
        </div>
      </section>

      <section className="scroll-block bar" id="block-6">
        <h3>Jraleman 42 SV blogs</h3>
        <p>
          A former student from 42 Silicon Valley, he briefly lists his reasons
          and experiences while at 42 Silicon Valley. He also has some helpful
          Github links for the old Piscine repos.",
        </p>
        <span className="img-container">
          <img
            src="/images/sources/blogreview/jraleman.png"
            alt="Medium article post with squirtle pokemon as profile picture and picture of 42 silicon valley labs."
          />
        </span>
        <div className="btn-link-container">
          <a
            href="https://github.com/jraleman/42_Piscine-C"
            target="blank"
            rel="noopener noreferrer"
          >
            <Button variant="light" className="btn-next">
              Piscine Github repo
            </Button>
          </a>
          <a href="https://medium.com/@jraleman/42-silicon-valley-piscine-or-how-i-learned-to-stop-worrying-and-love-the-code-6b72bd41317a">
            <Button variant="light" className="btn-next">
              How I learned to stop worrying
            </Button>
          </a>
          <a href="https://medium.com/@jraleman/42-silicon-valley-the-good-the-bad-and-the-ugly-b80fbb6d5d2f">
            <Button variant="light" className="btn-next">
              The good, the bad and the ugly?
            </Button>
          </a>
        </div>
      </section>
      <section className="scroll-block bar" id="block-7">
        <h3>Victoria Nguyen's: From applying to Cadet</h3>
        <p>
          These microblogs with detailed information, straight to the point
          about her experiences about 42 Silicon Valley.
        </p>
        <span className="img-container">
          <img
            src="/images/sources/blogreview/vnguyen.png"
            alt="Medium article post with authors face underneath title; screencap of 42 silicon valley website landing page."
          />
        </span>
        <div className="btn-link-container">
          <a
            href="https://medium.com/my-journey-at-42-silicon-valley-as-a-non-cs-major/applying-to-42-silicon-valley-e79eaf56e375"
            target="blank"
            rel="noopener noreferrer"
          >
            <Button variant="light" className="btn-next">
              Applying
            </Button>
          </a>
          <a
            href="https://medium.com/my-journey-at-42-silicon-valley-as-a-non-cs-major/42-silicon-valley-piscines-dorm-application-process-3d167846255d"
            target="blank"
            rel="noopener noreferrer"
          >
            <Button variant="light" className="btn-next">
              Dorm Application
            </Button>
          </a>
          <a
            href="https://medium.com/my-journey-at-42-silicon-valley-as-a-non-cs-major/from-acceptance-to-42-silicon-valleys-piscine-what-should-you-know-f2427efd8034"
            target="blank"
            rel="noopener noreferrer"
          >
            <Button variant="light" className="btn-next">
              Acceptance
            </Button>
          </a>
          <a
            href="https://medium.com/my-journey-at-42-silicon-valley-as-a-non-cs-major/acceptance-into-42-silicon-valley-from-pisciner-to-cadet-418b092fb464"
            target="blank"
            rel="noopener noreferrer"
          >
            <Button variant="light" className="btn-next">
              Piscine to Cadet
            </Button>
          </a>
        </div>
      </section>
      <section className="scroll-block bar" id="block-8">
        <h3>Coding Girl's 42 experience</h3>
        <p>
          Ms. Anna's experiences at 42 Paris. Very detailed vlogs on not only
          her experiences but also highlighting how 42 Paris operates.
        </p>
        <span className="img-container">
          <img
            src="/images/sources/blogreview/codinggirl.jpg"
            alt="Youtube thumbnail of girl looking exhausted, captions say day 1 42, I feel exhausted."
          />
        </span>
        <a
          href="https://www.youtube.com/playlist?list=PLXNyxVNLAY_0G-hPCOzl5R0G_N_Rp0sLo"
          target="blank"
          rel="noopener noreferrer"
        >
          <Button variant="light" className="btn-next">
            Link to playlist
          </Button>
        </a>
      </section>
      <section className="scroll-block bar" id="block-9">
        <h3>Zedechariaz's Reddit AMA</h3>
        <p>
          An ask me anything thread on the /r/learnprogramming subreddit about
          42 Paris. I found this to be a little helpful and insightful. Though
          one thing of note, unlike some of these other people, he has STEM
          degree, specifically Engineering.
        </p>
        <span className="img-container">
          <img
            src="/images/sources/blogreview/zedechariaz.png"
            alt="Screenshot of the reddit thread, lots of text."
          />
        </span>
        <a
          href="https://old.reddit.com/r/learnprogramming/comments/caxa2g/i_went_to_42_free_coding_school_ama/"
          target="blank"
          rel="noopener noreferrer"
        >
          <Button variant="light" className="btn-next">
            Source
          </Button>
        </a>
      </section>
      <section className="scroll-block bar" id="block-10">
        <h3>Ekaterina's 42 Paris blogs</h3>
        <p>
          Short and to the point. They're a bit scattered and not as detailed as
          others, but still insightful in some things like exams.
        </p>
        <span className="img-container">
          <img
            src="/images/sources/blogreview/ekaterina.png"
            alt="Blog formatted website with author touching behind her hair and smiling."
          />
        </span>
        <a
          href="https://getawayposts.com/category/42-piscine-insider-day-to-day-chronics"
          target="blank"
          rel="noopener noreferrer"
        >
          <Button variant="light" className="btn-next">
            Source
          </Button>
        </a>
      </section>

      <section className="block">
        <GoBack name={"Sources"} />
      </section>

      <span className="buffy-the-buffer"></span>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      scroll: [
        { stop: "1", title: "Sources" },
        { stop: "2", title: "42 SV survival guide" },
        { stop: "3", title: "What to expect from the Piscine" },
        { stop: "4", title: "Piscine bootcamp info" },
        { stop: "5", title: "Blogs: Piscine to Cadet" },
        { stop: "6", title: "Blogs: 42 SV expectations" },
        { stop: "7", title: "Blogs: Applying to Cadet" },
        { stop: "8", title: "Vlogs: 42 Paris" },
        { stop: "9", title: "42 Paris AMA" },
        { stop: "10", title: "Blogs: 42 Paris" },
      ],
    },
  };
}
