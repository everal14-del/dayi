import React, { useState } from 'react';
import {
  FileCheck2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  BookOpen,
  Award
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { EVALUATION_QUESTIONS } from '../data/curriculumData';

export const EvaluacionPage: React.FC = () => {
  const { navigateTo, saveEvaluation, triggerCelebration } = useLearning();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, any>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQ = EVALUATION_QUESTIONS[currentStep];
  const isLastQuestion = currentStep === EVALUATION_QUESTIONS.length - 1;

  const handleSelectOption = (questionId: number, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const handleFinishExam = () => {
    // Calculate score, strengths, and weaknesses
    let correctCount = 0;
    const strengths: string[] = [];
    const weaknesses: string[] = [];

    EVALUATION_QUESTIONS.forEach(q => {
      const userAns = selectedAnswers[q.id];
      if (userAns === q.correctAnswer) {
        correctCount++;
        if (!strengths.includes(q.subtopic)) {
          strengths.push(q.subtopic);
        }
      } else {
        if (!weaknesses.includes(q.subtopic)) {
          weaknesses.push(q.subtopic);
        }
      }
    });

    saveEvaluation(correctCount, EVALUATION_QUESTIONS.length, selectedAnswers, strengths, weaknesses);
    setIsSubmitted(true);
    triggerCelebration();
    navigateTo('retroalimentacion');
  };

  const isAnsweredCurrent = selectedAnswers[currentQ?.id] !== undefined;
  const answeredTotal = Object.keys(selectedAnswers).length;

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              Misión Final &bull; Evaluación Formativa
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
              Comprobación de Saberes y Diagnóstico
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            📝 Misión final: Demuestra lo que aprendiste
          </h2>

          <p className="text-sm text-emerald-100/90 leading-relaxed">
            Esta evaluación formativa abarca los 4 subtemas de la unidad. Al finalizar, recibirás un análisis de tus fortalezas y recomendaciones personalizadas.
          </p>
        </div>
      </section>

      {/* Question Stepper Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
        {/* Progress header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
              Pregunta {currentStep + 1} de {EVALUATION_QUESTIONS.length}
            </span>
            <p className="text-xs text-slate-500 mt-1">
              Eje: {currentQ.subtopic}
            </p>
          </div>

          {/* Mini question chips */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {EVALUATION_QUESTIONS.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => setCurrentStep(idx)}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all ${
                  currentStep === idx
                    ? 'bg-emerald-600 text-white ring-2 ring-emerald-300'
                    : selectedAnswers[q.id] !== undefined
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Current Question Statement */}
        <div className="space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {currentQ.questionText}
          </h3>

          {/* Options */}
          <div className="space-y-3">
            {currentQ.options?.map((option, optIdx) => {
              const isSelected = selectedAnswers[currentQ.id] === optIdx;

              return (
                <button
                  key={optIdx}
                  type="button"
                  onClick={() => handleSelectOption(currentQ.id, optIdx)}
                  className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-500/20 shadow-xs'
                      : 'bg-slate-50/70 border-slate-200/80 text-slate-700 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      isSelected
                        ? 'bg-emerald-600 text-white'
                        : 'bg-white border border-slate-300 text-slate-600'
                    }`}
                  >
                    {String.fromCharCode(65 + optIdx)}
                  </span>
                  <span className="leading-relaxed">{option}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            disabled={currentStep === 0}
            className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 disabled:opacity-30 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
          >
            &larr; Anterior
          </button>

          <div className="flex items-center gap-3">
            {!isLastQuestion ? (
              <button
                type="button"
                onClick={() => setCurrentStep(prev => Math.min(EVALUATION_QUESTIONS.length - 1, prev + 1))}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2"
              >
                <span>Siguiente Pregunta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleFinishExam}
                disabled={answeredTotal < EVALUATION_QUESTIONS.length}
                className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 disabled:opacity-40 text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Entregar y Ver Diagnóstico</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
