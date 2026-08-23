import React, { useState } from 'react';
import {
  Award,
  Sparkles,
  Music,
  CheckCircle2,
  BookmarkCheck,
  Send,
  Heart,
  Share2,
  BookOpen,
  Compass
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { AudioEmbed } from '../components/common/AudioEmbed';
import { APP_RESOURCES } from '../data/resources';

export const CierrePage: React.FC = () => {
  const { progress, saveReflection, markPageCompleted, triggerCelebration, navigateTo } = useLearning();

  const [reflections, setReflections] = useState(progress.reflections);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const reflectionPrompts = [
    { key: 'q1' as const, label: '1. ¿Qué aprendí?', placeholder: 'Menciona los conceptos clave que ahora comprendes sobre los seres vivos y ecosistemas...' },
    { key: 'q2' as const, label: '2. ¿Qué fue lo que más me sorprendió?', placeholder: 'Describe el dato o curiosidad científica que más llamó tu atención...' },
    { key: 'q3' as const, label: '3. ¿Qué puedo identificar ahora en mi entorno?', placeholder: 'Factores bióticos, abióticos, animales, plantas u hongos en tu comunidad...' },
    { key: 'q4' as const, label: '4. ¿Cómo puedo ayudar a cuidar los ecosistemas?', placeholder: 'Acciones diarias y compromisos para proteger la biodiversidad...' }
  ];

  const handleSaveAll = (e: React.FormEvent) => {
    e.preventDefault();
    saveReflection('q1', reflections.q1);
    saveReflection('q2', reflections.q2);
    saveReflection('q3', reflections.q3);
    saveReflection('q4', reflections.q4);
    setSavedSuccess(true);
    markPageCompleted('cierre');
    triggerCelebration();
  };

  const unlockedBadges = progress.badges.filter(b => b.unlocked);

  return (
    <div className="space-y-10 pb-16">
      {/* Celebration Hero */}
      <section className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-12 shadow-2xl relative overflow-hidden text-center space-y-4">
        <div className="w-16 h-16 rounded-3xl bg-amber-400 text-slate-950 flex items-center justify-center mx-auto shadow-lg animate-bounce">
          <Award className="w-8 h-8" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Misión Cumplida &bull; Cierre Pedagógico
        </div>

        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white">
          🌟 ¡Felicitaciones, Explorador!
        </h2>

        <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
          Has completado con éxito tu recorrido por los seres vivos y los ecosistemas. Ahora posees las herramientas científicas para comprender, valorar y proteger la vida en el planeta.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={triggerCelebration}
            className="px-6 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>¡Celebrar Logro!</span>
          </button>
        </div>
      </section>

      {/* Re-activation closing song */}
      <section className="space-y-4">
        <div className="flex items-center gap-2.5">
          <Music className="w-5 h-5 text-emerald-600" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Canción de Cierre &bull; "La vida está en todas partes"
          </h3>
        </div>

        <AudioEmbed
          title={APP_RESOURCES.audioCancionTitulo}
          artist={APP_RESOURCES.audioCancionGrupo}
          sourceUrl={APP_RESOURCES.audioCancionUrl}
          showChecklist={false}
        />
      </section>

      {/* Metacognitive Reflection Prompts */}
      <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <BookmarkCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Metacognición &bull; Fijación de Saberes
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Ahora reflexiona sobre tu aprendizaje
            </h3>
          </div>
        </div>

        <form onSubmit={handleSaveAll} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reflectionPrompts.map(item => (
              <div key={item.key} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <label className="block font-bold text-xs sm:text-sm text-slate-800">
                  {item.label}
                </label>
                <textarea
                  rows={3}
                  value={reflections[item.key]}
                  onChange={e => setReflections({ ...reflections, [item.key]: e.target.value })}
                  placeholder={item.placeholder}
                  className="w-full p-3 bg-white text-xs sm:text-sm text-slate-800 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              {savedSuccess ? '✓ Tus reflexiones han sido guardadas con éxito' : 'Escribe tus respuestas para completar tu bitácora de explorador.'}
            </p>

            <button
              type="submit"
              className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Guardar Bitácora y Completar</span>
            </button>
          </div>
        </form>
      </section>

      {/* Explorer Credentials & Badges Showcase */}
      <section className="bg-gradient-to-br from-amber-50 to-emerald-50 border border-amber-200/70 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
              Cuadro de Honor del Explorador
            </span>
            <h3 className="text-lg font-bold text-slate-900 mt-0.5">
              Insignias Científicas Obtenidas
            </h3>
          </div>

          <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-amber-800 border border-amber-200">
            {unlockedBadges.length} de {progress.badges.length} Desbloqueadas
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {progress.badges.map(b => (
            <div
              key={b.id}
              className={`p-4 rounded-2xl border text-center transition-all ${
                b.unlocked
                  ? 'bg-white border-amber-300 shadow-xs ring-1 ring-amber-400/30'
                  : 'bg-white/40 border-slate-200 opacity-40 grayscale'
              }`}
            >
              <div className="text-3xl mb-1">{b.icon}</div>
              <h5 className="font-bold text-xs text-slate-800">{b.name}</h5>
              <p className="text-[10px] text-slate-500 mt-0.5 line-clamp-2">{b.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
        <button
          onClick={() => navigateTo('biblioteca')}
          className="px-6 py-3 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2"
        >
          <BookOpen className="w-4 h-4 text-emerald-600" />
          <span>Ver Biblioteca de Recursos</span>
        </button>

        <button
          onClick={() => navigateTo('guia-docente')}
          className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs transition-colors flex items-center gap-2"
        >
          <span>Consultar Guía del Docente &rarr;</span>
        </button>
      </div>
    </div>
  );
};
