// src/components/Skills.js
import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">My Technical Arsenal ⚙️</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.name} 
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 text-center"
            >
              <div className="text-5xl mb-3">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{skill.name}</h3>
              <p className="text-sm text-primary-blue font-medium">{skill.level}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 mt-10">
          I am always dedicated to expanding my stack and adopting best practices.
        </p>
      </div>
    </section>
  );
};

export default Skills;