// src/pages/AboutMe.jsx
import React, { useEffect } from "react";
import "../styles/AboutMe.css";
import '../App.css';
import Navbar from '../components/Navbar';

import amogelang from "../assets/IMG_0684.jpeg";
import ScrollStack, { ScrollStackItem } from "../Anima/Stack";

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
    <div className="about-page">
      {/* Hero */}
      <Navbar />
      <section className="about-hero reveal">
        <div className="about-hero__inner container">
          <div className="about-hero__text">
            <h1>About Me</h1>
            <p>
              Final Year Computer Science Diploma student & Junior Software Developer. I enjoy collaborating,
              helping others, and building software that solves real problems. I’m disciplined, curious and committed
              to continuous improvement.
            </p>
            <div className="about-hero__btns">
              <a
                className="btn btn-primary"
                href="/assets/Amogelang_Thomson_CV_2025_updated.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="about-hero__image">
            <img src={amogelang} alt="Amogelang Thomson" />
          </div>
        </div>
      </section>

      {/* Scroll Stack with Simple Icons */}
      {/* Scroll Stack with Direct Icon URLs */}
<section className="scroll-stack-section">
  <ScrollStack
    itemDistance={120}
    itemStackDistance={45}
    stackPosition="30%"
    scaleEndPosition="10%"
    baseScale={0.95}
    itemScale={0.02}
    useWindowScroll={true}
  >
    <ScrollStackItem>
      <div className="fact-icon">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mapdotpin.svg" alt="Location" />
      </div>
      <h3>Location</h3>
      <p>Johannesburg, South Africa</p>
    </ScrollStackItem>

    <ScrollStackItem>
      <div className="fact-icon">
        <img src="https://cdn.simpleicons.org/graduation-cap" alt="Education" />
      </div>
      <h3>Education</h3>
      <p><strong>Tshwane University of Technology</strong><br />Diploma in Computer Science — Final Year (2025)</p>
      <p><strong>Kwena Molapo Comprehensive Farm High School</strong><br />Matric — 2021</p>
    </ScrollStackItem>

    <ScrollStackItem>
      <div className="fact-icon">
        <img src="https://cdn.simpleicons.org/briefcase" alt="Work Experience" />
      </div>
      <h3>Work Experience</h3>
      <p><strong>ICEP</strong> — Junior Software Developer Intern<br />
        <em>14 Jul 2025 – 31 Dec 2025</em><br />
        WIL internship: practical project work, team collaboration, and development workflow.
      </p>
      <p><strong>Makro</strong> — Packer<br />
        <em>01 Sep 2022 – 29 Jan 2023</em><br />
        Early work experience in discipline, time management & teamwork.
      </p>
    </ScrollStackItem>

    <ScrollStackItem>
      <div className="fact-icon">
        <img src="https://cdn.simpleicons.org/gmail" alt="Contact" />
      </div>
      <h3>Contact</h3>
      <p>
        Email: <a href="mailto:amogelangthompson@gmail.com">amogelangthompson@gmail.com</a><br />
        Phone: <a href="tel:0670729097">067 072 9097</a>
      </p>
      <div className="about-hero__btns" style={{ marginTop: '1rem', justifyContent: 'flex-start' }}>
        <a className="btn btn-outline" href="https://github.com/aytee-80" target="_blank" rel="noreferrer">
          <img src="https://cdn.simpleicons.org/github" alt="GitHub" style={{ width: '16px', height: '16px', marginRight: '6px' }} />
          GitHub
        </a>
        <a className="btn btn-ghost" href="https://www.linkedin.com/in/amogelang-thomson-369a7623a" target="_blank" rel="noreferrer">
          <img src="https://cdn.simpleicons.org/linkedin" alt="LinkedIn" style={{ width: '16px', height: '16px', marginRight: '6px' }} />
          LinkedIn
        </a>
      </div>
    </ScrollStackItem>
  </ScrollStack>
</section>

      {/* About Me */}
      <section className="about-content container reveal">
        <h2>About Me</h2>
        <p>
          I value teamwork and mutual learning. I help others, and I ask for help when I need it — that teamwork
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
        <ul className="list">
          <li>Responsive Web Design</li>
          <li>JavaScript Algorithms & Data Structures</li>
          <li>Front End Development Libraries</li>
          <li>SQL / Relational Database</li>
          <li>Back End Development & APIs</li>
          <li>Agile Project Management</li>
          <li>AI for Beginners</li>
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
              
            </div>
          </div>
          <div className="experience-card">
            <div className="marker" />
            <div className="details">
              <h3>Makro - Packer</h3>
              <p className="duration">01 Sep 2022 – 29 Jan 2023</p>
              <p className="muted">Early work experience — discipline, time management & teamwork.</p>
             
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-section reveal">
        <div className="container">
          <h2>Let's build something together</h2>
          <p>Open to internships, junior roles and collaboration. Reach out — I reply fast.</p>
          <a className="btn btn-primary" href="mailto:amogelangthompson@gmail.com">
            <si-email /> Contact Me
          </a>
        </div>
      </section>
    </div>
  );
}