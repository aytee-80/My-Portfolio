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
    <div className="App">
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
                href="/0 Amogelang_Thomson_CV_2025_updated (2).pdf"
                target="_blank"
                rel="noreferrer"
                download='0 Amogelang_Thomson_CV_2025_updated (1).pdf'
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
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAxMGMtMS4xMDQgMC0yLS44OTYtMi0ycy44OTYtMiAyLTIgMiAuODk2IDIgMi0uODk2IDItMiAybTAtNWMtMS42NTcgMC0zIDEuMzQzLTMgM3MxLjM0MyAzIDMgMyAzLTEuMzQzIDMtMy0xLjM0My0zLTMtM20tNyAyLjYwMmMwLTMuNTE3IDMuMjcxLTYuNjAyIDctNi42MDJzNyAzLjA4NSA3IDYuNjAyYzAgMy40NTUtMi41NjMgNy41NDMtNyAxNC41MjctNC40ODktNy4wNzMtNy0xMS4wNzItNy0xNC41MjdtNy03LjYwMmMtNC4xOTggMC04IDMuNDAzLTggNy42MDIgMCA0LjE5OCAzLjQ2OSA5LjIxIDggMTYuMzk4IDQuNTMxLTcuMTg4IDgtMTIuMiA4LTE2LjM5OCAwLTQuMTk5LTMuODAxLTcuNjAyLTgtNy42MDIiLz48L3N2Zz4=" alt="Location" />
      </div>
      <h3>Location</h3>
      <p>Johannesburg, South Africa</p>
    </ScrollStackItem>

    <ScrollStackItem>
      <div className="fact-icon">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik00LjMyMyA5LjY5OWMtLjEyNy0uMTQ0LS4yMzUtLjI5NS0uMzIzLS40NTR2LTMuMDIxbC0zLTEuNTM3IDEwLjk1Ni00LjY4NyAxMC4wNDQgNS41MDJoLS4wMDEuMDAxdjMuNDk4bDEgMmgtM2wxLTJ2LTMuMDk3bC0yIC44MDJ2Mi40OWMtLjA4LjE2My0uMTg4LjMxOC0uMzE4LjQ2Ni4zNDcuOTUuMzk4IDIuMDgzLjQwNCAyLjYzNSAxLjM2LS40ODIgMi42NDUuODIyIDIuMzY0IDMuMTA4LS4yMDMgMS42Ni0xLjE0NyAyLjk0LTIuNTI2IDMuNDMxLTIuNDE3IDQuNzczLTYuMjg1IDUuMTQ0LTcuNDE1IDUuMTQ0LTEuMTI5IDAtNC45OTgtLjM3Mi03LjQxNC01LjE0NC0xLjM4LS40OTEtMi4zMjQtMS43NzEtMi41MjctMy40MzEtLjI5Ni0yLjQzMyAxLjE0MS0zLjU4MyAyLjM2NC0zLjEwNC4wMDctLjU1MS4wNTctMS42Ni4zOTEtMi42MDF6bTEzLjUzLjYzOWMtMS42NjggMS4wMzktNC41NiAxLjU1Ny02LjUgMS41NTctMi4xMTIgMC00LjY1NS0uNDk4LTYuMjAyLTEuNS0uMTU2LjYxOS0uMjQgMS4yOTMtLjI0IDIuMDI0IDAgLjUyOC0uNDI1LjkxNy0uODk4LjkxNy0uMTIxIDAtLjI0NC0uMDI1LS4zNjUtLjA4LS4wNjEtLjAyOC0uMTUzLS4wNS0uMjU3LS4wNS0uMTEyIDAtLjIzNi4wMjYtLjM0NS4wOTktLjg5OS41OTQtLjgwNSAzLjgzNCAxLjM5NSA0LjU5NC4yMi4wNzYuNDA1LjIzOC41MTEuNDUgMi4xNjIgNC4yOTYgNS41NjUgNC42MyA2LjU1NyA0LjYzczQuMzk2LS4zMzQgNi41NTctNC42M2MuMTA3LS4yMTIuMjkxLS4zNzQuNTExLS40NSAyLjE5OS0uNzYgMi4yOTQtNCAxLjM5Ni00LjU5NC0uMzY3LS4yNDUtLjYzNi4wMzEtLjk2OC4wMzEtLjQ3MiAwLS44OTgtLjM4Ny0uODk4LS45MTcgMC0uNzUzLS4wODgtMS40NDctLjI1NC0yLjA4MXptLjE0Ny0xLjQxOGMtLjgyIDEuMTA3LTQuMTkgMS45NzUtNi42NDcgMS45NzUtMi43NjIgMC01LjUxMi0uODU3LTYuMzUzLTEuOTQ2di0yLjIxNGw2LjExNCAzLjEzMyA2Ljg4Ni0yLjc2MXYxLjgxM3ptLTYuMDk3LTcuODFsNy43NiA0LjI1MS04LjQ5OSAzLjQxLTcuODEyLTQuMDAyIDguNTUxLTMuNjU5eiIvPjwvc3ZnPg==" alt="Education" />
      </div>
      <h3>Education</h3>
      <p><strong>Tshwane University of Technology</strong><br />Diploma in Computer Science - Final Year (2025)</p>
      <p><strong>Kwena Molapo Comprehensive Farm High School</strong><br />Matric - 2021</p>
    </ScrollStackItem>

    

    <ScrollStackItem>
      <div className="fact-icon">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik04LjI2IDEuMjg5bC0xLjU2NC43NzJjLTUuNzkzIDMuMDIgMi43OTggMjAuOTQ0IDkuMzEgMjAuOTQ0LjQ2IDAgLjkwNC0uMDk0IDEuMzE3LS4yODRsMS41NDItLjc1NS0yLjg5OC01LjU5NC0xLjU0Ljc1NGMtLjE4MS4wODctLjM4NC4xMzQtLjU5Ny4xMzQtMi41NjEgMC02Ljg0MS04LjIwNC00LjI0MS05LjU5NmwxLjU0Ni0uNzYzLTIuODc1LTUuNjEyem03Ljc0NiAyMi43MTFjLTUuNjggMC0xMi4yMjEtMTEuMTE0LTEyLjIyMS0xNy44MzIgMC0yLjQxOS44MzMtNC4xNDYgMi40NTctNC45OTJsMi4zODItMS4xNzYgMy44NTcgNy4zNDctMi40MzcgMS4yMDFjLTEuNDM5Ljc3MiAyLjQwOSA4LjQyNCAzLjk1NiA3LjY4bDIuMzk5LTEuMTc5IDMuODE2IDcuMzZzLTIuMzYgMS4xNjItMi40NzYgMS4yMTVjLS41NDcuMjUxLTEuMTI5LjM3Ni0xLjczMy4zNzYiLz48L3N2Zz4=" alt="Contact" />
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
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEUAfrv///8AdredvtsAeLgAerkAfLoAcbV4qtDX4+9em8j2+fzv9fkAdLdFjcLd6fOqyOBGksQXgr2Er9NWmMhYk8XF2OkAbLOTuNhtosy91eeyzePo8fcwiMAsgbw4hb7KzbIWAAADsklEQVR4nO2cbXfyIAyGCwVabLHVvthanf//Xz7aqbMa3JDnkHzg/rRzxtkuQ4CQYBJ2V6GnfLNNELTd5JMufkiS+091J42QCgNKSWFkV79A9cqg8DyQGdUvoRqOjDRj8eYBqmgNNtC3TFvcoVqOTXMTb29QDRE7XWSab6iejJ0u4v0MpQj4+I+UukDVhCbvIlOzpOhIGepsqq5ItMSmeJbUyURs9s7zNyW5wIZ4lsiTDb3p2yRbYn5+9nSU8CkqmATnXFBaC4rv1DikQ37cUYgBZ/FTc7jdKdI1jVAiG29IF5Vphm8sxfdsqeqEvvfziT1LfyHbKnu202wrXHfnI8DEWIoZUaivAwhVtIg7lshBJsYmxI1hBxvqLEQoaWNiK7T5E7Cbz66OZio+WKH6DA0qpQhF0VKisULhXafl2grV4O0Ju8IGhZgMMbWFSSMefrKzmAr1Og1EU7OhBG7sUkJQa9zYU3YAFXouhHevTPgXGnHqF0hVh890nkHeVHekMt1iz91V0qxTrSutp5XBXXcLSZPJRBlDKZkwi1aaPSqKoqS4pAJvwqlQL6W4aZu6P8xxUKn3Q742PseCEpCetiv5dojkKtVPx3qpB8U/3fTEWEHaPwaestXAEL2+/tps4JiMTe2HdX1LhkM/XrDkCgpPy/X8H4WorXF+MX12jvpCLfOlr4PGT2J9Tyhhv81e9UlOwg+K2y5DD6rdww4fKCksHr7U5JxA9YHK/mCniwZXv/KAOv3qTzeNjmvwc6jD6q9MrHSsYXhYCrwwwqrdluDnUC66brS0oJjb84NAUMwpLxgKanDxqlBQvcuuEArK6fVPKCg2BocqyvK3IS7r7z9AHepx1XXtqnl7PFe7gFD9ZselVEpJkZn0zcCAUI14WFYqW9nPHof3P35QL29Z+ZeV36HW6gf1mofk1sKKQ/ziBTUBfpL18FiXuooPVHkE3ETZyj0OB40PFBwlcQ1DOVxrfKDgR362GmIYqBLeeeQIf4QwUBMcI6kjfGcOA2WrlfAKGh0IyvZyIYM9PQyULUKy7FRBoArbDcXA0UIQKOu1yVICjlARKkJFqAgVoSJUhIpQESpCRagIFaEiVISKUBEqQkWoCPUGChpizw57Q8lNCql5rCao4wAMGaDC2vw5R/BPunyLUXJIywqHAsdYa8LwnyT3/D7KXyQbg5BsoYL+BasXiZxmWx6SDYxItnoi2RSLZvswmo3WSLako9m8j2abQ5INIRnN1pmMZJNRRqkd6z/P4k5mrSVm1gAAAABJRU5ErkJggg==" alt="LinkedIn" style={{ width: '16px', height: '16px', marginRight: '6px' }} />
          LinkedIn
        </a>
      </div>
    </ScrollStackItem>
  </ScrollStack>
</section>

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