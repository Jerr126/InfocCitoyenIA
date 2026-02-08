import React from 'react';
import Navbar from './components/Navabar';
import Hero from './components/Hero';
import ChatInterface from './components/ChatInterface';
import ResourceHub from './components/RessourceHub';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Conteneur central */}
        <div className="max-w-7xl mx-auto px-4">
          <Hero />
        </div>

        {/* Chatbot section avec fond plein largeur */}
        <div className="bg-slate-100 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4">
            <ChatInterface />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <ResourceHub />
        </div>

        {/* CTA Banner (pleine largeur assumée) */}
        <section className="bg-blue-600 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Prêt à devenir un citoyen éclairé ?
            </h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              InfoCitoyenAI est disponible gratuitement 24h/24 pour répondre à toutes vos interrogations civiques et administratives.
            </p>
            <a
              href="#chatbot"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20 active:scale-95"
            >
              Lancer la conversation
            </a>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4">
          <About />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
