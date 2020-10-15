import emailjs from "emailjs-com";

export default function Contact({ content }) {
  const sendEmailToSelf = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID
      )
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
    <>
      <section className="scroll-block" id="block-1">
        <h1>{content.title}</h1>
        <p className="contact-p">
          {" "}
          Any questions? Concerns? Inquiries? Bugs on the website? Did I get information wrong?</p>

        <div id="contact-form">
          <h3> Send me an email </h3>
          <form className="contact-form" onSubmit={sendEmailToSelf}>
            <input type="hidden" name="contact_number" />


            {/*}<label>Name</label>{*/}
            <input
              type="text"
              name="Name"
              placeholder="Name (not required)"
              className="contact-box"
            />

            {/*}<label>Email</label>{*/}
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="contact-box"
              required
            />

            {/*}<label>Message</label>{*/}
            <textarea
              name="Message"
              placeholder="Your message..."
              className="contact-message"
              required
            />

            <input type="submit" value="Send" className='contact-submit'/>
          </form>
        </div>
      </section>

      <span className="buffy-the-buffer"></span>
    </>
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
