import '../App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Seam from '../components/Seam';
import Approach from '../components/Approach';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    // Reduced motion: leave everything visible rather than parking sections
    // at opacity 0 and relying on an observer that may never fire.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('show');
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section:not(.hero)').forEach(sec => {
      sec.classList.add('reveal');
      observer.observe(sec);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Seam text="JAVA ✦ SPRING BOOT ✦ REACT ✦ PYTHON ✦ POSTGRESQL ✦ AWS ✦" />
      <Approach />
      <Projects />
      <Skills />
      <Blogs />
      <Contact />
    </div>
  );
}

export default Home;
