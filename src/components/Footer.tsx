
import React from 'react';

// Footer component for the InfoCitoyenAI Bénin application
const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-green-900/40">
                <i className="fas fa-landmark"></i>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight leading-none">InfoCitoyenAI</span>
                <span className="text-[10px] font-bold text-green-500 tracking-[0.2em] uppercase">Bénin</span>
              </div>
            </div>
            <p className="max-w-md leading-relaxed text-slate-400">
              Un assistant citoyen intelligent pour faciliter l'accès à l'information publique en République du Bénin. Informez-vous sur vos droits et devoirs civiques.
            </p>
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-green-400 transition-colors">Accueil</a></li>
              <li><a href="#chatbot" className="hover:text-green-400 transition-colors">Assistant IA</a></li>
              <li><a href="#resources" className="hover:text-green-400 transition-colors">Ressources</a></li>
              <li><a href="#faq" className="hover:text-green-400 transition-colors">FAQ</a></li>
              <li><a href="#tech-help" className="hover:text-green-400 font-bold transition-colors">Aide Technique</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Légal & Docs</h4>
            <ul className="space-y-4">
              <li><a href="https://service-public.bj" target="_blank" className="hover:text-green-400 transition-colors">Portail Service-Public</a></li>
              <li><a href="https://anip.bj" target="_blank" className="hover:text-green-400 transition-colors">Site de l'ANIP</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Données Personnelles</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Mentions Légales</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 InfoCitoyenAI Bénin. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Fait avec <i className="fas fa-heart text-red-600 mx-1"></i> au Bénin
            </span>
            <div className="flex h-3 w-6 gap-0.5">
              <div className="w-2 h-full bg-green-600"></div>
              <div className="w-2 h-full bg-yellow-400"></div>
              <div className="w-2 h-full bg-red-600"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
