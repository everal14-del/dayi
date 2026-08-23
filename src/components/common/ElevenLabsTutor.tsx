import React, { useEffect, useState, useRef } from 'react';
import { Bot, Sparkles, MessageSquare, Send, RefreshCw, Volume2, ShieldCheck, HelpCircle, CheckCircle2, User } from 'lucide-react';
import { APP_RESOURCES } from '../../data/resources';

interface Message {
  sender: 'tutor' | 'user';
  text: string;
  time: string;
}

// Preset educational tutor answers strictly adhering to the 4 curriculum subtopics
const TUTOR_KNOWLEDGE: Record<string, string> = {
  'explícame qué es un ser vivo':
    '¡Hola, explorador! 🌿 Un ser vivo es todo organismo natural capaz de realizar las funciones vitales: nutrirse para obtener energía, crecer y desarrollarse, responder a estímulos de su entorno (como la luz o la temperatura) y reproducirse para dar origen a nuevos seres semejantes. Están formados por células vivas.',
  'características tienen los seres vivos':
    'Las 4 características fundamentales son:\n1. 🍃 **Nutrición:** Absorben o fabrican alimentos para tener energía.\n2. 📈 **Crecimiento:** Aumentan de tamaño y maduran.\n3. ⚡ **Irritabilidad / Respuesta:** Reaccionan al frío, calor, luz o peligro.\n4. 🐣 **Reproducción:** Crean descendencia para que su especie continúe.',
  'cactus, un gato, un champiñón y una mariposa':
    '¡Excelente pregunta de clasificación! 🔍 Vamos paso a paso:\n• 🌵 **Cactus:** Reino Plantae (planta autótrofa, hace fotosíntesis).\n• 🐱 **Gato:** Reino Animalia (animal mamífero heterótrofo con movimiento activo).\n• 🍄 **Champiñón:** Reino Fungi (hongo heterótrofo que absorbe nutrientes, ¡no hace fotosíntesis!).\n• 🦋 **Mariposa:** Reino Animalia (insecto con metamorfosis que se alimenta del néctar).',
  'diferencia entre biótico y abiótico':
    '¡Es muy fácil recordarlo! ✨\n• 🌿 **Factores Bióticos:** Son todos los seres vivos del ecosistema (animales, plantas, hongos y microorganismos).\n• ☀️ **Factores Abióticos:** Son los elementos físicos NO vivos del ambiente pero indispensables para la vida (agua, luz solar, aire, suelo y temperatura).',
  'construir una cadena alimenticia':
    'Sigue estos 4 pasos sencillos: 🦊\n1. ☀️ **Fuente de energía:** El Sol emite luz y calor.\n2. 🌱 **Productor:** Una planta (ej. pasto) realiza fotosíntesis.\n3. 🐇 **Consumidor primario (herbívoro):** Un conejo come la planta.\n4. 🦊 **Consumidor secundario (carnívoro):** Un zorro se alimenta del conejo.\n5. 🍄 **Descomponedores:** Hongos y bacterias reciclan los restos al suelo.',
  'palabras más sencillas':
    '¡Claro que sí, explorador! En resumen: la naturaleza es como un gran equipo. Las plantas cocinan su comida con el sol, los animalitos se alimentan unos de otros, y el agua y el aire los mantienen a todos vivos y sanos. Si cuidamos una parte, ¡protegemos a todo el planeta! 🌍💚'
};

