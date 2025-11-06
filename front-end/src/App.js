import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import Contact from './components/Contact';

function App() {
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

export default App;
