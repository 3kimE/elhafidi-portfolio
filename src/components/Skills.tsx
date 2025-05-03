
import React from 'react';
import { Code, Database, Server, Globe, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <Code className="text-portfolio-blue" size={24} />,
      skills: [
        "JavaScript", "TypeScript", "React", "Next.js", 
        "React Native", "Flutter", "HTML5", "CSS3", 
        "Tailwind CSS", "Material UI", "Bootstrap"
      ]
    },
    {
      category: "Backend Development",
      icon: <Server className="text-portfolio-blue" size={24} />,
      skills: [
        "Node.js", "Express", "PHP", "REST API", 
        "GraphQL", "Firebase", "AWS Lambda"
      ]
    },
    {
      category: "Database Management",
      icon: <Database className="text-portfolio-blue" size={24} />,
      skills: [
        "MongoDB", "MySQL", "SQL Server", "Firebase Firestore", 
        "PostgreSQL", "Redis"
      ]
    },
    {
      category: "E-commerce & CMS",
      icon: <Globe className="text-portfolio-blue" size={24} />,
      skills: [
        "Shopify", "WordPress", "Shopify Liquid", "WooCommerce", 
        "Contentful", "Strapi"
      ]
    },
    {
      category: "Tools & Others",
      icon: <Settings className="text-portfolio-blue" size={24} />,
      skills: [
        "Git", "GitHub", "VS Code", "Azure DevOps", "ClickUp", 
        "Docker", "CI/CD", "Agile Methodology", "Jira"
      ]
    }
  ];

  return (
    <section id="skills" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-portfolio-blue bg-opacity-10 p-3 rounded-md mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-portfolio-dark">
                  {category.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">
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
