// Hero.js
import React, { useEffect, useRef } from 'react';
import amogelang from '../assets/ICEP1 face.JPG';
import project from '../assets/Selection-removebg-preview.png';
import { useTypewriter } from "../utils/ux";


export default function Hero() {
  const typeRef = useTypewriter([
    "Final Year Computer Science Student",
    "WIL Intern",
    "Junior Software Developer"
  ], 90, 1800);

  const badgeRef = useRef(null);

  useEffect(() => {
    const badge = badgeRef.current;
    if (!badge) return;

    const moveBadge = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;

      badge.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", moveBadge);

    return () => window.removeEventListener("mousemove", moveBadge);
  }, []);

  const goToProjects = () => {
    const section = document.querySelector("#projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="about">
      <div className="hero-left">
        <h1>
          Hi, I'm Amogelang <br />
          Thomson
          <div>
            <span className="typewriter">
              <span ref={typeRef}></span>
              <span className="cursor" />
            </span>
          </div>
        </h1>

        <a href="/about" className="btn btn-outline">More about me →</a>
      </div>

      <div className="hero-right">
        <div className="hero-card">
          <img src={amogelang} alt="Amogelang Thomson" className="hero-img" />
        </div>

        {/* CLICKABLE BADGE FOLLOWING CURSOR */}
        <div className="badge follow-badge" ref={badgeRef} onClick={goToProjects}>
          <img src={project} alt="Project Logo" />
        </div>
      </div>
    </section>
  );
}
