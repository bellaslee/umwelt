import React, { useEffect } from "react";
import Section from "@/components/Section";

export default function Process() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Section half animate>
        <img src="/img/banner.jpeg" alt="" className="report pb-5" />
        <h2>01. brainstorming</h2>
        <p>We kicked off our hackathon session by first identifying the track, and then the related problem spaces that we were interested in. We decided to approach vitality from four perspectives: physical, mental, emotional, and spiritual. We realized, however, that many of these areas overlap, and that vitality extends to all areas of life. Our favorite ideas were burnout society, time in nature, and sustainable knowledge, so we discussed these areas more in-depth, then proceeded to research and design. <a href="https://www.figma.com/file/nrRVzLhFi5ExRH9g1RrOas/DubHacks-23'?type=whiteboard&node-id=24%3A823&t=DbIqjDzRqKzTpIH9-1" target="_blank">You can view our chaotic brainstorming FigJam file here.</a></p>
        <img src="/img/brainstorm.jpg" className="report" />
        <img src="/img/narrowing-down.jpg" className="report" />
      </Section>
      <Section half animate>
        <h2>2. problem space</h2>
        <p>Burnout is a prevalent issue in today’s fast-paced society, as highlighted by Byung-Chul Han in his book The Burnout Society. Burnout is not a medical diagnosis. Rather, it is characterized by intense emotional exhaustion. This is caused by the productivity-focused, auto-exploitative society, as well as the information overload that comes with social media. Space today seems to be less “grounded” and more “virtual”. To combat this, we hope to provide uninterrupted time through Umwelt to help people recenter and revitalize. We provide small milestones for people to accomplish in a gamified manner. We chose walking through nature as an activity due to its accessibility and effectiveness, though, if we had more time, we would like to consider the design question of “how can we accommodate those who are not able-bodied or do not have safe communities to walk in?” Though we recognize that this is a systematic issue, we hope to make incremental changes through micro-interventions like Umwelt.</p>
      </Section>
      <Section half animate>
        <h2>3. process</h2>
        <p>Our team collaborated on the low-fidelity design process, then began to branch off into high-fidelity design (Annie and Stephanie), research and web development (Bella), and iOS development (Sean). Annie and Stephanie worked with Figma and Adobe Illustrator; Bella worked with Next.js, GSAP, SASS, and Bootstrap; and Sean worked with Swift. We maintained open communication and discussion throughout the process to ensure we stayed on the right track and adhered to our initial visions.</p>
        <h3>3.1 design</h3>
        <p><a href="https://www.figma.com/file/9X5AabfVYMBYkwerbrBOYy/DubHacks-23'?type=design&node-id=32%3A1400&mode=design&t=Ziw28LGMl86lQXhO-1" target="_blank">View our Figma wireframes here</a></p>
        <p>We were inspired by Taiwan Design Expo and other minimalistic, whimsical designs for our branding.</p>
        <img src="/img/inspiration.jpeg" alt="" className="report" />
        <h3>3.2 iOS development</h3>
        <p>We worked on design and development simultaneously to cover more ground as a team.</p>
        <img src="/img/development.jpeg" alt="" className="report" />
      </Section>
      <Section half animate>
        <h2>04. challenges</h2>
        <p>As a team, our main challenge was brainstorming ways to use technology to encourage independence from it. For Sean, it was challenging to learn how to use iOS frameworks for the camera and map under time constraints. For Annie and Stephanie, the linear user flow was challenging due to being different from what you’d expect from a typical app.</p>
      </Section>
      <Section half animate>
        <h2>05. what we're proud of</h2>
        <p>This is our first in-person hackathon experience, so we are proud of coming this far under immense time pressure. Our ideation process was highly enjoyable, and we are proud of stepping out of our comfort zones to design an experience rather than a tool. We also figured out our strengths quickly and adapted to fit them into the creation process.</p>
      </Section>
      <Section half animate>
        <h2>06. takeaways</h2>
        <p>So much… The design team learned how to animate boxes, Sean learned iOS animation and frameworks, Bella learned new front-end animation and interaction techniques, and we all learned how to collaborate within a cross-functional team.</p>
      </Section>
      <Section half animate>
        <h2>07. about the team</h2>
        <p><a href="https://www.linkedin.com/in/an-yao-pao-6992a1217" target="_blank" rel="noopener noreferrer">Annie Pao</a> is an HCDE student at the University of Washington. She worked on the ideation process as well as using figma to create low and high fidelity prototypes, and additionally using Figma to create the animations for our visual assets.</p>
        <p><a href="https://bellalee.com" target="_blank" rel="noopener noreferrer">Bella Lee</a> is an Informatics student at the University of Washington. She worked on the ideation process, literature review, product management, front-end web development, and copywriting, with a focus on marketing and stakeholder connection.</p>
        <p><a href="https://minorenji.github.io/" target="_blank" rel="noopener noreferrer">Sean Lim</a> is a Computer Science student at the University of Washington. He worked on the mobile app prototype. Although he has tried developing for iOS before, it was his first time using frameworks like AVFoundation (Camera) and MapKit. Overall, he enjoyed being able to rapidly implement an idea.</p>
        <p><a href="https://www.linkedin.com/in/stephanie-chou-4066a51b9/" target="_blank" rel="noopener noreferrer">Stephanie Chou</a> is a Design student at the University of Washington. She worked on the ideation process and visual identity for the app, as well as the visual assets (low poly scenery, box, etc). She also worked on prototyping lo-fi and hi-fi screens for Umwelt.</p>
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
        <p>“Let's all get up and walk to the North Pole: design and evaluation of a mobile wellness application.” Proceedings of the 6th Nordic Conference on Human-Computer Interaction: Extending Boundaries, 2010, pp. 3–12, https://dl.acm.org/doi/abs/10.1145/1868914.1868920.</p>
      </Section>
      <Section half animate>
        <h2>attributions</h2>
        <p><a href="https://www.vecteezy.com/free-vector/starburst-circle">Starburst Circle Vectors by Vecteezy</a></p>
      </Section>
    </>
  )
}