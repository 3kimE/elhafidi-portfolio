
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Shopify E-commerce Integration",
      description: "Custom Shopify app that enhances the e-commerce experience with advanced product filtering, customer analytics, and inventory management.",
      image: "https://images-platform.99static.com/FMY3qKeJ-ZrdZwpFZYXmugBDvVA=/0x0:1004x1004/600x600/99designs-contests-attachments/145/145936/attachment_145936164",
      technologies: ["React", "Node.js", "Shopify API", "GraphQL"],
      github: "https://github.com/3kimE",
      live: "https://www.devopscrowd.com/",
    },
    {
      title: "check Management System",
      description: "Web application for tracking and managing checks, featuring user authentication, role-based access control, and automated notification system.",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABI1BMVEX///8uMZAAAAAkHiAAesX///0uMo0iHyD///wAs/EiHB4gWab7+/v29vYfZ7EfYavr6+sAufIXDhEAufAAjdQAktggXqnExMQAnN8jUqIAgMsiZrEfGBva2toAg8sBs+6jo6Pk5OS0srMqQ5cqPpcnTqG+vr6GhoZAQEAAesABq+wBmt4zMzPR0dENCQubm5teXl58fHwmJiYBrvIqSZ4vLy8nw/MxK4pPyvVLSUpxcXFSUlJkZGQAbr+DhbIWGokiJ42p3/HK7fYAp/ALxOzc8fix1+5JxvlqzfaJ1/IAcb9d0PKsy+OusM0AC4mFircKNpV1jb2LibJBrOMAR6InIY1yl8AAWa1IUpwryetv1O0Tb7KFlsCZ2vRXTpIAjdyQqtGdfoDVAAALVklEQVR4nO2bAXvTRhKGNzKKHEcCIROUgEUkNbFEsCTLwQFLJiVNk4ZCe7QFh15oe///V9zMriTLdgqXIziWO195wF5rlX3325kdbVzGSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEukzkuWbHsHXlcyOvrvpMXxVyfWj/bvf1W96GF9TR/vb282TpUUEB/fW1pp3D5bXxaPjfSAExJPlTDf1o+O1tbXtu81m8/vlXKinT/b2kfBu86C5hC6q9dONvX1O2DwAPV8+xNN7m8fHBeH3PywZoioD4OZm2cPnZyfLVN7Ibx5sPNncmyQ8WyYXTx9sbGxu7u3tjQnPzl6pS5NQ66e37oGFmwg49vBVnS2Jh3X25sdHs4Rn9aUJw/rpj48mCRHxtXrT47ougYMvHs0Svq7X2ZJEYf3Ni8cPpgmbz5fGQRkcfDxL+FytZJb56ZI2dPDWrWnCg2puE4c//2u2ER2cITxQ5eo5KLPDlzvfHk4OXBYOThGuVdXBlzs7q4A4IeHgFOFBvXL+oYO/vAXA1dWyi7KcOYiE95BwD+vSZhUBGQB+g4QrEy7mDk4QNtUKAsoCkBMWLhYxOElYSUBwcOdpQVi4OHawRLhdxSQDDu7scsIdJFwRLsolBwvCzd8qaSD75d3u7tjDFYFYdhAIHwgP1QpmGXDw3dYkISD+elp2MPfwtypu9IyN3m1NE66svt+9dWuKcAMI69Urt9HBdQAEwm9KhCurz7amPdzY2Njcq7PKMY5215HwKSfcKQinEYWHTza3KxeHHBAJd6cIpxCzXHq8t12xx97R1joSbnFCXKYrYyHi7H54XK2qe3S+XhA+nSZExEfT+yFUbQdqdfLp6Px+TpgF4gRh2UURh7wuBcSqBCMAZoS7lxOWXMwI0cPm/kFFStPR+Z37HHEr2y1mCTni4ykP17b3qxGLADhDuDpNuLLybPfRNOHawdrvFXBxdP7w4QQhIL798HJ1BlK4OOHhWvPu7wvv4uj89gThUyB8+5Edvp+1kbs4RXiw8Melo/u3y4Qc8S0etAHi7EKFjIrHNKVfPeGRt7rIKxUcnCIEwI+MH7i9nyFcBRdzD/fxMLGJhD+8XuA9Y/TwdpmQL1MOiDr89hLE9dJRGz/Tx9+t/Xtht/7R+QUnvFMiLADlv0G8N02Ivz5c0FjMAJEQGAXhu4+lCy5H3MjjsPAQfwW8iCaOXlxcXGSrNCecAETEmXSz+uz83pMZwrM/FtBF7eJihnAK8FIXn/15+tdUHIKHr05uBOKTkrXHZcI7CDiauWoG8eUHlZ1u7OUeZt/EOFvMb35pj2+P4/DOJQ5ihpxCfPmnKst1jsi/8yU8fH2yoL9D1EqZ5s79WUCuCURwEM2SjzZLHr5eUAcZLtSLcS7duhRw0kUAFFbxryZmhAfPF9VBFCA+FITnszGYq0DMHETJR/tIiN82WehvX8rgIpQ14OD56O9ckIutH2OwaK7z70CjhycLfjiMiJ90EMURJwC5i3y3WGQHueraBQJ+0gXuYhGDmdT6EX7Ne5FjMFf9Yv3TDqIOf/4wU5jJRxX5qn5d+89nhymzX2crT1U+qgTgF2nhFyiJRCKRvlSBaZrBVTtZ0Mn8GqO5Dmk6qPQ+lCQpuepNutCpc42Duk7pEkovva8pknvVuxiNmhFf67iuT6mhKIrULt6bUq0mWVe8iY6drjwt85ELY6vVQq9oiAwY7FUPAU00/qrTMh9pUqPWqNVaftEyNGqtwVVvE4VAeK0DuzYBT6OjKDVJy1vGEaVhfmwH/JUdeXbbKbpBgxe5Vvk2YpLa0CVrLqVXvQ2X22Y5n81LbYwfB6CkPNVjRIU8opwepiBfZ04iSWFoQI7tR/waZwgN+L6Th28rmxYHu2TxmObpNUjxcrzeb7M5SwU2CMFBq2bkgVgkGlNqwcqL8QVEZq3RwHDlu4jNG1AtSbhdTIuYMXEnpSHuGsGNahgK8JE9b8I4hJ/MmFcKPYiomsTHpdQaOCIdI1WSaoYkGXxTiaAB33FOibtaTAvcqWGIG+XU+FlLCmshdpg3YIAZ0MxmPgvEYYtHVAJN/DNEbjR4jWPFSUbTkLzACfAa0Y9PC75IW8Vc5dRdDFG0VTO79rwJe7A6hyzbzbJAxIjyND9UakaPLzdIIhN7eR/WnCSqOs/IdkFMNDzkjEax3vmuI5rCm9opPXBHFDN9GIVIIghreDUYXZgKV4f42gvyHTLAxSeuha1GEfQ4VSLRQFbOskk3sxMCuKHYN7JXWghj85dJEYi4tmoG7pB5YNq4XjEPetw4LxyvaIaEyUSiUYpEE2bpFe6N/cM0Gm82cxIuNyPigvluiGFjRAkVJUpXwrqu1jKkLhMbaD+/Bc5RXKpoMNG0hNsFtdaXWtC9Af09NldFolzjwnQuYmvINwKjVS5z2sMwS5xAMxjnEliUcAM7q2imEk17XN66fD+s/T8F/ZcIQwaSpJIL7MTmXgNHkgxg2subl+XiYmv0eGrM9wO0jHtXVDQQz61UfJa2RKLhUi13iLlrOB82oQGu0TCXoYjJ1/km4UGMwroK+brNY87N9s6weIrApMN79bNEg/OTrVJcIZy6qAZh72115wiI+UOyVU1I5XlfyzYxV4yHJxFYbVmGyCrygG+CkaM5Hu78uLbHhV4HV/egHbhdnrCQ2uvZPF3rfkMJ5xiIuqRMPEHwqAlEognRBM3Iht+HDCH5qS8Vex/mIjwHCPMybPxEiRMFBYzE6zROrUstuHaQdiRMZnPMpvDYO/GY62S73NBQsgyDz42tPniNBWWrBXHZEEWoOoAmHrlQuiGgSDR8bWo8Z8GnRqshqHltpGB3IJ9jonHxEWDi0AEbwFNj3D7ApkhPQnwuMOCDfj7AiD8qQEtXzBGe0WSJ1+rjR5I05D8Bln3Q5c8l+GAxuPLx1hfIRWnlFhNbmIZ/Z9Y6/CLwLLC9OPbKVYnWjqDFdUp3K87ZTLjYdiD58s54sRl55atJJNI/Q7oNqYAF4lzIKjKAO3uIEtjFy0tPWKYabS9LR0GUNzk38thkewFk7uzkK7BYVkkms4OJCgT70rNCe+LdwHX6Yr5skUadmFnz3CIKAYqeMo8Fg9hjkd5VAmeYBsyH7SPSNI+Zpt5NLRYldqJbWaHlew4LvK7nDmym49VJnLi6q3kJ1JpxyqcCJiFwoCt86LQtZgdpx7E1NUld2EPSiDl417kIUHSfdViP6T0GZYuNYAOGT32xHnXYQO1pao+FDusEA/G05wWwhj2X9U0WMltXO0zVFc21zYTFVmSzBAkjPCzs6UxhPutCZ9Uz4aZdnDv4PIR/tDkVpvAMFMRObEbMSlQfRg9PcGmsYeEfBUlseWhcB4YJlY7ooUmW7bFUg1b4007TIUfxrMhkQ91X2ZCvTj32rBiv6OB0dViqqziTzHN8/KntTvSJUV2jdEDxnbbr2qxtw4gGqtVlph3g/LZ7VpRq8FLzIYictC0mPbFdNwVvtA5zhvoA1ivD47OB2tVh5D0+aeA//AuTo/ZhsjqwlqGDkyBhH/7Tu5qFq2Aeaiuxb7I40Hq2EgCm39b7dmjyUAo6zAV/OrbvwOJ1I9aH9cwsrDoVwLOGrO1hv/awE8ew8MDjkEWxhwdtpu/CMvVt3zI91rf9iIV4+8Trug5Moaf2bH9OpZuGFanKdM3xNQgzzWG6xSb/D+VAw/fYFCTZR6qqMvwDHfBqeKpkqrhId9q8WtcCbdwVD+d0B3taOhNXsmDO32t308H/8GsER/vcFeqw213Ar+STSCQSiUQikUgkEolEIpFIJBKJRCKRSCQSiUQikUgkEolEIpFIJBKJRPon678VnKvXc4bnMQAAAABJRU5ErkJggg==",
      technologies: ["React", "Material UI", "Node.js", "Laravel", "SQL"],
      github: "https://github.com/3kimE",
      live: "https://aksolus.com/en",
    },
    {
      title: "Streaming Mobile App",
      description: "Cross-platform mobile application for streaming content, with features like user profiles, content recommendation, and offline viewing.",
      image: "https://play-lh.googleusercontent.com/nBhqLeymG-_-QDRWiCK3YwYzkWjeP5y2j_jTDEag9hxQT2zigPcE8Nb3YppQDgJ-T18",
      technologies: ["Flutter", "Dart", "Firebase", "RESTful APIs"],
      github: "https://github.com/3kimE",
      live: "https://drive.google.com/file/d/1X6ySQQfQfX82GGroyscrtzmk__CiJ_h4/view?usp=sharing",
    },
    {
      title: "Dynamic Website Portal",
      description: "Full-featured web portal with user management, content management system, and integrated payment processing.",
      image: "https://vala-orange.com/wp-content/themes/valaorange/assets/img/accueil/pourquoi.jpg",
      technologies: ["PHP", "Bootstrap", "SQL Server", "JavaScript"],
      github: "https://github.com/3kimE",
      live: "https://vala-orange.com/",
    },
    {
      title: "IPTVStream",
      description: "Frontend platform designed for IPTV resellers to showcase subscription plans with auto-scrolling movie and channel carousels. Optimized for sales conversion and multi-device support.",
      image: "/image.png",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/3kimE/IptvStream-front",
      live: "https://iptv-stream-front.vercel.app/"
    },
    {
      title: "GlobalView IPTV",
      description: "Modern IPTV landing page featuring dynamic sliders for movies and live TV channels, device compatibility section, and direct contact options via WhatsApp and Telegram.",
      image: "/global.png",
      technologies: ["React", "Tailwind CSS",  "TypeScript"],
      github: "https://github.com/3kimE/GlobalView-IPTV-front",
      live: "https://global-view-iptv-front.vercel.app/"
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
