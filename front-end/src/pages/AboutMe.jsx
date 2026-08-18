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
      <h1 className="sr-only">About Me — Amogelang Thomson</h1>
      <ScrollExpand
        src={amogelang}
        alt="Amogelang Thomson"
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
          <h2 className="se-name">Amogelang Thomson</h2>
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
                <p className="fade-sub">Diploma in Computer Science &mdash; Final Year (2025)</p>
              </div>
            )
          },
          {
            src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Backlit_keyboard.jpg',
            alt: 'Backlit keyboard',
            content: (
              <div className="fade-panel">
                <span className="fade-kicker">Contact</span>
                <h2 className="fade-heading">Let&rsquo;s talk</h2>
                <p className="fade-sub">
                  <a href="mailto:amogelangthompson@gmail.com">amogelangthompson@gmail.com</a>
                  {' '}&middot;{' '}
                  <a href="tel:0670729097">067 072 9097</a>
                </p>
                <div className="fade-links">
                  <a className="btn btn-outline" href="https://github.com/aytee-80" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a className="btn btn-ghost" href="https://www.linkedin.com/in/amogelang-thomson-369a7623a" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            )
          },
          {
            src: amogelang,
            alt: 'Amogelang Thomson',
            objectPosition: '60% 6%',
            content: (
              <div className="fade-panel">
                <span className="fade-kicker">That&rsquo;s Me</span>
                <h2 className="fade-heading">Let&rsquo;s build something together.</h2>
              </div>
            )
          }
        ]}
      />

      {/* About Me */}
      <section className="about-content container reveal">
        <h2>Additional Information</h2>
        <p>
          I value teamwork and mutual learning. I help others, and I ask for help when I need it. That teamwork
          mindset helps projects ship faster and cleaner. I work hard, keep organized, and focus on writing maintainable code.
        </p>

        <h3>Soft Skills</h3>
        <ul className="list">
          <li>Team player & collaborator</li>
          <li>Good communication & time management</li>
          <li>Problem-solving & analytical thinking</li>
          <li>Adaptive, proactive, quick learner</li>
          <li>Organized, diligent and attentive</li>
        </ul>

        <h3>Certificates & Courses</h3>
<ul className="list certificate-list">
  <li>
    <a href="https://www.freecodecamp.org/certification/fcc-bd9ddaf6-1ad2-4dce-884b-65e34845241d/responsive-web-design" target="_blank" rel="noreferrer">
      Responsive Web Design (freeCodeCamp)
    </a>
  </li>
  <li>
    <a href="https://www.freecodecamp.org/certification/fcc-bd9ddaf6-1ad2-4dce-884b-65e34845241d/javascript-algorithms-and-data-structures-v8" target="_blank" rel="noreferrer">
      JavaScript Algorithms & Data Structures (freeCodeCamp)
    </a>
  </li>
  <li>
    <a href="https://www.freecodecamp.org/certification/fcc-bd9ddaf6-1ad2-4dce-884b-65e34845241d/front-end-development-libraries" target="_blank" rel="noreferrer">
      Front End Development Libraries (freeCodeCamp)
    </a>
  </li>
  <li>
    <a href="https://www.freecodecamp.org/certification/fcc-bd9ddaf6-1ad2-4dce-884b-65e34845241d/relational-database-v8" target="_blank" rel="noreferrer">
      Relational Database (SQL) (freeCodeCamp)
    </a>
  </li>
  <li>
    <a href="https://www.freecodecamp.org/certification/fcc-bd9ddaf6-1ad2-4dce-884b-65e34845241d/back-end-development-and-apis" target="_blank" rel="noreferrer">
      Back End Development & APIs (freeCodeCamp)
    </a>
  </li>
  <li>
    <a href="https://www.hackerrank.com/certificates/628369010cb6" target="_blank" rel="noreferrer">
      SQL(HackerRank)
    </a>
  </li>
  <li>
    <a href="https://www.hackerrank.com/certificates/dc26de9306d9" target="_blank" rel="noreferrer">
      React (HackerRank)
    </a>
  </li>
</ul>
      </section>

      {/* GitHub Highlights */}
      <section className="github-section container reveal">
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
      </section>

      {/* Experience */}
      <section className="experience-section container reveal">
        <h2>Experience</h2>
        <div className="experience-list">
          <div className="experience-card">
            <div className="marker" />
            <div className="details">
              <h3>ICEP - Junior Software Developer Intern</h3>
              <p className="duration">14 Jul 2025 – 31 Dec 2025</p>
              <p className="muted">
                WIL internship: practical project work, team collaboration and improved development workflow skills.
              </p>
              <p className="muted">
                Mentor: Mr Modishi Gustav Mamosadi 
              </p>
              <p className="muted">
                Mail: <a href="mailto:MamosadiMG@tut.ac.za">MamosadiMG@tut.ac.za</a> 
              </p>
              <p className="muted">
                Call: <a href="tel:0722826821">0722826821</a>
              </p>
              
            </div>
          </div>
          <div className="experience-card">
            <div className="marker" />
            <div className="details">
              <h3>Makro - Packer</h3>
              <p className="duration">01 Sep 2022 – 29 Jan 2023</p>
              <p className="muted">Early work experience: discipline, time management & teamwork.</p>
             
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-section reveal">
        <div className="container">
          <h2>Let's build something together</h2>
          <p>Open to internships, junior roles and collaboration. Reach out , I reply fast.</p>
          <a className="btn btn-primary" href="mailto:amogelangthompson@gmail.com">
            <si-email /> Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}