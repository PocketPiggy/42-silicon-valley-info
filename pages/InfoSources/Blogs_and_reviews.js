import React from "react";
import Data from "../../data/infosources/blogreviews.json";
import ScrollingSideBar from "../../components/ScrollingSideBar";

export default function BlogsAndReviews({ content, scroll }) {
  return (
    <>
      <section className="scroll-block" id="block-1">
        <h1>{content.title}</h1>
        <h3>{content.p1Header}</h3>
        <p>{content.p1}</p>
      </section>

      <section className="scroll-block" id="block-2">
        <h3>{content.p2Header}</h3>
        <p>{content.p2}</p>
        <span className="img-container">
          <img src={Data.Kristofk.imgSrc} alt={Data.Kristofk.imgAlt} />
        </span>
        <a href={Data.Kristofk.links.one}>
          <p>Source</p>
        </a>
      </section>

      <section className="scroll-block" id="block-3">
        <h3>{content.p3Header}</h3>
        <p>{content.p3}</p>
        <span className="img-container">
          <img src={Data.Skunz.imgSrc} alt={Data.Skunz.imgAlt} />
        </span>
        <a href={Data.Skunz.links.one}>
          <p>Source</p>
        </a>
      </section>

      <section className="scroll-block" id="block-4">
        <h3>{content.p4Header}</h3>
        <p>{content.p4}</p>
        <span className="img-container">
          <img src={Data.Gcamerli.imgSrc} alt={Data.Gcamerli.imgAlt} />
        </span>
        <a href={Data.Gcamerli.links.one}>
          <p>Source</p>
        </a>
      </section>

      <section className="scroll-block" id="block-5">
        <h3>{content.p5Header}</h3>
        <p>{content.p5}</p>
        <span className="img-container">
          <img src={Data.MBrave.imgSrc} alt={Data.MBrave.imgAlt} />
        </span>
        <a href={Data.MBrave.links.one}>
          <p>Why I'm taking a chance on 42</p>
        </a>
        <a href={Data.MBrave.links.two}>
          <p>Piscine Dorms</p>
        </a>
        <a href={Data.MBrave.links.three}>
          <p>Full Piscine Experience</p>
        </a>
        <a href={Data.MBrave.links.four}>
          <p>Lessons Learned</p>
        </a>
        <a href={Data.MBrave.links.five}>
          <p>Cadet Life @ 42 Silicon Valley</p>
        </a>
      </section>

      <section className="scroll-block" id="block-6">
        <h3>{content.p6Header}</h3>
        <p>{content.p6}</p>
        <span className="img-container">
          <img src={Data.Jraleman.imgSrc} alt={Data.Jraleman.imgAlt} />
        </span>

        <a href={Data.Jraleman.links.one}>
          <p>42 Silicon Valley: The good, the bad and the ugly?</p>
        </a>
        <a href={Data.Jraleman.links.two}>
          <p>How I learned to stop worrying and love the code</p>
        </a>
        <a href={Data.Jraleman.links.three}>
          <p>Piscine repo</p>
        </a>
      </section>

      <section className="scroll-block" id="block-7">
        <h3>{content.p7Header}</h3>
        <p>{content.p7}</p>
        <span className="img-container">
          <img src={Data.VNguyen.imgSrc} alt={Data.VNguyen.imgAlt} />
        </span>
        <a href={Data.VNguyen.links.one}>
          <p>Applying</p>
        </a>
        <a href={Data.VNguyen.links.two}>
          <p>Dorm Application</p>
        </a>
        <a href={Data.VNguyen.links.three}>
          <p>Acceptance</p>
        </a>
        <a href={Data.VNguyen.links.four}>
          <p>Piscine to Cadet</p>
        </a>
      </section>

      <section className="scroll-block" id="block-8">
        <h3>{content.p8Header}</h3>
        <p>{content.p}</p>
        <span className="img-container">
          <img src={Data.Codinggirl.imgSrc} alt={Data.Codinggirl.imgAlt} />
        </span>
        <a href={Data.Codinggirl.links.one}>
          <p>Source</p>
        </a>
      </section>

      <section className="scroll-block" id="block-9">
        <h3>{content.p9Header}</h3>
        <p>{content.p9}</p>
        <span className="img-container">
          <img src={Data.Zedechariaz.imgSrc} alt={Data.Zedechariaz.imgAlt} />
        </span>
        <a href={Data.Zedechariaz.links.one}>
          <p>Source</p>
        </a>
      </section>

      <section className="scroll-block" id="block-10">
        <h3>{content.p10Header}</h3>
        <p>{content.p10}</p>
        <span className="img-container">
          <img src={Data.Ekaterina.imgSrc} alt={Data.Ekaterina.imgAlt} />
        </span>
        <a href={Data.Ekaterina.links.one}>
          <p>Source</p>
        </a>
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
        title: "Blogs & reviews",
        p1:
          "A good chunk of my research comes from these sources and others, but I've found these ones to be the most enlightening about 42. Some of them are quite detailed, others are more about what the authors felt as well as what was going on and what to expect during the Piscine.  If you have to look at any, I'd suggest Skunz's 5 minute video as well as Kristofk's survival guide. Most of all the others are more for if you want to know more about the in's and out's of 42 SV and 42 Paris though they aren't necessary.",
        p2Header: "Kristofk's 42 Survial guide",
        p2:
          "A guide on what was covered in his Piscine, as well as general information regarding the surrounding area, the inner workings of 42 and other details. Highly recommended reading.",
        p3Header: "Skunz's Piscine: What to expect",
        p3:
          "A straight to the point 5 minute video. The most important take away is that you must be prepared to wkr hard, extremely hard. Recommended.",
        p4Header: "Gcamerli's Piscine info",
        p4:
          "This was the first source I came across when I was just starting my research into 42SV. It helped me prepare for the Piscine as a good place to start but not all of the learning materials are up to date, in regards to accessibility. It's really good for quick tips and what to look out for for the Piscine. Highly recommended.",
        p5Header: "Michael Brave's: Piscine to Cadet",
        p5:
          "Mr. Brave wrote a lot about 42, one of the first source for actual Piscine experiences, in depth that I could find. He has a lot of opinions and goes through what he felt during each day in depth more than most other sources. It was a good insight on lots of things, like how many people actually just up and quit during the Piscine. Though, it's very verbose, I found it to be somewhat helpful.",
        p6Header: "Jraleman 42 SV blogs",
        p6:
          "A former student from 42 Silicon Valley, Mr. Jose briefly lists his reasons and experiences while at 42. He also has some helpful github links for the old Piscine repos.",
        p7Header: "Victoria Nguyen's: From aplying to Cadet",
        p7:
          "Ms. Nguyen's micro blogs with detailed information, straight to the point about her experiences about 42. She was even Bocal at one point.",
        p8Header: "Coding Girl's 42 experience",
        p8:
          "Ms. Anna's experiences at 42 Paris. Very detailed vlogs on not only her experiences but also highlighting how 42 Paris operates.",
        p9Header: "Zedechariaz's reddit AMA",
        p9:
          "An ask me anything thread on the /r/learnprogramming subreddit about 42 Paris. I found this to be a little helpful and insightful. Though one thing of note, unlike some of these other people, he has STEM degree, specifically Engineering.",
        p10Header: "Ekaterina's 42 Paris blogs",
        p10:
          "Ms. Ekaterina's blogs are short and to the point. They're a bit scattered and not as detailed as others, but still insightful in some things like exams.",
      },
      scroll: [
        { stop: "1", title: "Sources" },
        { stop: "2", title: "42 Silicon Valley survival guide" },
        { stop: "3", title: "What to expect from the Piscine" },
        { stop: "4", title: "Piscine bootcamp info" },
        { stop: "5", title: "Blogs: Piscine to Cadet" },
        { stop: "6", title: "Blogs: 42 SV expectations" },
        { stop: "7", title: "Blogs: Applying to Cadet" },
        { stop: "8", title: "Vlogs: 42 Paris Piscine experience" },
        { stop: "9", title: "42 Paris AMA" },
        { stop: "10", title: "Blogs: 42 Paris Piscine" },
      ],
    },
  };
}
