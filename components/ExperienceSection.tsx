
import React from 'react';
import { resumeData } from '../data/resumeData';
import { Briefcase } from 'lucide-react';

const ExperienceSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Professional Experiences</h2>
          <p className="text-slate-500">A timeline of the career growth and contributions.</p>
        </div>

        <div className="space-y-8">
          {resumeData.experience.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0">
              {/* Timeline line for mobile */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 md:hidden"></div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                <div className="md:w-1/4 text-left md:text-right pt-1">
                  <p className="text-indigo-600 font-bold">{exp.period}</p>
                  <p className="text-slate-400 text-sm">{exp.company}</p>
                </div>

                <div className="relative md:w-3/4 pb-8 md:pb-12 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                  {/* Timeline dot for mobile */}
                  <div className="absolute -left-[37px] md:hidden top-2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <Briefcase size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-300 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
