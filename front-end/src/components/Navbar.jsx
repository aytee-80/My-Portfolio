import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left"></div>
      <div className="nav-right">
        <a href="#projects">Projects</a>
        <a href="#about">About me</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
