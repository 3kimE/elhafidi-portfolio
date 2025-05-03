
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <p className="text-portfolio-blue font-semibold mb-2">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-dark mb-4">
              Abdelkarim Elhafidi
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-portfolio-gray mb-6">
              Full Stack Software Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Building modern web and mobile applications with a focus on quality, 
              performance, and user experience.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-portfolio-blue text-white rounded-md font-medium hover:bg-portfolio-darkBlue transition-colors duration-300"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-portfolio-blue text-portfolio-blue rounded-md font-medium hover:bg-portfolio-blue hover:text-white transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-portfolio-blue transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-600 hover:text-portfolio-blue transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-portfolio-blue bg-opacity-10 border-4 border-portfolio-blue border-opacity-20 flex items-center justify-center">
              <span className="text-7xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
