import '../App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import { useEffect } from 'react';

function Home() {

  useEffect(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('section:not(.hero)').forEach(sec => {
    sec.classList.add('reveal');
    observer.observe(sec);
  });
}, []);
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Testimonials />
      <Blogs />
      <Contact />
    </div>
  );
}

export default Home;
