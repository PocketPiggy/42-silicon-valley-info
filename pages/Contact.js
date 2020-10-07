import React from "react";
import emailjs from "emailjs-com";

export default function Contact({ content }) {
  const sendEmailToSelf = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_BM69uuKG', e.target, process.env.USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

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

      <div id='contact-form'>
        <form className="contact-form" onSubmit={sendEmailToSelf}>
          <input type="hidden" name="contact_number" />
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>

    </div>
  );
}

export async function getStaticProps(content) {
  //console.log('ENV_VARIABLE: ', process.env.USER_ID)
  return {
    props: {
      content: {
        title: "Contact",
        p1: "This is the   page.",
      },
    },
  };
}
