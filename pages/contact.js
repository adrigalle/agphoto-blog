import Head from 'next/head'; // this is a react component built into Next.js, allows <head> modifyment
import styles from '../styles/Home.module.css';
import Link from 'next/link'; // this allows for changing pages without a full refresh and using /posts/etc without doing https://...
import Image from 'next/image'; // extension of the html <img> tag that resizes, optimizes, and lazy loads images
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';
import Container from 'react-bootstrap/Container';
import { Parallax } from 'react-parallax';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Contact() {
    return (
        <Layout services>

            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div style={{ backgroundImage: 'url(/images/scenes/DSC09798.jpg)', backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100vw", backgroundAttachment: "fixed"  }}>
                <div style={{ background: "#ffffff98", padding: 20 }}>
                  <div style={{background: "#ffffff7a", backdropFilter: "blur(5px)", padding: "20px", minWidth: "380px", width: "45vw", textAlign: "center", margin: "auto" }} className="text-center justify-content-center">


                  <div>

                    <div style={{ maxWidth: 1000, padding: 50 }}>
                        <h2>Contact me!</h2>
                        <br/>

                        <p>Feel free to shoot me an email, message me through social media, shoot me a text, or use the contact form below!</p>
                        <p>I don't recommend calls because I will forget everything so I recommend some form of written message</p>

                        <br/>
                    </div>

                    <Row>
                        <Col><h3>email:</h3></Col>
                        <Col><a href="mailto:ag.photography.etc@gmail.com" target="_blank"><p>ag.photography.etc@gmail.com</p></a></Col>
                    </Row>

                    <Row>
                    <Col><h3>phone:</h3></Col>
                    <Col><a href="tel:1-907-978-8659"><p >907.978.8659</p></a></Col>
                    </Row>

                    <Row>
                    <Col><h3>intagram:</h3></Col>
                    <Col><a href="https://www.instagram.com/ag.photography.etc/" target="_blank"><p>@ag.photography.etc</p></a></Col>
                    </Row>

                    <Row>
                    <Col><h3>facebook:</h3></Col>
                    <Col><a href="https://www.facebook.com/ag.photography.etc/" target="_blank"><p>@ag.photography.etc</p></a></Col>
                    </Row>

                    <br/>
                    <br/>

                    <div style={{ height: "920px" }}>
                        <iframe src="https://app.picsello.com/photographer/embed/adriana-gallegos-photography" frameborder="0" style={{maxWidth: "100%", width:"100%", height:"100%" }} scrolling="no"></iframe>
                    </div>
                    </div>


                  </div>
                </div>
            </div>

        </Layout>
    

    );
}

