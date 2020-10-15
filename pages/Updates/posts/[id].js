import {getAllPostsIds, getPostData} from '../../../lib/posts';
import Date from '../../../components/Date';
import Head from 'next/head';


export default function Post({ postData }) {
  return (
    <>
      <Head>
      {postData.title}
      </Head>
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
  );
}

export async function getStaticPaths(){
  const paths = getAllPostsIds();
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}){
  const postData = await getPostData(params.id);
  return {
    props: {
      postData
    }
  }
}
