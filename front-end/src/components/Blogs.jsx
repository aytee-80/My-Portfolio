import React from "react";
import blog1 from "../assets/460244291-ed70d5c6-c147-4ea9-b6cd-6d7164dbee34.png";
import blog2 from "../assets/IMG_0275.jpeg";
import blog3 from "../assets/ICEP2.JPG";

export default function Blogs() {
  const blogs = [
    { img: blog1, title: "Building My First Full-Stack Web App", date: "Oct 16, 2025" },
    { img: blog2, title: "Learning Flask and Python for the Web", date: "Oct 2, 2025" },
    { img: blog3, title: "My Journey at TUT and ICEP Internship", date: "Sep 25, 2025" },
  ];

  return (
    <section className="blogs" id="blog">
      <h2>My Blogs</h2>
      <div className="blog-list">
        {blogs.map((b, i) => (
          <div key={i} className="blog-card">
            <img src={b.img} alt={b.title} />
            <h4>{b.title}</h4>
            <p>{b.date}</p>
          </div>
        ))}
      </div>
      <a href="https://github.com/aytee-80" className="explore-link" target="_blank" rel="noopener noreferrer">
        Explore →
      </a>
    </section>
  );
}
