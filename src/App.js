import React, {useEffect } from 'react';
import Header from './components/header';
import AboutMe from './components/Aboutme';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ProjectsArchive from './components/Projectsarchive'; 

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black">
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectsArchive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
