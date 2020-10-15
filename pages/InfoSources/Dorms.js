import Data from "../../data/infosources/dorms.json";
import ScrollingSideBar from "../../components/ScrollingSideBar";

export default function Dorms({ content, scroll }) {
  return (
    <>
      <section className="scroll-block" id="block-1">
        <h1>{content.title}</h1>
        <span className="img-container">
          <img src={Data.Example.imgSrc} alt={Data.Example.imgAlt} />
        </span>
        <sub>Looks ok, especially for the price. </sub>
      </section>

      <section className="scroll-block" id="block-2">
        <p>{content.p1}</p>
        <p>{content.p2}</p>
      </section>
      <section className="scroll-block" id="block-3">
        <p>{content.p3}</p>
        <p>{content.p4}</p>
      </section>
      <p>
        For more information such as needing to bring your own bedsheets,{" "}
        <a href="https://dorms.42.us.org/faq">check out their FAQ.</a>
      </p>
      <p>
        For more information about the Catina,{" "}
        <a href="https://cantina.42.us.org/users/sign_in">
          here's a link to the Catina page.
        </a>
      </p>
      <p>{content.p5}</p>
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
        title: "Dorms",

        p1:
          "There isn't much information about the dorms sadly. There are very, very few videos about 42 SV's dorms. The only information I could find is that, there is a $42 deposit for the Piscine, which you will be given back assuming you do not cause damage to the dorms during your stay. You will receive the money back after the Piscine is over, regardless if you are accepted or not.",
        p2:
          "After the Piscine and as a Cadet, there is a $82 deposit, which again, will be refunded after you check out of the dorms. They have some rules like smoking and a zero tolerance policy for alcohol, since there could be people 18-20 in the dorms. Other than that, the dorms are basically free, other than the deposit. The requirement for dorms called CYD, or check your dorms has had an overhaul since April 2020. To stay in the dorms, you now are given points that translate into days.  You get points by turning in assignments and tests. From what I've seen from the town hall video, it's not as generous as the previous policy but assuming you do at least 20 hours a week, it should be doable to stay in the dorms without worry.",
        p3:
          "You are also given 3 opportunities to freeze your time, so you can leave the dorms and come back another time. All in all, I think these policy changes are for the best. Talking to previous students who were there before and during Covid, there were lots of people doing the bare minimum to stay in the dorms, who'd loaf around. Some were people who were there since near the beginning. These new policies will allow more fresh students as well as give a little more incentive to studying. How many people per room changes depending on how many current students are there.  I've heard sometimes there are 3 people or even 4 per room but other times, some people have a room all to themselves. Students can switch rooms apparently whenever they want.",
        p4:
          "There are some rules when it comes to what you're allowed to bring. From what I can gather, no animals, alcohol, hot plates, or anything that could be considered a fire hazard. Rice cookers and tea kettles, I couldn't get a straight answer. Some students said they weren't allowed, others said they were. It seems like anyone who had one, would hide them if faculty came into their rooms. Although, it seems like mini fridges are ok. There is a microwave somewhere near the labs and for food, you can always go to Cantina, though it's about $5 a meal on average.  There is a grocery store within walking distance, maybe 1-2 miles away. There is a gas station and some fast food place very close. Just a heads up, you aren't allowed to cook in the dorms and there is no kitchen available either.",
        p5:
          "Below are the only two decent quality videos I could find with clear visuals of the dorms at 42 SV. IMO, they seem to be okay for what they are: a place to sleep. Like a college dorm, don't expect anything fancy. The beds seem to be bunk, there's a bathroom and there's usually a single desk in every room. A quick reminder that the 42 SV campus was bought from DeVry university around the time when they were having monetary problems.",
      },
      scroll: [
        { stop: "1", title: "Dorms" },
        { stop: "2", title: "What's up with the dorms?" },
        { stop: "3", title: "Rules"},
      ],
    },
  };
}
