import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import utilStyles from '../styles/utils.module.css';
import styles from './footer.module.css';
import Image from 'next/image';
import instagramPic from '../public/images/combos/instagram-970x90.png';
import Stack from 'react-bootstrap/Stack';

export default function Footer() {
    return (
        <section className={ utilStyles.container } style={{ marginTop: '20px', marginBottom: '20px' }}>



            <div className={ styles.instagram }>

                <div>
                    <img 
                        src="images/combos/instagram-970x90.png"
                        fill 
                        alt="instagram collage from AG Photography etc" 
                        className={ styles.instagramImg }
                    />
                </div>

                <div className={styles.instaContent}>
                    <h4 className={styles.instaContentHead}>
                        <a href="https://www.instagram.com/ag.photography.etc/" target="_blank">
                            <span className={styles.instaContentSpan}>Follow on Instagram</span>
                        </a>
                    </h4>
                </div>

            </div>
            






            <div className={ utilStyles.container }>
                <Row className={ styles.bottom }>

                    <Col className={ styles.bottomCol } sm>
                        <p>Photographing families and portraits in the Central Valley, CA area!</p>
                        <a href="tel:1-907-978-8659" className={ utilStyles.emailPhone }><p>907.978.8659</p></a>
                        <a href="mailto:ag.photography.etc@gmail.com" target="_blank" className={ utilStyles.emailPhone }><p>ag.photography.etc@gmail.com</p></a>
                    </Col>
                
                    <Col className={ styles.bottomCol } sm>
                        <h3>find your way around</h3>
                        <ul className={ styles.footerList }>
                            <li className={ styles.listItem }>
                                <a href="/">Home</a>
                            </li>
                            <li className={ styles.listItem }>
                                <a href="/about">About me</a>
                            </li>
                            <li className={ styles.listItem }>
                                <a href="/services">Services</a>
                            </li>
                            <li className={ styles.listItem }>
                                <a href="/gallery">Gallery</a>
                            </li>
                            <li className={ styles.listItem }>
                                <a href="/faqs">FAQ's</a>
                            </li>
                            <li className={ styles.listItem }>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                
                    </Col>
                
                    <Col className={ styles.bottomCol } sm>
                        <a href="/"><img src="images/logos/color-circ.jpg" style={{width: 200, margin:"auto" }}/></a>
                    </Col>

                </Row>
            </div>



        </section>
    )
}