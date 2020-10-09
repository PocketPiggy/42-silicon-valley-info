import React from 'react';
import { useRouter } from 'next/router'

export default function FourOhFour({content}) {
  //    This will erase the 404 page url from history and replacing it
  //    with the index/root page. Navigating fowards to another page after
  //    the 404 page, then trying to navigate back will not bring you back
  //    to the 404 page.

  const router = useRouter();
  const goBack = () => {
    return router.replace("/")
  }
  return(
    <div>
      <h1>{content.title}</h1>
      <p>{content.p1}</p>
      <img
        src='/images/404/fourbi_oh_fournobi.gif'
        alt='Animation of Obiwan-Kenobi doing a jedi mind trick.'
        title='Fourbi Oh Fournobi'
      />
      <div onClick={goBack}>
        <span>Go back whence you came from!</span>
      </div>
    </div>
  );
}

export async function getStaticProps(content) {
  return {
    props: {
      content: {
        title: "404",
        p1: "Oops...well this is awkward. This is not the page you're looking for.",
      }
    }
  }
}
