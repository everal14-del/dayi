import React, { useState } from 'react';
import {
  FlaskConical,
  Award,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Trophy,
  RotateCcw
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import {
  ActivityVivoNoVivo,
  ActivityClasificacion,
  ActivityDetectivesEcosistema,
  ActivityCadenaAlimenticia
} from '../components/activities/InteractiveActivities';

export const LaboratorioPage: React.FC = () => {
  const { navigateTo, progress, markPageCompleted, unlockBadge } = useLearning();
  const [selectedChallenge, setSelectedChallenge] = useState<'reto-1' | 'reto-2' | 'reto-3' | 'reto-4'>('reto-1');

  const challenges = [
    {
      id: 'reto-1',
      title: 'Reto 1: Características de los Seres Vivos',
      badgeId: 'badge-vida',
      badgeName: '🌱 Explorador de la Vida',
      desc: 'Clasifica entidades según presenten funciones biológicas vitales.',
      icon: '🌱',
      color: 'emerald'
    },
    {
      id: 'reto-2',
      title: 'Reto 2: Clasificación de Reinos',
      badgeId: 'badge-clasificador',
      badgeName: '🦋 Clasificador Experto',
      desc: 'Agrupa organismos en plantas, animales y hongos según su nutrición.',
      icon: '🦋',
      color: 'blue'
    },
    {
      id: 'reto-3',
      title: 'Reto 3: Componentes del Ecosistema',
      badgeId: 'badge-ecosistema',
      badgeName: '🌎 Detective del Ecosistema',
      desc: 'Distingue entre factores bióticos y elementos abióticos del entorno.',
      icon: '🌎',
      color: 'teal'
    },
    {
      id: 'reto-4',
      title: 'Reto 4: Cadenas y Equilibrio Trófico',
      badgeId: 'badge-cadenas',
      badgeName: '🦊 Constructor de Cadenas',
      desc: 'Ordena la transferencia de energía y analiza el impacto ambiental.',
      icon: '🦊',
      color: 'amber'
    }
  ] as const;

  const completedCount = challenges.filter(c => progress.completedChallenges[c.id]).length;

  const handleChallengeDone = (challengeId: string, badgeId: string) => {
    unlockBadge(badgeId);
    markPageCompleted('laboratorio');
  };

  const handleContinueToEval = () => {
    markPageCompleted('laboratorio');
    navigateTo('evaluacion');
  };

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              Misión 4 &bull; Laboratorio de Práctica
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
              Gamificación y Retos Formativos
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            🧪 Laboratorio de Exploradores
          </h2>

          <p className="text-sm text-emerald-100/90 leading-relaxed">
            Pon a prueba tu conocimiento práctico en 4 retos interactivos. Cada reto completado desbloquea una insignia para tu perfil de explorador.
          </p>

          {/* Progress summary inside hero */}
          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-bold text-emerald-200">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>{completedCount} de {challenges.length} Retos Superados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Selection Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {challenges.map(c => {
          const isSelected = selectedChallenge === c.id;
          const isDone = !!progress.completedChallenges[c.id];

          return (
            <button
              key={c.id}
              onClick={() => setSelectedChallenge(c.id)}
              className={`p-5 rounded-3xl border text-left transition-all relative overflow-hidden ${
                isSelected
                  ? 'bg-white border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                  : 'bg-white/80 border-slate-200 hover:border-slate-300 shadow-2xs'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{c.icon}</span>
                {isDone ? (
                  <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Superado
                  </span>
                ) : (
                  <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                    Pendiente
                  </span>
                )}
              </div>

              <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">
                {c.title}
              </h4>
              <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                {c.desc}
              </p>

              <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-amber-800">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>Insignia: {c.badgeName}</span>
              </div>
            </button>
          );
        })}
      </section>

      {/* Active Challenge Workspace */}
      <section className="space-y-4">
        {selectedChallenge === 'reto-1' && (
          <div className="animate-in fade-in duration-300">
            <ActivityVivoNoVivo onComplete={() => handleChallengeDone('reto-1', 'badge-vida')} />
          </div>
        )}

        {selectedChallenge === 'reto-2' && (
          <div className="animate-in fade-in duration-300">
            <ActivityClasificacion onComplete={() => handleChallengeDone('reto-2', 'badge-clasificador')} />
          </div>
        )}

        {selectedChallenge === 'reto-3' && (
          <div className="animate-in fade-in duration-300">
            <ActivityDetectivesEcosistema onComplete={() => handleChallengeDone('reto-3', 'badge-ecosistema')} />
          </div>
        )}

        {selectedChallenge === 'reto-4' && (
          <div className="animate-in fade-in duration-300">
            <ActivityCadenaAlimenticia onComplete={() => handleChallengeDone('reto-4', 'badge-cadenas')} />
          </div>
        )}
      </section>

      {/* Next Step CTA */}
      <div className="flex justify-between items-center pt-4">
        <button
          onClick={() => navigateTo('tutor')}
          className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
        >
          &larr; Consultar al Tutor IA
        </button>

        <button
          onClick={handleContinueToEval}
          className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center gap-2"
        >
          <span>Ir a la Misión Final: Evaluación</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
