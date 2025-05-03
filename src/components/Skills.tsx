
import React from 'react';
import { Code, Database, Server, Globe, Settings } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: <Code className="text-blue-400" size={24} />,
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      category: "Backend Development",
      icon: <Server className="text-blue-400" size={24} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "PHP", level: 75 },
        { name: "REST API", level: 90 },
        { name: "GraphQL", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "AWS Lambda", level: 70 },
      ]
    },
    {
      category: "Database Management",
      icon: <Database className="text-blue-400" size={24} />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "SQL Server", level: 75 },
        { name: "Firebase Firestore", level: 80 },
        { name: "PostgreSQL", level: 75 },
      ]
    },
    {
      category: "E-commerce & CMS",
      icon: <Globe className="text-blue-400" size={24} />,
      skills: [
        { name: "Shopify", level: 90 },
        { name: "WordPress", level: 85 },
        { name: "Shopify Liquid", level: 80 },
        { name: "WooCommerce", level: 75 },
        { name: "Contentful", level: 70 },
      ]
    },
    {
      category: "Tools & Others",
      icon: <Settings className="text-blue-400" size={24} />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Azure DevOps", level: 85 },
        { name: "ClickUp", level: 80 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-gradient-to-b from-black to-portfolio-darkBlue text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Skills & <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Expertise</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
          <p className="mt-6 text-gray-300 max-w-2xl">
            A comprehensive collection of technologies I've mastered throughout my professional journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl transition-all duration-300 animate-fade-in hover:shadow-blue-500/20"
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
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-200">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-1.5 bg-gray-700">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </Progress>
                  </div>
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
