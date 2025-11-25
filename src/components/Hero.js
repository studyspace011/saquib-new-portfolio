// src/components/Hero.js
import React from 'react';
import { userData } from '../data';

const Hero = () => {
  return (
    <section id="home" className="pt-32 min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-3/5 text-center md:text-left">
          <p className="text-xl text-primary-blue font-semibold mb-3">Hi, I'm {userData.name.split(' ')[0]}</p>
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            {userData.name}
          </h1>
          <p className="text-2xl text-gray-600 font-light mb-8">
            {userData.tagline}
          </p>
          <div className="space-x-4">
            <a 
              href="#projects"
              className="px-6 py-3 bg-primary-blue text-white font-semibold rounded-lg shadow-xl hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            >
              View My Work 💼
            </a>
            <a 
              href="#contact"
              className="px-6 py-3 text-primary-blue border border-primary-blue rounded-lg font-semibold hover:bg-indigo-50 transition duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
        {/* Placeholder for Professional Profile Image */}
        <div className="md:w-1/4 mt-10 md:mt-0">
          <div className="w-full aspect-square bg-gray-200 rounded-full mx-auto shadow-2xl flex items-center justify-center text-gray-500 text-sm">
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;