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
        <link rel="canonical" href="https://42sv.info/updates" />
      </Head>
      <section className="scroll-block">
        <h1>Updates</h1>
        <h3>Current Status: {content.status}</h3>
        <p className="updates-p">
          42 Silicon Valley is now permanently closed. Check out the latest
          blog post for more information.
        </p>
      </section>

      <section className="scroll-block">
        <ul className='blog-list-container'>
          {allPostsData.map(({ id, date, title, excerpt, coverImage, ogImage, imgAlt }) => (
            <li key={id} className="blog-item">
              <Link href={`/updates/posts/${id}`} passHref>
                <a href={`/updates/posts/${id}`}>
                  <div className='blog-item-container float'>
                    <span className='mini-img-container blog-item-img'>
                      <img
                        src={coverImage} alt={imgAlt}
                      />
                    </span>
                    <span className='blog-item-title'>
                      <h4>{title}</h4>
                    </span>
                    <span className="blog-item-date">
                        <Date dateString={date} />
                    </span>
                    <span className='blog-item-excerpt'>
                      <p className="blog-item-p">{excerpt}</p>
                    </span>
                  </div>
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

export async function getStaticProps(context) {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
      content: {
        status: "PERMANENTLY CLOSED - FOREVER",
      },
    },
  };
}
