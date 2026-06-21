import React from "react";


import blog3 from "../assets/ICEP2.JPG";

export default function Blogs() {
  const blogs = [
    { img: blog3, title: "My Journey at TUT and ICEP Internship", date: "Dec 3, 2025" },
   
    
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
      <a href="/journey" className="explore-link" >
        View →
      </a>
    </section>
  );
}
