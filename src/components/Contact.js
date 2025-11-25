// src/components/Contact.js
import React from 'react';
import { userData } from '../data';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-primary-blue text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Let's Connect! 👋</h2>
        <p className="text-xl font-light mb-10">
          I am currently open to new opportunities and collaborations. Feel free to reach out.
        </p>
        
        <div className="flex justify-center flex-wrap gap-8">
          {/* Email Card */}
          <a href={`mailto:${userData.email}`} className="block p-6 bg-white bg-opacity-10 rounded-lg shadow-xl hover:bg-opacity-20 transition duration-300 w-full max-w-xs">
            <p className="text-2xl mb-2">📧 Email</p>
            <p className="font-semibold">{userData.email}</p>
          </a>

          {/* LinkedIn Card */}
          <a href={userData.linkedin} target="_blank" rel="noopener noreferrer" className="block p-6 bg-white bg-opacity-10 rounded-lg shadow-xl hover:bg-opacity-20 transition duration-300 w-full max-w-xs">
            <p className="text-2xl mb-2">🔗 LinkedIn</p>
            <p className="font-semibold">Connect Professionally</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;