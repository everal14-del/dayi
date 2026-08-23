import React from 'react';
import { Layers, Sparkles, ExternalLink, ArrowRight, BookOpen, Monitor } from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { CanvaEmbed } from '../components/common/CanvaEmbed';
import { APP_RESOURCES } from '../data/resources';

export const PresentacionPage: React.FC = () => {
  const { navigateTo, markPageCompleted } = useLearning();

  const handleContinue = () => {
    markPageCompleted('presentacion');
    navigateTo('tutor');
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-800 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-400/20 text-blue-300 text-xs font-bold uppercase tracking-wider border border-blue-400/30">
              Recurso Didáctico &bull; Tarea 2
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
              Construcción y Visualización
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            🖥️ Presentación Interactiva
          </h2>

          <p className="text-sm text-blue-100/90 leading-relaxed">
            Consolida los conceptos de seres vivos, reinos biológicos, componentes del ecosistema y dinámica trófica a través de diapositivas interactivas y recursos gráficos.
          </p>
        </div>
      </section>

      {/* Main Canva Presentation Embed Container */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Monitor className="w-5 h-5 text-blue-600" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Diapositivas y Esquemas Multimedia (Canva)
            </h3>
          </div>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Apta para proyección en clase o estudio autónomo
          </span>
        </div>

        <CanvaEmbed
          title="Presentación: Los seres vivos y su relación con el ambiente"
          subtitle="Recurso de Construcción / Visualización Multimedia"
          canvaUrl={APP_RESOURCES.canvaPresentacionUrl}
          type="presentacion"
        />
      </section>

      {/* Synthesis summary cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
          <span className="text-2xl">🌱</span>
          <h4 className="text-sm font-bold text-slate-900">1. Funciones de Vida</h4>
          <p className="text-xs text-slate-500">
            Nutrición celular, crecimiento continuo, irritabilidad ante estímulos y perpetuación reproductiva.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
          <span className="text-2xl">🍄</span>
          <h4 className="text-sm font-bold text-slate-900">2. Criterios de Reino</h4>
          <p className="text-xs text-slate-500">
            Fotosíntesis (plantas), absorción saprofita (hongos) e ingestión heterótrofa motriz (animales).
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
          <span className="text-2xl">💧</span>
          <h4 className="text-sm font-bold text-slate-900">3. Factores Abióticos</h4>
          <p className="text-xs text-slate-500">
            El agua, la luz solar y el sustrato como pilares indispensables de la biocenosis biológica.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
          <span className="text-2xl">🦊</span>
          <h4 className="text-sm font-bold text-slate-900">4. Cascada Trófica</h4>
          <p className="text-xs text-slate-500">
            Paso energético unidireccional y la necesidad de mantener el balance de las poblaciones.
          </p>
        </div>
      </section>

      {/* Next Step CTA */}
      <div className="flex justify-between items-center pt-4">
        <button
          onClick={() => navigateTo('tema2')}
          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
        >
          &larr; Volver a Misión 3: Ecosistemas
        </button>

        <button
          onClick={handleContinue}
          className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center gap-2"
        >
          <span>Preguntar al Tutor IA &rarr;</span>
        </button>
      </div>
    </div>
  );
};
