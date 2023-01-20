import Head from 'next/head'; // this is a react component built into Next.js, allows <head> modifyment
import styles from '../styles/Home.module.css';
import Link from 'next/link'; // this allows for changing pages without a full refresh and using /posts/etc without doing https://...
import Image from 'next/image'; // extension of the html <img> tag that resizes, optimizes, and lazy loads images
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
// home page has a home attribute for component
import { getSortedPostsData } from '../lib/posts'; // gets the posts sorted by data from the lib folder
import Date from '../components/date';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Parallax } from 'react-parallax';
import TestimonialCards from '../components/testimonials';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1450 },
    items: 5,
    partialVisibilityGutter: 20
  },
  other: {
    breakpoint: { max: 1450, min: 800 },
    items: 3,
    partialVisibilityGutter: 10
  },
  tablet: {
    breakpoint: { max: 800, min: 598 },
    items: 2,
    partialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 598, min: 0 },
    items: 1,
    partialVisibilityGutter: 100
  }
};


export async function getStaticProps() { // this is only for static props that are only needed at build time
  const allPostsData = getSortedPostsData(); // this specifies that its from within
  return {
    props: {
      allPostsData,
    },
  };
} // this returns allPostsData in side the prop

// function TestimonialCards(props) {
//   return (
//     <div className={ styles.testimonial }>
//       <Card className={ styles.card }>
//         <Card.Img variant="top" src={props.topimage} alt={props.name}/>
//           <Card.Body>
//             <Card.Text style={{ fontSize: '.75rem' }}>{props.review}</Card.Text>
//             <Card.Footer className={ styles.cardFooter }>
//               <small className="text-muted">
//                   - {props.name}
//               </small>
//             </Card.Footer>
//           </Card.Body>
//       </Card>
//     </div>
//   )
// }


//<img src="/images/my-family/DSC00334-Edit.jpg" />
// the { allPostsData } prop allows Hom eto acces the blog posts


