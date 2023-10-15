import Section from '@/components/Section';
import EnterWorries from '@/components/EnterWorries';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicEffect';
import { Row, Col } from 'react-bootstrap';

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [finalWorryText, setFinalWorryText] = useState("I guess you are a worry free person!");
  const [reframeRef, setReframeRef] = useState();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!reframeRef) return
      gsap.to(reframeRef, {
        scrollTrigger: {
          trigger: reframeRef,
          scrub: 1,
          start: "top bottom",
          end: "bottom bottom",
        },
        scale: 1
      })
    }, reframeRef)

    return () => ctx.revert();
  }, [reframeRef])

  return (
    <>
      <EnterWorries setFinalWorryText={setFinalWorryText} />
      <Section animation half>
        <Row>
          <Col lg={4}>
            <img src="/img/home-screen.png" alt="" className="report" />
          </Col>
          <Col className="d-flex flex-column justify-content-center" lg>
            <p className='lead'><em>You will be venturing out into the unknown, leaving behind things that may be familiar to you...</em></p>
            <p>Block out distractions with Umwelt and enjoy a hero’s journey through nature. During your walk, you will unlock various encounters in your surroundings. Look out for and capture these moments to absorb the beauty of the spaces around you.</p>
          </Col>
        </Row>
      </Section>
      <Section animation className="centered">
        <h2>Umwelt</h2>
        <p>noun /ˈo͝omvelt/</p>
        <p className='lead'>Definition: individual perceptions of experiences and reality</p>
        <p>Burnout is the opposite of vitality — it is utter exhaustion. Through Umwelt, we hope to reshape individual perceptions of experiences and reality to revitalize daily life. In doing so, we hope to drive transformation in modern productivity culture and curb the development of a burnout society.</p>
        <p>Our research shows that walking is a sustainable way to promote health and well-being. Additionally, maps and gamification are effective design choices to promote physical activity. On top of these findings, we incorporated a meditative and reflective component to encourage vitality in all aspects, from physical to spiritual.</p>
      </Section >

      <Section>
        <h2>How it works</h2>
        <Row>
          <Col lg>
            <img src="/img/box-frame.jpg" alt="" className="howWork" />
            <h3 className="py-3">1. Release your worries</h3>
            <p>The app will prompt you to enter your worries and cast them away for the moment.</p>
          </Col>
          <Col lg>
            <img src="/img/venturing-frame.jpg" alt="" className="howWork" />
            <h3 className="py-3">2. Begin your journey</h3>
            <p>You will only have access to important apps, in case of an emergency. We challenge you to unplug completely, if possible!</p>
          </Col>
          <Col lg>
            <img src="/img/map-frame.jpg" alt="" className="howWork" />
            <h3 className="py-3">3. Experience the magic around you</h3>
            <p>Experientially journal your adventure with mystical prompts that frame your hero's journey. It's up to you to capture the moment!</p>
          </Col>
        </Row>
        <Row>
          <Col lg>
            <img src="/img/story-frame.jpg" alt="" className="howWork" />
            <h3 className="py-3">4. Reflect on your story</h3>
            <p>Look back on your travels and encounters with fond memories.</p>
          </Col>
          <Col lg>
            <img src="/img/end-frame.jpg" alt="" className="howWork" />
            <h3 className="py-3">5. Reach a heroic conclusion</h3>
            <p>All good things must come to an end...</p>
          </Col>
          <Col lg>
            <img src="/img/start-frame.jpg" alt="" className="howWork" />
            <h3 className="py-3">6. Reshape your experience</h3>
            <p>...but through every step, you are revitalized.</p>
          </Col>
        </Row>
      </Section>

      <Section animation>
        <h2>A taste of adventure...</h2>
        <iframe style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} width="100%" height="1000" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9X5AabfVYMBYkwerbrBOYy%2FDubHacks-23'%3Ftype%3Ddesign%26node-id%3D32-1401%26t%3DHm35RcQj9WH2A7UI-1%26scaling%3Dmin-zoom%26page-id%3D32%253A1400%26starting-point-node-id%3D32%253A1401%26mode%3Ddesign" allowfullscreen></iframe>
      </Section>

      <Section>
        <h2>...with a functional prototype</h2>
      </Section>

      <Section animation half>
        <h2>Mission</h2>
        <p className='lead'>To revitalize society by finding little moments of magic in nature</p>
      </Section>

      <Section animation>
        <h2>Vision</h2>
        <h3 className='py-3'>🌱 Encouraging sustainable and balanced lifestyles</h3>
        <p>It can be difficult to swim against the currents of social media in an age of constant information overload. With Umwelt, we can embark on an adventure of mindset transformation to move towards a balanced life. </p>
        <h3 className='py-3'>🔁 Transforming experiences to enhance our collective vitality</h3>
        <p>Let’s take a moment to reshape our interactions with the spaces we inhabit to nourish our physical, mental, and spiritual vitality.</p>
        <h3 className='py-3'>💫 Becoming able to simply exist</h3>
        <p>What does it mean to live a “good” life? Taking a walk in nature is “unproductive” by societal standards, which is precisely why we should do it: to relish in the art of lingering and of simply <em>being</em>.</p>
      </Section>

      <Section animation className="reframe centered" half>
        <div className="reframeContainer" ref={setReframeRef}>
          <svg viewBox="0 0 422 280" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path
                id="MyPath"
                d="M1 181.5L59 123H86L63 140.5L66.5 147.5L95 129.5L104 258L101.5 140.5L114 277L138.5 232L125 277L219 204L136 279.5L421 181.5L229 208L225 193.5L297 37.5L210 161.5L219 181.5L215 193.5L186 129.5L144.5 226.5L134.5 195.5L176.5 134L107.5 1V129.5"
                stroke="black" />
            </defs>
            <text>
              <textPath href="#MyPath">
                {finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}{finalWorryText}</textPath>
            </text>
          </svg>
        </div>
      </Section>
    </>
  )
}
