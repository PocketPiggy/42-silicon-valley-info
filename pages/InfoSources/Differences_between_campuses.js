import ScrollingSideBar from "../../components/ScrollingSideBar";

export default function DifferencesBetweenCampuses({ content, scroll }) {
  return (
    <>
      <section className="scroll-block" id="block-1">
        <h1>{content.title}</h1>
      </section>

      <section className="scroll-block" id="block-2">
        <h3>{content.p1Header}</h3>
        <p>{content.p1}</p>
      </section>

      <section className="scroll-block" id="block-3">
        <h3>{content.p2Header}</h3>
        <p>{content.p2}</p>
        <p>{content.p3}</p>
      </section>

      <section className="scroll-block" id="block-4">
        <h3>{content.p4Header}</h3>
        <p>{content.p4}</p>
        <h3>{content.p5Header}</h3>
        <p>{content.p5}</p>
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
        title: "Differences between Campuses",
        p1Header: "What is 42 exactly?",
        p1:
          "42 is a tuition free school that was created in 2013 in Paris, France. There are two 'official' campuses, the original 2013 one in Paris and 42 SV located in Fremont, California that opened up in 2016. Other than the two original ones, the other campuses such as Codam in the Netherlands, or 21 in Russia are liscensed and follow the same curriculum & pedagogy as the two main campuses.",
        p2Header: "Is 42 Paris the same as 42 Silicon Valley?",
        p2:
          "No. 42 Paris operates quite differently than 42 SV. For starters, it has way more applicants and active students compared to 42 SV. The competition is much more fierce they are at least somewhat known in Paris. They operate quite differently though, with the Bocal being more of a clique and well known for having trolling behavior during some events. 42 Paris, for their Piscine, also has these weird rules and events that are pretty eccentric, such as battleship game which kicks people out during exams.  There's also the rule that if a phone rings during an exam, they shut down everyone's computers in that row. 42 SV doesn't really have any of that shenanigans coming from the Bocal.",
        p3:
          "In fact, 42 SV was actually quite behind, with a revamp in the curriculum sometime in 2018/2019, all other liscensed schools and 42 Paris had upgraded to it. 42 SV was actually behind for 2 years before the decision to finally update was made in early 2020.",
        p4Header: "Living situation",
        p4:
          "42 Paris doesn't have dorms for either Pisciners or students. They require you to provide housing for yourself though in the past many Pisciners did sleep within the campus on the ground or in the labs. 42 SV has free dorms after a refundable security deposit of $42 for the Piscine and $84 for accepted students. There is also WiFi in the dorms but I've heard many problems about it being spotty or not working occassionally. Since both cities are somewhat expensive, 42 Silicon Valley makes it a bit easier for more frugal-type people to have an opportunity to learn. At both campuses, the labs are open 24 hours a day, 7 days a week. Though some restrictions might be in place currently due to Covid.",
        p5Header: "How many people actually finish the program?",
        p5:
          "At 42 Paris, there's been at least some amount of people who finish the program while at 42 Silicon Valley, only one known person has finished. As an important side note however, most people leave in around a year for jobs or other interests. Speaking pragmatically, there really isn't a use for a certificate that holds no weight compared to an actual STEM degree, let alone a CS/CE degree. It takes about 3-5 years to finish the curriculum on average but since it's self paced it can be done faster.",
      },
      scroll: [
        { stop: "1", title: "Campus differences" },
        { stop: "2", title: "What is 42 exactly?" },
        { stop: "3", title: "Are they the same?" },
        { stop: "4", title: "Living situation & finished program" },
      ],
    },
  };
}
