import Head from 'next/head'; // this is a react component built into Next.js, allows <head> modifyment
import styles from '../styles/Home.module.css';
import Link from 'next/link'; // this allows for changing pages without a full refresh and using /posts/etc without doing https://...
import Image from 'next/image'; // extension of the html <img> tag that resizes, optimizes, and lazy loads images
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { Parallax } from 'react-parallax';

export default function About() {
    return (
        <Layout about>

            <Head>
                <title>About | {siteTitle}</title>
            </Head>
 
            <section>
                <div className={ utilStyles.block }>
                    <div className={ utilStyles.row }>
                        <Image src="/images/children/DSC03631.jpg" width={100} height={300}/>
                        <div>
                            <h2>You're tired of watching it all fly by</h2>
                            <h3>and you want time to just hold up and stand still</h3>
                            <p>
                                You’re in the middle of the whirlwind and as chaotic as it might be, it is everything. And it all goes by so freaking fast.
                                <br/><br/>
                                You want to remember those gap teeth, the funky hair, the glee and spark in their eyes before they become amazing adults. You just need photographs that capture their little personalities, your families love before they no longer want to be lovey dovey, memories that you can look back on whenever you want!
                            </p>
                            <h3>That’s exactly where I come in.</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className={ utilStyles.container }>
                <Parallax bgImage="/images/families/DSC01518-cropped.jpg" strength={500} blur={{ min: -1, max: 3 }} bgImageStyle={{ width: "100vw", height: "auto"}}>
                    <div style={{ height: 600, background: "#ffffff98" }}></div>
                </Parallax>     
            </section>

            <section>
                <div className={ utilStyles.block }>
                    <p>
                        I’m Adriana, and I love freezing time for the smiles and that love for those who never want to forget these years that speed by so fast. For those busy mommas that want memories they can look back on and remember all the beauty of it!
                        <br/><br/>
                        Of course we can all take photos with our phones, but this often means you will be on the wrong side of the camera.
                        <br/><br/>
                        Having someone else clicking away while you interact with your family is such a different experience that I can provide you. We can do longer sessions to give you a crazy variety of pictures to choose from, or a much shorter session for those with a time budget.
                    </p>
                </div>
            </section>

            <section>
                <div className={ utilStyles.block }>
                    <div className="flex-row-container">
                        <div>
                            <h4>WHO IS BEHIND THE LENS?</h4>
                            <br/>
                            <p>
                                I am a pizza loving mom of one beautiful and amazing daughter (Artemis), and the wife of a gorgeous and awesome husband (Jesus). I was born a creative person and can do all kinds of artsy fartsy things (the reason for the “etc” in AG Photography etc).
                                <br/><br/>
                                Photography wasn’t really a thing in my life until the year 2015 when I got my first point and shoot camera and headed to Alaska. Of course with views like those, I only cared about landscapes, then my now husband came into the picture (literally!), then the dogs, then my littles, and now I want to shoot everyone!
                            </p>
                        </div>

                        <img src="images/my-family/DSC05842.jpg"/>
                    </div>
                </div>
            </section>

            <section>
                <div className={ utilStyles.block }>
                    <p> 
                        I am also a Full Stack Development online student through Emeritus at MITxPro, and someday my husband and I, with the precious one of course, hope to travel all over the place! I have watched Supernatural like 10 times now, The Office about 7 times, and Encanto like twice a day since it became available on Disney+ (not just because Artemis likes it). 
                        <br/><br/>
                        Also totally random, but I get asked a lot about my glasses, I got them at <a href="https://www.zeelool.com/" title="zeelool.com">zeelool.com</a> (I do not get any kind of commission from this link, though it would be cool). The design is called Cicely, sometimes they have DEEP discounts, so if you are interested, be on the look out for that 
                    </p>
                </div>
            </section>

            <section>
                <div className={ utilStyles.block }>
                    <h4>
                        ANYWAY, THANK YOU SO MUCH FOR TAKING THE TIME IN GETTING TO KNOW ME, AND NOW IT MY TURN TO GET TO KNOW YOU! SHOOT ME A MESSAGE AND LET'S GET YOU ON THE RIGHT SIDE OF THE CAMERA!
                    </h4>
                    <br/>
                    <div  className='text-center'>
                        <a href="/contact">
                            <button>Let's Chat!</button>
                        </a>
                    </div>
                    
                </div>
            </section>

        </Layout>
    )
}