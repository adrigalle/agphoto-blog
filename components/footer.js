import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import utilStyles from '../styles/utils.module.css';
import footStyles from './footer.module.css';
import Image from 'next/image';
import instagramPic from '../public/images/combos/instagram-970x90.png';
import Stack from 'react-bootstrap/Stack';

export default function Footer() {
    return (
        <section styles={ utilStyles.container } style={{ marginTop: '50px', marginBottom: '50px' }}>



            <div style={{ objectFit: 'contain' }}>


                <div styles={footStyles.bgWrap}>
                    <img 
                        src="images/combos/instagram-970x90.png"
                        fill 
                        alt="instagram collage from AG Photography etc" 
                        style={{ objectFit: 'cover' }}
                    />
                </div>





                <div styles={footStyles.bgText}>
                    <h4>
                        <a href="https://www.instagram.com/ag.photography.etc/" target="_blank">
                            <span>Follow on Instagram</span>
                        </a>
                    </h4>
                </div>


            </div>
            






            <Container fluid gap={500}>
                <Row className="justify-content-md-center text-center">

                    <Col sm>
                        <p>Photographing families and portraits in the Central Valley, CA area!</p>
                        <a href="tel:1-907-978-8659"><p >907.978.8659</p></a>
                        <a href="mailto:ag.photography.etc@gmail.com" target="_blank"><p>ag.photography.etc@gmail.com</p></a>
                    </Col>
                
                    <Col sm>
                        <h3>find your way around</h3>
                        <ul styles={ footStyles.footerList }>
                            <li styles={ footStyles.listItem }>
                                <a href="/">Home</a>
                            </li>
                            <li styles={ footStyles.listItem }>
                                <a href="/about">About me</a>
                            </li>
                            <li styles={ footStyles.listItem }>
                                <a href="/services">Services</a>
                            </li>
                            <li styles={ footStyles.listItem }>
                                <a href="/gallery">Gallery</a>
                            </li>
                            <li styles={ footStyles.listItem }>
                                <a href="/faqs">FAQ's</a>
                            </li>
                            <li styles={ footStyles.listItem }>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                
                    </Col>
                
                    <Col className='justify-content-md-center' sm>
                        <a href="/home"><img src="images/logos/color-circ.jpg" style={{width: 200, margin:"auto" }}/></a>
                    </Col>

                </Row>
            </Container>



        </section>
    )
}