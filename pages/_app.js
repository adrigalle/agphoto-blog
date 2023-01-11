// `pages/_app.js`
import '../styles/global.css'; // This bish can ONLY be imported into this file

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

// this is a top level component which will be common accros all the different pages
// use this to keep state