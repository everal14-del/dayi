import React, { useState } from 'react';
import {
  Globe,
  Sparkles,
  BookOpen,
  Video,
  CheckCircle2,
  ArrowRight,
  Sun,
  Layers,
  Leaf
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { APP_RESOURCES } from '../data/resources';
import { VideoEmbed } from '../components/common/VideoEmbed';
import { PdfViewer } from '../components/common/PdfViewer';
import { ActivityDetectivesEcosistema, ActivityCadenaAlimenticia } from '../components/activities/InteractiveActivities';

export const Tema2Page: React.FC = () => {
  const { navigateTo, progress, markSubmoduleCompleted, markPageCompleted, triggerCelebration } = useLearning();
  const [activeTab, setActiveTab] = useState<'2.1' | '2.2'>('2.1');

  const sub21 = CURRICULUM_DATA['2.1'];
  const sub22 = CURRICULUM_DATA['2.2'];

  const isCompleted21 = progress.completedSubmodules['2.1'];
  const isCompleted22 = progress.completedSubmodules['2.2'];

  const handleFinish21 = () => {
    markSubmoduleCompleted('2.1');
    triggerCelebration();
    setActiveTab('2.2');
  };

  const handleFinish22 = () => {
    markSubmoduleCompleted('2.2');
    markPageCompleted('tema2');
    triggerCelebration();
    navigateTo('presentacion');
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-teal-800 via-emerald-800 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-teal-400/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-400/30">
              Misión 3 &bull; Tema 2
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
              Ciencias Naturales &bull; Ecosistemas y Cadenas Tróficas
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            🌎 Misión 3: Exploramos los ecosistemas
          </h2>

          <p className="text-sm text-teal-100/90 leading-relaxed">
            Descubre cómo interactúan los seres vivos (factores bióticos) con los elementos no vivos (factores abióticos) y comprende la delicada red de energía que sostiene el equilibrio de la biosfera.
          </p>
        </div>
      </section>

      {/* Subtopic Switcher Tabs */}
      <div className="flex bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs max-w-2xl">
        <button
          onClick={() => setActiveTab('2.1')}
          className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === '2.1'
              ? 'bg-teal-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <span>💧 Subtema 2.1: Componentes</span>
          {isCompleted21 && <CheckCircle2 className="w-4 h-4 text-teal-200" />}
        </button>

        <button
          onClick={() => setActiveTab('2.2')}
          className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === '2.2'
              ? 'bg-teal-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <span>🦊 Subtema 2.2: Cadenas Tróficas</span>
          {isCompleted22 && <CheckCircle2 className="w-4 h-4 text-teal-200" />}
        </button>
      </div>

      {/* SUBTEMA 2.1 */}
      {activeTab === '2.1' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Submodule pedagogical card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full">
                  Subtema 2.1
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-1">
                  {sub21.title}
                </h3>
              </div>

              <PdfViewer subtopicCode="2.1" />
            </div>

            {/* Objective box */}
            <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80">
              <p className="text-xs font-bold text-teal-950 uppercase tracking-wide">
                🎯 Objetivo de Aprendizaje:
              </p>
              <p className="text-xs sm:text-sm text-teal-900 mt-1 leading-relaxed">
                {sub21.objective}
              </p>
            </div>

            {/* Key concepts chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {sub21.keyConcepts.map((kc, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-center">
                  <span className="text-2xl block mb-1">{kc.icon}</span>
                  <h5 className="font-bold text-xs text-slate-800">{kc.title}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* Microclase 3 Video Embed */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
              <h4 className="text-base font-bold text-slate-900">
                Microclase 3 &bull; {sub21.microclaseTitle}
              </h4>
            </div>

            <VideoEmbed
              title={sub21.microclaseTitle}
              subtopicCode="Subtema 2.1"
              videoUrl={APP_RESOURCES.youtubeMicroclase3}
              isCompleted={isCompleted21}
              onMarkCompleted={() => markSubmoduleCompleted('2.1')}
            />
          </div>

          {/* Interactive Activity 2.1 */}
          <ActivityDetectivesEcosistema onComplete={() => markSubmoduleCompleted('2.1')} />

          {/* Next submodule CTA */}
          <div className="flex justify-end pt-4">
            <button
              onClick={handleFinish21}
              className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center gap-2"
            >
              <span>Pasar a Subtema 2.2: Cadenas Alimenticias</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* SUBTEMA 2.2 */}
      {activeTab === '2.2' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Submodule pedagogical card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full">
                  Subtema 2.2
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-1">
                  {sub22.title}
                </h3>
              </div>

              <PdfViewer subtopicCode="2.2" />
            </div>

            {/* Objective box */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80">
              <p className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                🎯 Objetivo de Aprendizaje:
              </p>
              <p className="text-xs sm:text-sm text-amber-900 mt-1 leading-relaxed">
                {sub22.objective}
              </p>
            </div>

            {/* Key concepts chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {sub22.keyConcepts.slice(0, 4).map((kc, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-center">
                  <span className="text-2xl block mb-1">{kc.icon}</span>
                  <h5 className="font-bold text-xs text-slate-800">{kc.title}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* Microclase 4 Video Embed */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
              <h4 className="text-base font-bold text-slate-900">
                Microclase 4 &bull; {sub22.microclaseTitle}
              </h4>
            </div>

            <VideoEmbed
              title={sub22.microclaseTitle}
              subtopicCode="Subtema 2.2"
              videoUrl={APP_RESOURCES.youtubeMicroclase4}
              isCompleted={isCompleted22}
              onMarkCompleted={() => markSubmoduleCompleted('2.2')}
            />
          </div>

          {/* Interactive Activity 2.2 */}
          <ActivityCadenaAlimenticia onComplete={() => markSubmoduleCompleted('2.2')} />

          {/* Next Mission CTA */}
          <div className="flex justify-between items-center pt-4">
            <button
              onClick={() => setActiveTab('2.1')}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
            >
              &larr; Volver a Subtema 2.1
            </button>

            <button
              onClick={handleFinish22}
              className="px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center gap-2"
            >
              <span>Completar Misión 3 y Ver Presentación</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
