import ScrollingSideBar from "../../components/ScrollingSideBar";

export default function Dorms({ content, scroll }) {
  return (
    <>
      <section className="scroll-block" id="block-1">
        <h1>{content.title}</h1>
      </section>

      <section className="scroll-block" id="block-2">
        <p>{content.p1}</p>
        <p>{content.p2}</p>
      </section>

      <section className="scroll-block" id="block-3">
        <h3>{content.p3Header}</h3>
        <p>{content.p3}</p>
      </section>

      <section className="scroll-block" id="block-4">
        <h3>{content.p4Header}</h3>
        <p>{content.p4}</p>
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
        title: "Townhall meetings",
        p1:
          "Before Covid, 42SV used to have townhalls for all the students, especially the ones living in the dorms, where they could bring up questions and concerns and receive some answers.  The Bocal have compoiled some of those into notes hosted on github for the public. Since the current (at this time of writing) pandemic, they have resorted to virtual townhalls instead.  Reading and listening through these made it more clear about the day to day experiences of cadets, both positive and negative.",
        p2:
          "Unfortunately, the last town hall was June 12th, 2020 and there hasn't been another public one at least, since.",
        p3Header: "Github townhall notes",
        p3:
          "This has information going back from July 2019 up until January 2020. It's where I got a lot of information about some general things, like the 24 hour day in the Piscine and the guy who made it.",
        p4Header: "Virtual Town halls of 2020",
        p4:
          "These are the only two town halls that I could find, the one in April being unlisted took a lot of google searching for. The June 12th one, was the last public one that I could find. All my previous contacts at 42 no longer attend and have since moved back home or moved on from the school since the pandemic.",
      },
      scroll: [
        { stop: "1", title: "Townhall meetings" },
        { stop: "2", title: "What are townhall meetings?" },
        { stop: "3", title: "Github townhall notes" },
        { stop: "4", title: "Virtual town halls of 2020" },
      ],
    },
  };
}
