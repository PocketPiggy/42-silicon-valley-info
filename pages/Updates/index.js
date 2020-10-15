import React from "react";
import Link from "next/link";
import Date from "../../components/Date";
import { getSortedPostsData } from "../../lib/posts";

export default function Updates({ content, allPostsData }) {
  return (
    <>
      <section className="scroll-block">
        <h1> {content.title} </h1>
      </section>

      <section className="scroll-block">
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id} className="blog-item">
              <Link href={`/Updates/posts/${id}`}>
                <p className="blog-item-p">{title}</p>
              </Link>
              <Date dateString={date} />
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
      },
    },
  };
}
