import React from 'react';
import { LearningProvider, useLearning } from './context/LearningContext';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { Breadcrumb } from './components/layout/Breadcrumb';
import { Footer } from './components/layout/Footer';
import { GlobalTutorModal } from './components/layout/GlobalTutorModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ActivacionPage } from './pages/ActivacionPage';
import { Tema1Page } from './pages/Tema1Page';
import { Tema2Page } from './pages/Tema2Page';
import { PresentacionPage } from './pages/PresentacionPage';
import { TutorPage } from './pages/TutorPage';
import { LaboratorioPage } from './pages/LaboratorioPage';
import { EvaluacionPage } from './pages/EvaluacionPage';
import { RetroalimentacionPage } from './pages/RetroalimentacionPage';
import { CierrePage } from './pages/CierrePage';
import { BibliotecaPage } from './pages/BibliotecaPage';
import { GuiaDocentePage } from './pages/GuiaDocentePage';

const AppContent: React.FC = () => {
  const { currentPage } = useLearning();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'inicio':
        return <HomePage />;
      case 'activacion':
        return <ActivacionPage />;
      case 'tema1':
        return <Tema1Page />;
      case 'tema2':
        return <Tema2Page />;
      case 'presentacion':
        return <PresentacionPage />;
      case 'tutor':
        return <TutorPage />;
      case 'laboratorio':
        return <LaboratorioPage />;
      case 'evaluacion':
        return <EvaluacionPage />;
      case 'retroalimentacion':
        return <RetroalimentacionPage />;
      case 'cierre':
        return <CierrePage />;
      case 'biblioteca':
        return <BibliotecaPage />;
      case 'guia-docente':
        return <GuiaDocentePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/60 text-slate-800 flex flex-col selection:bg-emerald-200 selection:text-emerald-950 font-sans">
      {/* Top Navbar with Global Progress */}
      <Navbar />

      {/* Breadcrumb Trail & Quick Navigation */}
      <Breadcrumb />

      {/* Main Framework Layout with Sidebar on Desktop */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex">
        {/* Desktop Sidebar */}
        <Sidebar className="hidden lg:flex" />

        {/* Dynamic Page Container */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0 overflow-hidden">
          {renderCurrentPage()}
        </main>
      </div>

      {/* Global Tutor Floating Modal */}
      <GlobalTutorModal />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <LearningProvider>
      <AppContent />
    </LearningProvider>
  );
}
