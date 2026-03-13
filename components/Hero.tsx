
import React, { useState } from 'react';
import { resumeData } from '../data/resumeData';
import { ArrowRight, FileText, Linkedin, X, Download, Bot } from 'lucide-react';
import profileImage from "../data/1.jpeg"
const Hero: React.FC<{ id: string }> = ({ id }) => {
  const [showResume, setShowResume] = useState(false);
  const resumeUrl = "/Jinduo-Li-Resume.pdf";
  const handleOpenChat = () => {
    const chatTrigger = document.getElementById("chat-trigger") as HTMLButtonElement | null;
    chatTrigger?.click();
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
                className="w-full h-full object-cover [object-position:50%_15%]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes('unsplash')) {
                    target.src = profileImage;
                  }
                }}
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleOpenChat}
            className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block animate-bounce-slow hover:shadow-2xl transition-shadow"
            aria-label="Open chatbot"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                <Bot size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AI Recruiter</p>
                <p className="text-sm font-semibold">Ready to chat!</p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Resume Viewer Modal */}
      {showResume && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl h-full max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-3">
                <FileText className="text-indigo-600" />
                <h2 className="text-xl font-bold text-slate-900">Professional Resume</h2>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={resumeUrl}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                >
                  <Download size={16} />
                  Download PDF
                </a>
                <button 
                  onClick={() => setShowResume(false)}
                  className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-200 rounded-lg transition-all"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="flex-1 bg-white">
              <iframe
                title="Resume PDF"
                src={resumeUrl}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
