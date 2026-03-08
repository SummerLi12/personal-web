
import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { ArrowRight, FileText, Linkedin, X, Download, Mail, Phone, Globe, Bot } from 'lucide-react';
import profileImage from "../data/1.jpeg"
const Hero: React.FC<{ id: string }> = ({ id }) => {
  const [showResume, setShowResume] = useState(false);

  const handleDownload = () => {
    // Triggers browser print dialog. CSS in index.html ensures only the resume content prints.
    window.print();
  };

  return (
    <section id={id} className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Senior CS Student @ ASU
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
            Hi, I'm <span className="text-indigo-600">{resumeData.name}</span>.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            {resumeData.summary}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#projects" 
              className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <button 
              onClick={() => setShowResume(true)}
              className="flex items-center gap-2 border border-slate-300 bg-white text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-50 transition-all"
            >
              <FileText size={18} className="text-indigo-600" />
              Resume Info
            </button>
            <a 
              href={resumeData.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center w-12 h-12 rounded-xl border border-slate-300 bg-white text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 relative">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-8 border-white shadow-2xl transition-transform duration-500 hover:scale-[1.02] bg-slate-200">
              <img 
                src={resumeData.profileImage} 
                alt={resumeData.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('unsplash')) {
                    target.src = profileImage;
                  }
                }}
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-bounce-slow">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                <Bot size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AI Recruiter</p>
                <p className="text-sm font-semibold">Ready to chat!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Viewer Modal */}
      {showResume && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300 print:bg-white print:p-0">
          <div className="relative w-full max-w-4xl h-full max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300 print:shadow-none print:max-h-full print:rounded-none">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50 print:hidden">
              <div className="flex items-center gap-3">
                <FileText className="text-indigo-600" />
                <h2 className="text-xl font-bold text-slate-900">Professional Resume</h2>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                >
                  <Download size={16} />
                  Download PDF
                </button>
                <button 
                  onClick={() => setShowResume(false)}
                  className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-all"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Content - Styled for both screen and print */}
            <div id="resume-print-content" className="flex-1 overflow-y-auto p-8 sm:p-12 font-serif text-slate-800 bg-white print:overflow-visible">
              <div className="max-w-3xl mx-auto space-y-8">
                {/* Header Section */}
                <div className="text-center space-y-2 border-b-2 border-slate-900 pb-6">
                  <h1 className="text-4xl font-bold tracking-tight text-slate-900 uppercase font-sans">{resumeData.name}</h1>
                  <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-sans font-medium text-slate-500">
                    <span className="flex items-center gap-1"><Mail size={14} className="text-indigo-600" /> {resumeData.email}</span>
                    <span className="flex items-center gap-1"><Phone size={14} className="text-indigo-600" /> {resumeData.phone}</span>
                    <span className="flex items-center gap-1 font-bold text-slate-700">linkedin.com/in/jinduo-li</span>
                  </div>
                </div>

                {/* Summary Section */}
                <section>
                  <h3 className="text-lg font-bold uppercase tracking-wider border-b border-slate-200 pb-1 mb-3 font-sans text-slate-900">Summary</h3>
                  <p className="leading-relaxed text-[15px] italic text-slate-700">{resumeData.summary}</p>
                </section>

                {/* Technical Skills Section */}
                <section>
                  <h3 className="text-lg font-bold uppercase tracking-wider border-b border-slate-200 pb-1 mb-3 font-sans text-slate-900">Technical Skills</h3>
                  <div className="space-y-2 text-[14px]">
                    <p><span className="font-bold font-sans">Programming & Frameworks:</span> {resumeData.skills.programming.join(', ')}</p>
                    <p><span className="font-bold font-sans">Frontend Development:</span> {resumeData.skills.frontend.join(', ')}</p>
                    <p><span className="font-bold font-sans">Backend Development:</span> {resumeData.skills.backend.join(', ')}</p>
                    <p><span className="font-bold font-sans">AI, ML & Analytics:</span> {resumeData.skills.ai.join(', ')}</p>
                    <p><span className="font-bold font-sans">Databases & Cloud:</span> {resumeData.skills.databases.join(', ')}, {resumeData.skills.tools.join(', ')}</p>
                    <p><span className="font-bold font-sans">DevOps, Testing & Monitoring:</span> {resumeData.skills.devops.join(', ')}</p>
                  </div>
                </section>

                {/* Professional Experiences Section */}
                <section>
                  <h3 className="text-lg font-bold uppercase tracking-wider border-b border-slate-200 pb-1 mb-4 font-sans text-slate-900">Professional Experiences</h3>
                  {resumeData.experience.map((exp, i) => (
                    <div key={i} className="space-y-2 mb-6 last:mb-0">
                      <div className="flex justify-between items-baseline font-sans">
                        <p className="font-bold text-[16px] text-slate-900">{exp.role}, <span className="italic font-normal">{exp.company}</span></p>
                        <p className="text-sm font-bold text-slate-600">{exp.period} | {exp.location}</p>
                      </div>
                      <p className="text-xs italic text-slate-500 font-sans"><span className="font-bold not-italic">Technologies:</span> {exp.technologies.join(', ')}</p>
                      <ul className="list-disc ml-5 space-y-1 text-[14px] text-slate-700">
                        {exp.highlights.map((h, j) => <li key={j}>{h}</li>)}
                      </ul>
                    </div>
                  ))}
                </section>

                {/* Education Section */}
                <section>
                  <h3 className="text-lg font-bold uppercase tracking-wider border-b border-slate-200 pb-1 mb-3 font-sans text-slate-900">Education</h3>
                  <div className="flex justify-between items-baseline font-sans mb-1">
                    <p className="font-bold text-[16px] text-slate-900">{resumeData.education.school}</p>
                    <p className="text-sm font-bold text-slate-600">Graduation: {resumeData.education.graduation}</p>
                  </div>
                  <p className="text-[15px] font-sans italic text-slate-700">{resumeData.education.degree} — {resumeData.education.location}</p>
                  <p className="text-[13px] mt-2 text-slate-600"><span className="font-bold font-sans uppercase tracking-tight text-[11px] text-slate-900">Relevant Coursework:</span> {resumeData.education.coursework.join(', ')}...</p>
                </section>

                {/* Projects Section */}
                <section>
                  <h3 className="text-lg font-bold uppercase tracking-wider border-b border-slate-200 pb-1 mb-4 font-sans text-slate-900">Projects</h3>
                  <div className="space-y-6">
                    {resumeData.projects.filter(p => p.id !== "3").map((proj, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-baseline font-sans">
                          <p className="font-bold text-[16px] text-slate-900">{proj.title}</p>
                          <p className="text-[12px] font-bold text-indigo-600 italic">{proj.technologies.join(', ')}</p>
                        </div>
                        <ul className="list-disc ml-5 space-y-1 text-[14px] text-slate-700">
                          {proj.details?.map((d, j) => <li key={j}>{d}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
