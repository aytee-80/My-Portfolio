import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import AboutMe from './pages/AboutMe';
import { useEffect } from 'react';

function App() {

  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
