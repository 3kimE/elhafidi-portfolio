
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 pt-16 overflow-hidden">
      <div className="absolute right-0 top-1/3 w-64 h-64 bg-portfolio-lightBlue rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute left-10 bottom-1/4 w-48 h-48 bg-portfolio-blue rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <div className="inline-block px-4 py-1 bg-blue-50 rounded-full text-portfolio-blue font-medium mb-4 shadow-sm">
              Welcome to my portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-dark mb-4 leading-tight">
              Hi, I'm <span className="text-portfolio-blue">Abdelkarim Elhafidi</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-bold text-portfolio-gray mb-6 leading-snug">
              Full Stack Software Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              Building modern web and mobile applications with a focus on quality, 
              performance, and user experience.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-gradient-to-r from-portfolio-blue to-portfolio-darkBlue text-white rounded-md font-medium hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-portfolio-blue text-portfolio-blue rounded-md font-medium hover:bg-portfolio-blue hover:text-white transition-colors duration-300 hover:shadow-md"
              >
                View Projects
              </a>
            </div>
            
            <div className="mt-8 flex space-x-6">
              <a 
                href="https://github.com/3kimE" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-portfolio-blue transition-colors duration-300 transform hover:scale-110"
              >
                <Github size={isMobile ? 20 : 24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/abdelkarim-el-hafidi-72655b262/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-portfolio-blue transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin size={isMobile ? 20 : 24} />
              </a>
              <a 
                href="mailto:abdohafidi2000@gmail.com" 
                className="text-gray-600 hover:text-portfolio-blue transition-colors duration-300 transform hover:scale-110"
              >
                <Mail size={isMobile ? 20 : 24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue to-portfolio-lightBlue rounded-full opacity-20 blur-xl transform -translate-y-4 translate-x-4"></div>
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-white border-4 border-portfolio-blue border-opacity-20 flex items-center justify-center relative shadow-2xl overflow-hidden">
                <div className="bg-gradient-to-br from-portfolio-lightBlue to-portfolio-blue opacity-10 absolute inset-0"></div>
                <span className="text-7xl relative z-10">👨‍💻</span>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-portfolio-blue rounded-full opacity-20"></div>
                <div className="absolute -top-5 -left-5 w-20 h-20 bg-portfolio-lightBlue rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
