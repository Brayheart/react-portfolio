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
          <h1 className="text-4xl font-bold mb-5">Hi there, I'm Tyler</h1>
          <p className="mb-5">I'm a software engineer from Los Angeles California, passionate about connecting the dots between technology and user experience. At the heart of my work is a commitment to bridge the gap between technical possibilities and practical business strategies. My experience at Gartner sharpened my skills in data analysis and tech advisory, where I contributed to research that shapes industry trends. Infosys saw me thrive in agile project management, enhancing business solutions through strategic planning. My advocacy for impactful learning and user-centric design continued with Trilogy Education and Beam Health, where I drew on my full-stack capabilities to elevate the educational journey.</p>
          <p className="mb-5">Currently, I'm channeling my energy into personal projects, focusing on front-end web development and the innovative realm of generative AI. As I navigate this exciting phase, I'm on the lookout for opportunities that will leverage my enthusiasm for front-end innovation and my zeal for pushing the envelope in tech.</p>
          <p>Let's connect and explore how my journey can align with the future of technology and innovation.</p>
          {/* Additional paragraphs and content */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
