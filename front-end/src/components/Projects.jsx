import React from "react";
import libraryhub from "../assets/460244291-ed70d5c6-c147-4ea9-b6cd-6d7164dbee34.png";
import medi from "../assets/460244291-ed70d5c6-c147-4ea9-b6cd-6d7164dbee34.png";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="hero ">
        <div className= "hero-left">
        <h4>First Project</h4>
        <h2>Library Hub</h2>
        <p>
          A full-stack web application developed using Java, JSP, Servlets, HTML, CSS, and PostgreSQL.
          It features user registration, login, borrow/return/reserve system, and an admin panel with
          role-based access control built under the MVC architecture.
        </p>

        <a
          href="https://github.com/aytee-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          View project →
        </a>
        </div>
        <div className= "hero-left">
        <img src={libraryhub} alt="Library Hub"  className= "image-project" />
        </div>
        
      </div>

      <div className="hero ">
        <div className= "hero-left">
        <h4>Second Project</h4>
        <h2>Medication Tracker</h2>
        <p>
          A Flask-based medication management app built with Python, PostgreSQL, JavaScript, HTML, and CSS.
          Users can register, log in, add medication schedules, receive automated email reminders, and track
          their pill usage. Hosted on Render.
        </p>

         <a
          href="https://github.com/aytee-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          View project →
        </a>
        </div>
        <div className= "hero-left">
        <div className="medi-images">
          <img src={medi} alt="Medication Tracker" className= "image-project" />
        </div>
        </div>
       
      </div>

      <button className="browse-btn">Browse all projects</button>
    </section>
  );
}
