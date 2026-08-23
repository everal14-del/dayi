import React, { useState } from 'react';
import { Play, CheckCircle2, Maximize2, ExternalLink, Video } from 'lucide-react';
import { getYouTubeEmbedUrl } from '../../data/resources';

interface VideoEmbedProps {
  title: string;
  subtopicCode?: string;
  videoUrl: string;
  isCompleted?: boolean;
  onMarkCompleted?: () => void;
  aspectRatio?: string;
}

export const VideoEmbed: React.FC<VideoEmbedProps> = ({
  title,
  subtopicCode,
  videoUrl,
  isCompleted = false,
  onMarkCompleted
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  return (
    <div className={`bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden transition-all ${
      isFullscreen ? 'fixed inset-0 z-50 rounded-none bg-black flex flex-col p-4' : ''
    }`}>
      {/* Header */}
      <div className="px-5 py-3.5 bg-slate-50/80 border-b border-slate-100 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Video className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              {subtopicCode && (
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase">
                  {subtopicCode}
                </span>
              )}
              <h4 className="text-sm font-semibold text-slate-800">{title}</h4>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onMarkCompleted && (
            <button
              onClick={onMarkCompleted}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                isCompleted
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              {isCompleted ? '¡Completada!' : 'Marcar como completada'}
            </button>
          )}

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-200/60 transition-colors"
            title="Pantalla completa"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Video Container */}
      <div className={`relative w-full bg-slate-950 ${isFullscreen ? 'flex-1 h-full' : 'aspect-video'}`}>
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Footer bar */}
      <div className="px-5 py-2.5 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1 text-slate-600">
          <Play className="w-3.5 h-3.5 text-emerald-600" />
          Microclase explicativa con contenido curricular guiado
        </span>
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-emerald-600 flex items-center gap-1"
        >
          <span>Ver en YouTube</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
