// src/pages/Journey.jsx
import React, { useEffect } from "react";
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

      <section className="journey-hero section-to-animate">
        <div className="container">
          <h1>My Journey at TUT & ICEP</h1>
          <p>From classroom to real-world impact , a story of growth, code, and collaboration.</p>
        </div>
      </section>

      {/* TUT Section — with icon & full-image class */}
      <section className="journey-section section-to-animate">
        <div className="container">
          <div className="journey-content">
            <div className="journey-text">
              <h2>
                Growing at Tshwane University of Technology and ICEP
              </h2>
              <p>
                My final year at TUT has been transformative. I dove deep into full-stack development with hands-on projects in:
              </p>
              <ul className="tech-list">
                <li>React & React Native for dynamic user interfaces</li>
                <li>Node.js, Express, and Flask for robust backends</li>
                <li>PostgreSQL, MongoDB, and Firebase for data management</li>
                <li>RESTful APIs, MVC architecture, and Git workflows</li>
              </ul>
              <p>
                Beyond code, I learned how to <strong>draft technical documents</strong>, present in team meetings, brainstorm solutions, and collaborate across disciplines , turning ideas into working software.
              </p>
            </div>
            <div className="journey-image full-image">
              <img src={tutCampus} alt="ICEP Internship at TUT" />
            </div>
          </div>
        </div>
      </section>

      {/* ICEP Internship Section */}
      <section className="journey-section icep-bg section-to-animate">
        <div className="container">
          <div className="journey-content reverse">
            <div className="journey-image">
              <img src={icepTeam} alt="ICEP Internship Team" />
            </div>
            <div className="journey-text">
              <h2>
                My ICEP Internship Experience
              </h2>
              <p>
                At ICEP, I stepped into the real world of software development  and it was <strong>amazing</strong>.
              </p>
              <p>
                I worked on <strong>Smart Events</strong>  an internal platform where TUT students and staff can <strong>book venues</strong> across campus to host events. My role spanned:
              </p>
              <ul className="role-list">
                <li>Frontend (React) - intuitive booking UI</li>
                <li>Mobile (React Native) - on-the-go access</li>
                <li>Backend integration - real-time availability</li>
                <li>UI/UX design collaboration</li>
              </ul>
              <p>
                It was more than coding - it was about solving real problems, communicating with stakeholders, and shipping a product that mattered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="journey-section section-to-animate">
        <div className="container">
          <h2 className="section-title">
            <img src="https://simpleicons.org/icons/react.svg" alt="Mobile App" className="section-icon" />
            Smart Events in Action
          </h2>
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
              Watch the Smart Events mobile app in action - seamless venue booking for TUT events, built with React Native and integrated with our backend system.
            </p>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="journey-section awards-bg section-to-animate">
        <div className="container">
          <h2 className="section-title">
            Recognition & Achievements
          </h2>
          <div className="awards-grid">
            <div className="award-card">
              <img src={frontendCert} alt="Frontend Developer Certificate from ICEP" />
              <h3>Frontend Developer Certificate</h3>
              <p>Recognized for excellence in frontend development during my internship.</p>
            </div>
            <div className="award-card">
              <img src={bestInternAward} alt="Best Overall Intern Award from ICEP" />
              <h3>Best Overall Intern</h3>
              <p>Awarded for consistent performance, teamwork, and impact across projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="journey-section reflection section-to-animate">
        <div className="container">
          <div className="reflection-content">
            <blockquote>
              “This journey didn’t just teach me to code , it taught me to <strong>listen, adapt, create, and lead</strong>.”
            </blockquote>
            <p>
              I’m incredibly grateful to TUT for the foundation and to ICEP for the trust, mentorship, and opportunity to grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}