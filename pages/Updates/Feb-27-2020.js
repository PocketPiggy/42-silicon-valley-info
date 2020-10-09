import React from "react";

export default function Feb272020 ({ content }) {
  return (
    <div>
        <h1>{content.title}</h1>
        <p>{content.date}</p>
        <p>{content.p1}</p>
        <span>
          {content.p2}
          <br />
          {content.p3}
          <br />
          {content.p4}
          <br />
          {content.p5}
          <br />
        </span>

        <div>
          Here's the images:
          <img src='/images/updates/February/Cancelled_email.png' />
          <img src='/images/updates/February/Refund.png' />
        </div>
        <p>{content.p6}</p>
  </div>
  );
};

export async function getStaticProps(content) {
  console.log(content);
  return {
    props: {
      content: {
        title: "New Curriculum - Piscine cancelled",
        date: "February 27th, 2020",
        p1: "After getting accepted into the Piscine and paying the security deposit, 4 weeks later I was sent a refund on my deposit and an email saying that my Piscine was cancelled. Here's the email: ",
        p2: "Dear Pisciners",
        p3: "This is to inform you that as we are preparing to roll out the new 42 curricula, as well as make necessary upgrades to our technical infrastructure, we have decided to cancel the upcoming April 6, 2020 piscine to allow us to make these upgrades and changes to better serve all of our student population.",
        p4: "Similarly, during this transition period, we will be suspending the application/admission process until we finalize the roll out of our new curricula and complete our technical infrastructure improvements. We strongly encourage all student applicants to consider applying to another 42 campus, or another coding school. We will continue to be committed to the success of our current student population at 42 Silicon Valley, ensuring they have the most success possible, and maximize the use of all resources available to them. The success of our students will always be our top priority.",
        p5: "If you have any questions, or need any specific assistance, especially if you have already purchased airline tickets to attend the piscine please reach out to us at contact@42.us.org.",
        p6: "Which is interesting and makes sense, since months before I was talking to someone in the Netherlands who was at CODAM doing their own Piscine. Apparently their Piscine was one of the last using the old curriculum as well and they're updating too. It's unfortunate and bad timing.",
      },
    },
  };
}
