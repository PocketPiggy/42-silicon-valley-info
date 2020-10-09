import React from "react";

export default function BlogsAndReviews({ content }) {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.p1Header}</p>
      <p>{content.p1}</p>
      <p>{content.p2Header}</p>
      <p>{content.p2}</p>
      <p>{content.p3Header}</p>
      <p>{content.p3}</p>
      <p>{content.p4Header}</p>
      <p>{content.p4}</p>
      <p>{content.p5Header}</p>
      <p>{content.p5}</p>
      <p>{content.p6Header}</p>
      <p>{content.p6}</p>
      <p>{content.p7Header}</p>
      <p>{content.p7}</p>
      <p>{content.p8Header}</p>
      <p>{content.p}</p>
      <p>{content.p9Header}</p>
      <p>{content.p9}</p>
    </div>
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
        p6Header: "Victoria Nguyen's: From aplying to Cadet",
        p6:
          "Ms. Nguyen's micro blogs with detailed information, straight to the point about her experiences about 42. She was even Bocal at one point.",
        p7Header: "Coding Girl's 42 experience",
        p7:
          "Ms. Anna's experiences at 42 Paris. Very detailed vlogs on not only her experiences but also highlighting how 42 Paris operates.",
        p8Header: "Zedechariaz's reddit AMA",
        p8:
          "An ask me anything thread on the /r/learnprogramming subreddit about 42 Paris. I found this to be a little helpful and insightful. Though one thing of note, unlike some of these other people, he has STEM degree, specifically Engineering.",
        p9Header: "Ekaterina's 42 Paris blogs",
        p9:
          "Ms. Ekaterina's blogs are short and to the point. They're a bit scattered and not as detailed as others, but still insightful in some things like exams.",
      },
    },
  };
}
