
import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient and particle effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-darkBlue via-black to-portfolio-blue opacity-90 z-0"></div>
      
      {/* Animated particles */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-20 left-1/4 w-24 h-24 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-indigo-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-sky-500 rounded-full filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 order-2 md:order-1">
            <div className="space-y-6">
              <h2 className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-blue-300 font-medium shadow-xl transform hover:scale-105 transition-all animate-fade-in">
                Welcome to my digital workspace
              </h2>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight animate-fade-in" style={{ animationDelay: "0.2s" }}>
                I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300">Abdelkarim Elhafidi</span>
              </h1>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 tracking-tight animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <span className="text-white">Full Stack</span> Software Developer
              </h3>
              
              <p className="text-lg text-gray-300 max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.6s" }}>
                Building exceptional digital experiences with modern technologies.
                Specialized in web and mobile development with a focus on quality and user experience.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2 animate-fade-in" style={{ animationDelay: "0.8s" }}>
                <a 
                  href="#contact" 
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Get in Touch
                </a>
                <a 
                  href="#projects" 
                  className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  View My Work
                </a>
              </div>
              
              <div className="flex items-center space-x-6 pt-4 animate-fade-in" style={{ animationDelay: "1s" }}>
                <a 
                  href="https://github.com/3kimE" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  aria-label="GitHub Profile"
                >
                  <Github size={isMobile ? 22 : 24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/abdelkarim-el-hafidi-72655b262/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={isMobile ? 22 : 24} />
                </a>
                <a 
                  href="mailto:abdohafidi2000@gmail.com" 
                  className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  aria-label="Email Me"
                >
                  <Mail size={isMobile ? 22 : 24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-4 order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 -m-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full filter blur-xl opacity-40 animate-pulse"></div>
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl relative z-10">
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
