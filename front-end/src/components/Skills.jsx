import React, { useEffect, useRef } from "react";

export default function Skills() {
  const canvasRef = useRef(null);

  const skills = [
    { name: "React", icon: "https://cdn.simpleicons.org/react" },
    { name: "React Native", icon: "https://cdn.simpleicons.org/react" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
    { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
    { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python" },
    { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
    { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
    { name: "Express.js", icon: "https://cdn.simpleicons.org/express" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git" },
    { name: "AWS", icon: "https://logo.svgcdn.com/logos/aws.svg" },
    { name: "Linux", icon: "https://cdn.simpleicons.org/linux" },
    { name: "Flask", icon: "https://cdn.simpleicons.org/flask" },
    { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" }
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const alphabet = "01";
    const fontSize = 12;
    const columns = canvas.width / fontSize;
    const rainDrops = Array.from({ length: columns }).fill(1);

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 12, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 212, 255, 0.25)";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 40);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section className="skills-section" id="skills">
      <div className="binary-matrix-container">
        <canvas ref={canvasRef} />
      </div>
      <div className="skills-content">
        <h2>Technical <span>Stack</span></h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-item" title={skill.name}>
              <img src={skill.icon} alt={skill.name} className="skill-icon" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}