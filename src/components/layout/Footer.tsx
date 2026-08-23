import React from 'react';
import { Compass, Heart, BookOpen, ShieldCheck, Sparkles } from 'lucide-react';
import { useLearning } from '../../context/LearningContext';

export const Footer: React.FC = () => {
  const { navigateTo } = useLearning();

  return (
    <footer className="bg-white border-t border-slate-200/80 mt-16 text-slate-600 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white font-bold shadow-xs">
                <Compass className="w-4 h-4" />
              </div>
              <h4 className="font-display font-bold text-slate-900 text-sm">
                Exploradores de la Vida y los Ecosistemas
              </h4>
            </div>
            <p className="text-slate-500 leading-relaxed text-xs max-w-md">
              Ecosistema formativo digital interactivo para la enseñanza de Ciencias Naturales en Educación General Básica – Subnivel Medio. Integra infografía (Tarea 1), compendio y presentación (Tarea 2), tutor y microclases (Tarea 3) y pieza musical IA (Tarea 4).
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-800 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Unidad: "Los seres vivos y su relación con el ambiente"</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Navegación Rápida
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li>
                <button onClick={() => navigateTo('inicio')} className="hover:text-emerald-700 transition-colors">
                  Inicio de la Aventura
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('activacion')} className="hover:text-emerald-700 transition-colors">
                  Misión 1: Activación &bull; Infografía & Canción
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('tema1')} className="hover:text-emerald-700 transition-colors">
                  Misión 2: Los Seres Vivos
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('tema2')} className="hover:text-emerald-700 transition-colors">
                  Misión 3: Los Ecosistemas
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('laboratorio')} className="hover:text-emerald-700 transition-colors">
                  Misión 4: Laboratorio de Retos
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('evaluacion')} className="hover:text-emerald-700 transition-colors">
                  Misión Final: Evaluación Formativa
                </button>
              </li>
            </ul>
          </div>

          {/* Institutional & Teacher info */}
          <div className="space-y-2.5">
            <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
              Recursos y Docencia
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-500">
              <li>
                <button onClick={() => navigateTo('biblioteca')} className="hover:text-emerald-700 transition-colors">
                  Biblioteca de Recursos
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('guia-docente')} className="hover:text-emerald-700 transition-colors">
                  Guía Metodológica del Docente
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('tutor')} className="hover:text-emerald-700 transition-colors">
                  Tutor IA Conversacional
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('cierre')} className="hover:text-emerald-700 transition-colors">
                  Metacognición y Cierre
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© 2026 Exploradores de la Vida y los Ecosistemas. Proyecto Educativo de Ciencias Naturales.</p>
          <div className="flex items-center gap-1.5 text-slate-500">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Entorno Seguro, Inclusivo y Accesible</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
