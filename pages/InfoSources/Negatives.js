import React from "react";

export default function Negatives({ content }) {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.p1}</p>
      <p>{content.p2}</p>
      <p>{content.p3}</p>
      <h3>{content.p4Header}</h3>
      <p>{content.p4}</p>
      <h3>{content.p5Header}</h3>
      <p>{content.p5}</p>
      <p>{content.p6}</p>
      <p>{content.p7}</p>
      <h3>{content.p8Header}</h3>
      <p>{content.p8}</p>
      <p>{content.p9}</p>
      <p>{content.p10}</p>
      <h3>{content.p11Header}</h3>
      <p>{content.p11}</p>
      <p>{content.p12}</p>
      <p>{content.p13}</p>
      <h3>{content.p14Header}</h3>
      <p>{content.p14}</p>
    </div>
  );
}

export async function getStaticProps(content) {
  console.log(content);
  return {
    props: {
      content: {
        title: "Negatives",
        p1: "There are some negatives about 42 but they seem to mostly come from 42 Paris in the way they operate. From what I've seen, read and the people I've talked to, not all of it is exaggeration either. The Bocal and events are really...eccentric sometimes to say the least. Though I should remind anyone reading this, that most of these negatives qualities and negative reviews from people are coming from 42 Paris students. Each 42 campus is different and they're built up of different people. 42 SV so far, has nothing like that to the extent of 42 Paris. Most of the things that people fault 42 SV for, is the system which is derived from Epitech, or the coding standards, or making people start with C, not the campus itself for the most part.",
        p2: "I've read some negative reviews about 42 SV but a lot of them seem to be from people who were kicked out for behavior issues, so while I don't necesarially discount them, I took them with a grain of salt. I didn't factor them as highly specifically due to most of those people being removed due to trashing the dorms, behavior or just deciding not to do any work and stay in the dorms for free.",
        p3: "The only somewhat credible post I could find dicussing any 42 place, was about 42 Paris. Again, most of the things that happen at 42 Paris do not happen at other campuses, like the crazy events of battleship and the mean bocal. If you had to accept any criticism that could apply to 42SV, it would be the system itself and how they teach as well as what they teach.",
        p4Header: "42 Paris reddit thread",
        p4: "Here's a reddit thread discussing 42 Paris, I found it to be somewhat informative for the applicable things for 42 SV. A wayback link is also attached to read previously deleted/edited comments.",
        p5Header: "Problems with the System",
        p5: "To talk specifically about the negatives about the system, 42 relies on students self teaching and teaching each other. The curriculums are kind of outdated and aren't the best for the types of jobs students could even apply to after leaving 42. Not many jobs will hire someone without a CS/CE/EE degree using C, like embedded work. The Norm is really bad when combining all of the rules. In isolation, most rules are actually good but when forced together, it makes some seriously bad coding practices & habits.",
        p6: "There are also things like, not being able to use switch statements, for loops, do while loops, goto, variable length arrays and ternary operators.  I personally think this is a bad idea but these concepts aren't hard to pick up regardless. There's also the fact that a good chunk of time is spent recreating the wheel and allegedly the other Piscines for different languages you can take as a student, are really bad and outdated. So bad that, while I don't know if this is still true, the web development Piscine was focusing only on PHP...in 2018/18 last I heard.",
        p7: "Nothing against PHP but not even going into Javascript kinda brings up red flags for me.  Some of the other language Piscines are written by students as well so YMMV with those.  Personally, I think the C Piscine and most of the recreating the wheel stuff is more than enough to learn the basics of programming fundamentals. Once you have that, you can self teach or use other resources rather than relying on student made Piscines.",
        p8Header: "Not a real 'School'",
        p8: "There is also the fact that since it's not a proper school, they can't help with Visas.  This goes for pretty much any 42/21 campus in any country. If you're a foreigner, and you want to come to 42SV, you need to find a way to stay. Apparently many students took classes at a community college for cheap to stay on a student visa, but I have no actual knowledge about this. If you are one of those people, consider asking 42SV directly for more information.",
        p9: "There is also no degree or really, any certification worth anything. Most of what you get is experience, which you could get from self teaching but not everyone has the willpower and ability to self teach.",
        p10: "An important note is that, many students don't stay at 42 for long. At 42 SV, people tend to fall in two camps: Those who stay for 3-12 months then leave for full time jobs, and those that stay for longer then eventually leave without finishing the program.  This leads to the exceptional people going through 42 like a revolving door, not staying long enough to really help people as well as losing all those experienced people in general.",
        p11Header: "Funding?",
        p11: "For funding, 42 SV is seeded and funded for the first 10 years since it's founding. It was established in 2016 and as of writing this, it's 2020. So it's almost halfway through its alloted money. I've heard from past students that the security guards that work there since the beginning, say that it's funded. The person who funded it, Xavier Niel hasn't really said much about 42 SV that I can find after opening. It's definitely not as successful as 42 Paris or even the other 42/21 places around the world.  I should add that Mr. Niel did say that he wanted continued funding to be done by previous students donating back to the school. I haven't actually found many cases of this happening...so time will tell.",
        p12: "I should also mention that one of the founders, Kwame Yamnane might be a bit of a fishy character. This is just speculation but from what I've gathered, he's created another school, though this one costs money. It's called QwasarSV and seems to follow the same Epitech/42 curriculum. The only reason I bring this up is because he seems to hop around a lot and their website makes a lot of promises, specifcally getting a job at a FAANG without a CS degree, which sets off some red flags for me personally.",
        p13: "There are also rumors that previous Bocal when 42 first started, had embezzled money and since then, funding is allgedly more strict from 42 Paris. A recent hiring of a new Executive Director with a background in non-profit organizations and community out reach. He's been there for a year and some things have changed, like updating the curriculum finally after 2 years of being behind the other campuses, but time will tell if he can make 42 SV as successful as 42 Paris.",
        p14Header: "TL;DR",
        p14: "As an end note, 42 SV has it's faults and it's not perfect. If you feel uneasy about 42 but still want to learn how to program, consider starting with Web Development with The Odin Project.",
      },
    },
  };
}
