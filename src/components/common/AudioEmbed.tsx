import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music2, ExternalLink, CheckSquare, Square, Sparkles } from 'lucide-react';
import { useLearning } from '../../context/LearningContext';

interface AudioEmbedProps {
  title?: string;
  artist?: string;
  sourceUrl: string;
  onContinue?: () => void;
  showChecklist?: boolean;
}

export const AudioEmbed: React.FC<AudioEmbedProps> = ({
  title = "La vida está en todas partes",
  artist = "Grupo 8 — Ciencias Naturales",
  sourceUrl,
  onContinue,
  showChecklist = true
}) => {
  const { progress, toggleAudioChecklist } = useLearning();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackTime, setPlaybackTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const checklistItems = [
    { key: 'item1', label: 'Identifiqué palabras relacionadas con los seres vivos.' },
    { key: 'item2', label: 'Reconocí características de los seres vivos (nutrición, crecimiento, etc.).' },
    { key: 'item3', label: 'Identifiqué elementos bióticos en la letra.' },
    { key: 'item4', label: 'Identifiqué elementos abióticos (luz, agua, suelo).' }
  ];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => {
          console.log('Autoplay restriction or external audio source:', e);
        });
      }
      setIsPlaying(!isPlaying);
    } else {
      // Toggle simulated playback indicator for external stream
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const checkedCount = checklistItems.filter(item => progress.audioChecklist[item.key]).length;

  return (
    <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header Info */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6 relative z-10">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shadow-inner">
            <Music2 className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-[11px] font-semibold tracking-wide uppercase mb-1">
              <Sparkles className="w-3 h-3" />
              Pieza Musical Educativa (Fase 1 Tarea 4)
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">{title}</h3>
            <p className="text-sm text-emerald-200/80">{artist}</p>
          </div>
        </div>

        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-emerald-100 text-xs font-medium rounded-xl border border-white/15 backdrop-blur-sm transition-all"
        >
          <span>Abrir audio en OneDrive</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Audio Player Interface */}
      <div className="bg-white/10 border border-white/15 rounded-2xl p-4 sm:p-5 backdrop-blur-md relative z-10 mb-6">
        {/* Animated wave bars when playing */}
        <div className="flex items-center justify-center gap-1.5 h-12 my-2">
          {[40, 65, 85, 30, 95, 75, 45, 90, 60, 100, 70, 40, 85, 55, 95, 35, 70, 90, 50, 80].map((h, i) => (
            <div
              key={i}
              className={`w-1.5 rounded-full transition-all duration-300 ${
                isPlaying ? 'bg-gradient-to-t from-emerald-400 to-teal-200' : 'bg-white/25'
              }`}
              style={{
                height: isPlaying ? `${Math.max(15, (h * (0.5 + Math.sin((i + Date.now()/300)) * 0.5)))}%` : '20%'
              }}
            />
          ))}
        </div>

        {/* Audio controls */}
        <div className="flex items-center justify-between gap-4 mt-4 pt-3 border-t border-white/10">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-emerald-400 text-slate-900 hover:bg-emerald-300 flex items-center justify-center font-bold shadow-lg transition-transform hover:scale-105 active:scale-95"
              title={isPlaying ? 'Pausar' : 'Reproducir'}
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>
            <div>
              <p className="text-xs font-semibold text-white">
                {isPlaying ? 'Reproduciendo canción pedagógica...' : 'Haz clic para escuchar la canción'}
              </p>
              <p className="text-[11px] text-emerald-200/70">
                Diseñada para activar la curiosidad y recordación
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Audio element for real/future direct media binding */}
        <audio
          ref={audioRef}
          src="https://actions.google.com/sounds/v1/ambiences/outdoor_forest.ogg"
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="hidden"
        />
      </div>

      {/* Didactic Instruction */}
      <div className="bg-emerald-800/30 border border-emerald-500/30 rounded-2xl p-4 mb-6 relative z-10">
        <p className="text-sm text-emerald-100 font-medium">
          🎧 <strong className="text-white">Instrucción del explorador:</strong> Escucha atentamente la pieza musical e identifica conceptos clave relacionados con los seres vivos y su entorno.
        </p>
      </div>

      {/* Checklist section */}
      {showChecklist && (
        <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 relative z-10">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-emerald-400" />
              Lista de cotejo y verificación auditiva
            </h4>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
              {checkedCount} de {checklistItems.length} identificados
            </span>
          </div>

          <div className="space-y-2.5">
            {checklistItems.map(item => {
              const isChecked = !!progress.audioChecklist[item.key];
              return (
                <button
                  key={item.key}
                  onClick={() => toggleAudioChecklist(item.key)}
                  className={`w-full text-left flex items-start gap-3 p-3 rounded-xl border transition-all ${
                    isChecked
                      ? 'bg-emerald-900/40 border-emerald-500/50 text-white shadow-sm'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                  }`}
                >
                  <span className="mt-0.5 text-emerald-400 flex-shrink-0">
                    {isChecked ? <CheckSquare className="w-5 h-5 fill-emerald-400/20 text-emerald-400" /> : <Square className="w-5 h-5 text-white/40" />}
                  </span>
                  <span className={`text-xs sm:text-sm ${isChecked ? 'font-medium text-emerald-100' : 'text-slate-300'}`}>
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {onContinue && (
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={onContinue}
                className="w-full sm:w-auto px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm rounded-xl shadow-md transition-all hover:shadow-emerald-500/25 flex items-center justify-center gap-2"
              >
                <span>CONTINUAR</span>
                <span>→</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
