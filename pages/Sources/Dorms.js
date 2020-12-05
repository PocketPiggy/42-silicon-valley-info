import Head from "next/head";
import GoBack from '../../components/GoBack'

export default function Dorms() {
  return (
    <>
      <Head>
        <title>42 Silicon Valley - Dorms information</title>
        <meta
          name="description"
          content="All known public information about the dorms in 42 Silicon
          Valley, which includes the rules, deposit fees and more."
        />
        <link rel="canonical" href="https://42sv.info/InfoSources/Dorms" />
      </Head>
      <section className="scroll-block" id="block-1">
        <h1>Dorms</h1>
        <span className="img-container">
          <img
            src="/Images/Page/Infosources/dorm/dorm_ex.jpeg"
            alt="Desk with a chair, sunny window, air conditioner and two beds."
          />
        </span>
        <p className="img-subtext">
          Looks ok, especially for the price (free).{" "}
        </p>
      </section>

      <section className="scroll-block" id="block-2">
        <h3> What's up with the dorms? </h3>
        <p>
          There isn't much information about the dorms sadly. There are very,
          very few videos about 42 SV's dorms. The only information I could find
          is there is a $42 deposit for the Piscine, which you will be given
          back assuming you do not cause damage to the dorms during your stay.
          You will receive the deposit back after the Piscine is over,
          regardless if you are accepted or not.
        </p>
        <p>
          As a Cadet, the deposit is $82 which again, will be refunded after you
          check out of the dorms. They have some rules like smoking and a
          zero-tolerance policy for alcohol since there could be people 18-20 in
          the dorms. Other than that, the dorms are basically free, other than
          the deposit.
        </p>
        <p>
          The requirement for dorms called CYD, or Check Your Dorms has had an
          overhaul since April 2020. To stay in the dorms, you now are given
          points that translate into days. You get points by turning in
          assignments and tests. From what I've seen from the town hall video,
          it's not as generous as the previous policy but assuming you do at
          least 20 hours a week, it should be doable to stay in the dorms
          without worry.
        </p>
        <p>
          You are also given 3 opportunities to freeze your time, so you can
          leave the dorms and come back another time. All in all, I think these
          policy changes are for the best. Talking to previous students who were
          there before and during Covid, there were lots of people doing the
          bare minimum to stay in the dorms, who'd loaf around. Some were people
          who were there since near the beginning. These new policies will allow
          more fresh students as well as give a little more incentive to
          studying.
        </p>

        <span className="img-container">
          <img
            src="/Images/Page/Infosources/dorm/42_dorm_entrance.jpeg"
            alt="Dorms entrance with grass in front with a banner displaying
          'Nostromo' at the top of the building."
          />
        </span>
        <p className="img-subtext">Dorm building entrance.</p>
      </section>

      <section className="scroll-block" id="block-3">
        <h3>Dorm rules</h3>

        <p>
          There is a microwave somewhere near the labs and for food, you can
          always go to Cantina, though it's about $5 a meal on average. Just a
          heads up, you aren't allowed to "cook" in the dorms or outside on
          campus and there isn't a kitchen available either. There is a grocery
          store within walking distance a couple of miles away. There is a gas
          station nearby as well as some fast food places very close.
        </p>
        <p>
          How many people per room changes depending on how many current
          students are there. I've heard sometimes there are 3 people or even 4
          per room but other times, some people have a room all to themselves.
          Students can switch rooms apparently whenever they want.
        </p>
        <p className="p-lefty">
          For more information such as needing to bring your own bedsheets,{" "}
          <a
            href="https://dorms.42.us.org/faq"
            target="blank"
            rel="noopener noreferrer"
          >
            check out their FAQ.
          </a>
        </p>
        <p className="p-lefty">
          For more information about the Catina,{" "}
          <a
            href="https://cantina.42.us.org/users/sign_in"
            target="blank"
            rel="noopener noreferrer"
          >
            here's a link to the Catina page.
          </a>
        </p>
      </section>

      <section className="scroll-block" id="block-4">
        <h3>Dorm reviews</h3>
        <p>
          Below are the only two decent quality videos I could find with clear
          visuals of the dorms at 42 Silicon Valley. IMO, they seem to be okay
          for what they are: a place to sleep. Like a college dorm, don't expect
          anything fancy. The beds seem to be bunk, there's a bathroom and there's
          usually a single desk in every room. A quick reminder that the 42
          Silicon Valley campus was bought from DeVry University, around the
          time when DeVry was having monetary problems.
        </p>

        <span className="yt-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/FZKCEfh6aY8"
            frameBorder="1"
            className='yt-iframe'
            allowFullScreen
          ></iframe>
        </span>
        <span className="yt-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/9L-IgxWu9GU"
            frameBorder="1"
            className='yt-iframe'
            allowFullScreen
          ></iframe>
        </span>
      </section>
      <GoBack name={'Sources'}/>

      <span className="buffy-the-buffer"></span>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      scroll: [
        { stop: "1", title: "Dorms" },
        { stop: "2", title: "What's up with the dorms?" },
        { stop: "3", title: "Dorm rules" },
        { stop: "4", title: "Dorm reviews" },
      ],
    },
  };
}
