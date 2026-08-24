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
  body: string;
}

export interface TechLandscape {
  general: TechEntry[];
  computing: TechEntry[];
}

export interface ProfileContent {
  location: string;
  aboutBody: string;
  skills: SkillGroup[];
  projects: Project[];
  experience: TimelineItem[];
  education: EducationItem[];
  languages: LanguageItem[];
  techLandscape: TechLandscape;
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
    techLandscape: {
      general: [
        {
          title: 'Inteligencia artificial generativa y agentes',
          body: 'Los modelos de lenguaje han pasado de generar texto a ejecutar tareas completas de forma autónoma: agentes que navegan software, escriben código o gestionan flujos de trabajo enteros. El debate ya no es solo técnico, también regulatorio y laboral — qué tareas se automatizan, y qué papel le queda al humano en el bucle.',
        },
        {
          title: 'Energía: renovables, almacenamiento y fusión',
          body: 'La energía solar y eólica ya son, en muchos mercados, la forma más barata de generar electricidad; el cuello de botella se ha desplazado al almacenamiento (baterías de mayor densidad, alternativas como el hidrógeno) y a modernizar redes eléctricas pensadas para otro siglo. La fusión nuclear, durante décadas "a veinte años vista", empieza a atraer inversión seria de startups privadas, aunque la generación comercial sigue sin llegar.',
        },
        {
          title: 'Biotecnología y medicina',
          body: 'Las plataformas de ARN mensajero, probadas a gran escala con las vacunas, se están reutilizando para tratamientos personalizados contra el cáncer y enfermedades raras. La edición genética (CRISPR y sus sucesores) pasa de la investigación a terapias aprobadas para enfermedades concretas, aunque el acceso y el coste siguen siendo la barrera real.',
        },
        {
          title: 'Espacio: lanzamiento reutilizable y megaconstelaciones',
          body: 'Abaratar el acceso al espacio con cohetes reutilizables ha hecho viables las megaconstelaciones de satélites para internet global, y ha multiplicado el número de actores privados capaces de lanzar misiones. La conversación ha pasado de "si es posible" a "cómo se regula": tráfico orbital, basura espacial, ambiciones lunares y marcianas con calendarios cada vez menos claros.',
        },
        {
          title: 'Robótica y automatización',
          body: 'Los robots humanoides han dejado de ser una demo de laboratorio para entrar en pruebas piloto en almacenes y fábricas. El reto ya no es tanto el hardware como entrenar comportamientos generales en vez de tareas únicas y repetitivas — la misma ola de IA que impulsa a los agentes de software empieza a moverse al mundo físico.',
        },
        {
          title: 'Materiales y semiconductores',
          body: 'La miniaturización de chips sigue adelante a base de rediseñar la fabricación entera (litografía extrema, nuevas arquitecturas de transistor), mientras la demanda de cómputo para IA ha convertido la capacidad de fabricar semiconductores en una cuestión geopolítica, no solo industrial.',
        },
      ],
      computing: [
        {
          title: 'Agentes de IA para programar',
          body: 'Los asistentes de código han pasado de autocompletar líneas a ejecutar tareas completas: leer un repositorio, escribir y probar cambios, ejecutar comandos, tomar pequeñas decisiones de implementación. Cambia menos la herramienta que el propio flujo de trabajo — qué merece la pena delegar, y qué revisión sigue haciendo falta.',
        },
        {
          title: 'WebGPU',
          body: 'El sucesor de WebGL: acceso más directo a la GPU desde el navegador, pensado también para cómputo de propósito general y no solo gráficos. Habilita simulaciones y cargas de trabajo en el navegador que antes exigían una aplicación nativa.',
        },
        {
          title: 'Streaming y arquitecturas basadas en eventos',
          body: 'Diseñar sistemas como un flujo continuo de eventos en vez de una cadena de peticiones síncronas. Apache Kafka sigue siendo el estándar de facto, y su evolución (KRaft, sin depender de ZooKeeper) simplifica montar sistemas en tiempo real con menos piezas móviles.',
        },
        {
          title: 'Herramientas de desarrollo reescritas en Rust',
          body: 'Buena parte del ecosistema de JavaScript (bundlers, empaquetadores, runtimes) se está reescribiendo en Rust para ganar velocidad — Vite, Turbopack o Bun son ejemplos visibles. El cambio no lo nota quien visita una web, pero sí quien la construye: los tiempos de build dejan de ser un cuello de botella.',
        },
        {
          title: 'Bases de datos vectoriales y RAG',
          body: 'Buscar por significado en vez de por coincidencia exacta de texto: la pieza que hace útiles a los sistemas que combinan un modelo de lenguaje con datos propios (RAG, retrieval-augmented generation). Es la infraestructura detrás de casi cualquier producto que promete "chatea con tus documentos".',
        },
      ],
    },
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
    techLandscape: {
      general: [
        {
          title: 'Generative AI and agents',
          body: "Language models have moved from generating text to carrying out whole tasks autonomously — agents that operate software, write code, or manage entire workflows. The debate is no longer just technical but regulatory and labor-related too: which tasks get automated, and what's left for a human in the loop.",
        },
        {
          title: 'Energy: renewables, storage and fusion',
          body: 'Solar and wind are already, in many markets, the cheapest way to generate electricity; the bottleneck has shifted to storage (higher-density batteries, alternatives like hydrogen) and to modernizing power grids designed for a different century. Nuclear fusion, for decades famously "twenty years away," is starting to attract serious investment from private startups, even as commercial generation still hasn\'t arrived.',
        },
        {
          title: 'Biotech and medicine',
          body: 'mRNA platforms, tested at scale through vaccines, are being repurposed for personalized cancer treatments and rare disease therapies. Gene editing (CRISPR and its successors) is moving from research into approved therapies for specific conditions, though access and cost remain the real barrier.',
        },
        {
          title: 'Space: reusable launch and mega-constellations',
          body: 'Cheaper access to space through reusable rockets has made satellite mega-constellations for global internet viable, and multiplied the number of private players able to launch missions. The conversation has shifted from "is it possible" to "how is it regulated": orbital traffic, space debris, lunar and Mars ambitions on increasingly uncertain timelines.',
        },
        {
          title: 'Robotics and automation',
          body: "Humanoid robots have gone from lab demos to pilot trials in warehouses and factories. The challenge now is less about hardware and more about training general behaviors instead of single repetitive tasks — the same wave of AI powering software agents is starting to move into the physical world.",
        },
        {
          title: 'Materials and semiconductors',
          body: "Chip miniaturization keeps advancing by redesigning manufacturing itself (extreme lithography, new transistor architectures), while AI's compute demand has turned semiconductor manufacturing capacity into a geopolitical question, not just an industrial one.",
        },
      ],
      computing: [
        {
          title: 'AI coding agents',
          body: "Code assistants have gone from autocompleting lines to carrying out whole tasks: reading a repository, writing and testing changes, running commands, making small implementation decisions. What changes isn't just the tool but the workflow itself — what's worth delegating, and what review is still needed.",
        },
        {
          title: 'WebGPU',
          body: 'The successor to WebGL: more direct GPU access from the browser, built for general-purpose compute too, not just graphics. It enables simulations and workloads in the browser that used to require a native application.',
        },
        {
          title: 'Streaming and event-driven architectures',
          body: "Designing systems as a continuous flow of events instead of a chain of synchronous requests. Apache Kafka is still the de facto standard, and its evolution (KRaft, dropping the ZooKeeper dependency) makes real-time systems easier to run with fewer moving parts.",
        },
        {
          title: 'Developer tools rewritten in Rust',
          body: "A good chunk of the JavaScript ecosystem (bundlers, package tooling, runtimes) is being rewritten in Rust for speed — Vite, Turbopack and Bun are visible examples. The change isn't something a visitor notices, but it is for whoever's building the thing: build times stop being a bottleneck.",
        },
        {
          title: 'Vector databases and RAG',
          body: 'Searching by meaning instead of exact text match: the piece that makes systems combining a language model with your own data actually useful (RAG, retrieval-augmented generation). It\'s the infrastructure behind almost any product that promises to "chat with your documents."',
        },
      ],
    },
  },
};
