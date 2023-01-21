import Head from 'next/head'; // this is a react component built into Next.js, allows <head> modifyment
import styles from '../styles/Home.module.css';
import Link from 'next/link'; // this allows for changing pages without a full refresh and using /posts/etc without doing https://...
import Image from 'next/image'; // extension of the html <img> tag that resizes, optimizes, and lazy loads images
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Gallery() {
    return (
        <Layout services>

            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={ utilStyles.block }>
                <br />
                <h2>Here is my gallery</h2>
                <h3>here are just a few pictures that show my style of photography</h3>
                <br />
            </section>

            <section>
                <div className={ utilStyles.container}>

                    <Row lg={4} md={2} xs={1} style={{ width:'100vw', margin: 0, textAlign: 'center' }}>

                        <Col className={ utilStyles.imgCols } style={{ padding: 0}}>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } priority src="/images/children/DSC00800.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } priority src="/images/children/03-20 Viri Unicorn-020-12.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } priority src="/images/children/DSC03007.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/children/DSC03693.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/children/DSC04319.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/children/untitled-22.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/children/DSC6882.jpg"/>
                        </Col>

                        <Col className={ utilStyles.imgCols } style={{ padding: 0 }}>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } priority src="/images/couples/DSC08513.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/couples/DSC07641.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/couples/DSC09861.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/couples/untitled-14.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/couples/AyarzaFamily-4.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/couples/DSC05679.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/couples/DSC04138.jpg"/>
                        </Col>

                        <Col className={ utilStyles.imgCols } style={{ padding: 0 }}>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } priority src="/images/families/DSC01616.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/families/DSC01467-Edit.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/families/DSC03730.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/families/DSC00959.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/families/02-26 Mercedes Almonds-017-16.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/families/AyarzaFamily-13.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/families/DSC01782-Edit.jpg"/>
                        </Col>

                        <Col className={ utilStyles.imgCols } style={{ padding: 0 }}>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } priority src="/images/portraits/DSC07946.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/portraits/DSC00506.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/portraits/AyarzaFamily-19.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/portraits/DSC02275.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/portraits/DSC01193.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/portraits/03-20 Viri Unicorn-020-8.jpg"/>
                            <Image width={480} height={720} className={ utilStyles.galleryImg } src="/images/portraits/DSC6654.jpg"/>
                        </Col>

                    </Row>

                </div>
            </section>

            <section>
                <div className={ utilStyles.block }>
                    <br />
                    <h3>for more examples of my work, visit my instagram page</h3>
                    <a href="https://www.instagram.com/ag.photography.etc/" target="_blank" className={ utilStyles.emailPhone }><h3 style={{ color: "#C89687"}}>@ag.photography.etc</h3></a>
                </div>
            </section>
            <br />

        </Layout>
    

    );
}