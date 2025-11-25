// src/components/Projects.js
import React from 'react';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary-gray">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Featured Projects 🛠️</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 border border-gray-100">
              <h3 className="text-2xl font-semibold text-primary-blue mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-blue font-medium hover:text-indigo-800 transition duration-300 flex items-center"
              >
                View Project Details 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;