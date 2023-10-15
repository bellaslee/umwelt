import React, { useEffect, useState } from "react";
import Section from "./Section";
import { Col, Row } from "react-bootstrap";
import gsap from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


export default function EnterWorries({ worryText, setWorryText }) {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    document.body.style.overflow = 'scroll';
    if (worryText === "" || worryText === " ") {
      setWorryText("I guess you are a worry free person!")
    }
    gsap.timeline({
      duration: 0.1,
      ease: 'power4.out'
    })
      .to('.poof', {
        scale: 0,
        rotate: '30deg'
      })
      .to('.poofWrapper > form > button', {
        opacity: 0,
        display: 'none'
      }, '<')
      .to('.poofWrapper > form > img', {
        scale: 1,
      })
      .to('.poofWrapper > form > img', {
        opacity: 0,
        display: 'none',
      })
      .to('.poofWrapper', {
        display: 'none'
      })
      .to('p', {
        display: 'block',
        opacity: 1,
        duration: 0.2,
      })
      .to('.enterWorries', {
        height: '50vh'
      }, '<')
      .fromTo('.continueMessage', {
        y: '0px',
      }, {
        y: '10px',
        yoyo: true,
        repeat: -1,
      })
  }

  return (
    <Section className='enterWorries'>
      <h2>Before we embark on this adventure, cast away your worries here</h2>
      <div className="poofWrapper pt-5">
        <form className="text-center">
          <textarea name="worry" id="worry" cols="50" rows="12" value={worryText} placeholder="I'm worried about..." onChange={e => setWorryText(e.target.value)
          } className="poof" minLength="10"></textarea><br />
          <button className="btn btn-primary" type="submit" onClick={(e) => handleSubmit(e)}>Done</button>
          <img src="/img/starburst.png" />
        </form>
      </div>
      <p className="continueMessage text-center lead">Carry on, traveler <FontAwesomeIcon icon={faCaretDown} /></p>
    </Section>
  )
}