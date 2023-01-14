import Head from 'next/head'; // this is a react component built into Next.js, allows <head> modifyment
import styles from '../styles/Home.module.css';
import Link from 'next/link'; // this allows for changing pages without a full refresh and using /posts/etc without doing https://...
import Image from 'next/image'; // extension of the html <img> tag that resizes, optimizes, and lazy loads images
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// home page has a home attribute for component
import { getSortedPostsData } from '../lib/posts'; // gets the posts sorted by data from the lib folder
import Date from '../components/date';


export async function getStaticProps() { // this is only for static props that are only needed at build time
  const allPostsData = getSortedPostsData(); // this specifies that its from within
  return {
    props: {
      allPostsData,
    },
  };
} // this returns allPostsData in side the prop

// the { allPostsData } prop allows Hom eto acces the blog posts
export default function Home({ allPostsData }) {
  return (
    <Layout all-posts>

      <Head>
        <title>{siteTitle}</title>
      </Head>


      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>


    </Layout>
  )
}




// getStaticProps tells next.js that there are some data dependencies from elsewhere that need to be retrieved at build time