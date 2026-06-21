import React, { useState } from "react";
import medi1 from "../assets/med 3.png"; 

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Featured <span>Projects</span></h2>

      <div className="projects-grid">
        <ProjectCard
          title="Medication Tracker (AI Health Assistant)"
          description="AI-powered medication management platform that helps patients track prescriptions, monitor adherence, receive automated reminders, and access intelligent health insights through symptom analysis, medical image review, and a conversational health assistant."
          images={[medi1, medi1, medi1, medi1]} // Replace with unique screenshots as you take them
          tech={[
            { name: "Flask", icon: "https://cdn.simpleicons.org/flask/ffffff" },
            { name: "Python", icon: "https://cdn.simpleicons.org/python/ffffff" },
            { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/ffffff" },
            { name: "Groq AI", icon: "https://cdn.simpleicons.org/openai/ffffff" }
          ]}
          githubUrl="https://medication-app2.onrender.com/"
        />
      </div>

      <a href="https://github.com/aytee-80" className="browse-btn" target="_blank" rel="noopener noreferrer">
        Browse Complete Archive
      </a>
    </section>
  );
}

function ProjectCard({ title, description, images, tech, githubUrl }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="project-card">
      <div 
        className="project-image-wrapper"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="project-image-container">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title} view ${index + 1}`}
              className="project-image"
              style={{
                transform: isHovered 
                  ? `translate3d(${index * 18}px, ${index * -12}px, 0) scale(0.95)` 
                  : `translate3d(${index * 4}px, ${index * 4}px, 0)`,
                zIndex: images.length - index,
                opacity: isHovered && index > 0 ? 0.8 : 1
              }}
            />
          ))}
        </div>
      </div>

      <div className="project-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="tech-tags">
          {tech.map((t, i) => (
            <div key={i} className="tech-tag">
              <img src={t.icon} alt={t.name} className="tech-icon" />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
          Launch Application →
        </a>
      </div>
    </div>
  );
}