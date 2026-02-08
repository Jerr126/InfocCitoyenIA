
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-16 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-600"></span>
              République du Bénin
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-6">
              L'Information <span className="text-green-600">Citoyenne</span> au Bénin
            </h1>
            <p className="text-lg text-slate-600 sm:text-xl mb-10 leading-relaxed">
              Simplifiez vos démarches administratives, connaissez vos droits et participez activement à la vie civique béninoise. Notre IA vous guide selon les lois et textes du Bénin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <a
                href="#chatbot"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 shadow-xl shadow-green-200 transition-all active:scale-95"
              >
                Discuter avec l'IA
              </a>
              <a
                href="#resources"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all"
              >
                Explorer les Ressources
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start grayscale opacity-60">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">18-35</span>
                <span className="text-xs uppercase tracking-widest">Ans</span>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">Bénin</span>
                <span className="text-xs uppercase tracking-widest">Focus</span>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">Fiable</span>
                <span className="text-xs uppercase tracking-widest">Lois BJ</span>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 lg:col-span-6 relative">
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-green-600/5 rounded-full animate-pulse"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?auto=format&fit=crop&q=80&w=800"
                  alt="Jeunesse Béninoise"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl border border-white/40 shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white">
                      <i className="fas fa-landmark"></i>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">Services Publics Bénin</p>
                      <p className="text-sm text-slate-600">Accès au portail service-public.bj</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
