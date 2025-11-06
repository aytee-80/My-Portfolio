import React from "react";

export default function Skills() {
  const skills = [
    "Java", "React", "Node.js", "Python", "Kotlin", "SQL", "PL/SQL",
    "HTML", "CSS", "JavaScript", "Flask", "Express.js", "JSP", "Servlets",
    "MySQL", "PostgreSQL", "MongoDB", "Firebase", "AWS DevOps", "Git",
    "MVC Architecture", "RESTful APIs", "OOP", "Teamwork", "Problem Solving"
  ];

  return (
    <section className="skills">
      <h2>My Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <p key={i}>{skill}</p>
        ))}
      </div>
    </section>
  );
}
