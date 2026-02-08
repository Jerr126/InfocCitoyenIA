
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-200 group-hover:scale-110 transition-transform">
                <i className="fas fa-landmark text-lg"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-slate-800 tracking-tight leading-none">InfoCitoyenAI</span>
                <span className="text-[10px] font-bold text-green-600 tracking-[0.2em] uppercase">Bénin</span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-green-600 hover:bg-green-50 px-4 py-2 rounded-xl text-sm font-semibold transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="w-px h-6 bg-slate-200 mx-4"></div>
            <a
              href="#chatbot"
              className="benin-gradient text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-xl hover:scale-105 transition-all active:scale-95"
            >
              Démarrer le Chat
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-800 focus:outline-none p-2 rounded-lg bg-slate-100"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-2xl animate-fade-in">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 text-slate-700 hover:text-green-600 hover:bg-green-50 block px-4 py-4 rounded-2xl text-base font-bold transition-all"
              >
                <i className={`fas ${item.icon} w-6 text-green-600`}></i>
                {item.label}
              </a>
            ))}
            <a
              href="#chatbot"
              onClick={() => setIsOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 benin-gradient text-white px-4 py-4 rounded-2xl font-bold"
            >
              <i className="fas fa-comments"></i> Assistant IA
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
