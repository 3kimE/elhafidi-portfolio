
import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact: React.FC = () => {
  const isMobile = useIsMobile();
  
  const contactInfo = [
    {
      icon: <Mail className="text-blue-400" size={24} />,
      title: "Email",
      value: "abdohafidi2000@gmail.com",
      link: "mailto:abdohafidi2000@gmail.com"
    },
    {
      icon: <Phone className="text-blue-400" size={24} />,
      title: "Phone",
      value: "0614793062",
      link: "tel:0614793062"
    },
    {
      icon: <MapPin className="text-blue-400" size={24} />,
      title: "Location",
      value: "Agadir, Morocco"
    },
    {
      icon: <Linkedin className="text-blue-400" size={24} />,
      title: "LinkedIn",
      value: "Abdelkarim El Hafidi",
      link: "https://www.linkedin.com/in/abdelkarim-el-hafidi-72655b262/"
    },
    {
      icon: <Github className="text-blue-400" size={24} />,
      title: "GitHub",
      value: "3kimE",
      link: "https://github.com/3kimE"
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-gradient-to-b from-black to-portfolio-darkBlue text-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to contact me through any of the methods below.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl shadow-xl transform transition-all hover:shadow-blue-500/10 hover:-translate-y-2"
                >
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 p-3 rounded-xl mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{item.title}</h3>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                          target={item.link.startsWith('http') ? "_blank" : undefined}
                          rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{item.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Download CV
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <form className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl">
              <div className="mb-6">
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
