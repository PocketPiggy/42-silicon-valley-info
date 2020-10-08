import React from "react";
import emailjs from "emailjs-com";

export default function Contact({ content }) {
  console.log("\n BROWSER \n");
  console.log("service_id: ", `${process.env.SERVICE_ID}`);
  console.log("tempalte_id: ", `${process.env.TEMPLATE_ID}`);
  console.log("user_id: ", `${process.env.USER_ID}`);

  console.log("\n BROWSER - PUBLIC \n");
  console.log("service_id: ", `${process.env.NEXT_PUBLIC_SERVICE_ID}`);
  console.log("tempalte_id: ", `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`);
  console.log("user_id: ", `${process.env.NEXT_PUBLIC_USER_ID}`);

  console.log("typeof: ", typeof process.env.NEXT_PUBLIC_USER_ID);

  const sendEmailToSelf = (e) => {
    e.preventDefault();

    //emailjs.sendForm(`${process.env.SERVICE_ID}`, `${process.env.TEMPLATE_ID}`, e.target, `${process.env.USER_ID}`)
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
  //console.log('ENV_VARIABLE: ', process.env.USER_ID)
  console.log("\n SERVER \n");
  console.log("service_id: ", `${process.env.SERVICE_ID}`);
  console.log("tempalte_id: ", `${process.env.TEMPLATE_ID}`);
  console.log("user_id: ", `${process.env.USER_ID}`);
  return {
    props: {
      content: {
        title: "Contact",
        p1: "This is the   page.",
      },
    },
  };
}
