import Head from "next/head";
import GoBack from '../../components/GoBack'

export default function Interviews() {
  return (
    <>
      <Head>
        <title>42 Silicon Valley - Interviews</title>
        <meta
          name="description"
          content="Three interviews about 42 Silicon valley, how it operates, and what
          42's goal is about. All given by then COO Brittany Bir."
        />
        <link rel="canonical" href="https://42sv.info/Sources/Interviews" />
      </Head>
      <h1>42 Silicon Valley Interviews</h1>
      <p>
        There are not many interviews in regards to 42 Silicon Valley that are
        worth watching. Most are very short and don't have many views. The ones
        that I think have at least a little value are linked below. They're not
        necessary to watch or listen to and they don't really give any insight
        or new information that I haven't already found from other primary &
        secondary resources. All three of these interviews were given by then
        COO Brittany Bir.
      </p>

      <section className='scroll-block'>
      <span className="yt-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/ZFZ2R1Xa0vs"
          frameBorder="1"
          className='yt-iframe'
          allowFullScreen
        ></iframe>
      </span>

      <span className="yt-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/x5WaYn4s7yA"
          frameBorder="1"
          className='yt-iframe'
          allowFullScreen
        ></iframe>
      </span>

      <span className="yt-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/RQwGU_AQsY4"
          frameBorder="1"
          className='yt-iframe'
          allowFullScreen
        ></iframe>
      </span>
      </section>

      <section className="block">
        <GoBack name={'Sources'}/>
      </section>
      <span className="buffy-the-buffer" />
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
