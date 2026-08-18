import React from "react";

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="contact-inner">
        <div className="sechead">
          <span className="eyebrow">05 — Contact</span>
          <span className="line" />
        </div>

        <h2>
          Hiring, or just want the code?{" "}
          <a href="mailto:amogelangthompson@gmail.com">Say hello →</a>
        </h2>

        <div className="contact-info">
          <a href="mailto:amogelangthompson@gmail.com">Email</a>
          <a href="tel:+27670729097">067 072 9097</a>
          <a
            href="https://www.linkedin.com/in/amogelang-thomson-369a7623a"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://github.com/aytee-80" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="/Amogelang_Thomson_CV.pdf" target="_blank" rel="noreferrer">
            Download CV
          </a>
        </div>

        <p className="footer-note">
          <span>
            Diploma in Computer Science, TUT · Best Overall Intern, ICEP
          </span>
          <span>© {new Date().getFullYear()} · Built in Johannesburg</span>
        </p>
      </div>
    </footer>
  );
}
