// AboutMe.js
import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="bg-black text-white sm:h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-8 py-10">
        <div>
          <div className="mb-4">
            <button className="text-gray-500 hover:text-gray-300 animate-fade-up">&larr; <Link to="/">Go Back</Link> </button>
          </div>
          <h1 className="text-4xl font-bold mb-5 animate-fade-up animate-delay-[200ms] text-center sm:text-start">Hi there, I'm Tyler</h1>
          <p className="mb-5 animate-fade-up animate-delay-[400ms] text-center sm:text-start">I'm a Los Angeles-based software engineer dedicated to bridging technology with user needs. My tenure at Gartner honed my data analysis and advisory expertise, contributing to pivotal industry research. At Infosys, I excelled in agile project management, driving business solutions with strategic foresight. My journey continued at Trilogy Education and Beam Health, where I leveraged full-stack development to enhance educational experiences.</p>
          <p className="mb-5 animate-fade-up animate-delay-[600ms] text-center sm:text-start">Currently, I'm channeling my energy into personal projects, focusing on front-end web development and the innovative realm of generative AI. As I navigate this exciting phase, I'm on the lookout for opportunities that will leverage my enthusiasm for front-end innovation and my zeal for pushing the envelope in tech.</p>
          <p className='animate-fade-up animate-delay-[800ms] text-center sm:text-start'>Let's connect and explore how my journey can align with the future of technology and innovation.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
