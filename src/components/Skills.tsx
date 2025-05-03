
import React from 'react';
import { Code, Database, Server, Globe, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <Code className="text-blue-400" size={24} />,
      skills: [
        "JavaScript", "TypeScript", "React", "Next.js", 
        "React Native", "Flutter", "HTML5", "CSS3", 
        "Tailwind CSS", "Material UI", "Bootstrap"
      ]
    },
    {
      category: "Backend Development",
      icon: <Server className="text-blue-400" size={24} />,
      skills: [
        "Node.js", "Express", "PHP", "REST API", 
        "GraphQL", "Firebase", "AWS Lambda"
      ]
    },
    {
      category: "Database Management",
      icon: <Database className="text-blue-400" size={24} />,
      skills: [
        "MongoDB", "MySQL", "SQL Server", "Firebase Firestore", 
        "PostgreSQL", "Redis"
      ]
    },
    {
      category: "E-commerce & CMS",
      icon: <Globe className="text-blue-400" size={24} />,
      skills: [
        "Shopify", "WordPress", "Shopify Liquid", "WooCommerce", 
        "Contentful", "Strapi"
      ]
    },
    {
      category: "Tools & Others",
      icon: <Settings className="text-blue-400" size={24} />,
      skills: [
        "Git", "GitHub", "VS Code", "Azure DevOps", "ClickUp", 
        "Docker", "CI/CD", "Agile Methodology", "Jira"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-gradient-to-b from-black to-portfolio-darkBlue text-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Technologies</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl animate-fade-in transform transition-all hover:shadow-blue-500/10 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 p-4 rounded-xl mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium text-blue-400 hover:bg-white/10 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
