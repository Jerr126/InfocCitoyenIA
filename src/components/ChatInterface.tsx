
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import type { Message } from '../types';
import { Role } from '../types';

const SUGGESTED_QUESTIONS = [
  "Comment obtenir mon certificat CIP ?",
  "Quelles sont les pièces pour le passeport ?",
  "C'est quoi le SMIG actuel au Bénin ?",
  "Comment créer une entreprise sur monentreprise.bj ?"
];

const STORAGE_KEY_MESSAGES = 'infocitoyen_chat_messages';
const STORAGE_KEY_SOURCES = 'infocitoyen_chat_sources';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_MESSAGES);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return parsed.map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp)
        }));
      } catch (e) {
        console.error("Failed to parse saved messages", e);
      }
    }
    return [
      {
        id: 'welcome',
        role: Role.BOT,
        content: "Salutations ! Je suis votre assistant InfoCitoyenAI. Je peux vous renseigner sur les lois béninoises, vos démarches à l'ANIP, vos droits au travail ou vos devoirs civiques. Que souhaitez-vous savoir ?",
        timestamp: new Date()
      }
    ];
  });

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sources, setSources] = useState<Record<string, Array<{title: string, uri: string}>>>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_SOURCES);
    return saved ? JSON.parse(saved) : {};
  });
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [isDiagnosticRunning, setIsDiagnosticRunning] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_MESSAGES, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_SOURCES, JSON.stringify(sources));
  }, [sources]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const runDiagnostic = async () => {
    setIsDiagnosticRunning(true);
    setErrorStatus(null);
    try {
      // Small delay for effect
      await new Promise(r => setTimeout(r, 1500));
      // Basic ping simulation via a small request
      const response = await fetch('https://www.google.com/favicon.ico', { mode: 'no-cors' });
      if (response) {
        alert("Diagnostic : Les serveurs Google sont joignables, mais AI Studio peut être bloqué par votre FAI. Utilisez la méthode Google Cloud Console détaillée plus bas.");
      }
    } catch (e) {
      setErrorStatus("Blocage total détecté. Veuillez changer vos DNS ou utiliser un autre opérateur.");
    } finally {
      setIsDiagnosticRunning(false);
    }
  };

  const handleClearHistory = () => {
    if (window.confirm("Effacer l'historique de cette discussion ?")) {
      setMessages([{
        id: 'welcome',
        role: Role.BOT,
        content: "Historique effacé. Comment puis-je vous aider ?",
        timestamp: new Date()
      }]);
      setSources({});
      localStorage.removeItem(STORAGE_KEY_MESSAGES);
      localStorage.removeItem(STORAGE_KEY_SOURCES);
    }
  };

  const handleSend = async (textToSend?: string) => {
    const text = textToSend || input;
    if (!text.trim() || isLoading) return;

    setErrorStatus(null);
    const userMsg: Message = {
      id: Date.now().toString(),
      role: Role.USER,
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await geminiService.sendMessage(text);
      
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: Role.BOT,
        content: result.text,
        timestamp: new Date()
      };

      if (result.sources && result.sources.length > 0) {
        setSources(prev => ({ ...prev, [botMsg.id]: result.sources! }));
      }

      setMessages(prev => [...prev, botMsg]);
    } catch (error: any) {
      console.error(error);
      const isConnectionRefused = error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError');
      setErrorStatus(isConnectionRefused ? "Connexion refusée par les serveurs Google." : "Erreur technique.");
      
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: Role.BOT,
        content: "Désolé, la connexion aux services d'IA est bloquée depuis votre position (Bénin). \n\n⚠️ **Solution :** Ne perdez pas espoir ! Allez à la section **'Aide Technique'** en bas de page pour apprendre à contourner ce blocage via la console Google Cloud.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chatbot" className="max-w-4xl mx-auto py-16 px-4 scroll-mt-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Assistant Citoyen Intelligent</h2>
        <div className="flex justify-center gap-1 mb-4">
          <div className="w-12 h-1 bg-green-600 rounded"></div>
          <div className="w-12 h-1 bg-yellow-400 rounded"></div>
          <div className="w-12 h-1 bg-red-600 rounded"></div>
        </div>
        <p className="text-slate-600">Posez vos questions sur les services publics béninois.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 h-[650px] flex flex-col relative">
        {/* Connection Alert Overlay if error */}
        {errorStatus && (
          <div className="absolute top-16 left-0 right-0 z-20 px-6 animate-slide-down">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-4 shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-3 text-red-700">
                <i className="fas fa-exclamation-triangle text-xl"></i>
                <div>
                  <p className="font-bold text-sm">Connexion Google bloquée</p>
                  <p className="text-xs opacity-80">Routage inaccessible au Bénin.</p>
                </div>
              </div>
              <button onClick={runDiagnostic} disabled={isDiagnosticRunning} className="bg-red-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-red-700 transition-all">
                {isDiagnosticRunning ? 'Diagnostic...' : 'Diagnostiquer'}
              </button>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="bg-slate-900 p-5 text-white flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-900/20">
              <i className="fas fa-landmark text-white"></i>
            </div>
            <div>
              <p className="font-bold text-sm tracking-wide uppercase">InfoCitoyenAI Bénin</p>
              <p className="text-[10px] text-slate-400 flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${errorStatus ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></span>
                {errorStatus ? 'Accès Restreint (Bénin)' : 'Connecté'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={handleClearHistory} title="Effacer l'historique" className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
              <i className="fas fa-trash-alt text-sm"></i>
            </button>
            <a href="#tech-help" className="text-[10px] bg-green-600 text-white px-3 py-1.5 rounded-full font-bold hover:bg-green-700 transition-colors">
              Aide Technique
            </a>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === Role.USER ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] rounded-2xl p-5 shadow-sm ${
                  msg.role === Role.USER
                    ? 'bg-green-700 text-white rounded-tr-none'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                }`}>
                <div className="whitespace-pre-wrap text-[15px] leading-relaxed prose prose-sm prose-benin max-w-none">
                  {msg.content}
                </div>
                
                {sources[msg.id] && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Sources officielles :</p>
                    <div className="flex flex-wrap gap-2">
                      {sources[msg.id].map((source, i) => (
                        <a key={i} href={source.uri} target="_blank" rel="noopener noreferrer" 
                           className="text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-600 px-2 py-1 rounded flex items-center gap-1 transition-colors">
                          <i className="fas fa-external-link-alt text-[9px]"></i>
                          {source.title.length > 25 ? source.title.substring(0, 25) + '...' : source.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                
                <p className={`text-[10px] mt-3 ${msg.role === Role.USER ? 'text-green-100' : 'text-slate-400'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-red-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="flex flex-wrap gap-2 mb-4">
            {SUGGESTED_QUESTIONS.map((q, i) => (
              <button key={i} onClick={() => handleSend(q)} 
                      className="text-xs border border-slate-200 hover:border-green-600 hover:text-green-700 px-3 py-1.5 rounded-full transition-all bg-white text-slate-600 shadow-sm">
                {q}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Posez votre question citoyenne..."
              className="flex-1 bg-slate-100 border-none focus:ring-2 focus:ring-green-600 rounded-2xl px-5 py-3 text-sm transition-all outline-none"
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading || !input.trim()}
              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                !input.trim() || isLoading 
                  ? 'bg-slate-100 text-slate-400'
                  : 'bg-green-600 text-white hover:bg-green-700 shadow-lg'
              }`}
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;
