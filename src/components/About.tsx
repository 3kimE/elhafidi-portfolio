
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3 animate-fade-in">
            <p className="text-gray-700 mb-4 text-lg">
              I'm Abdelkarim Elhafidi, a passionate Full Stack Software Developer with solid experience in building 
              modern web and mobile applications. I hold a professional degree in Computer Engineering from the 
              Polydisciplinary Faculty of Taroudant.
            </p>
            
            <p className="text-gray-700 mb-4 text-lg">
              My career includes professional roles at DevOps Crowd (Canada), where I specialized in 
              Shopify app development and created custom templates to enhance e-commerce experiences — 
              contributing directly to projects under DevOps Crowd. As a team lead, I also managed 
              projects using ClickUp and Azure DevOps, coordinating efficiently between teams.
            </p>
            
            <p className="text-gray-700 mb-4 text-lg">
              I'm skilled in technologies like JavaScript, TypeScript, React, Next.js, Node.js, PHP, Flutter, 
              with strong knowledge in REST API, GraphQL, SQL/NoSQL databases, and tools like GitHub, VS Code, 
              Azure DevOps, Shopify, WordPress.
            </p>
            
            <p className="text-gray-700 text-lg">
              I'm trilingual — fluent in Arabic, and advanced in French and English — and committed to delivering 
              high-quality, client-focused solutions.
            </p>
          </div>
          
          <div className="md:col-span-2 animate-fade-in-right">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-xl mb-4 text-portfolio-blue">Education</h3>
              
              <div className="mb-6">
                <h4 className="font-bold">Computer Engineering</h4>
                <p className="text-gray-600">Polydisciplinary Faculty of Taroudant</p>
                <p className="text-sm text-gray-500">Professional Degree</p>
              </div>
              
              <h3 className="font-bold text-xl mb-4 text-portfolio-blue">Languages</h3>
              
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Arabic</span>
                    <span className="text-sm text-gray-500">Native</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-portfolio-blue h-2 rounded-full w-full"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">French</span>
                    <span className="text-sm text-gray-500">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-portfolio-blue h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">English</span>
                    <span className="text-sm text-gray-500">Advanced</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-portfolio-blue h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
