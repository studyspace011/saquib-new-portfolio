// src/components/Header.js
import React from 'react';
import { userData } from '../data';

const Header = () => {
  return (
    <header className="fixed w-full z-10 bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 hover:text-primary-blue transition duration-300">
          {userData.name.split(' ')[0]}<span className="text-primary-blue">.dev</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-gray-600 hover:text-primary-blue font-medium transition duration-300 hover:underline"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;