// `pages/_app.js`

import 'bootstrap/dist/css/bootstrap.css';
import { SSRProvider } from 'react-bootstrap';
import '../styles/global.css'; // This bish can ONLY be imported into this file
import { Comfortaa, Cinzel } from '@next/font/google';

const comfortaa = Comfortaa({ subsets: ['latin'], });
const cinzel = Cinzel({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {

    return (
        <SSRProvider>
                <style jsx global>{`
                    :root {
                    --comfortaa-font: ${comfortaa.style.fontFamily};
                    --cinzel-font: ${cinzel.style.fontFamily};
                    }
                `}</style>
                <main>
                    <Component {...pageProps} />
                </main>
        </SSRProvider>
    )
}

// this is a top level component which will be common accros all the different pages
// use this to keep state

// the Component prop is the active page
// pageProps is an object with the initial props that were preloaded for age by a data fetching method