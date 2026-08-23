import React from 'react';
import {
  Compass,
  ArrowRight,
  BookOpen,
  Sparkles,
  Award,
  CheckCircle2,
  PlayCircle,
  HelpCircle,
  BrainCircuit,
  Layers,
  Flame,
  Globe,
  Leaf
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export const HomePage: React.FC = () => {
  const { navigateTo, totalProgressPercent, progress } = useLearning();

  const coreCards = [
    {
      id: 'tema1',
      title: 'Seres Vivos',
      icon: '🌱',
      tag: 'Subtema 1.1',
      desc: 'Descubre qué procesos vitales hacen que un organismo esté vivo: nutrición, respiración, crecimiento y respuesta a estímulos.',
      color: 'from-emerald-500/10 to-emerald-600/5 border-emerald-200 text-emerald-900',
      actionText: 'Explorar Seres Vivos'
    },
    {
      id: 'tema1',
      subtopic: '1.2',
      title: 'Clasificación',
      icon: '🦋',
      tag: 'Subtema 1.2',
      desc: 'Clasifica organismos en los grandes reinos de la naturaleza: plantas, animales, hongos y microorganismos según sus rasgos.',
      color: 'from-blue-500/10 to-blue-600/5 border-blue-200 text-blue-900',
      actionText: 'Descubrir Clasificación'
    },
    {
      id: 'tema2',
      title: 'Ecosistemas',
      icon: '🌎',
      tag: 'Subtema 2.1',
      desc: 'Identifica la interdependencia entre los factores bióticos (vida) y los factores abióticos (agua, suelo, luz, aire).',
      color: 'from-teal-500/10 to-teal-600/5 border-teal-200 text-teal-900',
      actionText: 'Investigar Ecosistemas'
    },
    {
      id: 'tema2',
      subtopic: '2.2',
      title: 'Cadenas Alimenticias',
      icon: '🦊',
      tag: 'Subtema 2.2',
      desc: 'Analiza el flujo de energía desde el Sol, productores, consumidores primarios y secundarios, y el equilibrio ecológico.',
      color: 'from-amber-500/10 to-amber-600/5 border-amber-200 text-amber-900',
      actionText: 'Construir Cadenas'
    }
  ];

  const methodologySteps = [
    { icon: '🎵', verb: 'Escuchar', desc: 'Canción pedagógica para activar la recordación y emoción.' },
    { icon: '🎥', verb: 'Observar', desc: '4 microclases audiovisuales con ejemplos del entorno.' },
    { icon: '📖', verb: 'Explorar', desc: 'Compendio científico, infografía conceptual y presentación.' },
    { icon: '🧩', verb: 'Practicar', desc: 'Actividades interactivas de clasificación y ordenamiento.' },
    { icon: '🤖', verb: 'Preguntar', desc: 'Tutor IA Conversacional para aclarar dudas al instante.' },
    { icon: '📝', verb: 'Evaluar', desc: 'Evaluación formativa multinivel con diagnóstico.' },
    { icon: '💡', verb: 'Reflexionar', desc: 'Metacognición y compromiso con el cuidado ambiental.' }
  ];

  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative rounded-3xl bg-gradient-to-br from-emerald-800 via-teal-900 to-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
        {/* Ambient background glowing circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-emerald-200 text-xs font-bold tracking-wide uppercase border border-white/15 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Ciencias Naturales &bull; Educación General Básica Subnivel Medio
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight">
            Exploradores de la Vida y los Ecosistemas
          </h1>

          <p className="text-base sm:text-xl text-emerald-100/90 font-light leading-relaxed">
            "Un viaje interactivo para descubrir, comprender y proteger la vida."
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
            ¡Bienvenido, explorador! En este espacio descubrirás qué hace que un ser esté vivo, cómo podemos clasificarlo, qué elementos forman un ecosistema y cómo se relacionan los organismos mediante las cadenas alimenticias.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => navigateTo('activacion')}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-sm sm:text-base shadow-xl hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-3"
            >
              <span>COMENZAR MI AVENTURA</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigateTo('guia-docente')}
              className="px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/20 backdrop-blur-md transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>CONOCER LA UNIDAD</span>
            </button>
          </div>
        </div>

        {/* Progress summary banner on hero */}
        {totalProgressPercent > 0 && (
          <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-emerald-200">
            <span className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              Tu progreso actual en la expedición: <strong>{totalProgressPercent}%</strong>
            </span>
            <button
              onClick={() => navigateTo('activacion')}
              className="underline hover:text-white font-semibold"
            >
              Continuar donde te quedaste &rarr;
            </button>
          </div>
        )}
      </section>

      {/* 4 Core Thematic Modules */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
            Ejes Temáticos del Ecosistema
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Cuatro Subtemas para Explorar y Dominar
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Avanza a través de la secuencia didáctica o navega por los subtemas esenciales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCards.map((card, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl bg-gradient-to-b ${card.color} border shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{card.icon}</span>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white/80 border border-slate-200/80 text-slate-700">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <button
                onClick={() => navigateTo(card.id as any, card.subtopic)}
                className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-slate-900 hover:text-white text-slate-800 text-xs font-bold border border-slate-200 shadow-2xs transition-all flex items-center justify-center gap-2"
              >
                <span>{card.actionText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* "¿Cómo aprenderás?" Methodology Section */}
      <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-sm space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
            Secuencia Formativa
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            ¿Cómo aprenderás?
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Una experiencia pedagógica diseñada para la activación, construcción, práctica y reflexión.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {methodologySteps.map((step, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-2 hover:bg-emerald-50/60 hover:border-emerald-200 transition-all group"
            >
              <div className="text-3xl transform group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-800">
                {step.verb}
              </h4>
              <p className="text-[11px] text-slate-500 leading-tight">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Access to Learning Journey Map */}
      <section className="p-8 rounded-3xl bg-emerald-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="space-y-2">
          <span className="text-[10px] font-bold tracking-wider uppercase bg-emerald-800 text-emerald-200 px-2.5 py-1 rounded-full">
            Ruta Recomendada
          </span>
          <h3 className="text-xl sm:text-2xl font-bold">
            Misión 1 &rarr; Misión 2 &rarr; Misión 3 &rarr; Misión 4 &rarr; Misión Final
          </h3>
          <p className="text-xs text-emerald-200/80">
            Cumple cada etapa formativa para desbloquear tus insignias y obtener tu certificado de explorador.
          </p>
        </div>

        <button
          onClick={() => navigateTo('activacion')}
          className="px-6 py-3 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex-shrink-0 flex items-center gap-2"
        >
          <span>Iniciar Misión 1</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
};
