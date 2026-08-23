import React, { useState } from 'react';
import { CheckCircle, XCircle, Sparkles, HelpCircle, ArrowRight, RotateCcw, AlertTriangle } from 'lucide-react';
import { useLearning } from '../../context/LearningContext';

/* =========================================================================
   ACTIVIDAD 1.1: ¿Está vivo o no está vivo?
   ========================================================================= */
interface Entity11 {
  id: string;
  name: string;
  emoji: string;
  isAlive: boolean;
  explanation: string;
}

const ENTITIES_11: Entity11[] = [
  { id: 'arbol', name: 'Árbol', emoji: '🌳', isAlive: true, explanation: 'Realiza fotosíntesis, crece, respira y se reproduce.' },
  { id: 'perro', name: 'Perro', emoji: '🐶', isAlive: true, explanation: 'Se nutre, responde a estímulos, corre, crece y se reproduce.' },
  { id: 'mariposa', name: 'Mariposa', emoji: '🦋', isAlive: true, explanation: 'Pasa por metamorfosis, se alimenta de néctar y pone huevos.' },
  { id: 'planta', name: 'Planta en maceta', emoji: '🌱', isAlive: true, explanation: 'Absorbe agua y luz solar, respondiendo a la gravedad y luminosidad.' },
  { id: 'piedra', name: 'Piedra de río', emoji: '🪨', isAlive: false, explanation: 'Materia inerte; no respira, no se nutre ni se reproduce.' },
  { id: 'automovil', name: 'Automóvil', emoji: '🚗', isAlive: false, explanation: 'Aunque se mueve con combustible, es un objeto inerte fabricado sin células.' }
];

