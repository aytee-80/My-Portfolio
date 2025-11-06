import React from "react";
import person from "../assets/IMG_0684.jpeg";

export default function Testimonials() {
  return (
    <section className="testimonial">
      <img src={person} alt="Amogelang" />
      <div className="testimonial-text">
        <h4>Personal Quote</h4>
        <p>
          “I am a motivated and eager Junior Software Developer, committed to continuous learning
          and creating efficient, user-friendly applications. My goal is to contribute to impactful
          software projects and grow in a dynamic development team.”
        </p>
        <p className="client">— Amogelang Thomson</p>
      </div>
    </section>
  );
}
