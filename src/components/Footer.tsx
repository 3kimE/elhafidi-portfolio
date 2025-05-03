
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <p className="font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 mb-2">Abdelkarim Elhafidi</p>
            <p className="text-blue-400 mb-4">Full Stack Software Developer</p>
            
            <p className="text-gray-400 max-w-md">
              Building modern web and mobile applications with a focus on quality, performance, and user experience.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/3kimE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-full text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-colors transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/abdelkarim-el-hafidi-72655b262/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-full text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-colors transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:abdohafidi2000@gmail.com"
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-full text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-colors transform hover:scale-110"
              aria-label="Email Me"
            >
              <Mail size={24} />
            </a>
            <a 
              href="tel:0614793062"
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-3 rounded-full text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-colors transform hover:scale-110"
              aria-label="Call Me"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Abdelkarim Elhafidi. All rights reserved.
          </p>
          
          <div>
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
