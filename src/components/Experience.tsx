
import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "DevOps Crowd",
      location: "Canada (Remote)",
      position: "Full Stack Developer & Team Lead",
      period: "2022 - Present",
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
      period: "2021",
      description: [
        "Developed a cheque management web application using React and Node.js",
        "Implemented responsive UI components with Material UI",
        "Worked with REST APIs for data fetching and state management",
        "Collaborated in an Agile development environment"
      ]
    },
    {
      company: "IRONDEV Technopark Souss Massa",
      position: "Flutter Developer",
      location: "Agadir, Morocco",
      period: "2020",
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
      location: "Agadir, Morocco",
      period: "2019",
      description: [
        "Developed dynamic web applications using PHP, Bootstrap, and SQL Server",
        "Created database schemas and implemented data access layers",
        "Built responsive user interfaces with Bootstrap",
        "Managed client-side form validation and server-side data processing"
      ]
    }
  ];

  return (
    <section id="experience" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start mb-2">
                <div className="bg-portfolio-blue bg-opacity-10 p-2 rounded-md mr-4">
                  <Briefcase className="text-portfolio-blue" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-portfolio-dark">{exp.position}</h3>
                  <div className="flex flex-wrap items-center text-gray-600">
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                </div>
              </div>
              
              <ul className="list-disc list-inside text-gray-700 ml-10 space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
