import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import AboutMe from './components/Aboutme'; // Make sure the file name is correct
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectsArchive from './components/Projectsarchive';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
        <Routes>
          <Route exact path="/" element={<Projects />} />
          <Route path="/projects" element={<ProjectsArchive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
