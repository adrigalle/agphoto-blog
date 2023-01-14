import Head from 'next/head'; // this is a react component built into Next.js, allows <head> modifyment
import styles from '../styles/Home.module.css';
import Link from 'next/link'; // this allows for changing pages without a full refresh and using /posts/etc without doing https://...
import Image from 'next/image'; // extension of the html <img> tag that resizes, optimizes, and lazy loads images
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Gallery() {
    return (
        <Layout services>

            <Head>
                <title>{siteTitle}</title>
            </Head>

            <br/>
            <h2>Here is my gallery</h2>
            <h3>here are just a few pictures that show my style of photography</h3>

            <section>
                <Container fluid>

                    <Row style={{ gap: 0 }}>

                        <Col style={{ padding: 0 }}>
                            <img src="/images/children/DSC00800.jpg"/>
                            <img src="/images/children/03-20 Viri Unicorn-020-12.jpg"/>
                            <img src="/images/children/DSC03007.jpg"/>
                            <img src="/images/children/DSC03693.jpg"/>
                            <img src="/images/children/DSC04319.jpg"/>
                            <img src="/images/children/untitled-22.jpg"/>
                            <img src="/images/children/DSC6882.jpg"/>
                        </Col>

                        <Col style={{ padding: 0 }}>
                            <img src="/images/couples/DSC08513.jpg"/>
                            <img src="/images/couples/DSC07641.jpg"/>
                            <img src="/images/couples/DSC09861.jpg"/>
                            <img src="/images/couples/untitled-14.jpg"/>
                            <img src="/images/couples/AyarzaFamily-4.jpg"/>
                            <img src="/images/couples/DSC05679.jpg"/>
                            <img src="/images/couples/DSC04138.jpg"/>
                        </Col>

                        <Col style={{ padding: 0 }}>
                            <img src="/images/families/DSC01616.jpg"/>
                            <img src="/images/families/DSC01467-Edit.jpg"/>
                            <img src="/images/families/DSC03730.jpg"/>
                            <img src="/images/families/DSC00959.jpg"/>
                            <img src="/images/families/02-26 Mercedes Almonds-017-16.jpg"/>
                            <img src="/images/families/AyarzaFamily-13.jpg"/>
                            <img src="/images/families/DSC01782-Edit.jpg"/>
                        </Col>

                        <Col style={{ padding: 0 }}>
                            <img src="/images/portraits/DSC07946.jpg"/>
                            <img src="/images/portraits/DSC00506.jpg"/>
                            <img src="/images/portraits/AyarzaFamily-19.jpg"/>
                            <img src="/images/portraits/DSC02275.jpg"/>
                            <img src="/images/portraits/DSC01193.jpg"/>
                            <img src="/images/portraits/03-20 Viri Unicorn-020-8.jpg"/>
                            <img src="/images/portraits/DSC6654.jpg"/>
                        </Col>

                    </Row>

                </Container>
            </section>

            <section>
                <div className="block">
                    <h3>for more examples of my work, visit my instagram page</h3>
                    <a href="https://www.instagram.com/ag.photography.etc/" target="_blank"><h3>@ag.photography.etc</h3></a>
                </div>
            </section>

        </Layout>
    

    );
}