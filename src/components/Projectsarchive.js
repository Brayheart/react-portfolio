import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsArchive = () => {
  return (
<div className="bg-black text-white min-h-screen">
  {/* Go Back Button */}
  <div className="container mx-auto px-4 py-8">
    <div className="mb-8">
      <Link to="/" className="text-blue-500 hover:text-blue-300 flex items-center font-semibold">
        ← Go Back
      </Link>
    </div>

    {/* Current Focus Section */}
    <h2 className="text-2xl font-bold mb-4">Current Focus</h2>
    <div className="grid items-center justify-center xl:grid-cols-3 gap-2 pt-2 lg:pt-5 pb-8 px-0 sm:px-2">
      <div className="space-y-4">
        {/* Individual Project */}
        <div className="flex items-center space-x-4">
          <div className="shrink-0">
            {/* <span className="text-3xl">🎬</span> */}
          </div>
          <div>
            <h3 className="text-xl font-semibold">React HLS Player</h3>
            <p className="text-gray-400">A custom react hls player inspired by YouTube with bitrate options if available.</p>
          </div>
        </div>
        {/* ... More projects */}
      </div>
    </div>

    {/* Web Applications Section */}
    <h2 className="text-2xl font-bold mb-4">Web Applications</h2>
    <div className="grid items-center justify-center xl:grid-cols-3 gap-2 pt-2 lg:pt-5 pb-8 px-0 sm:px-2">
      <div className="space-y-4">
        {/* Individual Project */}
        <div className="flex items-center space-x-4">
          <div className="shrink-0">
            {/* <span className="text-3xl">♟️</span>  */}
          </div>
          <div>
            <h3 className="text-xl font-semibold">Chess Thing</h3>
            <p className="text-gray-400">A modern chess web application built with performance and scale in mind.</p>
          </div>
        </div>
        {/* ... More projects */}
      </div>
    </div>

    {/* DevTools Section */}
    <h2 className="text-2xl font-bold mb-4">DevTools</h2>
    <div className="grid items-center justify-center xl:grid-cols-3 gap-2 pt-2 lg:pt-5 pb-8 px-0 sm:px-2">
      <div className="space-y-4">
        {/* Individual Project */}
        <div className="flex items-center space-x-4">
          <div className="shrink-0">
            {/* <span className="text-3xl">🛠️</span>  */}
          </div>
          <div>
            <h3 className="text-xl font-semibold">Another Tool</h3>
            <p className="text-gray-400">Description of the tool or project related to development tools.</p>
          </div>
        </div>
        {/* ... More projects */}
      </div>
    </div>
  </div>
</div>

  );
};

export default ProjectsArchive;
