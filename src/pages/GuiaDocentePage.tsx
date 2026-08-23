import React from 'react';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Table,
  ShieldCheck,
  Award,
  ArrowRight,
  Layers,
  HeartHandshake
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export const GuiaDocentePage: React.FC = () => {
  const { navigateTo } = useLearning();

  const pedagogicalMatrix = [
    { resource: 'Infografía T1', function: 'Activación / síntesis conceptual', description: 'Permite un anclaje visual inicial y visión global de la unidad.' },
    { resource: 'Canción IA (Fase 1 T4)', function: 'Activación / motivación / recordación / cierre', description: 'Facilita la fijación de conceptos mediante ritmo y rima melódica.' },
    { resource: 'Compendio Pedagógico T2', function: 'Construcción conceptual', description: 'Desarrollo textual riguroso, lectura guiada y datos de interés científico.' },
    { resource: 'Presentación interactiva T2', function: 'Construcción / visualización', description: 'Esquemas visuales y diapositivas de apoyo para clase o autoaprendizaje.' },
    { resource: '4 Microclases T3', function: 'Construcción / refuerzo', description: 'Explicación audiovisual corta focalizada en cada uno de los 4 subtemas.' },
    { resource: 'Tutor IA Conversacional T3', function: 'Práctica / apoyo / retroalimentación', description: 'Atención a la diversidad, resolución de dudas paso a paso y lenguaje adaptado.' },
    { resource: 'Laboratorio de Actividades', function: 'Práctica y aplicación', description: '4 retos gamificados con clasificación interactiva y cadenas tróficas.' },
    { resource: 'Evaluación Formativa', function: 'Comprobación de saberes', description: 'Reactivos de opción múltiple con retroalimentación inmediata.' },
    { resource: 'Módulo de Retroalimentación', function: 'Mejora continua y remediales', description: 'Diagnóstico de fortalezas y sugerencia de recursos de refuerzo.' },
    { resource: 'Reflexión y Metacognición', function: 'Cierre / metacognición', description: 'Consolidación de compromisos ambientales y autoevaluación del proceso.' }
  ];

  const steps = [
    { title: '1. ACTIVACIÓN', desc: 'Preguntas detonantes, infografía y canción' },
    { title: '2. CONSTRUCCIÓN', desc: 'Microclases, compendio y presentación interactiva' },
    { title: '3. PRÁCTICA', desc: 'Laboratorio de retos y tutor conversacional' },
    { title: '4. RETROALIMENTACIÓN', desc: 'Orientación correctiva y formativa en tiempo real' },
    { title: '5. EVALUACIÓN', desc: 'Comprobación de objetivos de aprendizaje' },
    { title: '6. CIERRE', desc: 'Metacognición, fijación y cuadro de honor' }
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-900 via-teal-950 to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              Documento Metodológico
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
              Diseño Instruccional &bull; Ciencias Naturales
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            👩‍🏫 Guía del Docente y Arquitectura Curricular
          </h2>

          <p className="text-sm text-emerald-100/90 leading-relaxed">
            Orientaciones metodológicas para la implementación en el aula y sustento académico del ecosistema formativo digital para Educación General Básica Subnivel Medio.
          </p>
        </div>
      </section>

      {/* 1. Pedagogical Route Diagram */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Secuencia Didáctica
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Ruta Formativa de Aprendizaje
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-center space-y-2 relative"
            >
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center mx-auto shadow-2xs">
                {idx + 1}
              </div>
              <h5 className="font-bold text-xs text-slate-900">{step.title}</h5>
              <p className="text-[11px] text-slate-500 leading-tight">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Master Matrix: Recurso vs Función Pedagógica */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
            <Table className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
              Matriz de Articulación Pedagógica
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Alineación de Recursos y Funciones Educativas
            </h3>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200 uppercase text-[11px] tracking-wider">
              <tr>
                <th className="p-4">Recurso Integrado</th>
                <th className="p-4">Función Pedagógica</th>
                <th className="p-4">Aporte al Aprendizaje</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {pedagogicalMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-emerald-50/40 transition-colors">
                  <td className="p-4 font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {row.resource}
                  </td>
                  <td className="p-4 font-semibold text-emerald-800 bg-emerald-50/20">
                    {row.function}
                  </td>
                  <td className="p-4 text-slate-600 text-xs">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 3. Accessibility & Educational Safety */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Principios de Accesibilidad Universal
            </h4>
          </div>
          <ul className="text-xs text-slate-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">&bull;</span>
              <span><strong>Múltiples formatos de representación:</strong> Audio, video con subtitulado, esquemas gráficos y texto guiado.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">&bull;</span>
              <span><strong>Lenguaje claro y adaptable:</strong> El tutor virtual puede simplificar conceptos a solicitud del estudiante.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold">&bull;</span>
              <span><strong>Diseño responsive:</strong> Visualización fluida en computadoras, laptops, tabletas y teléfonos celulares.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">
              Seguridad Educativa y Ética
            </h4>
          </div>
          <ul className="text-xs text-slate-600 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">&bull;</span>
              <span><strong>Privacidad garantizada:</strong> No se solicitan ni almacenan datos personales sensibles ni contraseñas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">&bull;</span>
              <span><strong>Sin diagnósticos punitivos:</strong> La evaluación tiene un carácter estrictamente formativo y remedial.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-600 font-bold">&bull;</span>
              <span><strong>Complementariedad docente:</strong> Las herramientas de IA acompañan y fortalecen la labor pedagógica del profesor.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Action footer */}
      <div className="flex justify-end pt-4">
        <button
          onClick={() => navigateTo('inicio')}
          className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center gap-2"
        >
          <span>Ir al Portal de Inicio</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
