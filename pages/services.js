import Head from 'next/head'; // this is a react component built into Next.js, allows <head> modifyment
import styles from '../styles/Home.module.css';
import Link from 'next/link'; // this allows for changing pages without a full refresh and using /posts/etc without doing https://...
import Image from 'next/image'; // extension of the html <img> tag that resizes, optimizes, and lazy loads images
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Container from 'react-bootstrap/Container';
import { Parallax , Background } from 'react-parallax';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 50
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    }
};


export default function Services() {

    const carouselImages =[
        "/images/children/DSC02772.jpg",
        "/images/children/03-20 Viri Unicorn-020-12.jpg",
        "/images/portraits/untitled-16.jpg",
        "/images/portraits/DSC6735.jpg",
        "/images/children/untitled-23.jpg",
        "/images/children/02-26 Mercedes Almonds-017-13.jpg",
        "/images/couples/DSC08427.jpg",
        "/images/portraits/DSC00593.jpg",
        "/images/portraits/DSC07946.jpg",
        "/images/couples/untitled-14.jpg",
        "/images/children/DSC01627.jpg"
      ];

    return ( 
        <Layout services>

            <Head>
                <title>Services | {siteTitle}</title>
            </Head>

            <section>
                <div className={ utilStyles.container }>
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={true}
                    partialVisible={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="image-item"
                >
                    {carouselImages.map((image, index) => (
                        <div key={index}><img src={image}/></div>
                    ))}

                </Carousel>
                </div>
            </section>

            <section>
                <div className={ utilStyles.block }>
                    <h3>Just look at your family, how they are growing, how their little personalities are morphing </h3>
                    <br/>
                    <p>
                        You see  them becoming full on adults. It seems like it takes forever but before you know it, they are graduating and leaving the nest. 
                        <br/><br/>
                        You snapped away photos on your phone but what about you? You were taking the pictures so where are you in these memories? There's no going back, you can't get those moments back, 
                    </p>
                    <br/>
                    <h4>SO LET'S CREATE THEM NOW, AND MAKE SURE YOU ARE ON THE RIGHT SIDE OF THE CAMERA</h4>
                </div>
            </section>

            <section className={ utilStyles.container }>
                <Parallax bgImage="/images/scenes/DSC02382.jpg" strength={10} blur={{ min: -1, max: 3 }} >
                    <div style={{ height: 400, background: "#ffffffa8" }} className="text-center align-items-center">
                        <div style={{ padding: "20px", position: "absolute", maxWidth: "900px", minWidth:"350px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%" }} className="text-center align-items-center">
                            <h2>Investment</h2>
                            <h3>There's so much more to photography than the click of a shutter</h3>
                            <p className="block">
                                I’ve spent years working hard on my craft, investing in gear, and education. Your investment reflects the value of the skills I’ve acquired and the services I provide. I go the extra mile diving deep into your story making sure we capture your unique legacy. Exactly as you remember it. 
                            </p>
                        </div>
                    </div>
                </Parallax>
            </section>

            <section>
                <div className={ utilStyles.block }>
                    <p>I will do everything I can to make any experience with me as comfortable, enjoyable, and as fun as possible of course, but most of us are not in front of a camera (at least not with a photographer) everyday so usually the first 20 minutes, no matter what, will be awkward! 
                    <br/><br/>
                    It is totally normal to be awkward and it helps to have that extra time to build up that confidence. 
                    All of the packages require a $60 retainer and can be paid through the booking site, Cash, Venmo, or Zelle. These are the available packages:
                    </p>
                </div>
            </section>


            <section>
                <div className={ utilStyles.container }>
                    <div className="card-group mx-auto">
                        <div className="card mx-auto">
                            <img className="card-img-top" src="images/families/02-26 Celina Almonds-015-9.jpg" alt="Card image cap"/>
                            <div className="card-body">
                            <h2 className="card-title">Short n' Sweet</h2>
                            <div className="card-text">
                                This little session is perfect for busy families, kids that will not allow for more than just 30 minutes, or those that only need a couple of updated photos. 
                                <br/><br/>This package includes:
                                <ul>
                                    <li >Up to 30 minutes</li>
                                    <li>10 Edited Images</li>
                                    <li>Private Online Gallery</li>
                                    <li>Print Release</li>
                                </ul>
                            </div>
                            </div>
                            <div className="card-footer">
                                <h3>Starting at: $125</h3>
                            </div>
                        </div>

                        <div className="card mx-auto">
                            <img className="card-img-top" src="images/couples/DSC01797.jpg" alt="Card image cap"/>
                            <div className="card-body">
                            <h2 className="card-title">Perfecto</h2>
                            <div className="card-text">
                            The perfect amount of time needed to get a really good variety of photos with you family, just you, just your special someone, or whatever you like!
                                <br/><br/>This package includes:
                                <ul>
                                    <li >Up to 60 minutes</li>
                                    <li>20 Edited Images</li>
                                    <li>Private Online Gallery</li>
                                    <li>Print Release</li>
                                </ul>
                            </div>
                            </div>
                            <div className="card-footer">
                                <h3>Starting at: $200</h3>
                            </div>
                        </div>

                        <div className="card mx-auto">
                            <img className="card-img-top" src="images/families/DSC07951.jpg" alt="Card image cap"/>
                            <div className="card-body">
                            <h2 className="card-title">Abundance!</h2>
                            <div className="card-text">
                                With how fast I can go, this might be overkill for some, but it is great for larger families, those that want multiple outfit changes, or just taking it easy.
                                <br/><br/>This package includes:
                                <ul>
                                    <li >Up to 90 minutes</li>
                                    <li>All edited images (60+)</li>
                                    <li>Private Online Gallery</li>
                                    <li>Print Release</li>
                                </ul>
                            </div>
                            </div>
                            <div className="card-footer">
                                <h3>Starting at: $275</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br/><br/>

            <section>
                <div className={ utilStyles.block }>
                    <p>
                        If you don't see something you are interested in, please don't hesitate to give me a contact me and we'll see what we can do!
                    </p>
                    <a href="/contact"><button>Contact me</button></a>
                </div>
            </section>

        </Layout>
    
    );
}