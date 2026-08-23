import React, { useState } from 'react';
import { Maximize2, Minimize2, ExternalLink, RefreshCw, AlertCircle, Sparkles } from 'lucide-react';

interface EmbedContainerProps {
  title: string;
  subtitle?: string;
  sourceUrl: string;
  embedCode?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
  minHeight?: string;
  isEditableNote?: string;
  children?: React.ReactNode;
  onOpenExternal?: () => void;
  badgeLabel?: string;
}

export const EmbedContainer: React.FC<EmbedContainerProps> = ({
  title,
  subtitle,
  sourceUrl,
  embedCode,
  aspectRatio = '16/9',
  minHeight = '420px',
  isEditableNote,
  children,
  onOpenExternal,
  badgeLabel = 'Recurso Educativo'
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleReload = () => {
    setIsLoading(true);
    setHasError(false);
  };

  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all duration-300 ${
        isFullscreen
          ? 'fixed inset-0 z-50 rounded-none bg-slate-900 text-white flex flex-col p-4'
          : 'hover:shadow-md'
      }`}
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50/70">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            {badgeLabel}
          </span>
          <div>
            <h3 className="font-semibold text-slate-800 text-base leading-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenExternal}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors"
              title="Abrir en pestaña nueva"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Abrir recurso</span>
            </a>
          )}

          <button
            onClick={handleReload}
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-colors"
            title="Recargar vista"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-colors"
            title={isFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa'}
          >
            {isFullscreen ? (
              <Minimize2 className="w-3.5 h-3.5" />
            ) : (
              <Maximize2 className="w-3.5 h-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Developer Editable Note Tag */}
      {isEditableNote && (
        <div className="px-4 py-1.5 bg-amber-50 border-b border-amber-200/60 text-amber-900 text-xs flex items-center justify-between">
          <span className="font-mono text-[11px] truncate">{isEditableNote}</span>
          <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700 bg-amber-200/60 px-2 py-0.5 rounded">
            Configurable
          </span>
        </div>
      )}

      {/* Main Content Viewport */}
      <div
        className={`relative w-full bg-slate-950/5 flex items-center justify-center ${
          isFullscreen ? 'flex-1 h-full' : ''
        }`}
        style={{ minHeight: isFullscreen ? '100%' : minHeight }}
      >
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-10 p-6 text-center">
            <div className="w-10 h-10 border-3 border-emerald-500 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="text-sm font-medium text-slate-700">Cargando recurso interactivo...</p>
            <p className="text-xs text-slate-400 mt-1">Preparando visualización pedagógica</p>
          </div>
        )}

        {hasError ? (
          <div className="p-8 text-center max-w-md">
            <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
            <h4 className="font-semibold text-slate-800 mb-1">No se pudo cargar el marco directo</h4>
            <p className="text-xs text-slate-500 mb-4">
              Este recurso requiere permisos de visualización pública o abrirse directamente en la plataforma emisora.
            </p>
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Abrir en ventana externa
              </a>
            )}
          </div>
        ) : children ? (
          <div className="w-full h-full" onLoad={() => setIsLoading(false)}>
            {children}
          </div>
        ) : embedCode ? (
          <div
            className="w-full h-full"
            dangerouslySetInnerHTML={{ __html: embedCode }}
            onLoad={() => setIsLoading(false)}
          />
        ) : (
          <iframe
            src={sourceUrl}
            title={title}
            className="w-full h-full border-0 rounded-b-xl"
            style={{ minHeight }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
          />
        )}
      </div>
    </div>
  );
};
