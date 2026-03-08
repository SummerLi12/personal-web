
import React from 'react';
import { Menu, X, Bot } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
            J
          </div>
          <span className="font-bold text-lg hidden sm:block">Jinduo Li</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                activeSection === link.id ? 'text-indigo-600' : 'text-slate-600'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => document.getElementById('chat-trigger')?.click()}
            className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors"
          >
            <Bot size={16} />
            Ask AI
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-b border-slate-200 absolute top-16 left-0 right-0 py-6 px-6 flex flex-col gap-5 animate-in slide-in-from-top-4 duration-200 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={handleLinkClick}
              className={`text-lg font-semibold ${
                activeSection === link.id ? 'text-indigo-600' : 'text-slate-600'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              handleLinkClick();
              document.getElementById('chat-trigger')?.click();
            }}
            className="flex items-center justify-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-xl text-sm font-bold mt-2"
          >
            <Bot size={18} />
            Ask Jinduo AI
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
