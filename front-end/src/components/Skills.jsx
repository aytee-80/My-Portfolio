import React from "react";
import LogoLoop from "./reactbits/LogoLoop";

const SKILLS = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "Flask", icon: "https://cdn.simpleicons.org/flask" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "React Native", icon: "https://cdn.simpleicons.org/react" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Express.js", icon: "https://cdn.simpleicons.org/express" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Linux", icon: "https://cdn.simpleicons.org/linux" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github" }
];

/* The wordmark marquee is the loud version of the stack; the hairline grid
   below it is the scannable one. Recruiters skim the first and check the
   second, so both earn their place. */
const WORDMARKS = [
  "Java", "Spring Boot", "React", "React Native", "Python", "Flask",
  "PostgreSQL", "MongoDB", "Node.js", "Docker", "AWS", "Git"
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="sechead">
        <span className="eyebrow">03 — Stack</span>
        <span className="line" />
      </div>

      <div className="loopwrap">
        <LogoLoop
          logos={WORDMARKS.map(w => ({
            node: <span className="stack-word">{w}</span>,
            ariaLabel: w
          }))}
          speed={55}
          direction="left"
          hoverSpeed={16}
          logoHeight={26}
          gap={56}
          fadeOut
          scaleOnHover={false}
          ariaLabel="Technologies I work with"
        />
      </div>

      <div className="skills-grid">
        {SKILLS.map((skill, i) => (
          <div key={i} className="skill-item" title={skill.name}>
            <img src={skill.icon} alt="" className="skill-icon" loading="lazy" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
