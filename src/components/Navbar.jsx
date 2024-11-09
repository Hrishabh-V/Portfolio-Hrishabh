import React from 'react';
import "../styles/Navbar.css";
const Navbar = () => {
  return (
    <nav class="p-4">
      <ul className="flex space-x-6">
        {/* Use standard anchor links for sections */}
        <li><a href="#intro">Me</a></li>
        <li><a href="https://drive.google.com/file/d/1F--AG9ghA8GEy8Tq7os3dSXoZasop8wO/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li><a href="#projects" className="hover:text-violet-500">Projects</a></li>
        <li><a href="#exp" className="hover:text-violet-500">Exp</a></li>
        <li><a href="#contact" className="hover:text-violet-500">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
