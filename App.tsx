
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceSection from './components/ExperienceSection';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <Navbar activeSection={activeSection} />
      
      <main>
        <Hero id="home" />
        <Skills id="skills" />
        <Projects id="projects" />
        <ExperienceSection id="experience" />
        <Contact id="contact" />
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">
            © {new Date().getFullYear()} Jinduo Li. Built with React & Gemini AI.
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/jinduo-li" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      <Chatbot />
    </div>
  );
};

export default App;
