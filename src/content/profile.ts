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

export interface ProfileContent {
  location: string;
  aboutBody: string;
  skills: SkillGroup[];
  projects: Project[];
  experience: TimelineItem[];
  education: EducationItem[];
  languages: LanguageItem[];
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
  },
};
