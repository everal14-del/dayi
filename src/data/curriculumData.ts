import { QuizQuestion, Badge } from '../types';

export interface SubmoduleData {
  id: string;
  code: string;
  themeId: string;
  themeTitle: string;
  title: string;
  microclaseTitle: string;
  objective: string;
  keyConcepts: { title: string; desc: string; icon: string }[];
  compendioSummary: {
    sectionTitle: string;
    paragraphs: string[];
    curiosities: string[];
  };
}

export const CURRICULUM_DATA: Record<string, SubmoduleData> = {
  '1.1': {
    id: '1.1',
    code: 'Subtema 1.1',
    themeId: 'tema1',
    themeTitle: 'Tema 1: Los Seres Vivos',
    title: 'Características de los seres vivos',
    microclaseTitle: 'Microclase 1 — ¿Qué hace que un ser esté vivo?',
    objective: 'Identificar las principales características de los seres vivos mediante la observación y comparación de organismos del entorno, reconociendo procesos como nutrición, crecimiento, reproducción y respuesta a estímulos.',
    keyConcepts: [
      { title: 'Nutrición', desc: 'Obtienen energía y nutrientes del entorno (autótrofos como plantas o heterótrofos como animales).', icon: '🍃' },
      { title: 'Crecimiento y Desarrollo', desc: 'Aumentan de tamaño y experimentan cambios fisiológicos a lo largo de su ciclo de vida.', icon: '📈' },
      { title: 'Reproducción', desc: 'Capacidad de generar nuevos individuos semejantes para perpetuar su especie.', icon: '🐣' },
      { title: 'Respuesta a Estímulos (Irritabilidad)', desc: 'Reaccionan ante cambios de luz, temperatura, sonido, humedad o peligros.', icon: '⚡' },
      { title: 'Respiración Celular', desc: 'Intercambio gaseoso para transformar nutrientes en energía vital disponible.', icon: '🫁' }
    ],
    compendioSummary: {
      sectionTitle: 'Compendio Pedagógico — Unidad 1: Fundamentos de la Vida',
      paragraphs: [
        'En la naturaleza nos encontramos con una infinita variedad de cuerpos y entidades. Sin embargo, los científicos diferencian con claridad entre la materia inerte y los seres vivos gracias a un conjunto coordinado de funciones vitales.',
        'A diferencia de una roca o un automóvil, cualquier organismo vivo —desde una diminuta bacteria hasta una secuoya gigante— está compuesto por células vivas y realiza procesos continuos de nutrición, respiración, crecimiento, respuesta al medio y reproducción.',
        'La irritabilidad o respuesta a estímulos es una de las características más fascinantes: las plantas orientan sus hojas hacia el sol (fototropismo) y los animales se protegen o buscan refugio al sentir frío o lluvia.'
      ],
      curiosities: [
        '¿Sabías que las plantas carnívoras se mueven en milisegundos cuando un insecto toca sus pelos sensoriales?',
        'Los osos de agua (tardígrados) pueden suspender sus funciones vitales durante años y reactivarse con una gota de agua.'
      ]
    }
  },
  '1.2': {
    id: '1.2',
    code: 'Subtema 1.2',
    themeId: 'tema1',
    themeTitle: 'Tema 1: Los Seres Vivos',
    title: 'Clasificación de los seres vivos',
    microclaseTitle: 'Microclase 2 — Descubrimos y clasificamos la vida',
    objective: 'Clasificar seres vivos a partir de características observables, utilizando criterios sencillos que permitan reconocer semejanzas y diferencias entre plantas, animales, hongos y otros organismos.',
    keyConcepts: [
      { title: 'Reino Plantae (Plantas)', desc: 'Organismos autótrofos, realizan fotosíntesis con clorofila, tienen raíces, tallos y no se desplazan libremente.', icon: '🌱' },
      { title: 'Reino Animalia (Animales)', desc: 'Organismos heterótrofos con desplazamiento activo, órganos sensoriales desarrollados e ingestión de alimento.', icon: '🐶' },
      { title: 'Reino Fungi (Hongos)', desc: 'Heterótrofos por absorción; descomponen materia orgánica. No realizan fotosíntesis (setas, mohos, levaduras).', icon: '🍄' },
      { title: 'Microorganismos', desc: 'Bacterias y protozoarios visibles solo mediante microscopía, esenciales para el balance del planeta.', icon: '🔬' }
    ],
    compendioSummary: {
      sectionTitle: 'Compendio Pedagógico — Clasificación Biológica y Reinos de la Naturaleza',
      paragraphs: [
        'Clasificar es agrupar elementos siguiendo criterios comunes y científicos observables. Para ordenar la inmensa biodiversidad de la Tierra, los biólogos agrupan a los seres vivos en grandes reinos.',
        'Durante mucho tiempo se pensó que los hongos eran plantas porque crecen en el suelo y no caminan; no obstante, la ciencia demostró que no producen su propio alimento mediante fotosíntesis, sino que absorben nutrientes, por lo que forman su propio reino: Reino Fungi.',
        'Reconocer estas diferencias nos permite entender el rol ecológico de cada especie y cómo se complementan entre sí en la biosfera.'
      ],
      curiosities: [
        'El hongo Armillaria ostoyae en Oregón es el organismo vivo más grande del mundo: abarca más de 8.8 km² bajo tierra.',
        'Algunas plantas, como las mimosas púdicas, pliegan sus hojas al menor roce humano.'
      ]
    }
  },
  '2.1': {
    id: '2.1',
    code: 'Subtema 2.1',
    themeId: 'tema2',
    themeTitle: 'Tema 2: Ecosistemas',
    title: 'Componentes del ecosistema',
    microclaseTitle: 'Microclase 3 — ¿Quiénes forman un ecosistema?',
    objective: 'Diferenciar los componentes bióticos y abióticos de un ecosistema y explicar, mediante ejemplos del entorno, cómo interactúan para mantener su funcionamiento.',
    keyConcepts: [
      { title: 'Factores Bióticos (Biocenosis)', desc: 'Todos los seres vivos del ecosistema: plantas, animales, hongos, bacterias y microbios.', icon: '🌿' },
      { title: 'Factores Abióticos (Biotopo)', desc: 'Elementos no vivos del entorno físico: agua, aire, luz solar, suelo, temperatura y humedad.', icon: '☀️' },
      { title: 'Interdependencia Ecológica', desc: 'Los seres bióticos dependen de los factores abióticos para respirar, hidratarse y obtener energía.', icon: '🔄' },
      { title: 'Hábitat y Nicho Ecológico', desc: 'El lugar físico donde vive una especie y la función específica que cumple dentro del sistema.', icon: '🏞️' }
    ],
    compendioSummary: {
      sectionTitle: 'Compendio Pedagógico — Estructura y Funcionamiento del Ecosistema',
      paragraphs: [
        'Un ecosistema es una unidad natural formada por una comunidad de seres vivos (biocenosis o factores bióticos) y el medio físico inanimado en el que habitan (biotopo o factores abióticos), junto con las interacciones dinámicas que ocurren entre ellos.',
        'Ningún ser vivo puede sobrevivir aislado: las plantas necesitan luz solar y minerales del suelo; los animales necesitan oxígeno del aire y agua líquida; las bacterias requieren humedad y temperatura adecuada para descomponer desechos.',
        'Si un factor abiótico se altera drásticamente (por ejemplo, contaminación del agua o sequía prolongada), toda la red de vida biótica se ve afectada.'
      ],
      curiosities: [
        'Un solo metro cuadrado de suelo fértil de bosque puede albergar a más de mil millones de organismos microscópicos.',
        'La luz solar es el motor principal que impulsa el 99% de la energía de todos los ecosistemas del planeta.'
      ]
    }
  },
  '2.2': {
    id: '2.2',
    code: 'Subtema 2.2',
    themeId: 'tema2',
    themeTitle: 'Tema 2: Ecosistemas',
    title: 'Cadenas alimenticias y equilibrio ecológico',
    microclaseTitle: 'Microclase 4 — Relaciones tróficas y flujo de energía en los ecosistemas',
    objective: 'Analizar las relaciones tróficas y el flujo de energía en los ecosistemas mediante la identificación y construcción de cadenas alimenticias, reconociendo la interacción entre los diferentes niveles tróficos y su importancia para mantener el equilibrio ecológico.',
    keyConcepts: [
      { title: 'Productores (Autótrofos)', desc: 'Plantas y algas que transforman la energía solar en materia orgánica mediante fotosíntesis.', icon: '🌱' },
      { title: 'Consumidores Primarios (Herbívoros)', desc: 'Animales que se alimentan directamente de los productores (ej. conejo, oruga, vaca).', icon: '🐇' },
      { title: 'Consumidores Secundarios (Carnívoros)', desc: 'Animales depredadores que se alimentan de los herbívoros (ej. zorro, serpiente, búho).', icon: '🦊' },
      { title: 'Descomponedores', desc: 'Hongos y bacterias que reciclan la materia orgánica devolviendo minerales al suelo.', icon: '🍄' },
      { title: 'Equilibrio Ecológico', desc: 'La estabilidad y armonía resultante de mantener las poblaciones tróficas reguladas.', icon: '⚖️' }
    ],
    compendioSummary: {
      sectionTitle: 'Compendio Pedagógico — Dinámica Trófica y Flujo Energético',
      paragraphs: [
        'Una cadena alimenticia (o trófica) representa la transferencia lineal de energía y materia nutritiva a través de una serie de organismos en un ecosistema.',
        'El flujo de energía es unidireccional: comienza con la energía radiante del Sol capturada por los productores. Luego pasa a los consumidores primarios (herbívoros) y de estos a los secundarios y terciarios.',
        'Si un eslabón clave se elimina (por ejemplo, si desaparecen los productores por deforestación o contaminación), los herbívoros se quedan sin alimento, lo que provoca el colapso en cascada de los carnívoros y rompe el equilibrio ecológico.'
      ],
      curiosities: [
        'En cada paso de la cadena trófica, se pierde aproximadamente el 90% de la energía en forma de calor y actividad metabólica (Regla del 10%).',
        'En la naturaleza real, las cadenas se interconectan formando complejas y resistentes "redes tróficas".'
      ]
    }
  }
};

