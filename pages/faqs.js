import Head from 'next/head'; // this is a react component built into Next.js, allows <head> modifyment
import styles from '../styles/Home.module.css';
import Link from 'next/link'; // this allows for changing pages without a full refresh and using /posts/etc without doing https://...
import Image from 'next/image'; // extension of the html <img> tag that resizes, optimizes, and lazy loads images
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';
import Accordion from 'react-bootstrap/Accordion';


function AccordionCard(props) {
    return (
        <Accordion.Item style={{ color: '#787878' }} eventKey={props.id}>
            <Accordion.Header>{props.question}</Accordion.Header>
            <Accordion.Body>{props.answer}</Accordion.Body>
        </Accordion.Item>
    );
}

export default function FAQs() {
    return (
        <Layout services>

            <Head>
                <title>{siteTitle}</title>
            </Head>

            <div className={ utilStyles.block }>
                <br/>
                <h2>Here are some frequently asked questions</h2>
            </div>

            <section>
                <div className={ utilStyles.block }>

                    <Accordion defaultActiveKey="0" flush>

                        <AccordionCard
                            id= "0"
                            question="HOW MANY IMAGES WILL I RECEIVE?"
                            answer="The amount of images is dependent on the package. After base edits and culling you will have 7 days to choose your faves. You can totally purchase more than those included, just pick them out, I'll send the invoice, and get to it!" />
                        <AccordionCard
                            id="1"
                            question="WHAT’S IN YOUR CAMERA BAG?"
                            answer="I use a Sony a7ii. I do like to use my 50mm f/1.8 lens for the most part but do have a close and far zoomy lens, and a 35mm." />
                        <AccordionCard
                            id="2"
                            question="HOW LONG HAVE YOU BEEN A PHOTOGRAPHER?"
                            answer="I have been taking pictures for about 6 years now but was mostly focused on pretty landscapes and doggies. Last year I decided to really invest in my education to photograph more people!" />
                        <AccordionCard
                            id="3"
                            question="DO YOU TRAVEL FOR PHOTOSHOOTS?"
                            answer="I don't go crazy far, and do charge a travel fee for anything over 20 miles. It is just $1 for every mile over 40 miles, starting at $20. It basically ends up being $1 per mile, but it doesn't start until it hits the 40 mile mark from 95307 (to & back)" />
                        <AccordionCard
                            id="4"
                            question="CAN WE MEET YOU BEFORE BOOKING?"
                            answer="It depends on the session. For the most part, I am mainly a portrait photographer so these may be short sessions and adding an in person meeting would be unnecessary, but I am so down for a phone call/text or zoom meeting!" />
                        <AccordionCard
                            id="5"
                            question="WHAT SHOULD WE WEAR FOR PHOTOS?"
                            answer="I have a style guide I will be sending you! It has a lot of information about what looks better for my style of photography and what could be avoided and all that good stuff!" />
                        <AccordionCard
                            id="6"
                            question="DO YOU GIVE US ALL OF THE RAW FILES?"
                            answer="Nope! I do not give out RAW files as they are not a true representation of my work. If I were to sell these, they would be more for commercial use due to copyright laws and that is at a much higher rate than edited jpegs. <br/><br/> I would also hope that you chose me for the style I can provide you and not just because of my prices." />
                        <AccordionCard
                            id="7"
                            question="CAN YOU PHOTOSHOP OUT ALL OF THE THINGS I DON'T LIKE?"
                            answer="I do use photoshop, but very minimally. I don't like those filters that get rid of all skin texture or edits that make your body unrecognizable. I will get rid of most acne, but I won't smooth out acne scars for example because it would make you look like a totally different person. And I want to highlight your beauty." />

                    </Accordion>

                </div>
            </section>


            <section className={ utilStyles.block }>
                <div className='text-center'>
                    <h3>If your question wasn't answered, please don't hesitate to shoot me a message!</h3>
                    <br/>
                    <a href="/contact">
                        <button>Let's chat!</button>
                    </a>
                </div>
            </section>

        </Layout>
    

    );
}