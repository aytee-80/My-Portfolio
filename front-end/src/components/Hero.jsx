import React, { useEffect, useRef } from 'react';
import amogelang from '../assets/graduate 2.jpeg';
import project from '../assets/Selection-removebg-preview.png';
import TextPressure from './reactbits/TextPressure';
import DecryptedText from './reactbits/DecryptedText';
import SideRays from './reactbits/sideRays';

export default function Hero() {
  const badgeRef = useRef(null);

  useEffect(() => {
    const badge = badgeRef.current;
    if (!badge) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const moveBadge = e => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      badge.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', moveBadge);
    return () => window.removeEventListener('mousemove', moveBadge);
  }, []);

  const goToProjects = () => {
    const section = document.querySelector('#projects');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="about">
      {/* Swapped LightRays for SideRays — a two-colour corner glow instead
          of a single top-down cone. origin="top-right" puts the source
          behind the portrait, so it reads as backlight spilling across the
          name rather than a spotlight on it. rayColor1/2 are the palette's
          two metals (gold, patina) instead of the demo's amber/blue.
          intensity and falloff are pulled down from the demo defaults
          (2 / 1.6) — at full strength the corner blows out to solid white
          before it reaches the text. */}
       <div className="hero-rays">
        <SideRays
          speed={2}
          rayColor1="#f0c368"
          rayColor2="#6ea79b"
          intensity={1.8}
          spread={2}
          origin="top-right"
          tilt={0}
          saturation={1.3}
          blend={0.8}
          falloff={1.6}
          opacity={0.9}
        />
      </div>
     

      <div className="hero-inner">
        <div className="hero-meta">
          <span className="eyebrow">Amogelang Thomson · Johannesburg, ZA</span>
          <span className="eyebrow hero-status">
            
            Open to junior &amp; graduate roles
          </span>
        </div>

        {/* Two real columns: the name/lede stack owns the left, the portrait
            owns a full-height column on the right. Previously the photo lived
            in a band *underneath* the name, which read as an afterthought
            rather than part of the hero. */}
        <div className="hero-body">
          <div className="hero-left">
            <div className="hero-pressure">
              <h1 className="sr-only">Amogelang Thomson — Junior Software Developer</h1>
              <div className="hero-name" aria-hidden="true">
                <TextPressure
                  text="AMOGELANG"
                  flex
                  alpha={false}
                  stroke={false}
                  width
                  weight
                  italic
                  textColor="#eae6dc"
                  minFontSize={28}
                  fitHeight
                />
              </div>
              <div className="hero-name" aria-hidden="true">
                <TextPressure
                  text="THOMSON"
                  flex
                  alpha={false}
                  stroke={false}
                  width
                  weight
                  italic
                  textColor="#c9a24b"
                  minFontSize={28}
                  fitHeight
                />
              </div>
            </div>

            <p className="hero-lede">
              Junior Software Developer building{' '}
              <DecryptedText
                text="software that pays attention"
                animateOn="view"
                sequential
                revealDirection="start"
                speed={38}
                className="hero-decrypt-on"
                encryptedClassName="hero-decrypt-off"
              />{' '}
               health tooling,security scanners, and full-stack platforms, and the systems people
              actually have to use every day.
            </p>

            <div className="hero-actions">
              <button type="button" className="btn btn-solid" onClick={goToProjects}>
                See the work
              </button>
              <a href="/about" className="btn btn-outline">
                More about me
              </a>
            </div>

           <p className="hero-hint">
              {/* TextPressure already listens for touchmove, so dragging a
                  finger across the name does warp it — a tap alone won't,
                  since there's no continuous cursor position to follow.
                  The desktop copy doesn't tell mobile visitors that, so
                  swap it via CSS at the same breakpoint the layout
                  itself switches to single-column. */}
              <span className="hero-hint-desktop">Move your cursor across the name</span>
              <span className="hero-hint-touch">Touch and drag across the name</span>
            </p>
            </div>

          <div className="hero-right">
            <div className="hero-card">
              <img src={amogelang} alt="Amogelang Thomson" className="hero-img" />
            </div>

            <div className="badge follow-badge" ref={badgeRef} onClick={goToProjects}>
              <img src={project} alt="Jump to projects" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}