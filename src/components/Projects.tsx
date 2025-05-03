
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Shopify E-commerce Integration",
      description: "Custom Shopify app that enhances the e-commerce experience with advanced product filtering, customer analytics, and inventory management.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["React", "Node.js", "Shopify API", "GraphQL"],
      github: "https://github.com/3kimE",
      live: "#",
    },
    {
      title: "Cheque Management System",
      description: "Web application for tracking and managing cheques, featuring user authentication, role-based access control, and automated notification system.",
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["React", "Material UI", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/3kimE",
      live: "#",
    },
    {
      title: "Streaming Mobile App",
      description: "Cross-platform mobile application for streaming content, with features like user profiles, content recommendation, and offline viewing.",
      image: "https://images.unsplash.com/photo-1585247226801-bc613c441316?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["Flutter", "Dart", "Firebase", "RESTful APIs"],
      github: "https://github.com/3kimE",
      live: "#",
    },
    {
      title: "Dynamic Website Portal",
      description: "Full-featured web portal with user management, content management system, and integrated payment processing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["PHP", "Bootstrap", "SQL Server", "JavaScript"],
      github: "https://github.com/3kimE",
      live: "#",
    }
  ];

  return (
    <section id="projects" className="py-24 relative bg-gradient-to-b from-portfolio-darkBlue to-black text-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-xl animate-fade-in transform transition-all hover:shadow-blue-500/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div 
                className="h-56 bg-cover bg-center" 
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="w-full h-full bg-gradient-to-t from-black to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-blue-400">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    className="flex items-center text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-2" />
                    Source Code
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/3kimE" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
