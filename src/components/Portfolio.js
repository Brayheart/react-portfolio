import React from 'react';
import TylerProfile from './TylerProfile.jpeg'
import { Link } from 'react-router-dom';


const Portfolio = () => {
  return (
    <div className="bg-black text-white">
      {/*
      <nav className="bg-black py-3">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#home" className="text-3xl font-bold">T</a>
          <div className="flex space-x-4">
            <a href="#portfolio" className="hover:text-gray-300">Portfolio</a>
            <a href="#blog" className="hover:text-gray-300">Blog</a>
          </div>
        </div>
      </nav>
       */}
      {/* Hero Section */}
      <div className="flex px-4 sm:px-6 lg:px-8 py-12 md:py-24 mx-auto max-w-screen-lg">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold">Tyler Bray</h1>
          <p className="text-xl md:text-2xl mt-3">Front End Developer | Tech Enthusiast & Lifelong Learner</p>
          <p className="mt-4 mb-8">Crafting, developing, and streamlining the digital experience: Designing, constructing, and optimizing the Web.</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-2 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white transition duration-300">
            <Link to="/about">More About Me</Link> 
          </button>
            <button className="px-6 py-2 bg-gray-700 hover:bg-gray-600 transition duration-300">
              Download Resume
            </button>
          </div>
          <div className="flex mt-8 space-x-4">
            <a href="https://github.com/Brayheart?tab=overview" target="_blank" className="hover:text-gray-300">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/tyler-hoyt-bray/" target="_blank" className="hover:text-gray-300">
              LinkedIn
            </a>
          </div>
        </div>
      
        <img src={TylerProfile} alt="Profile" className="rounded-full w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64" /> 
      </div>
    </div>
  );
};

export default Portfolio;
