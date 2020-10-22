import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import Head from 'next/head';
import GoBack from '../components/GoBack';

export default function FourOhFour() {
  //    This will erase the 404 page url from history and replacing it
  //    with the index/root page. Navigating fowards to another page after
  //    the 404 page, then trying to navigate back will not bring you back
  //    to the 404 page.

  const router = useRouter();
  const goBack = () => {
    return router.replace("/");
  };
  return (
    <>
      <Head>
        <title>404 - Not found</title>
        <meta
    name="description"
    content="Oops...well this is awkward. This is not the page you're looking
          for. Back to 42 Silicon Valley home."
/>
<link rel="canonical" href="https://42sv.info/404"/>
      </Head>
      <section className="scroll-block" id="block-1">
        <h1> 404 - Not found </h1>
        <p className="contact-p">
          Oops...well this is awkward. This is not the page you're looking for.
        </p>
        <span className="img-container">
          <img
            src="/Images/Page/404/fourbi_oh_fournobi.gif"
            alt="Animation of Obiwan-Kenobi doing a jedi mind trick."
            title="Fourbi Oh Fournobi"
          />
        </span>
        <div className="back-btn" onClick={goBack}>
          <Button variant="danger" className="return-btn">
            Return home
          </Button>
        </div>
        <GoBack name={"Let's a gogo!"}/>
      </section>

      <span className="buffy-the-buffer"></span>
    </>
  );
}
