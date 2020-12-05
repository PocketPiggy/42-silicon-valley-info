import Head from "next/head";
import Link from 'next/link';
import GoBack from '../../components/GoBack'

export default function GithubRepos(){
  return (
    <>
      <Head>
        <title></title>
        <meta
          name='description'
          content=''
        />
        <link rel='canonical' href='' />
      </Head>

      <section className='block'>
        <h1>Criticisms</h1>
      </section>

      <section className="block">
        <GoBack name={'Sources'}/>
      </section>


      <span className="buffy-the-buffer"></span>
    </>
  );
}
