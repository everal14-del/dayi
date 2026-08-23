export type PageId =
  | 'inicio'
  | 'activacion'
  | 'tema1'
  | 'tema2'
  | 'presentacion'
  | 'tutor'
  | 'laboratorio'
  | 'evaluacion'
  | 'retroalimentacion'
  | 'cierre'
  | 'biblioteca'
  | 'guia-docente';

export interface BreadcrumbItem {
  label: string;
  pageId: PageId;
  subtopic?: string;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface LearningProgress {
  completedPages: Record<PageId, boolean>;
  completedSubmodules: Record<string, boolean>;
  completedChallenges: Record<string, boolean>;
  audioChecklist: Record<string, boolean>;
  evalScore: number | null;
  evalTotal: number;
  evalAnswers: Record<number, any>;
  evalStrengths: string[];
  evalWeaknesses: string[];
  reflections: {
    q1: string;
    q2: string;
    q3: string;
    q4: string;
  };
  badges: Badge[];
}

export interface ModuleObjective {
  title: string;
  subtopicCode: string;
  objectiveText: string;
  videoUrl: string;
  compendioTitle: string;
  compendioSummary: string[];
}

export interface QuizQuestion {
  id: number;
  subtopic: string;
  questionText: string;
  type: 'multiple-choice' | 'true-false' | 'classify' | 'order' | 'short-answer';
  options?: string[];
  correctAnswer: any;
  explanation: string;
  remedialResource: string;
  remedialPageId: PageId;
}

export interface EvaluationResult {
  score: number;
  maxScore: number;
  percentage: number;
  passed: boolean;
  strengths: string[];
  needsReinforcement: string[];
  recommendedActions: {
    title: string;
    description: string;
    pageId: PageId;
    icon: string;
  }[];
}
