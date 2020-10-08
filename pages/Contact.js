import React from "react";
import emailjs from "emailjs-com";

export default function Contact({ content }) {
  const sendEmailToSelf = (e) => {
    e.preventDefault();

    emailjs .sendForm( process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, e.target, process.env.NEXT_PUBLIC_USER_ID)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <h1>{content.title}</h1>
      <p>
        {" "}
        Any questions? Concerns? Inquiries? Bugs on the website? Send me an
        email.
      </p>
      <br />
      <br />
      <br />

      <div id="contact-form">

        <form className="contact-form" onSubmit={sendEmailToSelf}>

          <input type="hidden" name="contact_number" />

          <label>Name</label>
          <input type="text" name="Name" />

          <label>Email</label>
          <input type="email" name="Email" />

          <label>Message</label>
          <textarea name="Message" />

          <input type="submit" value="Send" />

        </form>

      </div>
    </div>
  );
}

export async function getStaticProps(content) {
    return {
    props: {
      content: {
        title: "Contact",
        p1: "This is the   page.",
      },
    },
  };
}
