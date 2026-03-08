
import React from 'react';
import { resumeData } from '../data/resumeData';
import { ExternalLink, Play } from 'lucide-react';

const Projects: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-500 max-w-xl">Impactful applications that demonstrate my technical skills and problem-solving abilities.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.projects.map((project) => (
          <div key={project.id} className="group flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="aspect-video relative overflow-hidden bg-slate-100">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {project.demoUrl && project.demoUrl !== "#" && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-indigo-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]"
                >
                  <div className="bg-white text-indigo-600 px-4 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                    <Play size={16} fill="currentColor" />
                    Live Demo
                  </div>
                </a>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold line-clamp-2 leading-tight">{project.title}</h3>
                <div className="flex gap-3">
                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-slate-400 hover:text-indigo-600 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="pt-2">
                <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">Impact</p>
                <p className="text-sm text-slate-500 line-clamp-2">{project.impact}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className="text-[10px] font-bold px-2 py-1 bg-slate-100 rounded-md text-slate-500 uppercase">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="text-[10px] font-bold px-2 py-1 bg-slate-50 rounded-md text-slate-400 uppercase">
                    +{project.technologies.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
