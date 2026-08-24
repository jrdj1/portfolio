import type { Locale } from '../i18n/ui';

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  tech: string[];
  url?: string;
  badge?: string;
}

export interface TimelineItem {
  title: string;
  org: string;
  period: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  detail: string;
  period: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface TechEntry {
  title: string;
  category: string;
  body: string;
}

export interface ProfileContent {
  location: string;
  aboutBody: string;
  skills: SkillGroup[];
  projects: Project[];
  experience: TimelineItem[];
  education: EducationItem[];
  languages: LanguageItem[];
  techRadar: TechEntry[];
}

export const profile: Record<Locale, ProfileContent> = {
  es: {
    location: 'Mutxamel, Alicante',
    aboutBody:
      'Me interesa el software como proceso: plantear una pregunta técnica concreta, probar, romper cosas y documentar lo que queda. La mayoría de los proyectos de aquí nacen así, no de intentar rellenar un currículum. Estudio Ingeniería Informática (Sistemas de Información) en la Universidad de Alicante.',
    skills: [
      { category: 'Lenguajes', items: ['Java', 'Python', 'C/C++', 'C#', 'JavaScript / TypeScript', 'SQL'] },
      { category: 'Backend & Frameworks', items: ['Node.js', 'FastAPI', 'Laravel', 'React', 'Astro'] },
      { category: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis'] },
      { category: 'Herramientas & Metodologías', items: ['Git', 'Docker', 'Apache Kafka', 'Scrum / Ágil'] },
      { category: 'Otros', items: ['Fundamentos de Machine Learning (scikit-learn)', 'Introducción a Solidity / Web3'] },
    ],
    projects: [
      {
        name: 'SmartFest Data',
        description:
          'Sistema full-stack de gestión en tiempo real para festivales, con predicción de demanda mediante Machine Learning.',
        tech: ['Full-stack', 'Tiempo real', 'Machine Learning'],
        badge: 'En desarrollo',
      },
      {
        name: 'EasyCab2',
        description:
          'Arquitectura de sistema distribuido y resiliente para la gestión de flotas de taxis, con Python, Apache Kafka y Node.js.',
        tech: ['Python', 'Apache Kafka', 'Node.js'],
        url: 'https://github.com/jrdj1/EasyCab',
      },
      {
        name: 'BookHeaven',
        description:
          'E-commerce completo para una librería online, desarrollado con Laravel (Eloquent ORM) y MySQL.',
        tech: ['Laravel', 'Eloquent ORM', 'MySQL'],
      },
      {
        name: 'Meteor Madness',
        description:
          'Plataforma web interactiva en WebGL para simular escenarios de impacto de asteroides con datos científicos reales.',
        tech: ['WebGL'],
        url: 'https://github.com/jrdj1/NASA-2025-METEOR-MADNESS',
        badge: 'NASA Space Apps Challenge 2025',
      },
    ],
    experience: [
      {
        title: 'Participante y desarrollador WebGL',
        org: 'NASA Space Apps Challenge 2025',
        period: 'Hackathon internacional',
        description:
          'Desarrollo contrarreloj de Meteor Madness, transformando datos astronómicos en visualizaciones interactivas; resolución de retos técnicos en equipo bajo alta presión competitiva.',
      },
      {
        title: 'Miembro activo',
        org: 'Asociación de Debate de Alicante (ADA)',
        period: '',
        description:
          'Desarrollo de pensamiento crítico y argumentación técnica en competiciones; liderazgo y toma de decisiones en escenarios de alta presión.',
      },
    ],
    education: [
      {
        institution: 'Universidad de Alicante',
        degree: 'Grado en Ingeniería Informática',
        detail: 'Sistemas de Información',
        period: '4º curso · Finalización prevista: 2026',
      },
    ],
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Valenciano', level: 'C1' },
      { name: 'Inglés', level: 'B2' },
      { name: 'Alemán', level: 'A2' },
      { name: 'Ruso', level: 'A1' },
    ],
    techRadar: [
      {
        title: 'Agentes de IA para programar',
        category: 'Herramientas de desarrollo',
        body: 'Este mismo portfolio se ha construido junto a un agente de IA que lee y escribe código, ejecuta comandos y toma pequeñas decisiones de implementación. No es autocompletado: es delegar tareas completas y revisar el resultado. Lo que me interesa no es la novedad, sino cómo cambia el trabajo real — qué merece la pena delegar y qué no.',
      },
      {
        title: 'WebGPU',
        category: 'Gráficos y computación',
        body: 'El sucesor de WebGL — acceso más directo a la GPU desde el navegador, pensado también para cómputo general, no solo gráficos. Después de construir Meteor Madness en WebGL para el NASA Space Apps Challenge, es el paso lógico a seguir de cerca: las mismas simulaciones, con mucho más margen de rendimiento.',
      },
      {
        title: 'Streaming y arquitecturas basadas en eventos',
        category: 'Sistemas distribuidos',
        body: 'Apache Kafka sigue siendo el estándar de facto, y su evolución (KRaft, quitar la dependencia de ZooKeeper) simplifica montar sistemas en tiempo real con menos piezas móviles. Es la base de EasyCab2, y cada vez veo menos motivos para diseñar un sistema como una cadena de peticiones síncronas cuando puede ser un flujo de eventos.',
      },
      {
        title: 'Herramientas de build reescritas en Rust',
        category: 'Herramientas de desarrollo',
        body: 'Vite, Turbopack, Bun — buena parte del ecosistema de JavaScript se está reescribiendo en Rust para ganar velocidad. Este mismo sitio usa Vite con Rolldown por debajo. No es un cambio visible para quien visita la web, pero sí para quien la desarrolla: los tiempos de build han dejado de ser una excusa para el café.',
      },
      {
        title: 'Bases de datos vectoriales y RAG',
        category: 'Datos y machine learning',
        body: 'Buscar por significado en vez de por coincidencia exacta de texto — la pieza que hace útiles a los sistemas que combinan un modelo de lenguaje con datos propios. Viniendo de scikit-learn y de "fundamentos de ML", es el hueco natural que quiero explorar más a fondo: no el modelo en sí, sino cómo se le da memoria y contexto.',
      },
    ],
  },
  en: {
    location: 'Mutxamel, Alicante (Spain)',
    aboutBody:
      "I think of software as a process: pose a concrete technical question, try things, break things, and write down what's left. Most of what's here started that way, not from trying to pad a résumé. I study Computer Engineering (Information Systems) at the University of Alicante.",
    skills: [
      { category: 'Languages', items: ['Java', 'Python', 'C/C++', 'C#', 'JavaScript / TypeScript', 'SQL'] },
      { category: 'Backend & Frameworks', items: ['Node.js', 'FastAPI', 'Laravel', 'React', 'Astro'] },
      { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis'] },
      { category: 'Tools & Methodologies', items: ['Git', 'Docker', 'Apache Kafka', 'Scrum / Agile'] },
      { category: 'Other', items: ['Machine Learning fundamentals (scikit-learn)', 'Introduction to Solidity / Web3'] },
    ],
    projects: [
      {
        name: 'SmartFest Data',
        description:
          'Real-time full-stack management system for festivals, with demand forecasting via Machine Learning.',
        tech: ['Full-stack', 'Real-time', 'Machine Learning'],
        badge: 'In development',
      },
      {
        name: 'EasyCab2',
        description:
          'Distributed, resilient system architecture for taxi fleet management, built with Python, Apache Kafka and Node.js.',
        tech: ['Python', 'Apache Kafka', 'Node.js'],
        url: 'https://github.com/jrdj1/EasyCab',
      },
      {
        name: 'BookHeaven',
        description: 'Full e-commerce platform for an online bookstore, built with Laravel (Eloquent ORM) and MySQL.',
        tech: ['Laravel', 'Eloquent ORM', 'MySQL'],
      },
      {
        name: 'Meteor Madness',
        description: 'Interactive WebGL web platform simulating asteroid impact scenarios using real scientific data.',
        tech: ['WebGL'],
        url: 'https://github.com/jrdj1/NASA-2025-METEOR-MADNESS',
        badge: 'NASA Space Apps Challenge 2025',
      },
    ],
    experience: [
      {
        title: 'Participant and WebGL developer',
        org: 'NASA Space Apps Challenge 2025',
        period: 'International Hackathon',
        description:
          'Built Meteor Madness against the clock, turning astronomical data into interactive visualizations; solved technical challenges as a team under high competitive pressure.',
      },
      {
        title: 'Active Member',
        org: 'Alicante Debate Association (ADA)',
        period: '',
        description:
          'Developed critical thinking and technical argumentation in competitions; leadership and decision-making in high-pressure scenarios.',
      },
    ],
    education: [
      {
        institution: 'University of Alicante',
        degree: 'B.Sc. in Computer Engineering',
        detail: 'Information Systems',
        period: '4th year · Expected graduation: 2026',
      },
    ],
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'Valencian', level: 'C1' },
      { name: 'English', level: 'B2' },
      { name: 'German', level: 'A2' },
      { name: 'Russian', level: 'A1' },
    ],
    techRadar: [
      {
        title: 'AI coding agents',
        category: 'Developer tools',
        body: "This very portfolio was built alongside an AI agent that reads and writes code, runs commands, and makes small implementation decisions. It's not autocomplete — it's delegating whole tasks and reviewing the result. What interests me isn't the novelty, it's how it actually changes the work: what's worth delegating and what isn't.",
      },
      {
        title: 'WebGPU',
        category: 'Graphics & compute',
        body: "The successor to WebGL — more direct GPU access from the browser, built for general-purpose compute too, not just graphics. After building Meteor Madness in WebGL for the NASA Space Apps Challenge, it's the logical next thing to watch: the same kind of simulations, with a lot more performance headroom.",
      },
      {
        title: 'Streaming and event-driven architectures',
        category: 'Distributed systems',
        body: "Apache Kafka is still the de facto standard, and its evolution (KRaft, dropping the ZooKeeper dependency) makes real-time systems easier to run with fewer moving parts. It's the backbone of EasyCab2, and I see fewer and fewer reasons to design a system as a chain of synchronous requests when it can be a stream of events.",
      },
      {
        title: 'Build tools rewritten in Rust',
        category: 'Developer tools',
        body: "Vite, Turbopack, Bun — a good chunk of the JavaScript ecosystem is being rewritten in Rust for speed. This site itself runs on Vite with Rolldown underneath. It's not something a visitor notices, but it is for whoever's building it: build times have stopped being an excuse for a coffee break.",
      },
      {
        title: 'Vector databases and RAG',
        category: 'Data & machine learning',
        body: "Searching by meaning instead of exact text match — the piece that makes systems combining a language model with your own data actually useful. Coming from scikit-learn and \"ML fundamentals\", it's the natural gap I want to explore further: not the model itself, but how it gets given memory and context.",
      },
    ],
  },
};
