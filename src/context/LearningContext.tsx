import React, { createContext, useContext, useState, useEffect } from 'react';
import { PageId, LearningProgress, Badge } from '../types';
import { INITIAL_BADGES } from '../data/curriculumData';
import confetti from 'canvas-confetti';

interface LearningContextType {
  currentPage: PageId;
  activeSubtopic: string | null;
  progress: LearningProgress;
  isTutorOpen: boolean;
  totalProgressPercent: number;
  navigateTo: (page: PageId, subtopic?: string) => void;
  markPageCompleted: (pageId: PageId) => void;
  markSubmoduleCompleted: (subId: string) => void;
  markChallengeCompleted: (challengeId: string) => void;
  toggleAudioChecklist: (itemKey: string) => void;
  saveEvaluation: (score: number, total: number, answers: any, strengths: string[], weaknesses: string[]) => void;
  saveReflection: (key: keyof LearningProgress['reflections'], value: string) => void;
  unlockBadge: (badgeId: string) => void;
  resetProgress: () => void;
  setIsTutorOpen: (open: boolean) => void;
  toggleTutor: (forceState?: boolean) => void;
  triggerCelebration: () => void;
}

const STORAGE_KEY = 'exploradores_ciencias_progress_v1';

const DEFAULT_PROGRESS: LearningProgress = {
  completedPages: {
    inicio: true,
    activacion: false,
    tema1: false,
    tema2: false,
    presentacion: false,
    tutor: false,
    laboratorio: false,
    evaluacion: false,
    retroalimentacion: false,
    cierre: false,
    biblioteca: false,
    'guia-docente': false
  },
  completedSubmodules: {},
  completedChallenges: {},
  audioChecklist: {},
  evalScore: null,
  evalTotal: 7,
  evalAnswers: {},
  evalStrengths: [],
  evalWeaknesses: [],
  reflections: {
    q1: '',
    q2: '',
    q3: '',
    q4: ''
  },
  badges: INITIAL_BADGES
};

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>('inicio');
  const [activeSubtopic, setActiveSubtopic] = useState<string | null>(null);
  const [isTutorOpen, setIsTutorOpen] = useState<boolean>(false);
  
  const [progress, setProgress] = useState<LearningProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with initial badges in case structure updated
        const mergedBadges = INITIAL_BADGES.map(b => {
          const found = parsed.badges?.find((pb: Badge) => pb.id === b.id);
          return found ? { ...b, unlocked: found.unlocked, unlockedAt: found.unlockedAt } : b;
        });
        return {
          ...DEFAULT_PROGRESS,
          ...parsed,
          badges: mergedBadges
        };
      }
    } catch (e) {
      console.warn('Could not load saved progress:', e);
    }
    return DEFAULT_PROGRESS;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.warn('Could not persist progress:', e);
    }
  }, [progress]);

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#84cc16']
      });
    } catch {
      // safe fallback
    }
  };

  const navigateTo = (page: PageId, subtopic?: string) => {
    setCurrentPage(page);
    setActiveSubtopic(subtopic || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const markPageCompleted = (pageId: PageId) => {
    setProgress(prev => ({
      ...prev,
      completedPages: {
        ...prev.completedPages,
        [pageId]: true
      }
    }));
  };

  const markSubmoduleCompleted = (subId: string) => {
    setProgress(prev => {
      const updatedSub = { ...prev.completedSubmodules, [subId]: true };
      
      // Auto unlock badges
      let updatedBadges = [...prev.badges];
      if (subId === '1.1') {
        updatedBadges = updatedBadges.map(b => b.id === 'badge-vida' ? { ...b, unlocked: true } : b);
      } else if (subId === '1.2') {
        updatedBadges = updatedBadges.map(b => b.id === 'badge-clasificador' ? { ...b, unlocked: true } : b);
      } else if (subId === '2.1') {
        updatedBadges = updatedBadges.map(b => b.id === 'badge-ecosistema' ? { ...b, unlocked: true } : b);
      } else if (subId === '2.2') {
        updatedBadges = updatedBadges.map(b => b.id === 'badge-cadenas' ? { ...b, unlocked: true } : b);
      }

      return {
        ...prev,
        completedSubmodules: updatedSub,
        badges: updatedBadges
      };
    });
  };

  const markChallengeCompleted = (challengeId: string) => {
    setProgress(prev => ({
      ...prev,
      completedChallenges: {
        ...prev.completedChallenges,
        [challengeId]: true
      }
    }));
    triggerCelebration();
  };

  const toggleAudioChecklist = (itemKey: string) => {
    setProgress(prev => ({
      ...prev,
      audioChecklist: {
        ...prev.audioChecklist,
        [itemKey]: !prev.audioChecklist[itemKey]
      }
    }));
  };

  const unlockBadge = (badgeId: string) => {
    setProgress(prev => ({
      ...prev,
      badges: prev.badges.map(b => b.id === badgeId ? { ...b, unlocked: true, unlockedAt: new Date().toLocaleTimeString() } : b)
    }));
    triggerCelebration();
  };

  const saveEvaluation = (score: number, total: number, answers: any, strengths: string[], weaknesses: string[]) => {
    setProgress(prev => {
      let updatedBadges = [...prev.badges];
      if (score >= total * 0.7) {
        updatedBadges = updatedBadges.map(b => b.id === 'badge-maestro' ? { ...b, unlocked: true } : b);
      }
      return {
        ...prev,
        completedPages: { ...prev.completedPages, evaluacion: true, retroalimentacion: true },
        evalScore: score,
        evalTotal: total,
        evalAnswers: answers,
        evalStrengths: strengths,
        evalWeaknesses: weaknesses,
        badges: updatedBadges
      };
    });
  };

  const saveReflection = (key: keyof LearningProgress['reflections'], value: string) => {
    setProgress(prev => ({
      ...prev,
      reflections: {
        ...prev.reflections,
        [key]: value
      }
    }));
  };

  const resetProgress = () => {
    localStorage.removeItem(STORAGE_KEY);
    setProgress(DEFAULT_PROGRESS);
    setCurrentPage('inicio');
  };

  const toggleTutor = (forceState?: boolean) => {
    setIsTutorOpen(prev => forceState !== undefined ? forceState : !prev);
  };

  // Calculate percentage completion (based on key learning milestones)
  const coreMilestones = [
    progress.completedPages.activacion,
    progress.completedSubmodules['1.1'],
    progress.completedSubmodules['1.2'],
    progress.completedSubmodules['2.1'],
    progress.completedSubmodules['2.2'],
    progress.completedPages.laboratorio,
    progress.completedPages.evaluacion,
    progress.completedPages.cierre
  ];
  const completedCount = coreMilestones.filter(Boolean).length;
  const totalProgressPercent = Math.round((completedCount / coreMilestones.length) * 100);

  return (
    <LearningContext.Provider
      value={{
        currentPage,
        activeSubtopic,
        progress,
        isTutorOpen,
        totalProgressPercent,
        navigateTo,
        markPageCompleted,
        markSubmoduleCompleted,
        markChallengeCompleted,
        toggleAudioChecklist,
        saveEvaluation,
        saveReflection,
        unlockBadge,
        resetProgress,
        setIsTutorOpen,
        toggleTutor,
        triggerCelebration
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};
