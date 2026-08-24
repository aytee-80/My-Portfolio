import React, { useState, useEffect } from "react";
import medi1 from "../assets/med 3.png";
import medi2 from "../assets/med 4.png";
import medi3 from "../assets/med 5.png";
import medi4 from "../assets/med 6.png";
import scan1 from "../assets/secure ai dash.png";
import scan2 from "../assets/secure ai run scan.png";
import scan3 from "../assets/results.png";
import DecryptedText from "./reactbits/DecryptedText";
import AccordionGallery from "./reactbits/AccordionGallery";

/* ──────────────────────────────────────────────────────────────
   ADD A PROJECT HERE.

   Everything renders from this array — a new project is a new
   object, no JSX to touch.

   1. Put screenshots in src/assets/ and import them at the top of
      this file, the same way med 3–6 are imported above.
   2. Copy the commented template at the bottom of the array,
      uncomment it, fill it in.
   3. Newest first — the list renders in array order.

   Fields:
     year        Short label, e.g. "2026".
     title       Project name. Keep it short; it's set in Anybody
                 at display size and long names wrap badly.
     blurb       Two sentences on the PROBLEM, not the feature list.
     images      1–5 screenshots. 2+ renders as an accordion gallery —
                 the first one expanded, others fanning open on hover.
                 A single image renders as a plain static shot. On
                 phones (below 640px), 2+ images also fall back to a
                 plain shot — see useIsMobile below.
     imageLabels Optional. One caption per entry in `images`, same
                 order. Shown on whichever panel is expanded. Omit
                 entirely (or leave shorter than `images`) to run
                 captionless — don't invent captions for screens you
                 haven't actually labelled.
     tech        3–5 max. Past five it reads as padding.
     url         Live link.
     linkLabel   "Launch application", "View on GitHub", "Read the writeup".
   ────────────────────────────────────────────────────────────── */

const PROJECTS = [
  {
    year: "2026",
    title: "SecureCode AI",
    blurb:
      "A vulnerability scanner for code that would otherwise only get caught in review or not at all. It runs a hardened, GEMINI-backed analysis prompt across 30+ vulnerability categories and surfaces structured findings straight to the frontend instead of a wall of raw model output.",
    images: [scan1, scan2, scan3],
    imageLabels: ["Dashboard", "AI Analysing", "Results"],
    tech: [
      { name: "React", icon: "https://cdn.simpleicons.org/react/79818f" },
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/79818f" },
      { name: "CSS", icon: "https://cdn.simpleicons.org/css3/79818f" },
      { name: "GEMINI", icon: "https://cdn.simpleicons.org/gemini/79818f" }
    ],
    url: "https://security-scaner-alpha.vercel.app/",
    linkLabel: "View project"
  },
  {
    year: "2025",
    title: "Medication Tracker",
    blurb:
      "An AI health assistant for people managing several prescriptions at once, where a missed dose usually goes unnoticed until it matters. It tracks adherence, sends reminders, and reads symptom descriptions and medical images to flag what's worth raising with a doctor.",
    images: [medi1, medi2, medi3, medi4],
    imageLabels: ["Login", "Dashboard", "AI assistant", "Analysis results"],
    tech: [
      { name: "Flask", icon: "https://cdn.simpleicons.org/flask/79818f" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/79818f" },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/79818f" },
      { name: "Groq", icon: "https://cdn.simpleicons.org/groq/79818f" }
    ],
    url: "https://medication-app2.onrender.com/",
    linkLabel: "Launch application"
  }

  // ── TEMPLATE — uncomment and fill in for your next project ──
  // ,{
  //   year: "2026",
  //   title: "",
  //   blurb: "",
  //   images: [shotOne, shotTwo],
  //   imageLabels: ["", ""],
  //   tech: [
  //     { name: "", icon: "https://cdn.simpleicons.org/SLUG/79818f" }
  //   ],
  //   url: "",
  //   linkLabel: "View on GitHub"
  // }
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="sechead">
        <span className="eyebrow">02 Selected work</span>
        <span className="line" />
      </div>

      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <ProjectEntry key={i} {...p} />
        ))}
      </div>
      <a
      
        href="https://github.com/aytee-80"
        className="browse-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Browse complete archive
      </a>
    </section>
  );
}

// AccordionGallery is a hover-driven, GSAP-timeline, ResizeObserver-watched
// component — a lot of moving parts for a phone screen where "hover" isn't
// even a real interaction. Rather than chase whichever specific thing broke
// on a specific device, phones just don't mount it at all: below 640px this
// hook flips ProjectEntry over to a single plain <img>, which cannot
// silently fail the way a multi-panel animated gallery can.
function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < breakpoint
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}

function ProjectEntry({ year, title, blurb, images, imageLabels, tech, url, linkLabel }) {
  const hasLabels = Array.isArray(imageLabels) && imageLabels.length >= images.length;
  const isMobile = useIsMobile();

  return (
    <article className="project-entry">
      <div className="project-gallery">
        {images.length === 0 ? (
          <div className="project-image-pending">Screenshots coming soon</div>
        ) : images.length > 1 && !isMobile ? (
          <AccordionGallery
            items={images.map((img, i) => ({
              image: img,
              label: hasLabels ? imageLabels[i] : undefined,
              alt: `${title} screenshot ${i + 1}`
            }))}
            defaultIndex={0}
            height={420}
            gap={10}
            radius={12}
            expandRatio={0.5}
            trigger="hover"
            showLabels={hasLabels}
            grayscale
            tilt={6}
            parallax={0.4}
            duration={0.5}
            // Reads the page's own tokens instead of hardcoded hex, so the
            // gallery re-skins automatically if the palette ever changes.
            accentColor="var(--accent)"
            overlayColor="var(--bg)"
            textColor="var(--text)"
            // Default cover crops these — they're wide UI screenshots
            // (~2.2:1), not photos, so cropping cuts off exactly the parts
            // that show it's a real dashboard. This class switches the
            // panels to object-fit: contain instead (see App.css).
            className="project-gallery-media"
          />
        ) : (
          <img
            src={images[0]}
            alt={`${title} screenshot`}
            className="project-image-single"
          />
        )}
      </div>

      <div className="project-meta">
        <div className="project-meta-head">
          <span className="project-year">{year}</span>
          <h3 className="project-title">
            {/* inViewHover: scrambles once on scroll-in, again on hover.
                Plain `hover` alone never fires on a touch screen. */}
            <DecryptedText
              text={title}
              animateOn="inViewHover"
              sequential
              revealDirection="start"
              speed={30}
              className="project-title-on"
              encryptedClassName="project-title-off"
            />
          </h3>
        </div>

        <p className="project-blurb">{blurb}</p>

        <div className="project-foot">
          <div className="tech-tags">
            {tech.map((t, i) => (
              <div key={i} className="tech-tag">
                <img src={t.icon} alt="" className="tech-icon" />
                <span>{t.name}</span>
              </div>
            ))}
          </div>
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer" className="project-link">
              {linkLabel} →
            </a>
          ) : (
            <span className="project-link project-link-pending">Link coming soon</span>
          )}
        </div>
      </div>
    </article>
  );
}