export const ActivityVivoNoVivo: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const { markChallengeCompleted } = useLearning();
  const [answers, setAnswers] = useState<Record<string, boolean | null>>({});
  const [checked, setChecked] = useState(false);

  const handleSelect = (id: string, choice: boolean) => {
    setAnswers(prev => ({ ...prev, [id]: choice }));
    setChecked(false);
  };

  const handleCheck = () => {
    setChecked(true);
    const allCorrect = ENTITIES_11.every(e => answers[e.id] === e.isAlive);
    if (allCorrect) {
      markChallengeCompleted('reto-1');
      if (onComplete) onComplete();
    }
  };

  const handleReset = () => {
    setAnswers({});
    setChecked(false);
  };

  const isAllAnswered = ENTITIES_11.every(e => answers[e.id] !== undefined);
  const correctCount = ENTITIES_11.filter(e => answers[e.id] === e.isAlive).length;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
            Actividad Práctica &bull; Subtema 1.1
          </span>
          <h4 className="text-lg font-bold text-slate-800 mt-1">
            ¿Está vivo o no está vivo?
          </h4>
          <p className="text-xs text-slate-500">
            Observa cada elemento y clasifícalo según posea o no funciones vitales.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reiniciar
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ENTITIES_11.map(item => {
          const userChoice = answers[item.id];
          const isCorrect = checked && userChoice === item.isAlive;
          const isWrong = checked && userChoice !== undefined && userChoice !== item.isAlive;

          return (
            <div
              key={item.id}
              className={`p-4 rounded-2xl border transition-all text-center space-y-3 ${
                isCorrect
                  ? 'bg-emerald-50/70 border-emerald-300 ring-1 ring-emerald-400'
                  : isWrong
                  ? 'bg-red-50/70 border-red-300 ring-1 ring-red-400'
                  : 'bg-slate-50/70 border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <div className="text-4xl">{item.emoji}</div>
              <h5 className="font-bold text-sm text-slate-800">{item.name}</h5>

              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleSelect(item.id, true)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    userChoice === true
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700'
                  }`}
                >
                  🌱 Está Vivo
                </button>
                <button
                  type="button"
                  onClick={() => handleSelect(item.id, false)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    userChoice === false
                      ? 'bg-slate-700 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  🪨 No Vivo
                </button>
              </div>

              {/* Feedback text on check */}
              {checked && (
                <div className={`text-[11px] p-2 rounded-lg text-left ${isCorrect ? 'text-emerald-800 bg-emerald-100/60' : 'text-red-800 bg-red-100/60'}`}>
                  <p className="font-semibold flex items-center gap-1">
                    {isCorrect ? <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> : <XCircle className="w-3.5 h-3.5 text-red-600" />}
                    {isCorrect ? '¡Correcto!' : '¡Revisa!'}
                  </p>
                  <p className="mt-0.5">{item.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
        <div>
          {checked && (
            <p className="text-xs font-bold text-slate-700">
              Aciertos: {correctCount} de {ENTITIES_11.length}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={handleCheck}
          disabled={!isAllAnswered}
          className="w-full sm:w-auto px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Comprobar Respuestas</span>
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   ACTIVIDAD 1.2: Clasificación de los seres vivos (Plantas, Animales, Hongos)
   ========================================================================= */
interface Organism12 {
  id: string;
  name: string;
  emoji: string;
  kingdom: 'plantas' | 'animales' | 'hongos';
  hint: string;
}

const ORGANISMS_12: Organism12[] = [
  { id: 'cactus', name: 'Cactus', emoji: '🌵', kingdom: 'plantas', hint: 'Tiene espinas, clorofila y hace fotosíntesis.' },
  { id: 'gato', name: 'Gato', emoji: '🐱', kingdom: 'animales', hint: 'Es un mamífero con sentidos desarrollados y movimiento.' },
  { id: 'champinon', name: 'Champiñón', emoji: '🍄', kingdom: 'hongos', hint: 'No hace fotosíntesis; absorbe nutrientes como descomponedor.' },
  { id: 'mariposa2', name: 'Mariposa', emoji: '🦋', kingdom: 'animales', hint: 'Insecto con alas que ingiere néctar.' }
];

export const ActivityClasificacion: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const { markChallengeCompleted } = useLearning();
  const [placements, setPlacements] = useState<Record<string, 'plantas' | 'animales' | 'hongos' | null>>({
    cactus: null,
    gato: null,
    champinon: null,
    mariposa2: null
  });
  const [checked, setChecked] = useState(false);

  const assignKingdom = (organismId: string, kingdom: 'plantas' | 'animales' | 'hongos') => {
    setPlacements(prev => ({ ...prev, [organismId]: kingdom }));
    setChecked(false);
  };

  const handleCheck = () => {
    setChecked(true);
    const allCorrect = ORGANISMS_12.every(o => placements[o.id] === o.kingdom);
    if (allCorrect) {
      markChallengeCompleted('reto-2');
      if (onComplete) onComplete();
    }
  };

  const handleReset = () => {
    setPlacements({ cactus: null, gato: null, champinon: null, mariposa2: null });
    setChecked(false);
  };

  const kingdoms = [
    { key: 'plantas', title: '🌱 Reino Plantas', desc: 'Autótrofos con clorofila' },
    { key: 'animales', title: '🐶 Reino Animales', desc: 'Heterótrofos móviles' },
    { key: 'hongos', title: '🍄 Reino Hongos (Fungi)', desc: 'Heterótrofos por absorción' }
  ] as const;

  const isAllAssigned = ORGANISMS_12.every(o => placements[o.id] !== null);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-xs">
            Actividad de Clasificación &bull; Subtema 1.2
          </span>
          <h4 className="text-lg font-bold text-slate-800 mt-1">
            Descubrimos y clasificamos la vida
          </h4>
          <p className="text-xs text-slate-500">
            Asigna cada organismo (cactus, gato, champiñón, mariposa) a su reino correspondiente.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reiniciar
        </button>
      </div>

      {/* Organisms to place */}
      <div className="space-y-4">
        <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          1. Selecciona a qué reino pertenece cada ser vivo:
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {ORGANISMS_12.map(org => {
            const currentKingdom = placements[org.id];
            const isCorrect = checked && currentKingdom === org.kingdom;
            const isWrong = checked && currentKingdom !== null && currentKingdom !== org.kingdom;

            return (
              <div
                key={org.id}
                className={`p-4 rounded-2xl border text-center transition-all ${
                  isCorrect
                    ? 'bg-emerald-50 border-emerald-300'
                    : isWrong
                    ? 'bg-red-50 border-red-300'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="text-3xl mb-1">{org.emoji}</div>
                <h6 className="font-bold text-sm text-slate-800">{org.name}</h6>
                <p className="text-[10px] text-slate-500 mb-3">{org.hint}</p>

                {/* Kingdom Dropdown / Buttons */}
                <div className="space-y-1.5">
                  {(['plantas', 'animales', 'hongos'] as const).map(k => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => assignKingdom(org.id, k)}
                      className={`w-full py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                        currentKingdom === k
                          ? 'bg-blue-600 text-white font-bold shadow-2xs'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {k === 'plantas' ? '🌱 Planta' : k === 'animales' ? '🐶 Animal' : '🍄 Hongo'}
                    </button>
                  ))}
                </div>

                {checked && (
                  <div className="mt-2 text-[10px] font-bold">
                    {isCorrect ? (
                      <span className="text-emerald-700">¡Correcto!</span>
                    ) : (
                      <span className="text-red-700">Revisa su forma de nutrición</span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Kingdom Target Boxes View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
        {kingdoms.map(k => {
          const placedInThis = ORGANISMS_12.filter(o => placements[o.id] === k.key);
          return (
            <div key={k.key} className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200">
              <h5 className="font-bold text-xs text-slate-800 mb-0.5">{k.title}</h5>
              <p className="text-[10px] text-slate-500 mb-2">{k.desc}</p>
              <div className="min-h-[50px] p-2 bg-white rounded-xl border border-dashed border-slate-300 flex flex-wrap gap-1.5 items-center">
                {placedInThis.length === 0 ? (
                  <span className="text-[11px] text-slate-400 italic">Arrastrado / asignado aquí...</span>
                ) : (
                  placedInThis.map(p => (
                    <span
                      key={p.id}
                      className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-900 border border-blue-200 text-xs font-semibold flex items-center gap-1"
                    >
                      <span>{p.emoji}</span>
                      <span>{p.name}</span>
                    </span>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-end pt-3 border-t border-slate-100">
        <button
          type="button"
          onClick={handleCheck}
          disabled={!isAllAssigned}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Comprobar Clasificación</span>
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   ACTIVIDAD 2.1: Detectives del ecosistema (Biótico vs Abiótico)
   ========================================================================= */
interface Element21 {
  id: string;
  name: string;
  emoji: string;
  type: 'biotico' | 'abiotico';
  explanation: string;
}

const ELEMENTS_21: Element21[] = [
  { id: 'agua', name: 'Agua', emoji: '💧', type: 'abiotico', explanation: 'Elemento físico indispensable para la hidratación y soporte de la vida.' },
  { id: 'aire', name: 'Aire / Oxígeno', emoji: '💨', type: 'abiotico', explanation: 'Mezcla gaseosa vital para la respiración y fotosíntesis.' },
  { id: 'suelo', name: 'Suelo fértil', emoji: '🏔️', type: 'abiotico', explanation: 'Sustrato físico y mineral donde crecen las plantas.' },
  { id: 'luz', name: 'Luz Solar', emoji: '☀️', type: 'abiotico', explanation: 'Fuente primordial de energía lumínica y calor para el planeta.' },
  { id: 'plantas', name: 'Plantas verdes', emoji: '🌿', type: 'biotico', explanation: 'Seres vivos productores que transforman la luz en biomasa.' },
  { id: 'animales', name: 'Animales salvajes', emoji: '🦊', type: 'biotico', explanation: 'Organismos vivos consumidores con actividad motriz.' },
  { id: 'hongos', name: 'Hongos del bosque', emoji: '🍄', type: 'biotico', explanation: 'Seres vivos descomponedores que reciclan nutrientes.' }
];

export const ActivityDetectivesEcosistema: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const { markChallengeCompleted } = useLearning();
  const [answers, setAnswers] = useState<Record<string, 'biotico' | 'abiotico' | null>>({});
  const [checked, setChecked] = useState(false);

  const handleSelect = (id: string, type: 'biotico' | 'abiotico') => {
    setAnswers(prev => ({ ...prev, [id]: type }));
    setChecked(false);
  };

  const handleCheck = () => {
    setChecked(true);
    const allCorrect = ELEMENTS_21.every(e => answers[e.id] === e.type);
    if (allCorrect) {
      markChallengeCompleted('reto-3');
      if (onComplete) onComplete();
    }
  };

  const handleReset = () => {
    setAnswers({});
    setChecked(false);
  };

  const isAllAnswered = ELEMENTS_21.every(e => answers[e.id] !== undefined);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 font-bold text-xs">
            Detectives del Ecosistema &bull; Subtema 2.1
          </span>
          <h4 className="text-lg font-bold text-slate-800 mt-1">
            Diferenciamos Factores Bióticos y Abióticos
          </h4>
          <p className="text-xs text-slate-500">
            Identifica qué elementos corresponden a la comunidad viva (Bióticos) o al medio físico no vivo (Abióticos).
          </p>
        </div>

        <button
          onClick={handleReset}
          className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 font-medium"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reiniciar
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {ELEMENTS_21.map(el => {
          const userChoice = answers[el.id];
          const isCorrect = checked && userChoice === el.type;
          const isWrong = checked && userChoice !== undefined && userChoice !== el.type;

          return (
            <div
              key={el.id}
              className={`p-4 rounded-2xl border transition-all text-center space-y-2.5 ${
                isCorrect
                  ? 'bg-emerald-50/70 border-emerald-300 ring-1 ring-emerald-400'
                  : isWrong
                  ? 'bg-red-50/70 border-red-300 ring-1 ring-red-400'
                  : 'bg-slate-50/80 border-slate-200'
              }`}
            >
              <div className="text-3xl">{el.emoji}</div>
              <h5 className="font-bold text-xs text-slate-800">{el.name}</h5>

              <div className="grid grid-cols-2 gap-1.5">
                <button
                  type="button"
                  onClick={() => handleSelect(el.id, 'biotico')}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                    userChoice === 'biotico'
                      ? 'bg-emerald-600 text-white shadow-2xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50'
                  }`}
                >
                  🌿 Biótico
                </button>
                <button
                  type="button"
                  onClick={() => handleSelect(el.id, 'abiotico')}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all ${
                    userChoice === 'abiotico'
                      ? 'bg-amber-600 text-white shadow-2xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-amber-50'
                  }`}
                >
                  ☀️ Abiótico
                </button>
              </div>

              {checked && (
                <div className={`text-[10px] p-2 rounded-lg text-left ${isCorrect ? 'text-emerald-900 bg-emerald-100/60' : 'text-red-900 bg-red-100/60'}`}>
                  <p className="font-semibold">{isCorrect ? '✓ Correcto' : '✗ Incorrecto'}</p>
                  <p className="mt-0.5">{el.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-end pt-3 border-t border-slate-100">
        <button
          type="button"
          onClick={handleCheck}
          disabled={!isAllAnswered}
          className="px-6 py-2.5 bg-teal-600 hover:bg-teal-700 disabled:opacity-40 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Comprobar Factores</span>
        </button>
      </div>
    </div>
  );
};

/* =========================================================================
   ACTIVIDAD 2.2: Construye una cadena alimenticia y reflexión trófica
   ========================================================================= */
interface ChainItem {
  id: string;
  name: string;
  emoji: string;
  role: string;
  correctIndex: number;
}

const CHAIN_ITEMS: ChainItem[] = [
  { id: 'sol', name: 'Sol', emoji: '☀️', role: 'Fuente Primaria de Energía', correctIndex: 0 },
  { id: 'planta', name: 'Planta (Pasto)', emoji: '🌱', role: 'Productor (Fotosíntesis)', correctIndex: 1 },
  { id: 'conejo', name: 'Conejo', emoji: '🐇', role: 'Consumidor Primario (Herbívoro)', correctIndex: 2 },
  { id: 'zorro', name: 'Zorro', emoji: '🦊', role: 'Consumidor Secundario (Carnívoro)', correctIndex: 3 }
];

export const ActivityCadenaAlimenticia: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const { markChallengeCompleted } = useLearning();
  const [order, setOrder] = useState<ChainItem[]>([CHAIN_ITEMS[2], CHAIN_ITEMS[0], CHAIN_ITEMS[3], CHAIN_ITEMS[1]]);
  const [reflectionText, setReflectionText] = useState('');
  const [checked, setChecked] = useState(false);
  const [reflectionSaved, setReflectionSaved] = useState(false);

  const moveItem = (index: number, direction: 'left' | 'right') => {
    if (direction === 'left' && index === 0) return;
    if (direction === 'right' && index === order.length - 1) return;
    const target = direction === 'left' ? index - 1 : index + 1;
    const copy = [...order];
    const temp = copy[index];
    copy[index] = copy[target];
    copy[target] = temp;
    setOrder(copy);
    setChecked(false);
  };

  const handleCheckOrder = () => {
    setChecked(true);
    const isCorrect = order.every((item, idx) => item.correctIndex === idx);
    if (isCorrect) {
      markChallengeCompleted('reto-4');
      if (onComplete) onComplete();
    }
  };

  const isChainCorrect = checked && order.every((item, idx) => item.correctIndex === idx);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 font-bold text-xs">
          Cadenas Tróficas &bull; Subtema 2.2
        </span>
        <h4 className="text-lg font-bold text-slate-800 mt-1">
          Construye una cadena alimenticia
        </h4>
        <p className="text-xs text-slate-500">
          Ordena los elementos para mostrar el flujo correcto de energía: Sol &rarr; Planta &rarr; Conejo &rarr; Zorro.
        </p>
      </div>

      {/* Interactive Chain Reordering */}
      <div className="space-y-4">
        <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
          Paso 1: Reordena los eslabones usando las flechas:
        </h5>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {order.map((item, idx) => {
            const isItemCorrect = checked && item.correctIndex === idx;
            const isItemWrong = checked && item.correctIndex !== idx;

            return (
              <div
                key={item.id}
                className={`p-4 rounded-2xl border text-center transition-all flex flex-col justify-between ${
                  isItemCorrect
                    ? 'bg-emerald-50 border-emerald-400 ring-2 ring-emerald-300'
                    : isItemWrong
                    ? 'bg-red-50 border-red-300 ring-1 ring-red-300'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <span className="inline-block px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-bold text-[10px] mb-2">
                    Eslabón #{idx + 1}
                  </span>
                  <div className="text-4xl my-1">{item.emoji}</div>
                  <h6 className="font-bold text-sm text-slate-800">{item.name}</h6>
                  <p className="text-[10px] text-slate-500 mt-1">{item.role}</p>
                </div>

                <div className="flex items-center justify-center gap-2 mt-4 pt-2 border-t border-slate-200/60">
                  <button
                    type="button"
                    onClick={() => moveItem(idx, 'left')}
                    disabled={idx === 0}
                    className="px-2.5 py-1 text-xs font-bold rounded-lg bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-30"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => moveItem(idx, 'right')}
                    disabled={idx === order.length - 1}
                    className="px-2.5 py-1 text-xs font-bold rounded-lg bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-30"
                  >
                    →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleCheckOrder}
            className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Comprobar Orden Trófico</span>
          </button>
        </div>

        {checked && (
          <div className={`p-4 rounded-2xl text-xs ${isChainCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-red-50 text-red-900 border border-red-200'}`}>
            <p className="font-bold">
              {isChainCorrect
                ? '¡Excelente! Has reconstruido con exactitud el flujo energético de la cadena trófica.'
                : 'Revisa el orden: La energía siempre proviene del Sol hacia las plantas (productores) y luego a los consumidores.'}
            </p>
          </div>
        )}
      </div>

      {/* Step 2: Open reflection prompt */}
      <div className="pt-4 border-t border-slate-100 space-y-3">
        <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider flex items-center gap-2">
          <span>❓ Pregunta de Reflexión Ecológica:</span>
        </h5>
        <p className="text-xs sm:text-sm text-slate-700 font-medium">
          "¿Qué podría ocurrir en el ecosistema si desaparecen las plantas?"
        </p>

        <textarea
          rows={3}
          value={reflectionText}
          onChange={e => setReflectionText(e.target.value)}
          placeholder="Escribe tu respuesta argumentada como explorador (ej. los conejos no tendrían alimento y los zorros se quedarían sin presas)..."
          className="w-full p-3.5 text-xs sm:text-sm text-slate-800 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
        />

        <div className="flex items-center justify-between">
          <p className="text-[11px] text-slate-400 italic">
            {reflectionSaved ? '✓ Tu respuesta ha sido guardada en tu bitácora de aprendizaje' : 'Explica el impacto en los herbívoros y carnívoros'}
          </p>
          <button
            type="button"
            onClick={() => setReflectionSaved(true)}
            disabled={!reflectionText.trim()}
            className="px-4 py-2 text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white rounded-xl transition-all"
          >
            Guardar reflexión
          </button>
        </div>
      </div>
    </div>
  );
};
