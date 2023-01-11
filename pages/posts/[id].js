// the [id] makes this a dynamic route so new page for every id from the markdowns
// posts will be called /pops/<id>
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date'; // imports the date component created to make dates pretty
import utilStyles from '../../styles/utils.module.css';



export async function getStaticPaths() {
    const paths = getAllPostIds(); // this contains the array returned by getAllPostIds()
    return {
      paths,
      fallback: false,
    };
  }

export async function getStaticProps({ params }) { // fetch data for each post
    // const postData = getPostData(params.id); // since now using remark, need to add await
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
} // the post page is now using the getPost Data dunction in getStaticProps to get the post data and return it as props.
// params contains id

export default function Post({ postData }) {
    return (
      <Layout>

        <Head>
          <title>{postData.title}</title>
        </Head>

        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>

      </Layout>
    );
}