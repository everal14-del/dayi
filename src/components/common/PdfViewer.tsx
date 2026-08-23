import React, { useState } from 'react';
import { BookOpen, ExternalLink, ChevronRight, X, Sparkles, Lightbulb, BookmarkCheck } from 'lucide-react';
import { CURRICULUM_DATA } from '../../data/curriculumData';
import { APP_RESOURCES } from '../../data/resources';

interface PdfViewerProps {
  subtopicCode: '1.1' | '1.2' | '2.1' | '2.2';
  buttonLabel?: string;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({
  subtopicCode,
  buttonLabel
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const data = CURRICULUM_DATA[subtopicCode];
  const summary = data?.compendioSummary;

  const defaultLabel = buttonLabel || `📖 Explorar el Compendio — Subtema ${subtopicCode}`;

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 font-semibold text-xs border border-emerald-200 shadow-xs transition-all hover:shadow-sm"
      >
        <BookOpen className="w-4 h-4 text-emerald-600" />
        <span>{defaultLabel}</span>
        <ChevronRight className="w-3.5 h-3.5 text-emerald-500" />
      </button>

      {/* Reader Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-3xl max-h-[90vh] rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-emerald-700 to-teal-800 text-white flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-200">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-500/30 px-2 py-0.5 rounded text-emerald-200">
                      Compendio Pedagógico Tarea 2
                    </span>
                    <span className="text-xs text-emerald-200/70">Subtema {subtopicCode}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {data?.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                title="Cerrar compendio"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
              {/* Objective reminder */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-start gap-3">
                <BookmarkCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-xs text-emerald-900 uppercase tracking-wide">
                    Objetivo de Aprendizaje
                  </h5>
                  <p className="text-xs text-emerald-800 mt-1">{data?.objective}</p>
                </div>
              </div>

              {/* Compendium Paragraphs */}
              <div className="space-y-4">
                <h4 className="font-display text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">
                  {summary?.sectionTitle || 'Lectura Fundamental'}
                </h4>
                {summary?.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-slate-600 text-sm leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Key Concepts Grid */}
              <div className="space-y-3 pt-2">
                <h5 className="font-bold text-slate-800 text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  Conceptos Clave del Compendio
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data?.keyConcepts.map((kc, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                      <div className="flex items-center gap-2 font-bold text-slate-800 text-xs mb-1">
                        <span>{kc.icon}</span>
                        <span>{kc.title}</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-snug">{kc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curiosities / Sabías que */}
              {summary?.curiosities && summary.curiosities.length > 0 && (
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-amber-900 space-y-2">
                  <h5 className="font-bold text-xs flex items-center gap-2 text-amber-800">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    ¿Sabías que...? Datos Curiosos de la Naturaleza
                  </h5>
                  <ul className="space-y-1.5 text-xs text-amber-950/80">
                    {summary.curiosities.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-600 font-bold">&bull;</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <a
                href={APP_RESOURCES.compendioPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
              >
                <span>Abrir compendio PDF completo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setIsOpen(false)}
                className="px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-xs transition-colors"
              >
                Comprendido &bull; Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