export default function Home() {

  return (
    <Layout home>

      <Head>
        <title>{siteTitle}</title>
      </Head> 

      <section className={ utilStyles.container }>
            <Parallax bgImage="/images/my-family/DSC00334-Edit.jpg" strength={500} blur={{ min: -1, max: 3 }} bgImageStyle={{ width: "100vw", height: "auto"}}>
                <div style={{ height: 600 }}>
                  <div style={{background: "#ffffff7a", backdropFilter: "blur(5px)", padding: "20px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}} className="text-center">
                      <h3>Central Valley photographer for</h3>
                      <h1>everyday family life stages</h1>
                      <a href="/services"><button>Work with me</button></a>
                  </div>
                </div>
            </Parallax>     
        </section>
    
    
        <section >
            <div className={ utilStyles.block }>
                <div className={ utilStyles.row }>
                    <div>
                        <h2>Welcome to my page!</h2>
                        <p>
                            Like having beautiful background sceneries that fuel you and your kids' energy? Well you are in luck! I am a natural light photographer that edits in a light and vibrant style. <br/>
                            <br/>
                            I service families of all sizes, couples, and portraits of your children through their biggest milestones in life.<br/>
                            <br/> 
                            If you are wanting pictures anywhere in Modesto, Ceres, Turlock, Ripon (basically Stanislaus County and surrounding counties) I'm your gal!
                        </p>
                    </div>
                    <img src="images/my-family/DSC02653.jpg" width={200}/>
                </div>
            </div>
        </section>
    
        <section className={ utilStyles.container }>
            <Parallax bgImage="/images/scenes/DSC02443.jpg" strength={500} blur={3} bgImageStyle={{ width: "100vw", height: "auto"}}>
              <div style={{ height: 200, background: "#ffffff98" }}>
                <div style={{ width: "100%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%" }} className="text-center">
                  <h3>AG Photography etc helps you capture beautiful picture and keeps everyone having stress-free fun</h3>
                  <h4>IT CAN BE A FAMILY OF 5 OR A FAMILY OF 2, OR PORTRAITS OF ANYONE IN YOUR FAMILY!</h4>
                </div>
              </div>
            </Parallax>
        </section>
    

        <section>
            <div className={ utilStyles.container }>

              <h2><br/>Testimonials</h2>
              <h3>here's what a couple of families had to say about their photos and the experience!</h3>

              <div>
                <Carousel
                    swipeable={true}
                    draggable={false}
                    showDots={false}
                    partialVisible={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={false}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    className={ styles.testimonials }
                >

                  <TestimonialCards
                    name= "The Morales Family"
                    topimage= "images/children/DSC09906-Edit.jpg"
                    review= "My girls are beautiful but the patience and dedication she has and the way she works her magic when taking pictures is awesome💜💛❤ Thank you so much Adriana Gallegos!!" />
                  <TestimonialCards
                    name= "The Romero Family"
                    topimage= "images/families/DSC09434.jpg"
                    review= "Thank you so much!! We love them all!" />
                  <TestimonialCards 
                    name= "The Moreno Family"
                    topimage= "images/families/DSC09301.jpg"
                    review= "Thank you so much they all look so cute (emoji) even though they were just all over the place" />
                  <TestimonialCards
                    name= "Angela"
                    topimage= "images/portraits/DSC6735.jpg"
                    review= "Loved having her take pictures of me!!! She was so kind and friendly and made me feel super comfortable. She gave me ideas on how to pose and what poses or faces looked better on me so I had no bad angles!!! Would def recommend to anyone" />
                  <TestimonialCards
                    name= "The Contreras Family"
                    topimage= "images/children/DSC00800.jpg"
                    review= "Your amazing they came out so dang cute" />
                  <TestimonialCards
                    name= "The Chalaph Family"
                    topimage= "images/families/DSC01482.jpg"
                    review= "I LOVE LOVE then! Thank you so much!!" />
                  <TestimonialCards
                    name= "The Cambreros Family"
                    topimage= "images/families/02-26 Celina Almonds-015.jpg"
                    review= "It’s so hard for me to get good pictures of all my three girls together so I was very excited to see she was able to capture them all together!  Would strongly recommend." />
                  <TestimonialCards
                    name= "The Segoviano Family"
                    topimage= "images/children/DSC04319.jpg"
                    review= "I am in love with how they came out! We have gotten so many comments on the pictures and have definitely been referring all who ask! Thank you again!" />
                  
                </Carousel>
              </div>

            </div>
        </section>

        <div className={ utilStyles.container }>
            <div className="block text-center">
                <h3>experience a session for yourself!</h3>
                <a href="/contact"><button>Contact me</button></a>
            </div>
        </div>


    </Layout>
  )
}




// getStaticProps tells next.js that there are some data dependencies from elsewhere that need to be retrieved at build time

const testimonials = [
  {
    id: 0,
    name: "The Morales Family",
    topimage: "images/children/DSC09906-Edit.jpg",
    review: "My girls are beautiful but the patience and dedication she has and the way she works her magic when taking pictures is awesome💜💛❤ Thank you so much Adriana Gallegos!!"
  },
  {
    id: 1,
    name: "The Romero Family",
    topimage: "images/families/DSC09434.jpg",
    review: "Thank you so much!! We love them all!"
  },
  {
    id: 2,
    name: "The Moreno Family",
    topimage: "images/families/DSC09301.jpg",
    review: "Thank you so much they all look so cute (emoji) even though they were just all over the place"
  },
  {
    id: 3,
    name: "Angela",
    topimage: "images/portraits/DSC6735.jpg",
    review: "Loved having her take pictures of me!!! She was so kind and friendly and made me feel super comfortable. She gave me ideas on how to pose and what poses or faces looked better on me so I had no bad angles!!! Would def recommend to anyone"
  },
  {
    id: 4,
    name: "The Contreras Family",
    topimage: "images/children/DSC00800.jpg",
    review: "Your amazing they came out so dang cute"
  },
  {
    id: 5,
    name: "The Chalaph Family",
    topimage: "images/families/DSC01482.jpg",
    review: "I LOVE LOVE then! Thank you so much!!"
  },
  {
    id: 6,
    name: "The Cambreros Family",
    topimage: "images/families/02-26 Celina Almonds-015.jpg",
    review: "It’s so hard for me to get good pictures of all my three girls together so I was very excited to see she was able to capture them all together!  Would strongly recommend."
  },
  {
    id: 7,
    name: "The Segoviano Family",
    topimage: "images/children/DSC04319.jpg",
    review: "I am in love with how they came out! We have gotten so many comments on the pictures and have definitely been referring all who ask! Thank you again!"
  }
];