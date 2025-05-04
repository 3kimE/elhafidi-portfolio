
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "DevOps Crowd",
      location: "Canada (Remote)",
      position: "Full Stack Developer & Team Lead",
      period: "Dec 2023 - Jan 2025",
      description: [
        "Specialized in Shopify app development, creating custom templates to enhance e-commerce experiences",
        "Led development teams using ClickUp and Azure DevOps to manage project workflows efficiently",
        "Coordinated between teams to ensure timely project delivery and client satisfaction",
        "Developed custom Shopify solutions using JavaScript, Liquid, and React"
      ]
    },
    {
      company: "Aksolus Agadir",
      position: "React Developer",
      location: "Agadir, Morocco",
      period: "Apr 2023 - Jun 2023",
      description: [
        "Developed a check management web application using React and Node.js",
        "Implemented responsive UI components with Material UI",
        "Worked with REST APIs for data fetching and state management",
        "Collaborated in an Agile development environment"
      ]
    },
    {
      company: "IRONDEV Technopark Souss Massa",
      position: "Flutter Developer",
      location: "Agadir, Morocco",
      period: "Apr 2022 - Jun 2022",
      description: [
        "Built a streaming mobile application using Flutter",
        "Implemented cross-platform compatibility for Android and iOS devices",
        "Created responsive and intuitive UI designs",
        "Integrated media streaming APIs and user authentication"
      ]
    },
    {
      company: "VALA BLUE",
      position: "Web Developer",
      location: "Taroudant, Morocco",
      period: "Jul 2021 - Aug 2021",
      description: [
        "Developed dynamic web applications using PHP, Bootstrap, and SQL Server",
        "Created database schemas and implemented data access layers",
        "Built responsive user interfaces with Bootstrap",
        "Managed client-side form validation and server-side data processing"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-gradient-to-b from-portfolio-darkBlue to-black text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Experience</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl">
            My professional journey through various roles and projects in the tech industry.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-ml-0.5 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
          
          <div className="space-y-16 relative">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row gap-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:order-2 md:pl-12'}`}>
                  <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl shadow-xl transition-all hover:shadow-blue-500/10 hover:-translate-y-1">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                    <div className="text-blue-400 font-medium mb-2">{exp.company}</div>
                    
                    <div className="flex flex-wrap gap-3 mb-4 text-sm">
                      <div className="flex items-center gap-1 text-gray-300">
                        <Calendar size={14} className="text-blue-400" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-300">
                        <MapPin size={14} className="text-blue-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className={`hidden md:flex absolute ${index % 2 === 0 ? 'left-1/2 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'} items-center justify-center`}>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full p-1 shadow-xl shadow-blue-500/20">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                      <Briefcase className="text-blue-400" size={20} />
                    </div>
                  </div>
                </div>
                
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
