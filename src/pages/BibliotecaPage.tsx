import React from 'react';
import {
  BookOpen,
  Video,
  Music,
  Bot,
  Layers,
  Sparkles,
  ExternalLink,
  ArrowRight,
  FlaskConical,
  FileText
} from 'lucide-react';
import { useLearning } from '../context/LearningContext';
import { PageId } from '../types';
import { APP_RESOURCES } from '../data/resources';

interface LibraryResource {
  id: string;
  name: string;
  category: string;
  pedagogicalFunction: string;
  icon: string;
  desc: string;
  targetPageId: PageId;
  subtopic?: string;
  externalUrl?: string;
}

export const BibliotecaPage: React.FC = () => {
  const { navigateTo } = useLearning();

  const resources: LibraryResource[] = [
    {
      id: 'r-infografia',
      name: 'Infografía Conceptual (Tarea 1)',
      category: 'Síntesis Visual',
      pedagogicalFunction: 'Activación / Síntesis Conceptual',
      icon: '🧠',
      desc: 'Mapa mental y esquema general de las características de la vida y los ecosistemas.',
      targetPageId: 'activacion',
      externalUrl: APP_RESOURCES.canvaInfografiaUrl
    },
    {
      id: 'r-compendio',
      name: 'Compendio Pedagógico (Tarea 2)',
      category: 'Texto Didáctico',
      pedagogicalFunction: 'Construcción Conceptual y Lectura Guiada',
      icon: '📖',
      desc: 'Documento científico adaptado a EGB con explicaciones paso a paso y datos curiosos.',
      targetPageId: 'tema1',
      externalUrl: APP_RESOURCES.compendioPdfUrl
    },
    {
      id: 'r-presentacion',
      name: 'Presentación Interactiva (Tarea 2)',
      category: 'Multimedia Canva',
      pedagogicalFunction: 'Construcción y Visualización de Contenidos',
      icon: '🖥️',
      desc: 'Diapositivas secuenciales para clases magistrales o autoestudio.',
      targetPageId: 'presentacion',
      externalUrl: APP_RESOURCES.canvaPresentacionUrl
    },
    {
      id: 'r-micro1',
      name: 'Microclase 1: ¿Qué hace que un ser esté vivo?',
      category: 'Audiovisual YouTube',
      pedagogicalFunction: 'Construcción y Refuerzo Subtema 1.1',
      icon: '🎥',
      desc: 'Explicación de las 4 funciones vitales: nutrición, crecimiento, relación y reproducción.',
      targetPageId: 'tema1',
      subtopic: '1.1',
      externalUrl: APP_RESOURCES.youtubeMicroclase1
    },
    {
      id: 'r-micro2',
      name: 'Microclase 2: Descubrimos y clasificamos la vida',
      category: 'Audiovisual YouTube',
      pedagogicalFunction: 'Construcción y Refuerzo Subtema 1.2',
      icon: '🎥',
      desc: 'Criterios de clasificación en reinos Plantae, Animalia y Fungi.',
      targetPageId: 'tema1',
      subtopic: '1.2',
      externalUrl: APP_RESOURCES.youtubeMicroclase2
    },
    {
      id: 'r-micro3',
      name: 'Microclase 3: ¿Quiénes forman un ecosistema?',
      category: 'Audiovisual YouTube',
      pedagogicalFunction: 'Construcción y Refuerzo Subtema 2.1',
      icon: '🎥',
      desc: 'Diferenciación entre biocenosis (bióticos) y biotopo (abióticos).',
      targetPageId: 'tema2',
      subtopic: '2.1',
      externalUrl: APP_RESOURCES.youtubeMicroclase3
    },
    {
      id: 'r-micro4',
      name: 'Microclase 4: Relaciones tróficas y flujo de energía',
      category: 'Audiovisual YouTube',
      pedagogicalFunction: 'Construcción y Refuerzo Subtema 2.2',
      icon: '🎥',
      desc: 'Cadenas tróficas, niveles productores/consumidores y equilibrio ecológico.',
      targetPageId: 'tema2',
      subtopic: '2.2',
      externalUrl: APP_RESOURCES.youtubeMicroclase4
    },
    {
      id: 'r-tutor',
      name: 'Tutor Conversacional ElevenLabs (Tarea 3)',
      category: 'Inteligencia Artificial',
      pedagogicalFunction: 'Práctica / Apoyo Personalizado / Retroalimentación',
      icon: '🤖',
      desc: 'Asistente de voz y texto con el agente oficial para resolver dudas a ritmo propio.',
      targetPageId: 'tutor'
    },
    {
      id: 'r-cancion',
      name: 'Pieza Musical: "La vida está en todas partes" (Tarea 4)',
      category: 'Audio Educativo IA',
      pedagogicalFunction: 'Activación / Motivación / Recordación / Cierre',
      icon: '🎵',
      desc: 'Composición musical del Grupo 8 orientada a la fijación de conceptos biológicos.',
      targetPageId: 'activacion',
      externalUrl: APP_RESOURCES.audioCancionUrl
    },
    {
      id: 'r-actividades',
      name: 'Laboratorio de Actividades y Retos',
      category: 'Práctica Interactiva',
      pedagogicalFunction: 'Práctica y Aplicación Formativa',
      icon: '🧪',
      desc: '4 retos gamificados con clasificación y cadenas tróficas para ganar insignias.',
      targetPageId: 'laboratorio'
    }
  ];

  return (
    <div className="space-y-10 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-r from-emerald-800 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-400/30">
              Acervo Pedagógico
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-medium">
              Todos los Recursos Integrados
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            📚 Biblioteca de recursos
          </h2>

          <p className="text-sm text-emerald-100/90 leading-relaxed">
            Explora el catálogo completo de materiales formativos (Tareas 1, 2, 3 y 4) organizados por su función pedagógica dentro de la ruta de aprendizaje.
          </p>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map(res => (
          <div
            key={res.id}
            className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{res.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                  {res.category}
                </span>
              </div>

              <h4 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                {res.name}
              </h4>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-0.5">
                  Función Pedagógica:
                </span>
                <span className="font-semibold text-emerald-900">
                  {res.pedagogicalFunction}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {res.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => navigateTo(res.targetPageId, res.subtopic)}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5"
              >
                <span>Acceder en la Plataforma</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {res.externalUrl && (
                <a
                  href={res.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-slate-700 text-xs font-semibold flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Enlace directo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
