import Head from "next/head";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SelectCard from "../../components/SelectCard";
import Card from "../../components/Card";

export default function InfoIndex() {
  return (
    <>
      <Head>
        <title>42 Silicon Valley - Information & Sources</title>
        <meta
          name="description"
          content="Want to know more about 42 Silicon Valley? Compiled
          information regarding the Piscine, dorms, student life and how it 42
          SV compares to 42 Paris."
        />
        <link rel="canonical" href="https://42sv.info/Sources" />
      </Head>

      <section className="block">
        <h1>What's 42 Silicon Valley like?</h1>
        <p>
          When it comes to 42, especially 42 Silicon Valley, almost everything
          is shrouded in mystery. What kinds of students do they accept into
          their fulltime program? How are the dorms like? Is 42 Silicon Valley
          the same as 42 Paris or any of the other 42/21 schools?
        </p>
        <p>
          In this section, I've compiled all relevant information that I could
          find pertaining to everything about 42 Silicon Valley. All sourced
          directly from secondary sources, specifically all publicly available
          information as well as my findings from personally talking to current
          and past students. If you have any questions, feel free to contact me
          over{" "}
          <Link href="/Contact" passHref>
            here.
          </Link>
        </p>
      </section>

      <Card cardData={SelectCard("Sources", "Blogs_and_reviews")} />
      <span className="buffy-the-buffer"></span>
      <Card cardData={SelectCard("Sources", "Dorms")} />
      <span className="buffy-the-buffer"></span>
      <Card cardData={SelectCard("Sources", "Townhall_meetings")} />
      <span className="buffy-the-buffer"></span>
      <Card cardData={SelectCard("Sources", "Github_repos")} />
      <span className="buffy-the-buffer"></span>
      <Card cardData={SelectCard("Sources", "Campus_differences")} />
      <span className="buffy-the-buffer"></span>
      <Card cardData={SelectCard("Sources", "Criticisms")} />
      <span className="buffy-the-buffer"></span>
      <Card cardData={SelectCard("Sources", "Interviews")} />
      <span className="buffy-the-buffer"></span>
    </>
  );
}
