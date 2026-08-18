// src/pages/AboutMe.jsx
import React, { useEffect } from "react";
import "../styles/AboutMe.css";
import '../App.css';
import Navbar from '../components/Navbar';
import ScrollExpand from "../components/reactbits/ScrollExpand";
import ScrollFade from "../components/reactbits/scrollFade";
import amogelang from "../assets/graduate 1.jpeg";

export default function AboutMe() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            const bar = entry.target.querySelector(".progress-fill");
            if (bar) {
              const target = bar.dataset.fill || "100";
              bar.style.width = target + "%";
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal:not(.scroll-stack-section)").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      {/* Hero — the whole About page opens through this. Title fades away as
          the photo expands to full-bleed; the bio and CV link fade in on top
          once it's there. Only one real photo exists for this page, so this
          is the single scroll-driven entrance rather than repeating it. */}
      <Navbar />
      <h1 className="sr-only">About Me</h1>
      <ScrollExpand
        src={amogelang}
        alt="About me"
        scrollHint="Scroll to explore"
        useWindowScroll
        startWidth={46}
        startHeight={60}
        startRadius={22}
        endRadius={0}
        mediaZoom={1.3}
        scrollDistance={1.15}
        holdDistance={0.25}
        smoothing={0.12}
        overlayScrim={0.6}
        overlayFadeStart={0}
        overlayFadeEnd={0.04}
        className="about-scrollexpand"
      >
        {/* One frosted glass panel hosting the whole staged reveal, instead
            of each line floating loose on the photo. The panel itself fades
            in early (tied to the same window as the kicker) and then stays
            put — everything after that is text appearing inside a backdrop
            that's already there, not five separate blur boxes popping in
            one after another. */}
        <div className="se-panel">
          <span className="se-kicker">About Me</span>
          
          <p className="se-role">
            Computer Science Diploma Graduate &amp; Junior Software Developer
          </p>
          <p className="se-bio">
            I enjoy collaborating, helping others, and building software that
            solves real problems. I&rsquo;m disciplined, curious and committed
            to continuous improvement.
          </p>
          <a
            className="se-cta btn btn-primary"
            href="/Amogelang_Thomson_CV.pdf"
            target="_blank"
            rel="noreferrer"
            download="Amogelang_Thomson_CV.pdf"
          >
            Download CV
          </a>
        </div>
      </ScrollExpand>

      {/* The hero is the only panel that expands from small — repeating that
          effect four more times would read as one trick played on loop.
          These four are a genuinely different transition instead: full-bleed
          from the moment each becomes active, dissolving into the next as
          you scroll through one shared pinned track. See ScrollFade.jsx for
          the mechanic — it's hand-built for this, not a registry component,
          since nothing in React Bits does a plain sticky crossfade. */}
      <ScrollFade
        useWindowScroll
        overlayScrim={0.58}
        slides={[
          {
            src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Johannesburg-city-skyline-night.jpg',
            alt: 'Johannesburg skyline at night',
            content: (
              <div className="fade-panel">
                <span className="fade-kicker">Location</span>
                <h2 className="fade-heading">Johannesburg, South Africa</h2>
              </div>
            )
          },
          {
            src: 'https://commons.wikimedia.org/wiki/Special:FilePath/South_campus_entrance_TUT.jpg',
            alt: 'Tshwane University of Technology campus entrance',
            objectPosition: 'center 22%',
            content: (
              <div className="fade-panel">
                <span className="fade-kicker">Education</span>
                <h2 className="fade-heading">Tshwane University of Technology</h2>
                <p className="fade-sub">Diploma in Computer Science</p>
              </div>
            )
          },
          
          
        ]}
      />

      {/* Everything from here to the bottom of the page shares one sticky,
          blurred backdrop — the same closing photo from the ScrollFade
          sequence above, held in place while Additional Info / GitHub /
          Experience / Contact scroll over it. Each section's content sits
          in a .trailing-panel (frosted card, same visual family as
          .se-panel/.fade-panel higher up the page) so text stays legible
          against a photo instead of needing its own opaque section
          background.

          The handoff from the ScrollFade sequence isn't cross-faded — the
          closing slide is sharp and full-colour, then this backdrop starts
          blurred from its very first frame. A true blur-interpolated
          handoff between two separate DOM trees is a lot of extra
          machinery for a transition most visitors will only see once;
          this is the simpler, still-good version. Say if you want the
          seamless one and I'll build it. */}
      <div className="about-trailing">
        <div className="about-trailing__bg" aria-hidden="true">
          <img src={amogelang} alt="" className="about-trailing__bg-img" />
          <div className="about-trailing__scrim" />
        </div>

        <section className="about-content container reveal">
          <div className="trailing-panel">
            <div className="sechead">
              <span className="eyebrow">Additional Information</span>
              <span className="line" />
            </div>
            <p className="about-content-lede">
              I value teamwork and mutual learning. I help others, and I ask for help when I need it. That teamwork
              mindset helps projects ship faster and cleaner. I work hard, keep organized, and focus on writing maintainable code.
            </p>

            <h3 className="about-subhead">Soft Skills</h3>
            <div className="skill-pills">
              <span className="skill-pill">Team player &amp; collaborator</span>
              <span className="skill-pill">Communication &amp; time management</span>
              <span className="skill-pill">Problem-solving &amp; analytical thinking</span>
              <span className="skill-pill">Adaptive, proactive, quick learner</span>
              <span className="skill-pill">Organized, diligent, attentive</span>
            </div>

            <h3 className="about-subhead">Certificates &amp; Courses</h3>
            <div className="cert-list">
              <a
                className="cert-row"
                href="https://www.freecodecamp.org/certification/fcc-bd9ddaf6-1ad2-4dce-884b-65e34845241d/responsive-web-design"
                target="_blank"
                rel="noreferrer"
              >
                <img className="cert-icon" src="https://cdn.simpleicons.org/freecodecamp/79818f" alt="" />
                <span className="cert-name">Responsive Web Design</span>
                <span className="cert-provider">freeCodeCamp</span>
                <span className="cert-arrow" aria-hidden="true">↗</span>
              </a>
              <a
                className="cert-row"
                href="https://www.freecodecamp.org/certification/fcc-bd9ddaf6-1ad2-4dce-884b-65e34845241d/javascript-algorithms-and-data-structures-v8"
                target="_blank"
                rel="noreferrer"
              >
                <img className="cert-icon" src="https://cdn.simpleicons.org/freecodecamp/79818f" alt="" />
                <span className="cert-name">JavaScript Algorithms &amp; Data Structures</span>
                <span className="cert-provider">freeCodeCamp</span>
                <span className="cert-arrow" aria-hidden="true">↗</span>
              </a>
              <a
                className="cert-row"
                href="https://www.freecodecamp.org/certification/fcc-bd9ddaf6-1ad2-4dce-884b-65e34845241d/front-end-development-libraries"
                target="_blank"
                rel="noreferrer"
              >
                <img className="cert-icon" src="https://cdn.simpleicons.org/freecodecamp/79818f" alt="" />
                <span className="cert-name">Front End Development Libraries</span>
                <span className="cert-provider">freeCodeCamp</span>
                <span className="cert-arrow" aria-hidden="true">↗</span>
              </a>
              <a
                className="cert-row"
                href="https://www.freecodecamp.org/certification/fcc-bd9ddaf6-1ad2-4dce-884b-65e34845241d/relational-database-v8"
                target="_blank"
                rel="noreferrer"
              >
                <img className="cert-icon" src="https://cdn.simpleicons.org/freecodecamp/79818f" alt="" />
                <span className="cert-name">Relational Database (SQL)</span>
                <span className="cert-provider">freeCodeCamp</span>
                <span className="cert-arrow" aria-hidden="true">↗</span>
              </a>
              <a
                className="cert-row"
                href="https://www.freecodecamp.org/certification/fcc-bd9ddaf6-1ad2-4dce-884b-65e34845241d/back-end-development-and-apis"
                target="_blank"
                rel="noreferrer"
              >
                <img className="cert-icon" src="https://cdn.simpleicons.org/freecodecamp/79818f" alt="" />
                <span className="cert-name">Back End Development &amp; APIs</span>
                <span className="cert-provider">freeCodeCamp</span>
                <span className="cert-arrow" aria-hidden="true">↗</span>
              </a>
              <a
                className="cert-row"
                href="https://www.hackerrank.com/certificates/628369010cb6"
                target="_blank"
                rel="noreferrer"
              >
                <img className="cert-icon" src="https://cdn.simpleicons.org/hackerrank/79818f" alt="" />
                <span className="cert-name">SQL</span>
                <span className="cert-provider">HackerRank</span>
                <span className="cert-arrow" aria-hidden="true">↗</span>
              </a>
              <a
                className="cert-row"
                href="https://www.hackerrank.com/certificates/dc26de9306d9"
                target="_blank"
                rel="noreferrer"
              >
                <img className="cert-icon" src="https://cdn.simpleicons.org/hackerrank/79818f" alt="" />
                <span className="cert-name">React</span>
                <span className="cert-provider">HackerRank</span>
                <span className="cert-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="github-section container reveal">
          <div className="trailing-panel">
            <h2>GitHub Highlights</h2>
            <div className="github-achievements">
              <div className="achievements-row">
                <a href="https://github.com/aytee-80" target="_blank" rel="noreferrer" title="YOLO">
                  <img
                    className="achieve-logo-large"
                    src="https://github.githubassets.com/assets/yolo-default-be0bbff04951.png"
                    alt="YOLO"
                  />
                  <div className="achieve-label">YOLO</div>
                </a>
                <a href="https://github.com/aytee-80" target="_blank" rel="noreferrer" title="Pull Shark">
                  <img
                    className="achieve-logo-large"
                    src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png"
                    alt="Pull Shark"
                  />
                  <div className="achieve-label">Pull Shark ×2</div>
                </a>
              </div>
              <div className="gh-heatmap-large">
                <img
                  alt="GitHub contributions"
                  src={`https://ghchart.rshah.org/aytee-80`}
                  className="gh-heat-large"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section container reveal">
          <div className="trailing-panel">
            <h2>Experience</h2>
            <div className="experience-list">
              <div className="experience-card">
                
                <div className="details">
                  <h3>ICEP <span className="muted"> * Software Developer Intern</span></h3>
                  <p className="duration">14 Jul 2025 – 31 Dec 2025</p>
                  <p className="muted">
                    WIL internship: practical project work, team collaboration and improved development workflow skills.
                  </p>
                  <p className="muted">
                    Mentor: Mr Modishi Gustav Mamosadi 
                  </p>
                  <p className="muted">
                    Mail: <a href="mailto:MamosadiMG@tut.ac.za" target="_blank" rel="noreferrer" style={{ color: '#c09139' }}>
                      MamosadiMG@tut.ac.za
                    </a>
                  </p>
                  <p className="muted">
                    Call: <a href="tel:0722826821" target="_blank" rel="noreferrer" style={{ color: '#c09139' }}>
                      0722826821
                    </a>
                  </p>
                </div>
              </div>
              <div className="experience-card">
                
                <div className="details">
                  <h3>Makro <span className="muted"> * Packer</span></h3>
                  <p className="duration">01 Sep 2022 – 29 Jan 2023</p>
                  <p className="muted">Early work experience: discipline, time management & teamwork.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section reveal">
          <div className="trailing-panel container">
            <h2>Let's build something together</h2>
            <p>Open to internships, junior roles and collaboration. Reach out , I reply fast.</p>
            <a className="btn btn-primary" href="mailto:amogelangthompson@gmail.com">
              Contact Me →
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}