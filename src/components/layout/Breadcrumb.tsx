import React from 'react';
import { ChevronRight, Home, ArrowLeft, ArrowRight, Bot } from 'lucide-react';
import { PageId } from '../../types';
import { useLearning } from '../../context/LearningContext';

const PAGE_METADATA: Record<PageId, { title: string; mission?: string; prev?: PageId; next?: PageId }> = {
  inicio: { title: 'Inicio', next: 'activacion' },
  activacion: { title: 'Misión 1: Activación', mission: 'Misión 1', prev: 'inicio', next: 'tema1' },
  tema1: { title: 'Misión 2: Los Seres Vivos', mission: 'Misión 2', prev: 'activacion', next: 'tema2' },
  tema2: { title: 'Misión 3: Los Ecosistemas', mission: 'Misión 3', prev: 'tema1', next: 'presentacion' },
  presentacion: { title: 'Presentación Interactiva', prev: 'tema2', next: 'tutor' },
  tutor: { title: 'Tutor Virtual IA', prev: 'presentacion', next: 'laboratorio' },
  laboratorio: { title: 'Misión 4: Laboratorio de Retos', mission: 'Misión 4', prev: 'tutor', next: 'evaluacion' },
  evaluacion: { title: 'Misión Final: Evaluación', mission: 'Misión Final', prev: 'laboratorio', next: 'retroalimentacion' },
  retroalimentacion: { title: 'Tu Retroalimentación', prev: 'evaluacion', next: 'cierre' },
  cierre: { title: 'Misión Cumplida y Reflexión', prev: 'retroalimentacion', next: 'biblioteca' },
  biblioteca: { title: 'Biblioteca de Recursos', prev: 'cierre', next: 'guia-docente' },
  'guia-docente': { title: 'Guía del Docente', prev: 'biblioteca' }
};

export const Breadcrumb: React.FC = () => {
  const { currentPage, navigateTo } = useLearning();
  const currentMeta = PAGE_METADATA[currentPage] || { title: 'Exploración' };

  return (
    <div className="bg-slate-50/70 border-b border-slate-200/60 px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        {/* Trail */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <button
            onClick={() => navigateTo('inicio')}
            className="flex items-center gap-1 text-slate-600 hover:text-emerald-700 font-medium transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Inicio</span>
          </button>

          {currentPage !== 'inicio' && (
            <>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              {currentMeta.mission && (
                <>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 font-bold text-[10px]">
                    {currentMeta.mission}
                  </span>
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                </>
              )}
              <span className="font-semibold text-slate-800">{currentMeta.title}</span>
            </>
          )}
        </div>

        {/* Previous / Next Quick Step Buttons */}
        <div className="flex items-center gap-2">
          {currentMeta.prev && (
            <button
              onClick={() => navigateTo(currentMeta.prev!)}
              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg shadow-2xs transition-colors"
            >
              <ArrowLeft className="w-3 h-3" />
              <span className="hidden sm:inline">Anterior</span>
            </button>
          )}

          {currentMeta.next && (
            <button
              onClick={() => navigateTo(currentMeta.next!)}
              className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-2xs transition-colors"
            >
              <span className="hidden sm:inline">Siguiente Misión</span>
              <span className="sm:hidden">Siguiente</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
