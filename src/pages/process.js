import React, { useEffect } from "react";
import Section from "@/components/Section";

export default function Process() {
  useEffect(() => {
    document.body.style.overflow = 'scroll'
  }, [])

  return (
    <>
      <Section half animate>
        <h2>01. brainstorming</h2>
        <p>We kicked off our hackathon session by first identifying the track, and then the related problem spaces that we were interested in. We decided to approach vitality from four perspectives: physical, mental, emotional, and spiritual. We realized, however, that many of these areas overlap, and that vitality extends to all areas of life. Our favorite ideas were burnout society, time in nature, and sustainable knowledge, so we discussed these areas more in-depth, then proceeded to research and design.</p>
      </Section>
      <Section half animate>
        <h2>2. problem space</h2>
        <p>Burnout is a prevalent issue in today’s fast-paced society, as highlighted by Byung-Chul Han in his book The Burnout Society. Burnout is not a medical diagnosis. Rather, it is characterized by intense emotional exhaustion. This is caused by the productivity-focused, auto-exploitative society, as well as the information overload that comes with social media. Space today seems to be less “grounded” and more “virtual”. To combat this, we hope to provide uninterrupted time through Umwelt to help people recenter and revitalize. We provide small milestones for people to accomplish in a gamified manner. We chose walking through nature as an activity due to its accessibility and effectiveness, though, if we had more time, we would like to consider the design question of “how can we accommodate those who are not able-bodied or do not have safe communities to walk in?” Though we recognize that this is a systematic issue, we hope to make incremental changes through micro-interventions like Umwelt.</p>
      </Section>
      <Section half animate>
        <h2>3. process</h2>
        <p>Our team collaborated on the low-fidelity design process, then began to branch off into high-fidelity design (Annie and Stephanie), research and web development (Bella), and iOS development (Sean).</p>
      </Section>
      <Section animate>
        <h2>annotated bibliography</h2>
        <p>Powell, K. Work&ndash;life balance: Break or burn out. Nature 545, 375&ndash;377 (2017). https://doi.org/10.1038/nj7654-375a</p>
        <ul>
          <li>Burnout is not a medical diagnosis</li>
          <ul>
            <li>Overwhelming fatigue</li>
            <li>Loss of motivation</li>
            <li>Chronic stress</li>
            <li>Frustration</li>
          </ul>
          <li>Can lead to depression</li>
          <li>&ldquo;The type of break doesn&rsquo;t matter&rdquo;</li>
        </ul>
        <p>Grant, Adam. &ldquo;Feeling Blah During the Pandemic? It's Called Languishing.&rdquo; The New York Times, 3 December 2021, https://www.nytimes.com/2021/04/19/well/mind/covid-mental-health-languishing.html.&nbsp;</p>
        <ul>
          <li>Languishing</li>
          <ul>
            <li>Stagnation</li>
            <li>Emptiness</li>
          </ul>
          <li>Mental health as a spectrum from depression to flourishing</li>
          <li>Languishing: middle point, absence of well-being</li>
          <li>Coined by Corey Keyes</li>
          <li>Combat through flow</li>
          <ul>
            <li>Dissolving sense of time, place, and self</li>
            <li>Enjoyable experiences, meaningful work</li>
            <li>Created through focus</li>
            <ul>
              <li>&rarr; 💡 Umwelt aims to do this by allowing users to recenter</li>
              <ul>
                <li>Uninterrupted time</li>
                <li>Small goals</li>
              </ul>
            </ul>
          </ul>
        </ul>
        <p>Danell J. Haines PhD , Liz Davis MA, CPT , Patrice Rancour MS, RN, CS , Marianne Robinson BS, CHES , Trish Neel-Wilson BSN, CDE, CES &amp; Susan Wagner DVM, MS, DACVIM (2007) A Pilot Intervention to Promote Walking and Wellness and to Improve the Health of College Faculty and Staff, Journal of American College Health, 55:4, 219-225, DOI: 10.3200/JACH.55.4.219-225</p>
        <ul>
          <li>Walking can positively impact BMI, blood glucose, and cholesterol levels</li>
          <ul>
            <li>Easy and sustainable way to promote health and well-being</li>
            <li>💡 Accessible to implement in walkable communities</li>
            <ul>
              <li>Challenge: how can we accommodate for those who are not able-bodied or whose communities are unsafe to walk in?</li>
            </ul>
          </ul>
        </ul>
        <p>Craig, Geoffrey, and Wendy Parkins. Slow Living, Bloomsbury Publishing Plc, 2006. ProQuest Ebook Central, <a href="https://ebookcentral.proquest.com/lib/washington/detail.action?docID=1643848" target="_blank" rel="noopener">https://ebookcentral.proquest.com/lib/washington/detail.action?docID=1643848</a>.</p>
        <ul>
          <li>Space seems less &ldquo;grounded&rdquo; and more &ldquo;virtual&rdquo;</li>
          <li>"Slow living is not a counter-cultural movement: it does not propose the establishment of alternative spaces but the transformation of the spaces we currently inhabit." (62)&nbsp;</li>
          <ul>
            <li>&rarr; 💡We aim to reshape our interactions with the spaces in our communities to promote sustainable practices of physical, mental, and spiritual vitality.</li>
            <li>Community spaces in daily life are often taken for granted</li>
          </ul>
          <li>"At the heart of slow living is a certain 'mindful' consciousness where activities, practices, and encounters are invested with care and attention and such a consciousness requires particular spatial contexts as much as it requires a slow temporality." (63)</li>
          <ul>
            <li>&ldquo;space is a profoundly social phenomenon&rdquo; (63)</li>
          </ul>
        </ul>
        <p>Bo Han (2018) Social Media Burnout: Definition, Measurement Instrument, and Why We Care, Journal of Computer Information Systems, 58:2, 122-130, DOI: 10.1080/08874417.2016.1208064</p>
        <ul>
          <li>Three sub-dimensions of social media burnout</li>
          <ul>
            <li>User&rsquo;s ambivalence</li>
            <li>Emotional exhaustion</li>
            <li>Depersonalization</li>
            <ul>
              <li>E.g. taking a &ldquo;Facebook vacation&rdquo;</li>
            </ul>
          </ul>
          <li>Causes</li>
          <ul>
            <li>Feeling anxious about being overwhelmed by information</li>
            <ul>
              <li>Information and social overload</li>
              <li>Unable to find resolution to mediate pressure</li>
              <ul>
                <li>Hard to escape cycle</li>
                <ul>
                  <li>Social media as a complement to offline social networks</li>
                  <ul>
                    <li>Can overtake in priority</li>
                  </ul>
                  <li>Expensive termination cost to something that took a long time to build (e.g. online network)</li>
                </ul>
              </ul>
            </ul>
            <li>Wanting to disconnect from social media, taking vacations from it</li>
          </ul>
          <li>Burnout: emotional exhaustion</li>
          <li>Burnout and gratification can co-exist</li>
          <ul>
            <li>&rarr; 💡Striking a fine balance by providing gamified, yet mindful breaks</li>
          </ul>
        </ul>
      </Section>
      <Section half animate>
        <h2>attributions</h2>
        <p><a href="https://www.vecteezy.com/free-vector/starburst-circle">Starburst Circle Vectors by Vecteezy</a></p>
      </Section>
    </>
  )
}