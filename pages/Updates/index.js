import React from "react";
import Link from "next/link";

export default function Updates({ content }) {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.p1}</p>
      <ul>
        {/*}
          <Link href="./" passHref>
            <li></li>
          </Link>
        {*/}
        <Link href="/Updates/Aug-5-2020" passHref>
          <li>August 5th, 2020</li>
        </Link>
        <Link href="/Updates/Apr-14-2020" passHref>
          <li>April 14th, 2020</li>
        </Link>
        <Link href="/Updates/Mar-11-2020" passHref>
          <li>March 11th, 2020</li>
        </Link>
        <Link href="/Updates/Feb-27-2020" passHref>
          <li>February 27th, 2020</li>
        </Link>
      </ul>
    </div>
  );
}

export async function getStaticProps(content) {
  console.log(content);
  return {
    props: {
      content: {
        title: "Updates",
      },
    },
  };
}
