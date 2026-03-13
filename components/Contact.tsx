
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import supabase from '../services/supabase';

const Contact: React.FC<{ id: string }> = ({ id }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const { error } = await supabase
      .from('contact_messgaes')
      .insert({
        name: formValues.name,
        email: formValues.email,
        subject: formValues.subject,
        message: formValues.message,
        created_at: new Date().toISOString(),
      });

    if (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
      return;
    }

    setStatus('success');
    setFormValues({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id={id} className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-900 leading-tight">Let's build something extraordinary together.</h2>
            <p className="text-slate-500 text-lg">
              Whether you have a specific project in mind or just want to explore possibilities, 
              I'm always open to talking about product development and AI strategy.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Me</p>
                <a href={`mailto:${resumeData.email}`} className="text-lg font-semibold hover:text-indigo-600 transition-colors">
                  {resumeData.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <MessageSquare size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">AI Assistant</p>
                <button 
                  onClick={() => document.getElementById('chat-trigger')?.click()}
                  className="text-lg font-semibold hover:text-emerald-600 transition-colors"
                >
                  Chat with Jinduo AI
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center py-20 text-center animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-slate-500 mb-8">Thanks for reaching out. I'll get back to you as soon as possible.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="text-indigo-600 font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    name="name"
                    value={formValues.name}
                    onChange={handleInputChange}
                    placeholder="Your Name" 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com" 
                    className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <input 
                  required 
                  type="text" 
                  name="subject"
                  value={formValues.subject}
                  onChange={handleInputChange}
                  placeholder="How can Jinduo help?" 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  required 
                  rows={4} 
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  placeholder="Share your project ideas..." 
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                ></textarea>
              </div>
              {status === 'error' && (
                <p className="text-sm font-semibold text-red-600">{errorMessage}</p>
              )}
              <button 
                disabled={status === 'sending'}
                type="submit" 
                className="w-full bg-indigo-600 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 hover:bg-indigo-700 active:scale-[0.98] transition-all disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
