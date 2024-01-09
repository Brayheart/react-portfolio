// AboutMe.js
import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="bg-black text-white h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-4">
        <div>
          {/* Back button, if needed */}
          <div className="mb-4">
            <button className="text-gray-500 hover:text-gray-300">&larr; <Link to="/">Go Back</Link> </button>
          </div>
          {/* Main content */}
          <h1 className="text-4xl font-bold mb-4">Hi there, I'm [Name] aka [Nickname].</h1>
          <p className="mb-4">I'm a software engineer from [Location] passionate about...</p>
          {/* Additional paragraphs and content */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
