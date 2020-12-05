import Head from "next/head";
import GoBack from '../../components/GoBack'

export default function DifferencesBetweenCampuses() {
  return (
    <>
      <Head>
        <title>42 Silicon Valley - Campus differences</title>
        <meta
          name="description"
          content="Highlighting the differences between the campuses of 42 Silicon
          Valley as well as 42 Paris."
        />
        <link
          rel="canonical"
          href="https://42sv.info/Sources/Differences_between_campuses"
        />
      </Head>
      <section className="block" id="block-1">
        <h1>Differences Between campuses</h1>

        <h3>What is 42 exactly?</h3>
        <p>
          42 is a tuition-free school that was created in 2013 in Paris, France.
          There are two 'official' campuses, the original 2013 one in Paris and
          42 Silicon Valley located in Fremont, California that opened up in
          2016. 42 has its roots in a French for proit EPITA/Epitech curriculum
          and way of doing things, starting with C and re-inventing the wheel.
          Other than the two original ones, the other campuses such as Codam in
          the Netherlands, or 21 in Russia that follow the same curriculum &
          pedagogy as the two main campuses.
        </p>
      </section>

      <section className="block" id="block-2">
        <h3>Is 42 Paris the same as 42 Silicon Valley?</h3>
        <p>
          No. 42 Paris operates quite differently than 42 Silicon Valley. For
          starters, 42 Paris has way more applicants and active students
          compared to 42 Silicon Valley. The competition is so much more fierce
          they are at least somewhat known in Paris and have a decent
          reputation.
        </p>
        <p>
          They operate quite differently though, with the Bocal being more of a
          clique and well known for having trolling behavior during some events.
          42 Paris, for their Piscine, also has these weird rules and events
          that are pretty eccentric, such as the battleship game which kicks
          people out during exams. There's also the rule that if a phone rings
          during an exam, they shut down everyone's computers in that row. 42
          Silicon Valley doesn't really have any of those shenanigans coming
          from the Bocal or in general.
        </p>
        <p>
          In fact, 42 Silicon Valley was actually quite behind, with a revamp in
          the curriculum sometime in 2018/2019, all other schools and 42 Paris
          had already upgraded to it. 42 Silicon Valley was actually behind for
          a year or two before the decision to finally update was made in early
          2020.
        </p>
      </section>

      <section className="block" id="block-3">
        <h3>Living situation</h3>
        <p>
          42 Paris doesn't have dorms for either Pisciners or students. They
          require you to provide housing for yourself though in the past many
          Pisciners did sleep within the campus on the ground or in the labs. 42
          Silicon Valley has free dorms after a refundable security deposit of
          $42 for the Piscine and $84 for accepted students. There is also WiFi
          in the dorms but I've heard many problems with it being spotty or not
          working on occasion.
        </p>
        <p>
          Since both cities are somewhat expensive, 42 Silicon Valley makes it a
          bit easier for more frugal-type people to have an opportunity to
          learn. At both campuses, the labs are open 24 hours a day, 7 days a
          week. Though some restrictions might be in place currently due to
          Covid.
        </p>
      </section>

      <section className="block" id="block-4">
        <h3>How many people actually finish the program?</h3>
        <p>
          At 42 Paris, there's been at least some amount of people who finish
          the program while at 42 Silicon Valley, only one known person has
          finished. As an important side note, however, most people leave in
          around a year for jobs or other interests. Speaking pragmatically,
          there really isn't a use for a certificate that holds no weight
          compared to an actual STEM degree, let alone a CS/CE degree. It takes
          about 3-5 years to finish the curriculum on average but since it's
          self-paced it can be done faster.
        </p>
      </section>

      <section className="block">
        <GoBack name={'Sources'}/>
      </section>


      <span className="buffy-the-buffer"></span>
    </>
  );
}
