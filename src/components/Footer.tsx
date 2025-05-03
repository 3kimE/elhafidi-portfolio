
import React from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const contactInfo = {
    email: "abdohafidi2000@gmail.com",
    phone: "0614793062",
    github: "https://github.com/3kimE",
    linkedin: "https://www.linkedin.com/in/abdelkarim-el-hafidi-72655b262/"
  };
  
  return (
    <footer className="bg-black text-white pt-20 pb-10 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <h2 className="font-extrabold text-3xl mb-2">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Abdelkarim Elhafidi</span>
              </h2>
              <p className="text-blue-400 mb-4">Full Stack Software Developer</p>
            </div>
            
            <p className="text-gray-400 max-w-md leading-relaxed">
              Building modern web and mobile applications with a focus on quality, performance, and user experience. I'm passionate about creating elegant solutions to complex problems.
            </p>
            
            <div className="flex flex-col space-y-3 text-gray-300">
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 hover:text-blue-400 transition-colors group"
              >
                <span className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                  <Mail size={18} />
                </span>
                <span>{contactInfo.email}</span>
              </a>
              
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 hover:text-blue-400 transition-colors group"
              >
                <span className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                  <Phone size={18} />
                </span>
                <span>{contactInfo.phone}</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <nav className="flex flex-col space-y-4 text-gray-400">
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
                <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </nav>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Connect</h3>
              <div className="flex flex-col space-y-4">
                <a 
                  href={contactInfo.github}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <span className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                    <Github size={18} />
                  </span>
                  <span>GitHub</span>
                  <ExternalLink size={14} className="opacity-70" />
                </a>
                
                <a 
                  href={contactInfo.linkedin}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <span className="p-2 bg-white/5 rounded-lg group-hover:bg-blue-500/10 transition-colors">
                    <Linkedin size={18} />
                  </span>
                  <span>LinkedIn</span>
                  <ExternalLink size={14} className="opacity-70" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Abdelkarim Elhafidi. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a 
              href={contactInfo.github}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href={contactInfo.linkedin}
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={`mailto:${contactInfo.email}`}
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href={`tel:${contactInfo.phone}`}
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
