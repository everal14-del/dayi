/**
 * ARCHIVO CENTRAL DE CONFIGURACIÓN DE RECURSOS EXTERNOS
 * ========================================================
 * Aquí se centralizan todas las URLs, IDs de agentes y enlaces de integración
 * para que puedan ser modificados rápidamente en un solo lugar sin alterar
 * la estructura de los componentes.
 */

export interface ExternalResourcesConfig {
  // Canva Infografía (Tarea 1)
  canvaInfografiaUrl: string;
  canvaInfografiaEmbedCode?: string;

  // Canva Presentación Interactiva (Tarea 2)
  canvaPresentacionUrl: string;
  canvaPresentacionEmbedCode?: string;

  // Microclases YouTube (Tarea 3)
  youtubeMicroclase1: string;
  youtubeMicroclase2: string;
  youtubeMicroclase3: string;
  youtubeMicroclase4: string;

  // Tutor Conversacional ElevenLabs (Tarea 3)
  elevenlabsAgentId: string;
  elevenlabsScriptUrl: string;

  // Pieza Musical IA (Fase 1 Tarea 4)
  audioCancionUrl: string;
  audioCancionTitulo: string;
  audioCancionGrupo: string;

  // Compendio Pedagógico (Tarea 2)
  compendioPdfUrl: string;
}

export const APP_RESOURCES: ExternalResourcesConfig = {
  // ---------------------------------------------------------------------------
  // 1. RECURSO CANVA: INFOGRAFÍA CONCEPTUAL (Tarea 1)
  // Enlace actual proporcionado (Modo edición/compartir):
  // REEMPLAZAR AQUÍ CON EL ENLACE REAL PÚBLICO O DE VISUALIZACIÓN DE CANVA
  // ---------------------------------------------------------------------------
  canvaInfografiaUrl: "https://www.canva.com/design/editor/shell?designId=DAHQy8lyoGM&extension=h0Pofjuccuh9i_GRfoX6Wg&mode=edit",
  
  // ---------------------------------------------------------------------------
  // 2. RECURSO CANVA: PRESENTACIÓN INTERACTIVA (Tarea 2)
  // REEMPLAZAR AQUÍ CON EL ENLACE REAL DE LA PRESENTACIÓN DE CANVA / GENIALLY
  // ---------------------------------------------------------------------------
  canvaPresentacionUrl: "https://www.canva.com/design/DAHQy8lyoGM/view",

  // ---------------------------------------------------------------------------
  // 3. MICROCLASES EN VIDEO - YOUTUBE (Tarea 3)
  // Se convierten internamente a formato embed: https://www.youtube.com/embed/{id}
  // ---------------------------------------------------------------------------
  // Microclase 1: ¿Qué hace que un ser esté vivo?
  // REEMPLAZAR AQUÍ CON EL ENLACE DE LA MICROCLASE 1
  youtubeMicroclase1: "https://www.youtube.com/watch?v=4_h4XytOGp8",

  // Microclase 2: Descubrimos y clasificamos la vida
  // REEMPLAZAR AQUÍ CON EL ENLACE DE LA MICROCLASE 2
  youtubeMicroclase2: "https://www.youtube.com/watch?v=k_P_S8yN-K4",

  // Microclase 3: ¿Quiénes forman un ecosistema?
  // REEMPLAZAR AQUÍ CON EL ENLACE DE LA MICROCLASE 3
  youtubeMicroclase3: "https://www.youtube.com/watch?v=3y0DLN4Gzls",

  // Microclase 4: Relaciones tróficas y flujo de energía en los ecosistemas
  // REEMPLAZAR AQUÍ CON EL ENLACE DE LA MICROCLASE 4
  youtubeMicroclase4: "https://www.youtube.com/watch?v=m7j6c9tQvEU",

  // ---------------------------------------------------------------------------
  // 4. TUTOR VIRTUAL ELEVENLABS CONVERSATIONAL AI (Tarea 3)
  // ID del agente asignado al proyecto
  // ---------------------------------------------------------------------------
  elevenlabsAgentId: "agent_3301m02zg2qse4gata8mw088x455",
  elevenlabsScriptUrl: "https://unpkg.com/@elevenlabs/convai-widget-embed",

  // ---------------------------------------------------------------------------
  // 5. PIEZA MUSICAL GENERADA CON IA (Fase 1 Tarea 4)
  // Enlace OneDrive proporcionado:
  // REEMPLAZAR AQUÍ CON EL ARCHIVO DE AUDIO MP3 DIRECTO O STREAM DE ONEDRIVE
  // ---------------------------------------------------------------------------
  audioCancionUrl: "https://1drv.ms/u/c/da8f37e2a10c1a8a/IQBBLFpPj-AsSIPsr-BcdZZnAbgFo0bDsY6V7QpqUBEG5tM?e=vF9VFA",
  audioCancionTitulo: "La vida está en todas partes",
  audioCancionGrupo: "Grupo 8",

  // ---------------------------------------------------------------------------
  // 6. COMPENDIO PEDAGÓGICO (Tarea 2)
  // REEMPLAZAR AQUÍ CON EL ENLACE PÚBLICO DEL PDF DEL COMPENDIO
  // ---------------------------------------------------------------------------
  compendioPdfUrl: "https://drive.google.com/file/d/1exampleCompendioCienciasNaturales/preview",
};

/**
 * Función auxiliar para convertir enlaces estándar de YouTube a URLs embebibles
 */
export function getYouTubeEmbedUrl(url: string): string {
  if (!url) return "";
  if (url.includes("embed/")) return url;
  
  // Extract ID from watch?v= or youtu.be/
  const matchWatch = url.match(/[?&]v=([^&#]+)/);
  if (matchWatch && matchWatch[1]) {
    return `https://www.youtube-nocookie.com/embed/${matchWatch[1]}?rel=0&modestbranding=1`;
  }
  
  const matchShort = url.match(/youtu\.be\/([^&#?]+)/);
  if (matchShort && matchShort[1]) {
    return `https://www.youtube-nocookie.com/embed/${matchShort[1]}?rel=0&modestbranding=1`;
  }

  return url;
}
