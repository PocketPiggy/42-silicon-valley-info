import React from "react";
import Link from "next/link";
import Date from "../../components/Date";
import { getSortedPostsData } from "../../lib/posts";

export default function Updates({ content, allPostsData }) {
  return (
    <>
      <section className="scroll-block">
        <h1> {content.title} </h1>
        <h3>Current Status: {content.status}</h3>
        <p className='updates-p'>I'll keep this part up to date with any new information I find
        regarding 42 Silicon Valley. Below are previous updates.</p>
      </section>

      <section className="scroll-block">
        <ul>
          {allPostsData.map(({ id, date, title,  }) => (
            <li key={id} className="blog-item">
              <Link href={`/Updates/posts/${id}`} passHref>
                <a href={`/Updates/posts/${id}`}>
                <span>
                <p className="blog-item-p">{title}</p>
                  <span className='blog-item-date'>
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

export async function getStaticProps(context) {
  const allPostsData = getSortedPostsData();
  console.log(allPostsData);
  return {
    props: {
      allPostsData,
      content: {
        title: "Updates",
        status: "CLOSED - UNTIL FURTHER NOTICE"
      },
    },
  };
}
