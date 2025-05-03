
import React from 'react';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-portfolio-blue" size={24} />,
      title: "Email",
      value: "contact@elhafidi.dev",
      link: "mailto:contact@elhafidi.dev"
    },
    {
      icon: <Phone className="text-portfolio-blue" size={24} />,
      title: "Phone",
      value: "+212 600 000000",
      link: "tel:+212600000000"
    },
    {
      icon: <MapPin className="text-portfolio-blue" size={24} />,
      title: "Location",
      value: "Agadir, Morocco"
    },
    {
      icon: <Linkedin className="text-portfolio-blue" size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/in/elhafidi",
      link: "https://linkedin.com/in/"
    }
  ];

  return (
    <section id="contact" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="animate-fade-in">
            <p className="text-lg text-gray-700 mb-6">
              I'm always open to new opportunities and collaborations. 
              Whether you have a question or just want to say hello, 
              I'll do my best to get back to you as soon as possible!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-portfolio-blue bg-opacity-10 p-3 rounded-md mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-portfolio-dark">{item.title}</h3>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-gray-600 hover:text-portfolio-blue transition-colors"
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
                className="inline-flex items-center px-6 py-3 bg-portfolio-blue text-white rounded-md font-medium hover:bg-portfolio-darkBlue transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm animate-fade-in-right">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue focus:border-transparent"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-portfolio-blue text-white rounded-md font-medium hover:bg-portfolio-darkBlue transition-colors duration-300"
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
