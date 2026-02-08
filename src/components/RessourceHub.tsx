
import React from 'react';
import { CIVIC_RESOURCES } from '../constants';

const ResourceHub: React.FC = () => {
  return (
    <section id="resources" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-green-600 font-bold tracking-widest uppercase text-xs">Guide Pratique</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-3 mb-6">
            Services Publics Numériques
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Retrouvez tous les liens directs vers les portails officiels de l'État Béninois pour vos démarches quotidiennes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {CIVIC_RESOURCES.map((resource) => (
            <div
              key={resource.id}
              className="group relative bg-slate-50 p-8 rounded-3xl border border-slate-200 transition-all duration-300 hover:bg-white hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="absolute top-6 right-8 text-slate-200 group-hover:text-green-100 transition-colors">
                <i className={`fas ${resource.icon} text-4xl`}></i>
              </div>
              
              <div className="w-12 h-12 bg-white text-green-600 rounded-xl shadow-sm flex items-center justify-center mb-8 border border-slate-100">
                <i className={`fas ${resource.icon} text-xl`}></i>
              </div>
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-full mb-5">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                {resource.category}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4">{resource.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                {resource.description}
              </p>
              
              <a href="#chatbot" className="inline-flex items-center gap-2 text-green-600 font-bold text-sm hover:gap-3 transition-all">
                Consulter l'assistant <i className="fas fa-chevron-right text-[10px]"></i>
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-20 p-10 benin-gradient rounded-[2rem] text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Besoin d'une information sur-mesure ?</h3>
          <p className="mb-8 text-white/90">L'assistant InfoCitoyenAI est formé sur les derniers décrets et lois du Bénin.</p>
          <a href="#chatbot" className="bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all inline-block active:scale-95">
            Lancer une recherche intelligente
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResourceHub;
