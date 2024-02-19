// AboutMe.js
import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="bg-black text-white sm:h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto px-4 py-10">
        <div>
          <div className="mb-4">
            <button className="text-gray-500 hover:text-gray-300 animate-fade-up">
              &larr; <Link to="/">Go Back</Link>{" "}
            </button>
          </div>
          <h1 className="text-4xl font-bold mb-5 animate-fade-up animate-delay-[200ms] text-center sm:text-start">
            Hi there, I'm Tyler
          </h1>
          <p className="mb-5 animate-fade-up animate-delay-[400ms] text-center sm:text-start">
            I'm an experienced professional with a diverse background in
            technology and education. I hold a Bachelor of Science in Economics
            from Santa Clara University, where I was actively involved in
            extracurriculars like Speech and Debate.{" "}
          </p>
          <p className="mb-5 animate-fade-up animate-delay-[600ms] text-center sm:text-start">
            My career includes roles in front-end development, instructional
            support, and as an Associate Principal Analyst at Gartner, where I
            honed my skills in research and client consultations.
          </p>
          <p className="animate-fade-up animate-delay-[800ms] text-center sm:text-start">
            I'm skilled in agile methodologies, business analysis, and various
            programming languages, with certifications in AWS Solutions
            Architect Associate and Cloud Practitioner. My ability to innovate
            and problem-solve is complemented by a track record of enhancing
            business solutions and educational experiences.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
