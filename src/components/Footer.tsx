
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
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <p className="font-extrabold text-3xl gradient-text mb-2">Abdelkarim Elhafidi</p>
            <p className="text-blue-400 mb-4">Full Stack Software Developer</p>
            
            <p className="text-gray-400 max-w-md">
              Building modern web and mobile applications with a focus on quality, performance, and user experience.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://github.com/3kimE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card hover-lift p-3 rounded-full text-gray-400 hover:text-blue-400 flex items-center gap-2"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
              <span className="hidden sm:block">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/abdelkarim-el-hafidi-72655b262/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card hover-lift p-3 rounded-full text-gray-400 hover:text-blue-400 flex items-center gap-2"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
              <span className="hidden sm:block">LinkedIn</span>
            </a>
            <a 
              href="mailto:abdohafidi2000@gmail.com"
              className="glass-card hover-lift p-3 rounded-full text-gray-400 hover:text-blue-400 flex items-center gap-2"
              aria-label="Email Me"
            >
              <Mail size={20} />
              <span className="hidden sm:block">abdohafidi2000@gmail.com</span>
            </a>
            <a 
              href="tel:0614793062"
              className="glass-card hover-lift p-3 rounded-full text-gray-400 hover:text-blue-400 flex items-center gap-2"
              aria-label="Call Me"
            >
              <Phone size={20} />
              <span className="hidden sm:block">0614793062</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Abdelkarim Elhafidi. All rights reserved.
          </p>
          
          <div>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors hover-lift">Home</a>
              <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors hover-lift">About</a>
              <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors hover-lift">Experience</a>
              <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors hover-lift">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors hover-lift">Skills</a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors hover-lift">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
