import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicEffect';
import gsap from 'gsap';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Section({ children, className, animation, half }) {
  const [sectionRef, setSectionRef] = useState();

  animation ? useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef) return

      gsap.from(sectionRef, {
        scrollTrigger: {
          trigger: sectionRef,
          start: 'top 90%',
          toggleAttribute: 'restart none restart none',
        },
        duration: 1,
        y: '100px',
        opacity: 0,
      })
    }, sectionRef)

    return () => ctx.revert();
  }) : ''

  console.log(half);
  return (
    <section className={`py-5 ${className}`} ref={setSectionRef} style={half ? { minHeight: '50vh' } : {}}>
      <Container>{children}</Container>
    </section>
  );
}