export const ElevenLabsTutor: React.FC = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'tutor',
      text: '¡Hola, explorador de la naturaleza! 🌿 Soy tu Tutor Virtual de Ciencias Naturales. ¿Tienes alguna duda sobre los seres vivos, su clasificación, los factores bióticos/abióticos o las cadenas alimenticias? Elige una pregunta rápida o escribe tu consulta.',
      time: 'Ahora'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const quickPrompts = [
    'Explícame qué es un ser vivo.',
    '¿Qué características tienen los seres vivos?',
    '¿Cómo clasificamos un cactus, un gato, un champiñón y una mariposa?',
    '¿Cuál es la diferencia entre biótico y abiótico?',
    'Explícame paso a paso cómo construir una cadena alimenticia.',
    'Explícamelo con palabras más sencillas.'
  ];

  useEffect(() => {
    // Load official ElevenLabs script safely once
    const existingScript = document.querySelector(`script[src="${APP_RESOURCES.elevenlabsScriptUrl}"]`);
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = APP_RESOURCES.elevenlabsScriptUrl;
      script.async = true;
      script.type = 'text/javascript';
      script.onload = () => setScriptLoaded(true);
      script.onerror = () => setScriptLoaded(false);
      document.body.appendChild(script);
    } else {
      setScriptLoaded(true);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleAskPrompt = (promptText: string) => {
    const userMsg: Message = {
      sender: 'user',
      text: promptText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      // Find matching knowledge base answer
      const lower = promptText.toLowerCase();
      let matched = TUTOR_KNOWLEDGE['palabras más sencillas'];

      for (const [key, answer] of Object.entries(TUTOR_KNOWLEDGE)) {
        if (lower.includes(key)) {
          matched = answer;
          break;
        }
      }

      if (lower.includes('vivo') && !lower.includes('clasific')) {
        matched = TUTOR_KNOWLEDGE['explícame qué es un ser vivo'];
      } else if (lower.includes('característica') || lower.includes('funciones')) {
        matched = TUTOR_KNOWLEDGE['características tienen los seres vivos'];
      } else if (lower.includes('clasific') || lower.includes('cactus') || lower.includes('hongo')) {
        matched = TUTOR_KNOWLEDGE['cactus, un gato, un champiñón y una mariposa'];
      } else if (lower.includes('biotico') || lower.includes('abiotico') || lower.includes('biótico')) {
        matched = TUTOR_KNOWLEDGE['diferencia entre biótico y abiótico'];
      } else if (lower.includes('cadena') || lower.includes('trófica') || lower.includes('energia')) {
        matched = TUTOR_KNOWLEDGE['construir una cadena alimenticia'];
      }

      const botMsg: Message = {
        sender: 'tutor',
        text: matched,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const text = inputVal.trim();
    setInputVal('');
    handleAskPrompt(text);
  };

  return (
    <div className="space-y-6">
      {/* Widget Card Container */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white shadow-inner">
              <Bot className="w-7 h-7 animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/30 text-emerald-100 text-[10px] font-bold uppercase tracking-wide">
                  Tutor IA Educativo &bull; Tarea 3
                </span>
                <span className="flex items-center gap-1 text-[11px] text-emerald-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
                  En línea
                </span>
              </div>
              <h3 className="text-xl font-bold mt-0.5">Tutor Conversacional Inteligente</h3>
              <p className="text-xs text-emerald-100/80">
                Acompañamiento pedagógico personalizado y respetuoso
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 rounded-xl text-xs text-emerald-100 border border-white/15">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              Entorno Seguro &bull; Sin datos personales
            </span>
          </div>
        </div>

        {/* ElevenLabs Official Voice Agent Embed Block */}
        <div className="p-5 bg-emerald-50/70 border-b border-emerald-100/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
              <Volume2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                Voz Interactiva ElevenLabs ConvAI
              </h4>
              <p className="text-xs text-emerald-800">
                Agente ID: <code className="font-mono bg-white px-1.5 py-0.5 rounded border border-emerald-200 text-emerald-900">{APP_RESOURCES.elevenlabsAgentId}</code>
              </p>
            </div>
          </div>

          {/* Official ElevenLabs Web Component injected */}
          <div className="relative flex-shrink-0">
            {/* Native ElevenLabs ConvAI Web Component */}
            <div
              dangerouslySetInnerHTML={{
                __html: `<elevenlabs-convai agent-id="${APP_RESOURCES.elevenlabsAgentId}"></elevenlabs-convai>`
              }}
            />
          </div>
        </div>

        {/* Prompt Chips Bar */}
        <div className="p-4 bg-slate-50 border-b border-slate-100">
          <p className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Preguntas rápidas para explorar:
          </p>
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleAskPrompt(prompt)}
                className="px-3 py-1.5 rounded-xl bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-900 text-xs font-medium border border-slate-200/80 hover:border-emerald-300 shadow-2xs transition-all active:scale-98 text-left"
              >
                💬 {prompt}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages Stream */}
        <div className="p-6 bg-slate-50/40 min-h-[320px] max-h-[460px] overflow-y-auto space-y-4">
          {messages.map((msg, index) => {
            const isTutor = msg.sender === 'tutor';
            return (
              <div
                key={index}
                className={`flex items-start gap-3 ${isTutor ? 'justify-start' : 'justify-end'}`}
              >
                {isTutor && (
                  <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed shadow-xs ${
                    isTutor
                      ? 'bg-white border border-slate-200/80 text-slate-800 rounded-tl-sm'
                      : 'bg-emerald-600 text-white rounded-tr-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span
                    className={`block text-[10px] mt-2 text-right ${
                      isTutor ? 'text-slate-400' : 'text-emerald-100'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>
                {!isTutor && (
                  <div className="w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-slate-200/80 rounded-2xl rounded-tl-sm px-4 py-3 shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSendCustom}
          className="p-4 bg-white border-t border-slate-100 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
            placeholder="Escribe tu duda sobre Ciencias Naturales..."
            className="flex-1 px-4 py-2.5 bg-slate-50 hover:bg-slate-100/70 focus:bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all"
          />
          <button
            type="submit"
            disabled={!inputVal.trim()}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Preguntar</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>

      {/* Educational Pedagogical Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-3 shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-slate-800">Explicaciones Paso a Paso</h5>
            <p className="text-[11px] text-slate-500 mt-0.5">
              El tutor desglosa conceptos complejos en ideas claras y ordenadas.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-3 shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-slate-800">Contenido Académico Verificado</h5>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Alineado estrictamente a la unidad curricular de seres vivos y ecosistemas.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 flex items-start gap-3 shadow-2xs">
          <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
            <HelpCircle className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-slate-800">Apoyo sin Frustración</h5>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Puedes pedirle que reformule con palabras más sencillas cuantas veces desees.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
