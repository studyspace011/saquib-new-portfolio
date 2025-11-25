// src/components/About.js
import React from 'react';
import { userData } from '../data';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">A Little About Me 🧑‍💻</h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-3/5">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {userData.aboutSummary}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              I thrive on tackling complex challenges and delivering user-centric, high-performance solutions. My core expertise spans modern JavaScript ecosystems, focusing on clean code architecture and efficient development workflows.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              I am constantly dedicated to expanding my knowledge base, ensuring every project I work on leverages the most effective and current best practices.
            </p>
          </div>
          <div className="md:w-2/5">
            <div className="w-full h-64 bg-primary-blue bg-opacity-10 rounded-lg shadow-xl flex items-center justify-center text-primary-blue text-sm font-semibold p-4">
                

[Image of a timeline or diagram showing professional development growth]

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;