export const INITIAL_BADGES: Badge[] = [
  {
    id: 'badge-vida',
    name: 'Explorador de la Vida',
    icon: '🌱',
    description: 'Completaste el módulo sobre las características esenciales de los seres vivos.',
    unlocked: false
  },
  {
    id: 'badge-clasificador',
    name: 'Clasificador Experto',
    icon: '🦋',
    description: 'Demostraste destreza clasificando organismos en plantas, animales y hongos.',
    unlocked: false
  },
  {
    id: 'badge-ecosistema',
    name: 'Detective del Ecosistema',
    icon: '🌎',
    description: 'Identificaste con precisión los factores bióticos y abióticos de la naturaleza.',
    unlocked: false
  },
  {
    id: 'badge-cadenas',
    name: 'Constructor de Cadenas',
    icon: '🦊',
    description: 'Armaste cadenas tróficas y comprendiste el impacto del equilibrio ecológico.',
    unlocked: false
  },
  {
    id: 'badge-maestro',
    name: 'Guardián de la Biodiversidad',
    icon: '🌟',
    description: 'Superaste la evaluación final y completaste tu reflexión pedagógica.',
    unlocked: false
  }
];

export const EVALUATION_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    subtopic: '1.1 Características de los seres vivos',
    questionText: '¿Cuál de las siguientes opciones describe una función vital que distingue a un ser vivo de un objeto inerte como una roca?',
    type: 'multiple-choice',
    options: [
      'Permanecer inalterable frente al frío o al calor sin reaccionar.',
      'Capacidad de nutrirse, crecer, reproducirse y responder a estímulos del entorno.',
      'Estar compuesto exclusivamente por minerales sólidos inmóviles.',
      'Desplazarse únicamente cuando una fuerza mecánica externa lo empuja.'
    ],
    correctAnswer: 1,
    explanation: 'Los seres vivos realizan funciones biológicas continuas como la nutrición, el crecimiento, la reproducción y la respuesta a estímulos (irritabilidad).',
    remedialResource: 'Microclase 1 y Compendio Subtema 1.1',
    remedialPageId: 'tema1'
  },
  {
    id: 2,
    subtopic: '1.1 Características de los seres vivos',
    questionText: 'Cuando una planta como el girasol orienta sus flores y hojas hacia la luz solar, está manifestando la característica de:',
    type: 'multiple-choice',
    options: [
      'Irritabilidad o respuesta a estímulos',
      'Descomposición de materia inerte',
      'Reproducción asexual forzada',
      'Fijación abiótica mineral'
    ],
    correctAnswer: 0,
    explanation: 'El fototropismo en las plantas es un claro ejemplo de irritabilidad o respuesta a estímulos luminosos.',
    remedialResource: 'Subtema 1.1: Características de los seres vivos',
    remedialPageId: 'tema1'
  },
  {
    id: 3,
    subtopic: '1.2 Clasificación de los seres vivos',
    questionText: '¿Por qué los hongos (Reino Fungi) NO se clasifican dentro del reino de las plantas?',
    type: 'multiple-choice',
    options: [
      'Porque los hongos tienen alas y vuelan libremente.',
      'Porque no realizan fotosíntesis; son heterótrofos que absorben nutrientes del medio.',
      'Porque los hongos son factores abióticos no vivos.',
      'Porque los hongos solo viven en el agua marina profunda.'
    ],
    correctAnswer: 1,
    explanation: 'A diferencia de las plantas (autótrofas fotosintéticas), los hongos no tienen clorofila ni realizan fotosíntesis: absorben nutrientes de materia orgánica.',
    remedialResource: 'Microclase 2 y Compendio Subtema 1.2',
    remedialPageId: 'tema1'
  },
  {
    id: 4,
    subtopic: '1.2 Clasificación de los seres vivos',
    questionText: 'Verdadero o Falso: Los animales son organismos heterótrofos capaces de desplazarse activamente para conseguir alimento y refugio.',
    type: 'true-false',
    options: ['Verdadero', 'Falso'],
    correctAnswer: 0,
    explanation: '¡Verdadero! Los animales necesitan ingerir otros seres vivos o materia orgánica (heterótrofos) y la gran mayoría posee movilidad activa.',
    remedialResource: 'Subtema 1.2: Clasificación de los seres vivos',
    remedialPageId: 'tema1'
  },
  {
    id: 5,
    subtopic: '2.1 Componentes del ecosistema',
    questionText: 'En una laguna andina, ¿cuáles de los siguientes elementos corresponden a factores ABIÓTICOS?',
    type: 'multiple-choice',
    options: [
      'Las truchas, los juncos y las ranas.',
      'El agua líquida, la luz solar, la temperatura y el oxígeno disuelto.',
      'Los patos silvestres y las bacterias del fango.',
      'Las algas verdes y los caracoles acuáticos.'
    ],
    correctAnswer: 1,
    explanation: 'Los factores abióticos son los componentes físicos y químicos no vivos del ecosistema (agua, luz, temperatura, minerales, aire).',
    remedialResource: 'Microclase 3 y Compendio Subtema 2.1',
    remedialPageId: 'tema2'
  },
  {
    id: 6,
    subtopic: '2.2 Cadenas alimenticias y equilibrio',
    questionText: 'En una cadena trófica terrestre estándar formada por Sol → Pasto → Conejo → Zorro, ¿qué función cumple el pasto?',
    type: 'multiple-choice',
    options: [
      'Consumidor secundario',
      'Descomponedor terciario',
      'Productor (transforma energía solar en alimento)',
      'Depredador tope'
    ],
    correctAnswer: 2,
    explanation: 'Las plantas son organismos productores: captan la radiación solar y mediante la fotosíntesis generan biomasa que alimenta al resto de la cadena.',
    remedialResource: 'Microclase 4 y Compendio Subtema 2.2',
    remedialPageId: 'tema2'
  },
  {
    id: 7,
    subtopic: '2.2 Cadenas alimenticias y equilibrio',
    questionText: 'Si en un ecosistema se talan y destruyen todos los árboles y plantas (productores), ¿qué ocurrirá con las poblaciones de herbívoros y carnívoros?',
    type: 'multiple-choice',
    options: [
      'Aumentarán de número porque tendrán más espacio libre para caminar.',
      'Disminuirán drásticamente o desaparecerán por falta de alimento, rompiendo el equilibrio ecológico.',
      'Aprenderán a realizar fotosíntesis como las plantas.',
      'El ecosistema se mantendrá exactamente igual sin ningún cambio.'
    ],
    correctAnswer: 1,
    explanation: 'Al desaparecer la base productora, los herbívoros mueren de hambre y consecuentemente los carnívoros colapsan, destruyendo el equilibrio.',
    remedialResource: 'Subtema 2.2: Cadenas y equilibrio ecológico',
    remedialPageId: 'tema2'
  }
];
