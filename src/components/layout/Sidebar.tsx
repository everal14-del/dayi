import React from 'react';
import { PageId } from '../../types';
import { useLearning } from '../../context/LearningContext';
import {
  Compass,
  CheckCircle2,
  Circle,
  Award,
  Sparkles,
  BookOpen,
  HelpCircle,
  Flame
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  const { currentPage, navigateTo, progress, totalProgressPercent } = useLearning();

  const missions: {
    id: PageId;
    stepNumber: string;
    title: string;
    icon: string;
    badge: string;
    subtopics?: string[];
  }[] = [
    {
      id: 'inicio',
      stepNumber: '0',
      title: 'Portal de Bienvenida',
      icon: '🏠',
      badge: 'Inicio'
    },
    {
      id: 'activacion',
      stepNumber: '1',
      title: 'Misión 1: Activamos lo que sabemos',
      icon: '🔎',
      badge: 'Activación'
    },
    {
      id: 'tema1',
      stepNumber: '2',
      title: 'Misión 2: Los Seres Vivos',
      icon: '🌱',
      badge: 'Tema 1',
      subtopics: ['1.1 Características', '1.2 Clasificación']
    },
    {
      id: 'tema2',
      stepNumber: '3',
      title: 'Misión 3: Los Ecosistemas',
      icon: '🌎',
      badge: 'Tema 2',
      subtopics: ['2.1 Componentes', '2.2 Cadenas Tróficas']
    },
    {
      id: 'presentacion',
      stepNumber: '—',
      title: 'Presentación Interactiva',
      icon: '🖥️',
      badge: 'Recurso T2'
    },
    {
      id: 'tutor',
      stepNumber: '—',
      title: 'Tutor Virtual IA',
      icon: '🤖',
      badge: 'Apoyo 24/7'
    },
    {
      id: 'laboratorio',
      stepNumber: '4',
      title: 'Misión 4: Laboratorio de Retos',
      icon: '🧪',
      badge: 'Práctica'
    },
    {
      id: 'evaluacion',
      stepNumber: '5',
      title: 'Misión Final: Evaluación',
      icon: '📝',
      badge: 'Evaluación'
    },
    {
      id: 'retroalimentacion',
      stepNumber: '6',
      title: 'Tu Retroalimentación',
      icon: '💬',
      badge: 'Diagnóstico'
    },
    {
      id: 'cierre',
      stepNumber: '7',
      title: 'Misión Cumplida y Reflexión',
      icon: '🌟',
      badge: 'Cierre'
    },
    {
      id: 'biblioteca',
      stepNumber: '—',
      title: 'Biblioteca de Recursos',
      icon: '📚',
      badge: 'Acervo'
    },
    {
      id: 'guia-docente',
      stepNumber: '—',
      title: 'Guía del Docente',
      icon: '👩‍🏫',
      badge: 'Pedagógico'
    }
  ];

  return (
    <aside className={`w-72 bg-white border-r border-slate-200/80 flex flex-col justify-between py-6 px-4 shrink-0 ${className}`}>
      <div className="space-y-6 overflow-y-auto pr-1">
        {/* Route Header card */}
        <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-900 text-white shadow-md relative overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-200 bg-emerald-700/40 px-2 py-0.5 rounded">
              Ruta Pedagógica
            </span>
            <span className="text-xs font-black text-emerald-300">{totalProgressPercent}%</span>
          </div>
          <h4 className="font-bold text-sm leading-tight text-white">Explorador de Ecosistemas</h4>
          
          <div className="w-full bg-emerald-950/60 h-2 rounded-full mt-2.5 overflow-hidden border border-emerald-700/50">
            <div
              className="bg-gradient-to-r from-emerald-400 to-teal-300 h-full rounded-full transition-all duration-500"
              style={{ width: `${totalProgressPercent}%` }}
            />
          </div>
        </div>

        {/* Navigation list */}
        <div className="space-y-1.5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
            Misiones y Recursos
          </p>

          {missions.map(m => {
            const isActive = currentPage === m.id;
            const isCompleted = progress.completedPages[m.id];

            return (
              <button
                key={m.id}
                onClick={() => navigateTo(m.id)}
                className={`w-full text-left p-2.5 rounded-2xl flex items-center justify-between transition-all group ${
                  isActive
                    ? 'bg-emerald-600 text-white font-semibold shadow-xs'
                    : 'text-slate-700 hover:bg-emerald-50/70 hover:text-emerald-900'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-xl flex-shrink-0">{m.icon}</span>
                  <div className="truncate">
                    <p className={`text-xs truncate ${isActive ? 'text-white font-bold' : 'text-slate-800'}`}>
                      {m.title}
                    </p>
                    <span
                      className={`text-[10px] ${
                        isActive ? 'text-emerald-100' : 'text-slate-400 group-hover:text-emerald-700'
                      }`}
                    >
                      {m.badge}
                    </span>
                  </div>
                </div>

                {isCompleted ? (
                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                ) : (
                  <Circle className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-emerald-200' : 'text-slate-300'}`} />
                )}
              </button>
            );
          })}
        </div>

        {/* Badges preview */}
        <div className="p-3.5 bg-amber-50/70 rounded-2xl border border-amber-200/60">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-600" />
              Insignias Ganadas
            </span>
            <span className="text-[11px] font-bold text-amber-800">
              {progress.badges.filter(b => b.unlocked).length} / {progress.badges.length}
            </span>
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            {progress.badges.map(b => (
              <span
                key={b.id}
                title={`${b.name}: ${b.description}`}
                className={`text-lg p-1 rounded-lg border transition-all ${
                  b.unlocked
                    ? 'bg-white border-amber-300 shadow-2xs'
                    : 'opacity-25 grayscale border-transparent'
                }`}
              >
                {b.icon}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer information */}
      <div className="pt-4 border-t border-slate-100 px-2 text-[11px] text-slate-400">
        <p className="font-semibold text-slate-600">Educación General Básica</p>
        <p>Unidad: Los seres vivos y su relación con el ambiente</p>
      </div>
    </aside>
  );
};
