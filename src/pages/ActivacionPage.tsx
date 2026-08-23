import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  HelpCircle,
  BookOpen,
  Music,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Brain,
  Lightbulb
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { EmbedContainer } from '../components/common/EmbedContainer';
import { AudioEmbed } from '../components/common/AudioEmbed';
import { CanvaEmbed } from '../components/common/CanvaEmbed';
import { APP_RESOURCES } from '../data/resources';

export const ActivacionPage: React.FC = () => {
  const { navigateTo, markPageCompleted, triggerCelebration } = useLearning();

  const [priorAnswers, setPriorAnswers] = useState<Record<number, string>>({
    1: '',
    2: '',
    3: '',
    4: ''
  });
  const [answersSaved, setAnswersSaved] = useState(false);

  const activationQuestions = [
    { id: 1, q: '¿Cómo sabemos que algo está vivo?', hint: 'Piensa en si respira, come, crece o reacciona al frío/calor.' },
    { id: 2, q: '¿Qué seres vivos observas en tu entorno cotidiano?', hint: 'Menciona plantas, animales, mascotas o insectos cercanos.' },
    { id: 3, q: '¿Todos los elementos de un ecosistema tienen vida?', hint: '¿Qué pasa con el agua, el aire, las piedras o la luz solar?' },
    { id: 4, q: '¿Qué crees que ocurre cuando un animal se alimenta de otro?', hint: 'Piensa en de dónde obtiene su energía para correr o vivir.' }
  ];

  const handleSaveAnswers = (e: React.FormEvent) => {
    e.preventDefault();
    setAnswersSaved(true);
    markPageCompleted('activacion');
    triggerCelebration();
  };

  const handleContinue = () => {
    markPageCompleted('activacion');
    navigateTo('tema1');
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Module Mission Header */}
      <section className="bg-gradient-to-r from-emerald-700 via-teal-800 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              Misión 1 &bull; Activación
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
              Función Pedagógica: Activación de Saberes Previos
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            🔎 Misión 1: Activamos lo que sabemos
          </h2>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15">
            <p className="text-xs font-bold text-emerald-300 uppercase tracking-wide">
              Objetivo de la Misión:
            </p>
            <p className="text-sm text-slate-100 mt-0.5">
              Recuperar conocimientos previos y despertar curiosidad sobre los seres vivos, sus diferencias con la materia inerte y las relaciones en los ecosistemas.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Exploration Questions for prior knowledge */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Brain className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Paso 1 &bull; Exploración Inicial
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Preguntas detonantes para despertar tu curiosidad
            </h3>
          </div>
        </div>

        <form onSubmit={handleSaveAnswers} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activationQuestions.map(item => (
              <div key={item.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <label className="block font-bold text-xs sm:text-sm text-slate-800">
                  {item.id}. {item.q}
                </label>
                <textarea
                  rows={2}
                  value={priorAnswers[item.id]}
                  onChange={e => setPriorAnswers({ ...priorAnswers, [item.id]: e.target.value })}
                  placeholder={item.hint}
                  className="w-full p-2.5 bg-white text-xs sm:text-sm text-slate-800 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <p className="text-xs text-slate-400">
              * No hay respuestas malas en esta fase; sirve para activar tus ideas antes de estudiar los temas.
            </p>
            <button
              type="submit"
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{answersSaved ? '✓ Saberes Guardados' : 'Registrar mis saberes previos'}</span>
            </button>
          </div>
        </form>
      </section>

      {/* 2. RECURSO 1: INFOGRAFÍA TAREA 1 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Recurso 1 &bull; Síntesis Conceptual (Tarea 1)
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              🧠 Recurso de síntesis conceptual: Infografía
            </h3>
            <p className="text-xs text-slate-500">
              Explora la infografía antes de comenzar para visualizar el mapa de la unidad.
            </p>
          </div>
        </div>

        {/* Canva Infografía Embed */}
        <CanvaEmbed
          title="Infografía Conceptual: Seres Vivos y Ecosistemas"
          subtitle="Esquema visual integral de funciones vitales y dinámica ecológica"
          canvaUrl={APP_RESOURCES.canvaInfografiaUrl}
          type="infografia"
        />
      </section>

      {/* 3. RECURSO 2: PIEZA MUSICAL TAREA 4 */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
            <Music className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
              Recurso 2 &bull; Activación Sensorial (Fase 1 Tarea 4)
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              🎵 Pieza Musical: "La vida está en todas partes"
            </h3>
            <p className="text-xs text-slate-500">
              Función pedagógica: Activación, motivación y recordación de conceptos clave.
            </p>
          </div>
        </div>

        {/* Audio Embed Player Component */}
        <AudioEmbed
          title={APP_RESOURCES.audioCancionTitulo}
          artist={APP_RESOURCES.audioCancionGrupo}
          sourceUrl={APP_RESOURCES.audioCancionUrl}
          onContinue={handleContinue}
          showChecklist={true}
        />
      </section>
    </div>
  );
};
