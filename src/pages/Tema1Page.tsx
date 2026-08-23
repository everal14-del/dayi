import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  Video,
  CheckCircle2,
  Layers,
  ArrowRight,
  HelpCircle,
  Award
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { CURRICULUM_DATA } from '../data/curriculumData';
import { APP_RESOURCES } from '../data/resources';
import { VideoEmbed } from '../components/common/VideoEmbed';
import { PdfViewer } from '../components/common/PdfViewer';
import { ActivityVivoNoVivo, ActivityClasificacion } from '../components/activities/InteractiveActivities';

export const Tema1Page: React.FC = () => {
  const { navigateTo, progress, markSubmoduleCompleted, markPageCompleted, triggerCelebration } = useLearning();
  const [activeTab, setActiveTab] = useState<'1.1' | '1.2'>('1.1');

  const sub11 = CURRICULUM_DATA['1.1'];
  const sub12 = CURRICULUM_DATA['1.2'];

  const isCompleted11 = progress.completedSubmodules['1.1'];
  const isCompleted12 = progress.completedSubmodules['1.2'];

  const handleFinish11 = () => {
    markSubmoduleCompleted('1.1');
    triggerCelebration();
    setActiveTab('1.2');
  };

  const handleFinish12 = () => {
    markSubmoduleCompleted('1.2');
    markPageCompleted('tema1');
    triggerCelebration();
    navigateTo('tema2');
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-emerald-800 via-teal-800 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              Misión 2 &bull; Tema 1
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
              Ciencias Naturales &bull; Los Seres Vivos
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            🌱 Misión 2: Descubrimos los seres vivos
          </h2>

          <p className="text-sm text-emerald-100/90 leading-relaxed">
            En esta misión investigarás las funciones biológicas que hacen posible la vida y aprenderás a clasificar la asombrosa diversidad de plantas, animales y hongos de nuestro planeta.
          </p>
        </div>
      </section>

      {/* Subtopic Switcher Tabs */}
      <div className="flex bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs max-w-2xl">
        <button
          onClick={() => setActiveTab('1.1')}
          className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === '1.1'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <span>🌱 Subtema 1.1: Características</span>
          {isCompleted11 && <CheckCircle2 className="w-4 h-4 text-emerald-200" />}
        </button>

        <button
          onClick={() => setActiveTab('1.2')}
          className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
            activeTab === '1.2'
              ? 'bg-emerald-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
          }`}
        >
          <span>🦋 Subtema 1.2: Clasificación</span>
          {isCompleted12 && <CheckCircle2 className="w-4 h-4 text-emerald-200" />}
        </button>
      </div>

      {/* SUBTEMA 1.1 */}
      {activeTab === '1.1' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Submodule pedagogical card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  Subtema 1.1
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-1">
                  {sub11.title}
                </h3>
              </div>

              <PdfViewer subtopicCode="1.1" />
            </div>

            {/* Objective box */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
              <p className="text-xs font-bold text-emerald-950 uppercase tracking-wide">
                🎯 Objetivo de Aprendizaje:
              </p>
              <p className="text-xs sm:text-sm text-emerald-900 mt-1 leading-relaxed">
                {sub11.objective}
              </p>
            </div>

            {/* Key concepts chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {sub11.keyConcepts.slice(0, 4).map((kc, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-center">
                  <span className="text-2xl block mb-1">{kc.icon}</span>
                  <h5 className="font-bold text-xs text-slate-800">{kc.title}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* Microclase 1 Video Embed */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              <h4 className="text-base font-bold text-slate-900">
                Microclase 1 &bull; {sub11.microclaseTitle}
              </h4>
            </div>

            <VideoEmbed
              title={sub11.microclaseTitle}
              subtopicCode="Subtema 1.1"
              videoUrl={APP_RESOURCES.youtubeMicroclase1}
              isCompleted={isCompleted11}
              onMarkCompleted={() => markSubmoduleCompleted('1.1')}
            />
          </div>

          {/* Interactive Activity 1.1 */}
          <ActivityVivoNoVivo onComplete={() => markSubmoduleCompleted('1.1')} />

          {/* Next submodule CTA */}
          <div className="flex justify-end pt-4">
            <button
              onClick={handleFinish11}
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center gap-2"
            >
              <span>Pasar a Subtema 1.2: Clasificación</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* SUBTEMA 1.2 */}
      {activeTab === '1.2' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* Submodule pedagogical card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full">
                  Subtema 1.2
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-1">
                  {sub12.title}
                </h3>
              </div>

              <PdfViewer subtopicCode="1.2" />
            </div>

            {/* Objective box */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80">
              <p className="text-xs font-bold text-blue-950 uppercase tracking-wide">
                🎯 Objetivo de Aprendizaje:
              </p>
              <p className="text-xs sm:text-sm text-blue-900 mt-1 leading-relaxed">
                {sub12.objective}
              </p>
            </div>

            {/* Key concepts chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {sub12.keyConcepts.map((kc, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200/70 text-center">
                  <span className="text-2xl block mb-1">{kc.icon}</span>
                  <h5 className="font-bold text-xs text-slate-800">{kc.title}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* Microclase 2 Video Embed */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <h4 className="text-base font-bold text-slate-900">
                Microclase 2 &bull; {sub12.microclaseTitle}
              </h4>
            </div>

            <VideoEmbed
              title={sub12.microclaseTitle}
              subtopicCode="Subtema 1.2"
              videoUrl={APP_RESOURCES.youtubeMicroclase2}
              isCompleted={isCompleted12}
              onMarkCompleted={() => markSubmoduleCompleted('1.2')}
            />
          </div>

          {/* Interactive Activity 1.2 */}
          <ActivityClasificacion onComplete={() => markSubmoduleCompleted('1.2')} />

          {/* Next Mission CTA */}
          <div className="flex justify-between items-center pt-4">
            <button
              onClick={() => setActiveTab('1.1')}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
            >
              &larr; Volver a Subtema 1.1
            </button>

            <button
              onClick={handleFinish12}
              className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center gap-2"
            >
              <span>Completar Misión 2 y Avanzar a Ecosistemas</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
