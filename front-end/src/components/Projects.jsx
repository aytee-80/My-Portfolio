import React, { useState } from "react";
import libraryhub from "../assets/460244291-ed70d5c6-c147-4ea9-b6cd-6d7164dbee34.png";

import medi1 from "../assets/med 3.png";
import medi2 from "../assets/med 3.png";
import medi3 from "../assets/med 3.png";
import medi4 from "../assets/med 3.png";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        

        <ProjectCard
          title="Medication Tracker (AI-Powered Health Assistant)"
          description="AI-powered medication management platform that helps patients track prescriptions, monitor adherence, receive automated reminders, and access intelligent health insights through symptom analysis, medical image review, and a conversational health assistant."
          images={[medi1, medi2, medi3, medi4]}
          tech={[
            { name: "Flask", icon: "https://cdn.simpleicons.org/flask/000000", color: "#000000" },
            { name: "Python", icon: "https://cdn.simpleicons.org/python/3776ab", color: "#3776ab" },
            { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/336791", color: "#336791" },
            { name: "Render", icon: "https://cdn.simpleicons.org/render/e34c26", color: "#e34c26" },
            { name: "HTML", icon: "https://cdn.simpleicons.org/html5/e44d26", color: "#e44d26" },
            { name: "CSS", icon: "https://simpleicons.org/icons/css.svg", color: "#264de4" },
            { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/f7df1e", color: "#f7df1e" },
            { name: "groq ai", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/grok-ai-icon.png", color: "#000000" }
          ]}
          githubUrl="https://medication-app2.onrender.com/"
        />
      </div>

      <a href="https://github.com/aytee-80" className="browse-btn" target="_blank" rel="noopener noreferrer">
        Browse all projects
      </a>
    </section>
  );
}

function ProjectCard({ title, description, images, tech, githubUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="project-card">
      {/* Image Wrapper — LEFT */}
      <div
        className="project-image-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="project-image-container">
          {isHovered ? (
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} screenshot ${index + 1}`}
                className="project-image"
                style={{
                  transform: `translateX(${index * 20}px) translateY(${index * 8}px) rotate(${index * 2}deg)`,
                  zIndex: images.length - index,
                }}
              />
            ))
          ) : (
            <img src={images[0]} alt={title} className="project-image" />
          )}

          
        </div>
      </div>

      {/* Text Content — RIGHT */}
      <div className="project-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-tags">
          {tech.map((t, i) => (
            <div key={i} className="tech-tag" style={{ backgroundColor: t.color }}>
              <img src={t.icon} alt={t.name} className="tech-icon" />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          View project →
        </a>
      </div>
    </div>
  );
}