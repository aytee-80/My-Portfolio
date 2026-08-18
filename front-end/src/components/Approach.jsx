import React from 'react';
import TrueFocus from './reactbits/TrueFocus';

/* Replaces the old Testimonials block. A testimonial quoting yourself isn't
   a testimonial — it's a mission statement, so it's framed as one and given
   the page's one big typographic moment. */
export default function Approach() {
  return (
    <section className="approach" id="approach">
      <div className="sechead">
        <span className="eyebrow">01 — Approach</span>
        <span className="line" />
      </div>

      <div className="approach-focus">
        <TrueFocus
          sentence="Software that pays attention."
          blurAmount={5}
          borderColor="#c9a24b"
          animationDuration={0.5}
          pauseBetweenAnimations={1.1}
        />
      </div>

      <div className="approach-body">
        <p>
          I'm a motivated Junior Software Developer committed to continuous
          learning and to building efficient, genuinely usable applications.
          My goal is to contribute to software that has real impact and to
          grow inside a team that ships.
        </p>
        <p>
          The interesting part of a project is rarely the feature list. It's
          whether a patient actually remembers their dose, whether a booking
          goes through on a bad connection, whether the person on the other
          side of the screen can finish what they came to do.{' '}
          <strong>That's the part I care about getting right.</strong>
        </p>
      </div>
    </section>
  );
}
