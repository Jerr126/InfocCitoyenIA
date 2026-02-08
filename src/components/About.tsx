
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';

const About: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="about">
      <section className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">À propos d'InfoCitoyenAI Bénin</h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  InfoCitoyenAI est une initiative béninoise destinée à faciliter l'accès à l'information publique, aux droits et devoirs du citoyen en République du Bénin.
                </p>
                <p>
                  Notre mission est d'accompagner la jeunesse béninoise dans ses démarches (ANIP, Travail, Entrepreneuriat) grâce à une IA formée sur le droit local.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-green-600 font-bold text-2xl mb-1">Cible</p>
                    <p className="text-sm">Jeunes du Bénin (18-35 ans).</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-green-600 font-bold text-2xl mb-1">Source</p>
                    <p className="text-sm">Lois et décrets du Bénin.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-green-600 rounded-full opacity-20 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <i className="fas fa-bullseye text-green-400"></i> Objectifs au Bénin
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600/20 flex items-center justify-center text-green-400">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <p>Vulgariser l'usage des portails e-Services.</p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600/20 flex items-center justify-center text-green-400">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <p>Informer sur le Code du Travail béninois.</p>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600/20 flex items-center justify-center text-green-400">
                    <i className="fas fa-check text-xs"></i>
                  </div>
                  <p>Aider à l'immatriculation via l'ANIP.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Technical Help Section */}
      <section id="tech-help" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/*<div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">{TECHNICAL_GUIDE.title}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{TECHNICAL_GUIDE.subtitle}</p>
          </div>*/}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/*TECHNICAL_GUIDE.steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200 hover:border-green-500 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                  <i className={`fas ${step.icon} text-xl`}></i>
                </div>
                <div className="text-xs font-bold text-green-600 uppercase mb-2 tracking-widest">Étape {index + 1}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{step.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))*/}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Questions Fréquemment Posées</h2>
            <p className="text-slate-600">Trouvez des réponses rapides aux questions administratives et techniques les plus courantes.</p>
          </div>
          
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-green-600 bg-green-50/30' : 'border-slate-200 bg-white hover:border-slate-300'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? 'text-green-700' : 'text-slate-800'}`}>
                    {item.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'bg-green-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <i className="fas fa-chevron-down text-xs"></i>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0'}`}>
                  <p className="text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
