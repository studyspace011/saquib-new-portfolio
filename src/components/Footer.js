// src/components/Footer.js
import React from 'react';
import { userData } from '../data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-3">
          Designed and Coded with Passion by {userData.name}
        </p>
        <div className="space-x-4 mb-3">
            <a href={userData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary-blue transition">LinkedIn</a>
            <span className="text-gray-500">•</span>
            <a href={userData.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary-blue transition">GitHub</a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; {currentYear} {userData.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;