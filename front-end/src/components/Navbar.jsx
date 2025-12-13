// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className={`navbar ${location.pathname !== '/' ? 'scrolled' : ''}`}>
      
      <div className="nav-right">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
        <a href="/journey">Blogs</a>
        
      </div>
    </nav>
  );
}
