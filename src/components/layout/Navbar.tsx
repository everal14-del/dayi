import React, { useState } from 'react';
import {
  Compass,
  Menu,
  X,
  Bot,
  Award,
  BookOpen,
  Sparkles,
  GraduationCap,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext';
import { PageId } from '../../types';

export const Navbar: React.FC = () => {
  const { currentPage, navigateTo, totalProgressPercent, toggleTutor, progress, resetProgress } = useLearning();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; icon: string; mission?: string }[] = [
    { id: 'inicio', label: 'Inicio', icon: '🏠' },
    { id: 'activacion', label: 'Misión 1: Activación', icon: '🔎', mission: 'Misión 1' },
    { id: 'tema1', label: 'Misión 2: Seres Vivos', icon: '🌱', mission: 'Misión 2' },
    { id: 'tema2', label: 'Misión 3: Ecosistemas', icon: '🌎', mission: 'Misión 3' },
    { id: 'presentacion', label: 'Presentación', icon: '🖥️' },
    { id: 'tutor', label: 'Tutor Virtual', icon: '🤖' },
    { id: 'laboratorio', label: 'Misión 4: Laboratorio', icon: '🧪', mission: 'Misión 4' },
    { id: 'evaluacion', label: 'Misión Final: Evaluación', icon: '📝', mission: 'Misión Final' },
    { id: 'retroalimentacion', label: 'Retroalimentación', icon: '💬' },
    { id: 'cierre', label: 'Cierre y Reflexión', icon: '🌟' },
    { id: 'biblioteca', label: 'Biblioteca', icon: '📚' },
    { id: 'guia-docente', label: 'Guía Docente', icon: '👩‍🏫' }
  ];

  const handleNav = (id: PageId) => {
    navigateTo(id);
    setMobileMenuOpen(false);
  };

  const unlockedBadgesCount = progress.badges.filter(b => b.unlocked).length;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Title */}
          <div
            onClick={() => handleNav('inicio')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-pulse-subtle" />
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-full inline-block">
                Ciencias Naturales &bull; EGB Medio
              </span>
              <h1 className="font-display font-bold text-slate-900 text-sm sm:text-base tracking-tight leading-tight group-hover:text-emerald-700 transition-colors">
                Exploradores de la Vida
              </h1>
            </div>
          </div>

          {/* Center Progress pill (Desktop) */}
          <div className="hidden lg:flex items-center gap-4 bg-slate-50 border border-slate-200/80 px-4 py-2 rounded-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-700">Progreso de la Ruta:</span>
              <div className="w-28 bg-slate-200 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${totalProgressPercent}%` }}
                />
              </div>
              <span className="text-xs font-black text-emerald-700">{totalProgressPercent}%</span>
            </div>

            <div className="h-4 w-px bg-slate-200" />

            <div className="flex items-center gap-1.5 text-xs text-amber-800 font-semibold" title="Insignias obtenidas">
              <Award className="w-4 h-4 text-amber-500" />
              <span>{unlockedBadgesCount} / {progress.badges.length}</span>
            </div>
          </div>

          {/* Action buttons right */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Ask Tutor Button */}
            <button
              onClick={() => toggleTutor()}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs hover:shadow-sm transition-all hover:scale-102"
              title="Abrir Tutor IA"
            >
              <Bot className="w-4 h-4" />
              <span className="hidden sm:inline">Preguntar al Tutor</span>
              <span className="sm:hidden">Tutor</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Global Progress Bar line */}
        <div className="w-full bg-slate-100 h-1 overflow-hidden">
          <div
            className="bg-emerald-500 h-full transition-all duration-500 ease-out"
            style={{ width: `${totalProgressPercent}%` }}
          />
        </div>
      </div>

      {/* Slide-down Mobile Menu / Full Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white/98 backdrop-blur-xl px-4 py-6 shadow-xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="mb-4 pb-4 border-b border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase">Ruta de Exploración</p>
              <p className="text-sm font-bold text-slate-900">Progreso Total: {totalProgressPercent}%</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>{unlockedBadgesCount} Insignias</span>
            </div>
          </div>

          <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {navItems.map(item => {
              const isActive = currentPage === item.id;
              const isDone = progress.completedPages[item.id];

              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`p-3 rounded-2xl flex items-center justify-between text-left transition-all ${
                    isActive
                      ? 'bg-emerald-600 text-white font-bold shadow-xs'
                      : 'bg-slate-50 hover:bg-emerald-50/70 text-slate-700 border border-slate-200/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      {item.mission && (
                        <span className={`block text-[10px] uppercase tracking-wider font-bold ${
                          isActive ? 'text-emerald-100' : 'text-emerald-700'
                        }`}>
                          {item.mission}
                        </span>
                      )}
                      <span className="text-xs font-medium">{item.label}</span>
                    </div>
                  </div>
                  {isDone && (
                    <CheckCircle2 className={`w-4 h-4 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <button
              onClick={() => {
                if (window.confirm('¿Deseas reiniciar tu progreso de la aventura?')) {
                  resetProgress();
                  setMobileMenuOpen(false);
                }
              }}
              className="flex items-center gap-1 text-slate-400 hover:text-red-600 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reiniciar progreso
            </button>
            <span className="text-[11px] text-slate-400">UNEMI &bull; Ciencias Naturales</span>
          </div>
        </div>
      )}
    </header>
  );
};
