import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import utilStyles from '../styles/utils.module.css';
import Header from './header';
import NavBar from './navbar';
import Footer from './footer';
import Top from './top';
import styles from './layout.module.css';
import { Comfortaa } from '@next/font/google';

const comfortaa = Comfortaa({ subsets: ['latin'] });
 
const name = 'Adriana Gallegos';
export const siteTitle = 'AG Photography etc';

export default function Layout({ children, home }) {
  return (
    <div className={`${styles.container} ${comfortaa.className}`}>

      <Head>
        <link rel="icon" href="images/logos/Flr-color.png" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>




      <Header />
      <NavBar />
      <Top />

      <main className={`${utilStyles.container} ${comfortaa.className}`}>{children}</main>

      <Footer />





    </div>
  );
}