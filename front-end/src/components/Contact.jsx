// Contact.js
import React from "react";

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <h2>Get In <span>Touch</span></h2>
      <div className="contact-info">
        <p><a href="mailto:amogelangthompson@gmail.com">amogelangthompson@gmail.com</a></p>
        <p><a href="tel:+27670729097">067 072 9097</a></p>
        <p><a href="https://www.linkedin.com/in/amogelang-thomson-369a7623a" target="_blank" rel="noreferrer">LinkedIn</a></p>
        <p><a href="https://github.com/aytee-80" target="_blank" rel="noreferrer">GitHub</a></p>
      </div>
      <p className="footer-note">© {new Date().getFullYear()} Amogelang Thomson. Built cleanly using React.</p>
    </footer>
  );
}