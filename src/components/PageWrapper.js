import React, { useState } from 'react';
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicEffect';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Header from './Header';
import Footer from './Footer';

import { Poppins } from 'next/font/google'
const poppins = Poppins({ weight: '400', subsets: ['latin'] })

gsap.registerPlugin(ScrollTrigger);

export default function PageWrapper({ children }) {
  const [footstepRef, setFootstepRef] = useState();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!footstepRef) return

      gsap.to(footstepRef, {
        scrollTrigger: {
          trigger: "body",
          start: 0,
          end: "max",
          scrub: 1,
        },
        height: '100vh'
      })
    }, footstepRef)

    return () => ctx.revert();
  })

  return (
    <>
      <Header font={poppins} />
      <div className="footsteps-container" ref={setFootstepRef}>
        <img className='footsteps' src='/img/footsteps.png'></img>
      </div>

      <main className={poppins.className}>
        {children}
      </main>
      <Footer font={poppins} />
    </>
  )
}