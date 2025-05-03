
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Shopify E-commerce Integration",
      description: "Custom Shopify app that enhances the e-commerce experience with advanced product filtering, customer analytics, and inventory management.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["React", "Node.js", "Shopify API", "GraphQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Cheque Management System",
      description: "Web application for tracking and managing cheques, featuring user authentication, role-based access control, and automated notification system.",
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["React", "Material UI", "Node.js", "Express", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      title: "Streaming Mobile App",
      description: "Cross-platform mobile application for streaming content, with features like user profiles, content recommendation, and offline viewing.",
      image: "https://images.unsplash.com/photo-1585247226801-bc613c441316?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["Flutter", "Dart", "Firebase", "RESTful APIs"],
      github: "#",
      live: "#",
    },
    {
      title: "Dynamic Website Portal",
      description: "Full-featured web portal with user management, content management system, and integrated payment processing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      technologies: ["PHP", "Bootstrap", "SQL Server", "JavaScript"],
      github: "#",
      live: "#",
    }
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-portfolio-dark">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    className="flex items-center text-sm font-medium text-gray-600 hover:text-portfolio-blue"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center text-sm font-medium text-gray-600 hover:text-portfolio-blue"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#" 
            className="inline-block px-6 py-3 border border-portfolio-blue text-portfolio-blue rounded-md font-medium hover:bg-portfolio-blue hover:text-white transition-colors duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
