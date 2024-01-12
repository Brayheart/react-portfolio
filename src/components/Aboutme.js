// AboutMe.js
import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="bg-black text-white sm:h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 py-10">
        <div>
          <div className="mb-4">
            <button className="text-gray-500 hover:text-gray-300 animate-fade-up">&larr; <Link to="/">Go Back</Link> </button>
          </div>
          <h1 className="text-4xl font-bold mb-5 animate-fade-up animate-delay-[200ms] text-center sm:text-start">Hi there, I'm Tyler</h1>
          <p className="mb-5 animate-fade-up animate-delay-[400ms] text-center sm:text-start">I'm a Los Angeles-based software engineer with a background in data analysis, project management, and full-stack development, now specializing in front-end web development and generative AI. I'm looking for opportunities to apply my skills in a role that values innovation and technological progress. Let's discuss potential collaborations.</p>
          <p className="mb-5 animate-fade-up animate-delay-[600ms] text-center sm:text-start">Currently, I'm channeling my energy into personal projects, focusing on front-end web development and the innovative realm of generative AI. As I navigate this exciting phase, I'm on the lookout for opportunities that will leverage my enthusiasm for front-end innovation and my zeal for pushing the envelope in tech.</p>
          <p className='animate-fade-up animate-delay-[800ms] text-center sm:text-start'>Let's connect and explore how my journey can align with the future of technology and innovation.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
