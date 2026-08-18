import React from "react";
import { Link } from "react-router-dom";
import blog3 from "../assets/ICEP2.JPG";

export default function Blogs() {
  const blogs = [
    {
      img: blog3,
      title: "My Journey at TUT and the ICEP Internship",
      date: "Dec 3, 2025",
      to: "/journey"
    }
  ];

  return (
    <section className="blogs" id="blog">
      <div className="sechead">
        <span className="eyebrow">04 Writing</span>
        <span className="line" />
      </div>

      <div className="blog-list">
        {blogs.map((b, i) => (
          <Link key={i} to={b.to} className="blog-card">
            <img src={b.img} alt="" loading="lazy" />
            <h4>{b.title}</h4>
            <p>{b.date}</p>
          </Link>
        ))}
      </div>

      <Link to="/journey" className="explore-link">
        Read the full journey →
      </Link>
    </section>
  );
}
