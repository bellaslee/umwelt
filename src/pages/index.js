import Section from '@/components/Section';
import EnterWorries from '@/components/EnterWorries';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicEffect';

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [worryText, setWorryText] = useState("");
  const [reframeRef, setReframeRef] = useState();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!reframeRef) return

      gsap.to(reframeRef, {
        scrollTrigger: {
          trigger: reframeRef,
          scrub: 1,
          start: "top bottom",
          end: "bottom bottom"
        },
        scale: 1
      })
    }, reframeRef)

    return () => ctx.revert();
  }, [reframeRef])

  return (
    <>
      <EnterWorries worryText={worryText} setWorryText={setWorryText} />
      <Section animation half>
        <p className='lead'><em>You will be venturing out into the unknown, leaving behind things that may be familiar to you...</em></p>
        <p>Block out distractions with Umwelt and enjoy a hero’s journey through nature. During your walk, you will unlock various encounters in your surroundings. Look out for and capture these moments and absorb the beauty of the spaces around you.</p>
      </Section>
      <Section animation>
        <h2>Umwelt</h2>
        <p>noun /ˈo͝omvelt/</p>
        <p className='lead'>Definition: individual perceptions of experiences and reality</p>
        <p>Burnout is the opposite of vitality — it is utter exhaustion. Through Umwelt, we hope to reshape individual perceptions of experiences and reality to revitalize the experience of daily life. In doing so, we hope to drive transformation in modern productivity culture and curb the development of a burnout society.</p>
      </Section >

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
        <p>What does it mean to live a “good” life? Taking a walk in nature is “unproductive” by societal standards, which is precisely why we should do it: to relish in the art of lingering and of simply being.</p>
      </Section>

      <Section animation className="reframe" half>
        <div className="reframeContainer" ref={setReframeRef}>
          <svg viewBox="0 0 422 280" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path
                id="MyPath"
                d="M1 181.5L59 123H86L63 140.5L66.5 147.5L95 129.5L104 258L101.5 140.5L114 277L138.5 232L125 277L219 204L136 279.5L421 181.5L229 208L225 193.5L297 37.5L210 161.5L219 181.5L215 193.5L186 129.5L144.5 226.5L134.5 195.5L176.5 134L107.5 1V129.5"
                stroke="black" />
            </defs>
            <text>
              <textPath href="#MyPath">{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}{worryText}</textPath>
            </text>
          </svg>
        </div>
      </Section>
    </>
  )
}
