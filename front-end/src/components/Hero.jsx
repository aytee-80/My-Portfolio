import React from 'react';
import amogelang from '../assets/IMG_0684.jpeg';
import project from '../assets/Selection-removebg-preview.png';

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-left">
        <h1 >Hi I'm Amogelang  <br /> Thomson</h1>
        <p >
          A final year Computer Science student from TUT. I'm currently doing WIL<br />
          (Work Integrated Learning); after that, I'll be graduating next year, 2025.
        </p>
        <a href="#projects" className="btn">More about me →</a>
      </div>

      <div className="hero-right">
        <img src={amogelang} alt="Amogelang Thomson" className="hero-img" />
        <div className="circle-text"><img src={project} alt="Project -Logo" className="hero-img2" /></div>
      </div>
    </section>
  );
}
