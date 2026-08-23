import React from 'react';
import { Bot, Sparkles, MessageCircle, HelpCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { ElevenLabsTutor } from '../components/common/ElevenLabsTutor';

export const TutorPage: React.FC = () => {
  const { navigateTo, markPageCompleted } = useLearning();

  const handleContinue = () => {
    markPageCompleted('tutor');
    navigateTo('laboratorio');
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-800 via-emerald-800 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-400/30">
              Tutor Virtual IA &bull; Tarea 3
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
              Práctica &bull; Apoyo &bull; Retroalimentación
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            🤖 Pregúntale a tu Tutor Virtual
          </h2>

          <p className="text-sm text-teal-100/90 leading-relaxed">
            Si tienes dudas, puedes conversar con tu tutor. Pídele una explicación sencilla, un ejemplo, un resumen o una explicación paso a paso sobre los seres vivos y los ecosistemas.
          </p>
        </div>
      </section>

      {/* Main ElevenLabs Tutor Container */}
      <ElevenLabsTutor />

      {/* Next Step CTA */}
      <div className="flex justify-between items-center pt-4">
        <button
          onClick={() => navigateTo('presentacion')}
          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
        >
          &larr; Volver a Presentación
        </button>

        <button
          onClick={handleContinue}
          className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center gap-2"
        >
          <span>Ir a Misión 4: Laboratorio de Retos</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
