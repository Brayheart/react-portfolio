import React from 'react';
import Header from './components/header';
import AboutMe from './components/Aboutme';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectsArchive from './components/Projectsarchive'; 

function App() {
  return (
    <Router>
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
