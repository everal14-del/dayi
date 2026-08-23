import React from 'react';
import {
  MessageSquareQuote,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  BookOpen,
  Video,
  Bot,
  ArrowRight,
  Sparkles,
  Trophy,
  Award
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { EVALUATION_QUESTIONS } from '../data/curriculumData';

export const RetroalimentacionPage: React.FC = () => {
  const { progress, navigateTo, toggleTutor, triggerCelebration } = useLearning();

  const score = progress.evalScore ?? 0;
  const total = progress.evalTotal || EVALUATION_QUESTIONS.length;
  const percentage = Math.round((score / total) * 100);
  const isHighPass = percentage >= 80;
  const isPass = percentage >= 60;

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              Diagnóstico Formativo
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
              Retroalimentación para la Mejora Continua
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            💬 Tu retroalimentación personalizada
          </h2>

          <p className="text-sm text-emerald-100/90 leading-relaxed">
            Aquí tienes un desglose formativo de tus fortalezas demostradas y los módulos recomendados para consolidar tu aprendizaje.
          </p>
        </div>
      </section>

      {/* Main Score & Diagnostic Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div
              className={`w-20 h-20 rounded-3xl flex items-center justify-center text-3xl font-black shadow-inner ${
                isHighPass
                  ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-300'
                  : isPass
                  ? 'bg-blue-100 text-blue-800 border-2 border-blue-300'
                  : 'bg-amber-100 text-amber-800 border-2 border-amber-300'
              }`}
            >
              {percentage}%
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Rendimiento de Evaluación
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {score} de {total} respuestas correctas
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {isHighPass
                  ? '¡Excelente dominio conceptual de los seres vivos y ecosistemas!'
                  : isPass
                  ? '¡Buen trabajo! Has alcanzado los objetivos formativos esenciales.'
                  : '¡Buen esfuerzo! Te recomendamos repasar los recursos sugeridos.'}
              </p>
            </div>
          </div>

          {/* Action Quick Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => navigateTo('evaluacion')}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Intentar nuevamente</span>
            </button>

            <button
              onClick={() => toggleTutor(true)}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5"
            >
              <Bot className="w-4 h-4" />
              <span>Preguntar al tutor</span>
            </button>
          </div>
        </div>

        {/* Diagnostic Sections: Strengths vs Areas to Reinforce */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Strengths */}
          <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200/80 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-emerald-950 text-sm sm:text-base">
                Tus Fortalezas Identificadas
              </h4>
            </div>

            {progress.evalStrengths.length > 0 ? (
              <ul className="space-y-2 text-xs sm:text-sm text-emerald-900">
                {progress.evalStrengths.map((s, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">&bull;</span>
                    <span>¡Excelente! Comprendes con claridad: <strong>{s}</strong>.</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-emerald-800">
                Continúa practicando en el laboratorio para consolidar tus fortalezas.
              </p>
            )}
          </div>

          {/* Areas to Reinforce */}
          <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200/80 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-amber-950 text-sm sm:text-base">
                Aspectos Recomendados para Reforzar
              </h4>
            </div>

            {progress.evalWeaknesses.length > 0 ? (
              <ul className="space-y-2 text-xs sm:text-sm text-amber-900">
                {progress.evalWeaknesses.map((w, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">&bull;</span>
                    <span>Te recomendamos revisar nuevamente: <strong>{w}</strong>.</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-amber-800">
                ¡No se detectaron debilidades críticas! Tienes una base científica sólida.
              </p>
            )}
          </div>
        </div>

        {/* Detailed Question Review Matrix */}
        <div className="space-y-4 pt-4">
          <h4 className="font-bold text-slate-800 text-sm sm:text-base">
            Desglose de Preguntas y Retroalimentación Específica:
          </h4>

          <div className="space-y-3">
            {EVALUATION_QUESTIONS.map(q => {
              const userAns = progress.evalAnswers[q.id];
              const isCorrect = userAns === q.correctAnswer;

              return (
                <div
                  key={q.id}
                  className={`p-4 rounded-2xl border text-xs leading-relaxed space-y-2 ${
                    isCorrect
                      ? 'bg-emerald-50/50 border-emerald-200 text-emerald-950'
                      : 'bg-red-50/50 border-red-200 text-red-950'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold">
                      Pregunta {q.id}: {q.subtopic}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        isCorrect
                          ? 'bg-emerald-200 text-emerald-900'
                          : 'bg-red-200 text-red-900'
                      }`}
                    >
                      {isCorrect ? '✓ Correcta' : '✗ Requiere refuerzo'}
                    </span>
                  </div>

                  <p className="font-medium text-slate-800">{q.questionText}</p>
                  <p className="text-[11px] text-slate-600">
                    💡 <strong>Explicación:</strong> {q.explanation}
                  </p>

                  {!isCorrect && (
                    <div className="flex items-center justify-between pt-1 text-[11px] font-semibold text-emerald-700">
                      <span>Recurso sugerido: {q.remedialResource}</span>
                      <button
                        onClick={() => navigateTo(q.remedialPageId)}
                        className="underline hover:text-emerald-900"
                      >
                        Repasar módulo &rarr;
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Remedial Navigation Buttons */}
        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => navigateTo('tema1')}
              className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-xs rounded-xl border border-emerald-200 transition-colors flex items-center gap-1.5"
            >
              <Video className="w-3.5 h-3.5" />
              <span>Volver a la microclase</span>
            </button>

            <button
              onClick={() => navigateTo('tema2')}
              className="px-4 py-2 bg-teal-50 hover:bg-teal-100 text-teal-800 font-semibold text-xs rounded-xl border border-teal-200 transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Consultar el compendio</span>
            </button>

            <button
              onClick={() => toggleTutor(true)}
              className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-800 font-semibold text-xs rounded-xl border border-blue-200 transition-colors flex items-center gap-1.5"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Preguntar al tutor</span>
            </button>
          </div>

          <button
            onClick={() => navigateTo('cierre')}
            className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center gap-2"
          >
            <span>Ir al Cierre y Reflexión Final</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
