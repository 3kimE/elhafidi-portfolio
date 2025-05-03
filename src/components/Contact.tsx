
import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Github } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';

const Contact: React.FC = () => {
  const isMobile = useIsMobile();
  
  const contactInfo = [
    {
      icon: <Mail className="text-portfolio-blue" size={24} />,
      title: "Email",
      value: "abdohafidi2000@gmail.com",
      link: "mailto:abdohafidi2000@gmail.com"
    },
    {
      icon: <Phone className="text-portfolio-blue" size={24} />,
      title: "Phone",
      value: "0614793062",
      link: "tel:0614793062"
    },
    {
      icon: <MapPin className="text-portfolio-blue" size={24} />,
      title: "Location",
      value: "Agadir, Morocco"
    },
    {
      icon: <Linkedin className="text-portfolio-blue" size={24} />,
      title: "LinkedIn",
      value: "Abdelkarim El Hafidi",
      link: "https://www.linkedin.com/in/abdelkarim-el-hafidi-72655b262/"
    },
    {
      icon: <Github className="text-portfolio-blue" size={24} />,
      title: "GitHub",
      value: "3kimE",
      link: "https://github.com/3kimE"
    }
  ];

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-fade-in">
            <p className="text-lg text-gray-700 mb-6">
              I'm always open to new opportunities and collaborations. 
              Whether you have a question or just want to say hello, 
              I'll do my best to get back to you as soon as possible!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start transform transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="bg-portfolio-blue bg-opacity-10 p-3 rounded-md mr-4 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-portfolio-dark">{item.title}</h3>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-gray-600 hover:text-portfolio-blue transition-colors"
                        target={item.link.startsWith('http') ? "_blank" : undefined}
                        rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a 
                href="resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-portfolio-blue to-portfolio-darkBlue text-white rounded-md font-medium hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]"
              >
                Download CV
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg animate-fade-in-right border border-blue-100">
            <form>
              <div className="mb-4">
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent transition-all duration-300"
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent transition-all duration-300"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent transition-all duration-300"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-gradient-to-r from-portfolio-blue to-portfolio-darkBlue text-white rounded-md font-medium hover:shadow-lg transition-all duration-300 transform hover:translate-y-[-2px]"
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
