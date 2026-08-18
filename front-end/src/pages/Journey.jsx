// src/pages/Journey.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Journey.css";
import "../App.css";
import Navbar from "../components/Navbar";

import tutCampus from "../assets/ICEP1.JPG";
import icepTeam from "../assets/team.jpeg";
import smartEventsApp from "../assets/project.png";
import frontendCert from "../assets/cef 2.jpeg";
import bestInternAward from "../assets/best 2.jpeg";
import smartEventsVideo from "../assets/video.mp4";

export default function Journey() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".section-to-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />

      {/* Full-bleed photo hero, static (not scroll-driven) — this page
          doesn't need its own pinned/expanding mechanic to feel consistent
          with Home/About; the shared type system and reef palette carry
          that instead. Same face-safe crop principle as the ScrollExpand
          photos elsewhere: object-position pushed to keep the subject in
          frame on wide screens rather than defaulting to a symmetric
          center crop. */}
      <header className="journey-hero">
        <div className="journey-hero__media">
          <img src={tutCampus} alt="" className="journey-hero__img" />
          <div className="journey-hero__scrim" />
        </div>
        <div className="journey-hero__inner">
          <div className="journey-hero__meta">
            <Link to="/about" className="journey-hero__back">← About</Link>
            <span className="eyebrow">TUT &amp; ICEP · 2025</span>
          </div>
          <h1 className="journey-hero__title">My Journey at TUT &amp; ICEP</h1>
          <p className="journey-hero__lede">
            From classroom to real-world impact a story of growth, code, and collaboration.
          </p>
        </div>
      </header>

      {/* TUT Section */}
      <section className="journey-entry section-to-animate">
        <div className="container">
          <div className="journey-entry__head">
            <span className="eyebrow">01 Tshwane University of Technology</span>
            <span className="line" />
          </div>
          <div className="journey-entry__body">
            <div className="journey-entry__text">
              <h2>Growing at TUT and ICEP</h2>
              <p>
                My final year at TUT has been transformative. I dove deep into full-stack development with hands-on projects in:
              </p>
              <div className="tag-pills">
                <span className="tag-pill">React &amp; React Native</span>
                <span className="tag-pill">Node.js &amp; Express</span>
                <span className="tag-pill">Flask</span>
                <span className="tag-pill">PostgreSQL &amp; MongoDB</span>
                <span className="tag-pill">Firebase</span>
                <span className="tag-pill">RESTful APIs</span>
                <span className="tag-pill">MVC architecture</span>
                <span className="tag-pill">Git workflows</span>
              </div>
              <p>
                Beyond code, I learned how to <strong>draft technical documents</strong>, present in team meetings, brainstorm solutions, and collaborate across disciplines — turning ideas into working software.
              </p>
            </div>
            <div className="journey-entry__media journey-entry__media--full">
              <img src={tutCampus} alt="ICEP Internship at TUT" />
            </div>
          </div>
        </div>
      </section>

      {/* ICEP Internship Section */}
      <section className="journey-entry journey-entry--tint section-to-animate">
        <div className="container">
          <div className="journey-entry__head">
            <span className="eyebrow">02 ICEP Internship</span>
            <span className="line" />
          </div>
          <div className="journey-entry__body journey-entry__body--reverse">
            <div className="journey-entry__media">
              <img src={icepTeam} alt="ICEP Internship Team" />
            </div>
            <div className="journey-entry__text">
              <h2>My ICEP Internship Experience</h2>
              <p>
                At ICEP, I stepped into the real world of software development and it was <strong>amazing</strong>.
              </p>
              <p>
                I worked on <strong>Smart Events</strong>, an internal platform where TUT students and staff can <strong>book venues</strong> across campus to host events. My role spanned:
              </p>
              <div className="tag-pills">
                <span className="tag-pill">Frontend (React)</span>
                <span className="tag-pill">Mobile (React Native)</span>
                <span className="tag-pill">Backend integration</span>
                <span className="tag-pill">UI/UX collaboration</span>
              </div>
              <p>
                It was more than coding, it was about solving real problems, communicating with stakeholders, and shipping a product that mattered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="journey-entry section-to-animate">
        <div className="container">
          <div className="journey-entry__head">
            <span className="eyebrow">03 Smart Events in Action</span>
            <span className="line" />
          </div>
          <div className="project-preview">
            <div className="video-wrapper">
              <video
                src={smartEventsVideo}
                poster={smartEventsApp}
                controls
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <p>
              Watch the Smart Events mobile app in action seamless venue booking for TUT events, built with React Native and integrated with our backend system.
            </p>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="journey-entry journey-entry--tint section-to-animate">
        <div className="container">
          <div className="journey-entry__head">
            <span className="eyebrow">04 Recognition &amp; Achievements</span>
            <span className="line" />
          </div>
          <div className="awards-grid">
            <div className="award-card">
              <img src={frontendCert} alt="Frontend Developer Certificate from ICEP" />
              <div className="award-card__body">
                <h3>Frontend Developer Certificate</h3>
                <p>Recognized for excellence in frontend development during my internship.</p>
              </div>
            </div>
            <div className="award-card">
              <img src={bestInternAward} alt="Best Overall Intern Award from ICEP" />
              <div className="award-card__body">
                <h3>Best Overall Intern</h3>
                <p>Awarded for consistent performance, teamwork, and impact across projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="journey-reflection section-to-animate">
        <div className="container">
          <span className="eyebrow">Closing thought</span>
          <blockquote>
            &ldquo;This journey didn&rsquo;t just teach me to code,it taught me to <strong>listen, adapt, create, and lead</strong>.&rdquo;
          </blockquote>
          <p>
            I&rsquo;m incredibly grateful to TUT for the foundation and to ICEP for the trust, mentorship, and opportunity to grow.
          </p>
        </div>
      </section>
    </div>
  );
}