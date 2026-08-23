import React, { useState } from 'react';
import { ExternalLink, Maximize2, Sparkles, BookOpen, Layers, Eye, RefreshCw } from 'lucide-react';

interface CanvaEmbedProps {
  title: string;
  subtitle?: string;
  canvaUrl: string;
  embedCode?: string;
  type: 'infografia' | 'presentacion';
  description?: string;
}

export const CanvaEmbed: React.FC<CanvaEmbedProps> = ({
  title,
  subtitle,
  canvaUrl,
  embedCode,
  type,
  description
}) => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'summary'>('interactive');
  const isInfografia = type === 'infografia';

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden transition-all">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-emerald-50 via-teal-50/50 to-blue-50/40 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-200 shadow-sm flex items-center justify-center text-emerald-600">
            {isInfografia ? <BookOpen className="w-6 h-6" /> : <Layers className="w-6 h-6" />}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider">
                {isInfografia ? 'Infografía Tarea 1' : 'Presentación Tarea 2'}
              </span>
              <span className="text-xs text-slate-500">Recurso de Síntesis</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-800 mt-0.5">{title}</h3>
            {subtitle && <p className="text-xs text-slate-600 mt-0.5">{subtitle}</p>}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={canvaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm transition-colors"
          >
            <span>Ver en Canva</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Developer Replace Notice Block */}
      <div className="px-6 py-2 bg-amber-50/80 border-b border-amber-200/60 text-amber-900 text-xs flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
          <span className="font-mono text-[11px]">
            {/* REEMPLAZAR POR IFRAME/CÓDIGO PÚBLICO DE CANVA */}
            CANVA_EMBED_MODULE &bull; {isInfografia ? 'CANVA_INFOGRAFIA_EMBED' : 'CANVA_PRESENTACION_EMBED'}
          </span>
        </div>
        <span className="text-[10px] text-amber-700 font-medium">
          El enlace de edición está vinculado y el contenedor está listo para incrustación directa
        </span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100 bg-slate-50/60 px-6 pt-2">
        <button
          onClick={() => setActiveTab('interactive')}
          className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
            activeTab === 'interactive'
              ? 'border-emerald-600 text-emerald-700 bg-white rounded-t-lg'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          Visualizador del recurso
        </button>
        <button
          onClick={() => setActiveTab('summary')}
          className={`px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
            activeTab === 'summary'
              ? 'border-emerald-600 text-emerald-700 bg-white rounded-t-lg'
              : 'border-transparent text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Eje temático y síntesis
        </button>
      </div>

      {/* Content Area */}
      <div className="p-6">
        {activeTab === 'interactive' ? (
          <div>
            <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 shadow-inner flex flex-col items-center justify-center p-6 sm:p-10 text-center min-h-[380px]">
              <div className="max-w-xl mx-auto space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  {isInfografia ? <BookOpen className="w-8 h-8" /> : <Layers className="w-8 h-8" />}
                </div>

                <div className="space-y-1 text-white">
                  <h4 className="text-lg font-bold">
                    {isInfografia ? 'Infografía Conceptual de Síntesis' : 'Presentación Multimedia Interactiva'}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {isInfografia
                      ? 'Esquema visual integral: Funciones vitales, Reinos de la naturaleza, Factores del ecosistema y Niveles tróficos.'
                      : 'Diapositivas didácticas con animaciones, microconceptos y preguntas de fijación.'}
                  </p>
                </div>

                {/* Direct Visual Link card */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-left border border-white/10 text-slate-200 text-xs space-y-2">
                  <div className="flex items-center justify-between text-emerald-300 font-semibold">
                    <span>Estado del recurso:</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[10px]">Listo para exploración</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Puedes acceder a la versión completa interactiva en Canva con alta resolución en cualquier dispositivo.
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={canvaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs shadow-lg hover:from-emerald-400 hover:to-teal-400 transition-all hover:scale-102"
                  >
                    <span>{isInfografia ? 'Ver infografía completa' : 'Explorar presentación'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-5">
              <h5 className="font-bold text-emerald-900 text-sm mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                Tema 1: Seres Vivos
              </h5>
              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">&bull;</span>
                  <span><strong>Funciones vitales:</strong> Nutrición, relación (irritabilidad), crecimiento y reproducción.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">&bull;</span>
                  <span><strong>Grandes Reinos:</strong> Plantas (autótrofos), Animales (heterótrofos móviles), Hongos (descomponedores).</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-5">
              <h5 className="font-bold text-blue-900 text-sm mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Tema 2: Ecosistemas
              </h5>
              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">&bull;</span>
                  <span><strong>Componentes:</strong> Factores Bióticos (vivos) y Abióticos (agua, luz, suelo, aire).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">&bull;</span>
                  <span><strong>Cadenas tróficas:</strong> Sol &rarr; Productores &rarr; Consumidores &rarr; Descomponedores.</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
