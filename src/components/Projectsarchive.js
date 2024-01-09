// AboutMe.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsArchive = () => {
  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">
      <h1>Projects Archive</h1>
      &larr; <Link to="/">Go Back</Link> 
    </div>
  );
};

export default ProjectsArchive;
