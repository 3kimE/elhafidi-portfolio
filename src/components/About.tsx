import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-gradient-to-b from-black to-portfolio-darkBlue text-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-indigo-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 animate-fade-in">
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm Abdelkarim Elhafidi, a passionate Full-Stack Software Developer with solid experience building modern web and mobile applications. I hold a professional degree in Computer Engineering from the Polydisciplinary Faculty of Taroudant.
            </p>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              My career includes professional roles at DevOps Crowd (Canada), where I specialized in Shopify app development and created custom templates to enhance e-commerce experiences, contributing directly to projects under DevOps Crowd. As a team lead, I also managed projects using ClickUp and Azure DevOps, coordinating efficiently between teams.
            </p>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm skilled in technologies like JavaScript, TypeScript, React, Next.js, Node.js, PHP, and Flutter. I also have strong knowledge of REST API, GraphQL, SQL/NoSQL databases, and tools like GitHub, VS Code, Azure DevOps, Shopify, and WordPress.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm trilingual — fluent in Arabic, and advanced in French and English — and committed to delivering high-quality, client-focused solutions.
            </p>
          </div>
          
          <div className="lg:col-span-2 animate-fade-in-right">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-xl">
              <h3 className="font-bold text-xl mb-6 text-blue-400">Education</h3>
              
              <div className="mb-8 transform hover:scale-105 transition-all">
                <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                  <h4 className="font-bold text-lg text-white">Computer Engineering</h4>
                  <p className="text-blue-300">Polydisciplinary Faculty of Taroudant</p>
                  <p className="text-sm text-gray-400 mt-1">Professional Degree</p>
                </div>
              </div>
              
              <h3 className="font-bold text-xl mb-6 text-blue-400">Languages</h3>
              
              <div className="space-y-5">
                <div className="transform hover:scale-105 transition-all">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">Arabic</span>
                    <span className="text-sm text-gray-400">Fluent</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                
                <div className="transform hover:scale-105 transition-all">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">French</span>
                    <span className="text-sm text-gray-400">Advanced</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full w-4/5"></div>
                  </div>
                </div>
                
                <div className="transform hover:scale-105 transition-all">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-white">English</span>
                    <span className="text-sm text-gray-400">Advanced</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full w-4/5"></div>
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
