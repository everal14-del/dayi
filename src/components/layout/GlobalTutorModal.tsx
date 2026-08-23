import React from 'react';
import { X, Bot, Sparkles, Volume2, ShieldCheck } from 'lucide-react';
import { useLearning } from '../../context/LearningContext';
import { ElevenLabsTutor } from '../common/ElevenLabsTutor';

export const GlobalTutorModal: React.FC = () => {
  const { isTutorOpen, toggleTutor } = useLearning();

  if (!isTutorOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-4xl max-h-[92vh] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-400/30 px-2 py-0.5 rounded text-emerald-100">
                Tutor Conversacional IA
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                Asistente Virtual de Ciencias Naturales
              </h3>
            </div>
          </div>

          <button
            onClick={() => toggleTutor(false)}
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            title="Cerrar tutor"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          <ElevenLabsTutor />
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Tutor seguro &bull; Explica paso a paso con lenguaje claro
          </span>
          <button
            onClick={() => toggleTutor(false)}
            className="px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold rounded-lg transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
