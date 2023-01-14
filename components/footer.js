import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import utilStyles from '../styles/utils.module.css';
import footStyles from './footer.module.css';
import Image from 'next/image';
import instagramPic from '../public/images/combos/instagram-970x90.png';

export default function Footer() {
    return (
        <section styles={ utilStyles.container } style={{ marginTop: '50px' }}>



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
            



            <Container fluid>
                <Row className="justify-content-md-center">

                    <Col sm>
                        <p>Photographing families and portraits in the Central Valley, CA area!</p>
                        <a href="tel:1-907-978-8659"><p >907.978.8659</p></a>
                        <a href="mailto:ag.photography.etc@gmail.com" target="_blank"><p>ag.photography.etc@gmail.com</p></a>
                    </Col>
                
                    <Col sm>
                        <h3>find your way around</h3>
                        <ul className="footer-list">
                            <li className="list-item">
                                <a href="/">Home</a>
                            </li>
                            <li className="list-item">
                                <a href="/about">About me</a>
                            </li>
                            <li className="list-item">
                                <a href="/services">Services</a>
                            </li>
                            <li className="list-item">
                                <a href="/gallery">Gallery</a>
                            </li>
                            <li className="list-item">
                                <a href="/faqs">FAQ's</a>
                            </li>
                            <li className="list-item">
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                
                    </Col>
                
                    <Col sm>
                        <a href="/home"><img src="images/logos/color-circ.jpg" style={{width: 200}}/></a>
                    </Col>

                </Row>
            </Container>



        </section>
    )
}