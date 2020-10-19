import Link from "next/link";
import Head from "next/head";
import Date from "../../components/Date";
import { getSortedPostsData } from "../../lib/posts";

export default function Updates({ content, allPostsData }) {
  return (
    <>
      <Head>
        <title>42 Silicon Valley - Updates</title>
        <meta
          name="description"
          content="Keep up to date when 42 Silicon Valley puts out any new
          information in regards to opening, closing, or a big curriculum
          change."
        />
        <link rel="canonical" href="https://42sv.info/Updates" />
      </Head>
      <section className="scroll-block">
        <h1>Updates</h1>
        <h3>Current Status: {content.status}</h3>
        <p className="updates-p">
          I'll keep this part up to date with any new information I find
          regarding 42 Silicon Valley. Below are previous updates.
        </p>
      </section>

      <section className="scroll-block">
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="blog-item">
              <Link href={`/Updates/posts/${id}`} passHref>
                <a href={`/Updates/posts/${id}`}>
                  <span>
                    <p className="blog-item-p">{title}</p>
                    <span className="blog-item-date">
                      <Date dateString={date} />
                    </span>
                  </span>
                </a>
              </Link>
              <br />
              <br />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      content: {
        status: "CLOSED - UNTIL FURTHER NOTICE",
      },
    },
  };
}
