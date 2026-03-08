
import React from 'react';
import { resumeData } from '../data/resumeData';
import { Code2, Server, BrainCircuit, Wrench } from 'lucide-react';

const Skills: React.FC<{ id: string }> = ({ id }) => {
  const categories = [
    { title: 'Programming', items: resumeData.skills.programming, icon: <Code2 className="text-indigo-500" /> },
    { title: 'Frontend', items: resumeData.skills.frontend, icon: <Code2 className="text-blue-500" /> },
    { title: 'Backend', items: resumeData.skills.backend, icon: <Server className="text-orange-500" /> },
    { title: 'AI & Data', items: resumeData.skills.ai, icon: <BrainCircuit className="text-purple-500" /> },
    { title: 'Databases', items: resumeData.skills.databases, icon: <Server className="text-emerald-500" /> },
    { title: 'DevOps', items: resumeData.skills.devops, icon: <Wrench className="text-slate-500" /> },
    { title: 'Tools & Cloud', items: resumeData.skills.tools, icon: <Wrench className="text-cyan-500" /> },
  ];

  return (
    <section id={id} className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Technical Proficiency</h2>
          <p className="text-slate-500 max-w-xl">A comprehensive list of technologies and tools I use to build robust applications.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-lg text-slate-800">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium"
                  >
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
