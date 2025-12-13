import React from "react";

export default function Skills() {
  const skills = [
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "React Native", icon: "https://cdn.simpleicons.org/react" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
    { name: "CSS", icon: "https://simpleicons.org/icons/css.svg" },
    { name: "SCSS", icon: "https://cdn.simpleicons.org/sass" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
    { name: "Thunderbird", icon: "https://cdn.simpleicons.org/thunderbird" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    { name: "Express.js", icon: "https://cdn.simpleicons.org/express" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git" },
    { name: "AWS", icon: "https://logo.svgcdn.com/logos/aws.svg" },
    { name: "Linux", icon: "https://cdn.simpleicons.org/linux" },
    { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
    { name: "Flask", icon: "https://cdn.simpleicons.org/flask" },
    { name: "Spring (MVC)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
    
    { name: "OOP", icon: "https://cdn.simpleicons.org/cplusplus" },
    { name: "Expo", icon: "https://cdn.simpleicons.org/expo" },
    { name: "Render ", icon: "https://simpleicons.org/icons/render.svg" },
    { name: "JSON", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" }, // added JSON
  ];

  return (
    <section className="skills-section" style={{ padding: "6rem 0" }}>
      <div className="skills-content" style={{ textAlign: "center" }}>
        <h2>My Skills</h2>
        <div className="skills-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(60px, 1fr))",
            gap: "1.2rem",
            justifyItems: "center",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {skills.map((skill, i) => (
            <div key={i} className="skill-item" title={skill.name}
              style={{ width: "64px", height: "64px", display: "flex",
                       alignItems: "center", justifyContent: "center",
                       borderRadius: "14px" }}
            >
              <img src={skill.icon} alt={skill.name} style={{ width: "40px", height: "40px" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
