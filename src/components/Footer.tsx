
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-white">Abdelkarim Elhafidi</p>
            <p className="text-blue-300 mt-1">Full Stack Software Developer</p>
          </div>
          
          <div className="flex space-x-8">
            <a 
              href="https://github.com/3kimE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={22} />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdelkarim-el-hafidi-72655b262/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={22} />
            </a>
            <a 
              href="mailto:abdohafidi2000@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              aria-label="Email Me"
            >
              <Mail size={22} />
            </a>
            <a 
              href="tel:0614793062" 
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
              aria-label="Call Me"
            >
              <Phone size={22} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Abdelkarim Elhafidi. All rights reserved.
          </p>
          
          <div>
            <nav className="flex flex-wrap justify-center space-x-4 text-sm">
              <a href="#home" className="text-gray-400 hover:text-white transition-colors mb-2">Home</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors mb-2">About</a>
              <a href="#experience" className="text-gray-400 hover:text-white transition-colors mb-2">Experience</a>
              <a href="#projects" className="text-gray-400 hover:text-white transition-colors mb-2">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors mb-2">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
